/**
 * DD Deep Design — Pricing engine
 * Pure functions over DDCatalog. Used by quote-app + node verify.
 */
window.DDPricing = (() => {
  function getCatalog() {
    if (!window.DDCatalog) throw new Error('DDCatalog missing');
    return window.DDCatalog;
  }

  function moduleMap(C = getCatalog()) {
    const map = {};
    C.modules.forEach((m) => {
      map[m.id] = m;
    });
    return map;
  }

  function resolvePackageModules(frame, packageId, C = getCatalog()) {
    const pkg = C.packages.find((p) => p.id === packageId);
    const next = new Set(frame.stdModules || []);
    if (pkg) {
      (pkg.exclude || []).forEach((id) => next.delete(id));
      (pkg.include || []).forEach((id) => next.add(id));
    }
    C.modules.forEach((m) => {
      if (m.minWidth && frame.width < m.minWidth) next.delete(m.id);
    });
    if (next.has('elecPlus')) next.delete('elecBasic');
    if (next.has('shelf2')) next.delete('shelf1');
    if (next.has('kamado')) next.add('kamadoCab');
    return next;
  }

  function money(n, market) {
    if (n == null || Number.isNaN(n)) return '—';
    if (market === 'domestic') return '¥' + Math.round(n).toLocaleString('zh-CN');
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function skuImage(sku) {
    if (window.DDHotImages && window.DDHotImages[sku]) return window.DDHotImages[sku];
    return `assets/images/products/hot-selling/display/sku-${sku}.png`;
  }

  /**
   * @param {object} cfg
   * @param {'shed'|'modular'} cfg.path
   * @param {'export'|'domestic'} cfg.market
   * @param {string} [cfg.frameId]
   * @param {'xt'|'wm'} [cfg.doorType]
   * @param {string} [cfg.packageId]
   * @param {Set<string>|string[]} [cfg.selected]
   * @param {string} [cfg.finishId]
   * @param {string} [cfg.hotSetId]
   * @param {'mk04'|'hbb'} [cfg.grillOpt]
   * @param {'trf'|'bc152'} [cfg.fridgeOpt]
   * @param {'en'|'cn'} [cfg.lang]
   */
  function quote(cfg) {
    const C = getCatalog();
    const lang = cfg.lang || 'cn';
    const L = (obj) => (obj && (obj[lang] || obj.en)) || '';
    const market = cfg.market || 'export';
    const useCny = market === 'domestic';

    if (cfg.path === 'modular') {
      const set = C.hotSets.find((s) => s.id === cfg.hotSetId);
      const amount = set ? set.priceUsd : 0;
      return {
        path: 'modular',
        model: cfg.hotSetId || '',
        currency: 'USD',
        base: amount,
        delta: 0,
        finish: 0,
        total: amount,
        lines: [{ code: cfg.hotSetId, name: L(set?.name), amount }],
        meta: {
          structure: set?.structure,
          note: L(set?.note),
          items: set?.items || [],
          cover: set?.cover || (set?.items?.[0] && skuImage(set.items[0])),
        },
      };
    }

    const frame = C.frames.find((f) => f.id === cfg.frameId) || C.frames[0];
    const doorType = cfg.doorType || 'xt';
    const packageId = cfg.packageId || frame.recommend || 'recommended';
    const finish = C.finishes.find((f) => f.id === cfg.finishId) || C.finishes[0];
    const selected = new Set(cfg.selected || resolvePackageModules(frame, packageId, C));
    const baseline = resolvePackageModules(frame, packageId, C);
    const map = moduleMap(C);

    const base = useCny ? frame.baseCny[doorType] : frame.baseUsd[doorType];
    const lines = [
      {
        code: 'BASE',
        name: `${L(frame.label)} · ${doorType === 'xt' ? 'TH-XT' : 'TH-WM'} · ${L(C.packages.find((p) => p.id === packageId)?.name)}`,
        amount: base,
      },
    ];

    let delta = 0;
    const added = [...selected].filter((id) => !baseline.has(id));
    const removed = [...baseline].filter((id) => !selected.has(id));

    added.forEach((id) => {
      const m = map[id];
      if (!m) return;
      let amount = useCny ? m.priceCny : m.priceUsd;
      if (id === 'bbqGrill' && cfg.grillOpt === 'hbb') amount += useCny ? 200 : 15;
      if (id === 'fridge' && cfg.fridgeOpt === 'bc152') amount += useCny ? 800 : 0;
      delta += amount;
      lines.push({ code: id, name: `+ ${L(m.name)}`, amount });
    });

    removed.forEach((id) => {
      const m = map[id];
      if (!m || m.required) return;
      const amount = -(useCny ? m.priceCny : m.priceUsd);
      delta += amount;
      lines.push({ code: id, name: `− ${L(m.name)}`, amount });
    });

    if (selected.has('bbqGrill') && cfg.grillOpt === 'hbb' && !added.includes('bbqGrill')) {
      const amount = useCny ? 200 : 15;
      delta += amount;
      lines.push({ code: 'grill-upgrade', name: '+ HBB3004 upgrade', amount });
    }
    if (selected.has('fridge') && cfg.fridgeOpt === 'bc152' && !added.includes('fridge')) {
      const amount = useCny ? 800 : 0;
      if (amount) {
        delta += amount;
        lines.push({ code: 'fridge-upgrade', name: '+ BC-152 upgrade', amount });
      }
    }

    const finAmt = useCny ? finish.premiumCny : finish.premiumUsd;
    if (finAmt) lines.push({ code: finish.id, name: L(finish.name), amount: finAmt });

    const model = `${doorType === 'xt' ? 'TH-XT' : 'TH-WM'}-${frame.width}-${String(packageId).toUpperCase()}`;
    return {
      path: 'shed',
      model,
      currency: useCny ? 'CNY' : 'USD',
      base,
      delta,
      finish: finAmt,
      total: Math.max(0, base + delta + finAmt),
      lines,
      meta: {
        frameId: frame.id,
        width: frame.width,
        doorType,
        packageId,
        liftId: frame.liftId,
        expoRef: frame.expoRef || null,
        selected: [...selected],
        finishId: finish.id,
        source: frame.liftId ? 'lift-up' : frame.expoRef ? 'expo' : 'shed-catalog',
      },
    };
  }

  /** One-click presets bridging Lift-up / Expo / factory recommend */
  function presets() {
    const C = getCatalog();
    return [
      {
        id: 'PRESET-LIFT-22',
        name: { en: 'Lift-up 2.2 Mini', cn: 'Lift-up 2.2 迷你' },
        path: 'shed',
        frameId: 'F2200',
        doorType: 'xt',
        packageId: 'essential',
        marketHint: 'export',
        source: 'lift-up',
      },
      {
        id: 'PRESET-LIFT-28',
        name: { en: 'Lift-up 2.8 Recommended', cn: 'Lift-up 2.8 厂方推荐' },
        path: 'shed',
        frameId: 'F2800',
        doorType: 'xt',
        packageId: 'recommended',
        marketHint: 'export',
        source: 'lift-up',
        highlight: true,
      },
      {
        id: 'PRESET-LIFT-32',
        name: { en: 'Lift-up 3.2 Ultra', cn: 'Lift-up 3.2 旗舰' },
        path: 'shed',
        frameId: 'F3200',
        doorType: 'xt',
        packageId: 'ultra',
        marketHint: 'export',
        source: 'lift-up',
      },
      {
        id: 'PRESET-ESTATE-35',
        name: { en: '3.5m Estate', cn: '3.5m 庄园' },
        path: 'shed',
        frameId: 'F3500',
        doorType: 'xt',
        packageId: 'ultra',
        marketHint: 'export',
        source: 'shed-catalog',
      },
      {
        id: 'PRESET-EXPO-29',
        name: { en: 'Guangzhou Expo 2.9', cn: '广州展会 2.9 同款' },
        path: 'shed',
        frameId: 'F2900',
        doorType: 'xt',
        packageId: 'recommended',
        marketHint: 'domestic',
        source: 'expo',
        expoRef: 'H08.SE2026000592A',
      },
      ...C.hotSets.map((s) => ({
        id: `PRESET-${s.id}`,
        name: s.name,
        path: 'modular',
        hotSetId: s.id,
        marketHint: 'export',
        source: 'hot-pi',
      })),
    ];
  }

  return {
    quote,
    money,
    skuImage,
    resolvePackageModules,
    moduleMap,
    presets,
  };
})();

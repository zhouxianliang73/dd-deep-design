/* DD Deep Design — Apple-style quote flow
 * Step: bundle → door → upgrades → finish → review
 * Selecting an option auto-advances (no manual path switching).
 */
(() => {
  const C = window.DDCatalog;
  const P = window.DDPricing;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /** shed: 0 bundle, 1 door, 2 upgrades, 3 finish, 4 review
   *  modular: 0 bundle, 4 review
   */
  const state = {
    lang: localStorage.getItem('dd-lang') || 'cn',
    market: localStorage.getItem('dd-market') || 'export',
    path: 'shed',
    step: 0,
    frameId: 'F2800',
    doorType: 'xt',
    packageId: 'recommended',
    selected: new Set(),
    finishId: 'CK01G-Y',
    hotSetId: 'SET-MK-US-8',
    grillOpt: 'mk04',
    fridgeOpt: 'trf',
    presetId: null,
  };

  const txt = {
    heroTitle: { en: 'Choose your outdoor kitchen', cn: '选择你的户外厨房' },
    heroDesc: {
      en: 'Start with a standard package — then refine door, appliances, and finish. Each choice moves you forward.',
      cn: '先选标准套装，再细化门型、厨具与饰面。每选一项，自动进入下一步。',
    },
    kicker: { en: 'Configure', cn: '开始配置' },
    stepBundle: { en: '1 Model', cn: '1 套装' },
    stepDoor: { en: '2 Door', cn: '2 门型' },
    stepUp: { en: '3 Options', cn: '3 加配' },
    stepFinish: { en: '4 Finish', cn: '4 饰面' },
    stepReview: { en: '5 Review', cn: '5 确认' },
    pickBundle: { en: 'Which model?', cn: '选择标准套装' },
    pickBundleHint: {
      en: 'Factory standards — Lift-up export, Expo show floor, or quick-ship modules.',
      cn: '厂方标准：Lift-up 外销、展会同款，或热卖速发模块。',
    },
    shedGroup: { en: 'Shed kitchens', cn: '含棚整装' },
    modGroup: { en: 'Open modules (no shed)', cn: '开放模块（无棚）' },
    pickDoor: { en: 'Door style', cn: '选择门型' },
    pickDoorHint: { en: 'Tap to select — continues automatically.', cn: '点选即可，自动进入下一步。' },
    pickUp: { en: 'Customize options', cn: '微调加配' },
    pickUpHint: {
      en: 'Standard package is ready. Add extras if you want, then continue.',
      cn: '标准配置已就绪。需要再加选，然后继续。',
    },
    keepStd: { en: 'Keep standard — Continue', cn: '保持标配，继续' },
    pickFinish: { en: 'Finish', cn: '选择饰面' },
    pickFinishHint: { en: 'Tap a color to select and continue.', cn: '点选色号即选中并进入下一步。' },
    review: { en: 'Your configuration', cn: '确认你的配置' },
    change: { en: 'Change', cn: '修改' },
    back: { en: 'Back', cn: '返回' },
    request: { en: 'Request quote', cn: '提交询价' },
    copy: { en: 'Copy config', cn: '复制配置' },
    est: { en: 'Estimated total', cn: '预估总价' },
    fob: { en: 'EXW / FOB China · freight extra', cn: 'EXW/FOB 中国 · 运费另计' },
    export: { en: 'Export USD', cn: '外销 USD' },
    domestic: { en: 'Domestic CNY', cn: '内销 CNY' },
    copied: { en: 'Copied', cn: '已复制' },
    recommended: { en: 'Recommended', cn: '推荐' },
    elevView: { en: 'Elevation', cn: '立面图' },
    productView: { en: 'Product view', cn: '效果图' },
    hoverElev: { en: 'Hover a size to preview elevation', cn: '悬停尺寸可预览立面' },
    cabinets: { en: 'Cabinets', cn: '柜体' },
    appliancesG: { en: 'Appliances', cn: '电器' },
    hardware: { en: 'Hardware', cn: '五金' },
  };

  function t(key) {
    return (txt[key] && txt[key][state.lang]) || key;
  }
  function L(obj) {
    return obj ? obj[state.lang] || obj.en || '' : '';
  }
  function frame() {
    return C.frames.find((f) => f.id === state.frameId) || C.frames[1];
  }
  function finish() {
    return C.finishes.find((f) => f.id === state.finishId) || C.finishes[0];
  }
  function moduleMap() {
    const map = {};
    C.modules.forEach((m) => (map[m.id] = m));
    return map;
  }
  function applyPackage(pkgId) {
    state.packageId = pkgId;
    state.selected = P.resolvePackageModules(frame(), pkgId, C);
  }
  function calc() {
    return P.quote({
      path: state.path,
      market: state.market,
      frameId: state.frameId,
      doorType: state.doorType,
      packageId: state.packageId,
      selected: state.selected,
      finishId: state.finishId,
      hotSetId: state.hotSetId,
      grillOpt: state.grillOpt,
      fridgeOpt: state.fridgeOpt,
      lang: state.lang,
    });
  }
  function money(n, currency) {
    const cur = currency || calc().currency;
    return P.money(n, cur === 'CNY' ? 'domestic' : 'export');
  }
  function modelCode() {
    return calc().model;
  }
  function go(step) {
    state.step = step;
    render();
    // scroll panel into view on mobile
    $('#configPanel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function applyBundle(preset) {
    state.presetId = preset.id;
    if (preset.marketHint) {
      state.market = preset.marketHint;
      localStorage.setItem('dd-market', state.market);
    }
    if (preset.path === 'modular') {
      state.path = 'modular';
      state.hotSetId = preset.hotSetId;
      go(4);
      return;
    }
    state.path = 'shed';
    state.frameId = preset.frameId;
    state.doorType = preset.doorType || 'xt';
    applyPackage(preset.packageId || frame().recommend);
    // show matching elevation briefly, then advance to door
    previewFrame(state.frameId);
    setTimeout(() => go(1), 180);
  }

  /* ---------- render ---------- */

  function renderSteps() {
    const el = $('#stepPills');
    if (!el) return;
    const shedSteps = [
      { n: 0, key: 'stepBundle' },
      { n: 1, key: 'stepDoor' },
      { n: 2, key: 'stepUp' },
      { n: 3, key: 'stepFinish' },
      { n: 4, key: 'stepReview' },
    ];
    const modSteps = [
      { n: 0, key: 'stepBundle' },
      { n: 4, key: 'stepReview' },
    ];
    const steps = state.path === 'modular' && state.step === 4 ? modSteps : shedSteps;
    // While on bundle pick, always show shed flow labels
    const list = state.step === 0 ? shedSteps : steps;
    el.innerHTML = list
      .map((s) => {
        const active = state.step === s.n;
        const done = state.step > s.n;
        const clickable = done || active;
        return `<button type="button" class="q-step-pill ${active ? 'active' : ''} ${done ? 'done' : ''}" data-step="${s.n}" ${clickable ? '' : 'disabled'}>${t(s.key)}</button>`;
      })
      .join('');
  }

  function setStage(img, title, dim, badge, viewLabel) {
    const el = $('#stageImg');
    if (el && img) {
      el.classList.add('is-switching');
      el.onload = () => el.classList.remove('is-switching');
      el.src = img;
      el.alt = title || '';
    }
    if ($('#stageTitle')) $('#stageTitle').textContent = title || '';
    if ($('#stageDim')) $('#stageDim').textContent = dim || '';
    if ($('#stageBadge')) {
      $('#stageBadge').classList.toggle('hidden', !badge);
      $('#stageBadge').textContent = badge || '';
    }
    if ($('#stageView')) {
      $('#stageView').textContent = viewLabel || '';
      $('#stageView').classList.toggle('hidden', !viewLabel);
    }
  }

  function previewFrame(frameId, doorType) {
    const fr = C.frames.find((f) => f.id === frameId);
    if (!fr) return;
    const door = doorType || state.doorType || 'xt';
    // Size selection / hover → elevation drawing
    setStage(
      fr.image.elev,
      L(fr.label),
      `${fr.width} × ${fr.depth} × ${fr.height} mm`,
      fr.badge ? L(fr.badge) : '',
      t('elevView')
    );
  }

  function renderStage() {
    const f = frame();

    if (state.step === 0) {
      // Default: recommended 2.8 elev until hover
      const rec = C.frames.find((x) => x.id === 'F2800') || f;
      setStage(
        rec.image.elev,
        state.lang === 'cn' ? '选择外框尺寸' : 'Choose frame width',
        t('hoverElev'),
        '',
        t('elevView')
      );
      return;
    }

    if (state.path === 'modular') {
      const set = C.hotSets.find((s) => s.id === state.hotSetId);
      const coverSku = set?.items?.[0];
      const img = (coverSku && window.DDHotImages && window.DDHotImages[coverSku]) || f.image.xt;
      setStage(img, L(set?.name), L(set?.note) || '304 SS', '', t('productView'));
      return;
    }

    // Door step & later: product view for selected door+width; elev available on step 0/1 preview
    if (state.step === 1) {
      // Door choosing — show product render for current door, elev as baseline until hover door
      setStage(
        f.image[state.doorType],
        `${L(f.label)} · ${L(C.doorTypes.find((d) => d.id === state.doorType)?.name)}`,
        `${f.width} × ${f.depth} × ${f.height} mm`,
        f.badge ? L(f.badge) : '',
        t('productView')
      );
      return;
    }

    // After door locked: keep product view for that frame+door
    setStage(
      f.image[state.doorType],
      `${L(f.label)} · ${L(C.doorTypes.find((d) => d.id === state.doorType)?.name)}`,
      `${f.width} × ${f.depth} × ${f.height} mm`,
      f.badge ? L(f.badge) : '',
      t('productView')
    );
  }

  function renderBundleStep() {
    const shedPresets = P.presets().filter((p) => p.path === 'shed');
    const hotPresets = P.presets().filter((p) => p.path === 'modular');

    const shedCards = shedPresets
      .map((p) => {
        const q = P.quote({
          path: 'shed',
          market: p.marketHint || 'export',
          frameId: p.frameId,
          doorType: p.doorType || 'xt',
          packageId: p.packageId,
          lang: state.lang,
        });
        const fr = C.frames.find((f) => f.id === p.frameId);
        const src =
          p.source === 'expo'
            ? state.lang === 'cn'
              ? '展会同款'
              : 'Expo'
            : p.source === 'lift-up'
              ? 'Lift-up'
              : state.lang === 'cn'
                ? '含棚'
                : 'Shed';
        const elev = fr?.image?.elev || '';
        const meters = fr ? (fr.width / 1000).toFixed(1).replace(/\.0$/, '') + 'm' : '';
        return `
          <button type="button" class="q-bundle ${p.highlight ? 'highlight' : ''}" data-bundle="${p.id}" data-frame="${p.frameId}">
            ${p.highlight ? `<span class="q-bundle-rec">${t('recommended')}</span>` : ''}
            ${elev ? `<img class="q-bundle-elev" src="${elev}" alt="${L(fr.label)} elevation" />` : ''}
            <div class="q-bundle-src">${src} · ${meters}</div>
            <div class="q-bundle-name">${L(p.name)}</div>
            <div class="q-bundle-sub">${fr ? `${fr.width} × ${fr.depth} × ${fr.height} mm · ${t('elevView')}` : ''}</div>
            <div class="q-bundle-price">${money(q.total, q.currency)}</div>
          </button>`;
      })
      .join('');

    const hotCards = hotPresets
      .map((p) => {
        const set = C.hotSets.find((s) => s.id === p.hotSetId);
        const cover = set?.cover || (set?.items?.[0] && window.DDHotImages?.[set.items[0]]) || '';
        return `
          <button type="button" class="q-bundle" data-bundle="${p.id}">
            ${cover ? `<img class="q-bundle-img" src="${cover}" alt="" />` : ''}
            <div class="q-bundle-src">Hot PI</div>
            <div class="q-bundle-name">${L(p.name)}</div>
            <div class="q-bundle-sub">${set ? `${set.structure} · ${set.items.length} SKUs` : ''}</div>
            <div class="q-bundle-price">${money(set?.priceUsd || 0, 'USD')}</div>
          </button>`;
      })
      .join('');

    return `
      <div class="q-block">
        <h2>${t('pickBundle')}</h2>
        <p class="hint">${t('pickBundleHint')}</p>
        <div class="q-bundle-label">${t('shedGroup')}</div>
        <div class="q-bundle-grid">${shedCards}</div>
        <div class="q-bundle-label" style="margin-top:18px">${t('modGroup')}</div>
        <div class="q-bundle-grid">${hotCards}</div>
      </div>`;
  }

  function renderDoorStep() {
    const f = frame();
    const doors = C.doorTypes
      .map((d) => {
        const q = P.quote({
          path: 'shed',
          market: state.market,
          frameId: state.frameId,
          doorType: d.id,
          packageId: state.packageId,
          selected: state.selected,
          finishId: state.finishId,
          lang: state.lang,
        });
        const thumb = f.image[d.id];
        return `
          <button type="button" class="q-option q-option-door ${state.doorType === d.id ? 'active' : ''}" data-door="${d.id}">
            <img class="q-door-thumb" src="${thumb}" alt="${L(d.name)}" />
            <span>
              <div class="title">${L(d.name)}</div>
              <div class="sub">${L(d.desc)}</div>
            </span>
            <span class="price">${money(q.total, q.currency)}</span>
          </button>`;
      })
      .join('');

    return `
      <div class="q-block">
        <h2>${t('pickDoor')}</h2>
        <p class="hint">${t('pickDoorHint')}</p>
        <div class="q-elev-mini">
          <div class="q-elev-mini-label">${t('elevView')} · ${L(f.label)}</div>
          <img src="${f.image.elev}" alt="elevation ${f.width}" />
        </div>
        <div class="q-options" style="margin-top:12px">${doors}</div>
        <button type="button" class="q-btn q-btn-ghost" data-nav="back" style="margin-top:12px;width:100%">${t('back')}</button>
      </div>`;
  }

  function renderUpgradeStep() {
    const f = frame();
    const optional = C.modules.filter(
      (m) => !m.required && (!m.minWidth || f.width >= m.minWidth) && (m.group === 'appliances' || m.group === 'hardware')
    );

    const items = optional
      .map((m) => {
        const on = state.selected.has(m.id);
        const price = state.market === 'domestic' ? m.priceCny : m.priceUsd;
        return `
          <label class="q-mod ${on ? '' : 'off'}">
            <div>
              <div class="name">${L(m.name)}</div>
              <div class="spec">${m.spec}</div>
              ${m.why ? `<div class="why">${L(m.why)}</div>` : ''}
            </div>
            <div style="text-align:right">
              <div style="font-weight:700;margin-bottom:6px">${on ? '' : '+'}${money(price)}</div>
              <input type="checkbox" data-toggle="${m.id}" ${on ? 'checked' : ''} />
            </div>
          </label>`;
      })
      .join('');

    return `
      <div class="q-block">
        <h2>${t('pickUp')}</h2>
        <p class="hint">${t('pickUpHint')}</p>
        <div class="q-mod-list">${items}</div>
        <div class="q-nav-btns" style="margin-top:14px">
          <button type="button" class="q-btn q-btn-ghost" data-nav="back">${t('back')}</button>
          <button type="button" class="q-btn q-btn-primary" data-nav="next">${t('keepStd')}</button>
        </div>
      </div>`;
  }

  function renderFinishStep() {
    const swatches = C.finishes
      .map(
        (f) => `
        <button type="button" class="q-finish ${state.finishId === f.id ? 'active' : ''}" data-finish="${f.id}" title="${L(f.name)}" style="background:${f.hex}"></button>`
      )
      .join('');
    const fin = finish();
    const prem = state.market === 'domestic' ? fin.premiumCny : fin.premiumUsd;

    return `
      <div class="q-block">
        <h2>${t('pickFinish')}</h2>
        <p class="hint">${t('pickFinishHint')}</p>
        <div class="q-finish-row">${swatches}</div>
        <div class="q-compare" style="margin-top:14px">
          <strong>${fin.id}</strong> — ${L(fin.name)}
          ${prem ? ` · +${money(prem)}` : ''}
        </div>
        <button type="button" class="q-btn q-btn-ghost" data-nav="back" style="margin-top:12px;width:100%">${t('back')}</button>
      </div>`;
  }

  function renderReviewStep() {
    const c = calc();
    const lines = c.lines
      .map((l) => `<div class="q-summary-line"><span>${l.name}</span><span>${money(l.amount, c.currency)}</span></div>`)
      .join('');

    let bom = '';
    if (state.path === 'modular') {
      const set = C.hotSets.find((s) => s.id === state.hotSetId);
      bom = (set?.items || [])
        .map((sku) => {
          const s = C.skus[sku];
          const img = window.DDHotImages?.[sku] || '';
          return `<div class="q-summary-line" style="align-items:center">
            <span style="display:flex;gap:10px;align-items:center">
              ${img ? `<img src="${img}" alt="" style="width:40px;height:40px;object-fit:contain;background:#f3f1ec;border-radius:8px"/>` : ''}
              ${sku}${s ? ' · ' + L(s.name) : ''}
            </span>
            <span>${s ? money(s.priceUsd, 'USD') : ''}</span>
          </div>`;
        })
        .join('');
    }

    return `
      <div class="q-block">
        <h2>${t('review')}</h2>
        <p class="hint">${modelCode()}</p>
        ${lines}
        <div class="q-summary-line total"><span>${t('est')}</span><span>${money(c.total, c.currency)}</span></div>
        ${bom ? `<div style="margin-top:16px"><strong>BOM</strong>${bom}</div>` : ''}
        <div class="q-nav-btns" style="margin-top:16px">
          <button type="button" class="q-btn q-btn-ghost" data-nav="restart">${t('change')}</button>
          <button type="button" class="q-btn q-btn-primary" data-nav="summary">${t('request')}</button>
        </div>
      </div>`;
  }

  function renderPanel() {
    const panel = $('#configPanel');
    if (state.step === 0) panel.innerHTML = renderBundleStep();
    else if (state.path === 'modular') panel.innerHTML = renderReviewStep();
    else if (state.step === 1) panel.innerHTML = renderDoorStep();
    else if (state.step === 2) panel.innerHTML = renderUpgradeStep();
    else if (state.step === 3) panel.innerHTML = renderFinishStep();
    else panel.innerHTML = renderReviewStep();
    bindPanel();
  }

  function bindPanel() {
    $$('[data-bundle]').forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        if (btn.dataset.frame) previewFrame(btn.dataset.frame);
      });
      btn.addEventListener('focus', () => {
        if (btn.dataset.frame) previewFrame(btn.dataset.frame);
      });
      btn.addEventListener('click', () => {
        const preset = P.presets().find((p) => p.id === btn.dataset.bundle);
        if (preset) applyBundle(preset);
      });
    });

    // restore default elev when leaving shed grid
    const shedGrid = $('#configPanel')?.querySelector('.q-bundle-grid');
    shedGrid?.addEventListener('mouseleave', () => {
      if (state.step === 0) renderStage();
    });

    $$('[data-door]').forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        const f = frame();
        const doorId = btn.dataset.door;
        setStage(
          f.image[doorId],
          `${L(f.label)} · ${L(C.doorTypes.find((d) => d.id === doorId)?.name)}`,
          `${f.width} × ${f.depth} × ${f.height} mm`,
          f.badge ? L(f.badge) : '',
          t('productView')
        );
      });
      btn.addEventListener('click', () => {
        state.doorType = btn.dataset.door;
        go(2);
      });
    });

    $$('[data-toggle]').forEach((input) =>
      input.addEventListener('change', () => {
        const id = input.dataset.toggle;
        const m = moduleMap()[id];
        if (input.checked) {
          state.selected.add(id);
          if (m?.replaces) state.selected.delete(m.replaces);
          if (m?.pairsWith) state.selected.add(m.pairsWith);
          if (id === 'elecPlus') state.selected.delete('elecBasic');
          if (id === 'shelf2') state.selected.delete('shelf1');
        } else {
          state.selected.delete(id);
          if (id === 'kamado') state.selected.delete('kamadoCab');
        }
        renderBar();
        renderPanel();
        renderStage();
      })
    );

    $$('[data-finish]').forEach((btn) =>
      btn.addEventListener('click', () => {
        state.finishId = btn.dataset.finish;
        go(4);
      })
    );

    $$('[data-nav]').forEach((btn) =>
      btn.addEventListener('click', () => {
        const a = btn.dataset.nav;
        if (a === 'back') {
          if (state.step === 4 && state.path === 'modular') go(0);
          else go(Math.max(0, state.step - 1));
        }
        if (a === 'next') go(Math.min(4, state.step + 1));
        if (a === 'restart') {
          state.path = 'shed';
          go(0);
        }
        if (a === 'summary') openDrawer();
      })
    );
  }

  function renderBar() {
    const c = calc();
    $('#barTotal').textContent = money(c.total, c.currency);
    $('#barLabel').textContent = t('est');
    $('#barModel').textContent = state.step === 0 ? t('pickBundle') : `${modelCode()} · ${t('fob')}`;
    $('#btnCopy').textContent = t('copy');
    $('#btnRequest').textContent = t('request');
  }

  function buildSummaryText() {
    const c = calc();
    const lines = [
      'DD Deep Design Quote',
      `Path: ${state.path}`,
      `Model: ${modelCode()}`,
      `Market: ${state.market}`,
      '',
      ...c.lines.map((l) => `- ${l.name}: ${money(l.amount, c.currency)}`),
      '',
      `TOTAL: ${money(c.total, c.currency)} ${c.currency}`,
      'Terms: EXW/FOB China, freight extra',
    ];
    if (state.path === 'shed') {
      lines.splice(4, 0, `Modules: ${[...state.selected].join(', ')}`);
      lines.splice(5, 0, `Finish: ${state.finishId}`);
    }
    return lines.join('\n');
  }

  function openDrawer() {
    const c = calc();
    $('#drawerBody').innerHTML = `
      <h3>${t('review')}</h3>
      <p style="color:var(--muted);font-size:0.9rem">${modelCode()}</p>
      ${c.lines.map((l) => `<div class="q-summary-line"><span>${l.name}</span><span>${money(l.amount, c.currency)}</span></div>`).join('')}
      <div class="q-summary-line total"><span>${t('est')}</span><span>${money(c.total, c.currency)}</span></div>
      <pre style="white-space:pre-wrap;background:#f3f1ec;padding:12px;border-radius:12px;font-size:12px;margin-top:16px">${buildSummaryText()}</pre>
      <div class="q-nav-btns" style="margin-top:16px">
        <button class="q-btn q-btn-ghost" id="drawerClose">${state.lang === 'cn' ? '关闭' : 'Close'}</button>
        <a class="q-btn q-btn-primary" style="text-align:center" href="mailto:info@deepdesign.solutions?subject=${encodeURIComponent('Outdoor Kitchen Quote ' + modelCode())}&body=${encodeURIComponent(buildSummaryText())}">${t('request')}</a>
      </div>`;
    $('#drawer').classList.add('open');
    $('#drawerClose')?.addEventListener('click', () => $('#drawer').classList.remove('open'));
  }

  function render() {
    $('#langToggle').textContent = state.lang === 'cn' ? '中文 / EN' : 'EN / 中文';
    $('#marketExport').classList.toggle('active', state.market === 'export');
    $('#marketDomestic').classList.toggle('active', state.market === 'domestic');
    $('#marketExport').textContent = t('export');
    $('#marketDomestic').textContent = t('domestic');

    $('#heroKicker').textContent = t('kicker');
    $('#heroTitle').textContent = t('heroTitle');
    $('#heroDesc').textContent = t('heroDesc');

    // hide old path/preset UI if present
    $('#pathShed')?.closest('.q-path')?.classList.add('hidden');
    $('#presetStrip')?.classList.add('hidden');

    renderSteps();
    renderStage();
    renderPanel();
    renderBar();
  }

  function init() {
    applyPackage(frame().recommend);

    $('#langToggle').addEventListener('click', () => {
      state.lang = state.lang === 'cn' ? 'en' : 'cn';
      localStorage.setItem('dd-lang', state.lang);
      render();
    });
    $('#marketExport').addEventListener('click', () => {
      state.market = 'export';
      localStorage.setItem('dd-market', state.market);
      render();
    });
    $('#marketDomestic').addEventListener('click', () => {
      state.market = 'domestic';
      localStorage.setItem('dd-market', state.market);
      render();
    });
    $('#stepPills').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-step]');
      if (!btn || btn.disabled) return;
      const n = Number(btn.dataset.step);
      // only allow going back to completed steps, or stay
      if (n <= state.step) go(n);
    });
    $('#btnCopy').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(buildSummaryText());
        $('#btnCopy').textContent = t('copied');
        setTimeout(() => renderBar(), 1200);
      } catch {
        openDrawer();
      }
    });
    $('#btnRequest').addEventListener('click', openDrawer);
    $('#drawerMask').addEventListener('click', () => $('#drawer').classList.remove('open'));

    render();
  }

  document.addEventListener('DOMContentLoaded', init);
})();

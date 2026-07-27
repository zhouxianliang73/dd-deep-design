/* Outdoor kitchen quote helpers — uses window.OUTDOOR_QUOTE from outdoor-quote-data.js */
(function (global) {
  const Q = () => global.OUTDOOR_QUOTE;
  const TIER_UNLOCK_KEY = 'dd-tier-unlock';
  const ADMIN_PIN = 'ddadmin';

  const META = {
    shedMini: {
      icon: '🏠',
      en: 'Mini Shed',
      cn: '迷你箱体',
      detailEn: 'Compact shell',
      detailCn: '迷你外壳',
      img: 'shed-mini',
      dim: 'L × 800 × 1450 mm'
    },
    shedStd: {
      icon: '📦',
      en: 'Standard Shed',
      cn: '标准箱体',
      detailEn: 'Full-height shell',
      detailCn: '标准外壳',
      img: 'shed-standard',
      dim: 'L × 900 × 2200 mm'
    },
    cabinets: {
      icon: '🗄️',
      en: 'Kitchen Cabinets',
      cn: '厨柜',
      detailEn: '304 SS + honeycomb',
      detailCn: '304不锈钢蜂窝柜体',
      img: 'kitchen-cabinets',
      dim: 'net length × 915 × 650 mm'
    },
    counter: {
      icon: '🪨',
      en: 'Counter Top',
      cn: '台面',
      detailEn: '304 stainless counter',
      detailCn: '304不锈钢台面',
      img: 'counter-top',
      dim: 'net length × 39 × 660 mm'
    },
    bbq: {
      icon: '🔥',
      en: 'BBQ Grill',
      cn: '烧烤炉',
      detailEn: 'Built-in BBQ module',
      detailCn: '嵌入式烧烤炉',
      img: 'bbq-grill',
      dim: '770 × 591 × 504 mm'
    },
    sink: {
      icon: '🚰',
      en: 'Sink',
      cn: '水槽',
      detailEn: 'Seamless 304 SS sink',
      detailCn: '一体成型304水槽',
      img: 'sink',
      dim: '560 × 420 × 215 mm'
    },
    fridge: {
      icon: '🧊',
      en: 'Fridge',
      cn: '冰箱',
      detailEn: '150L outdoor fridge',
      detailCn: '150L户外冰箱',
      img: 'fridge',
      dim: '595 × 870 × 596 mm'
    },
    drawerFridge: {
      icon: '🧊',
      en: 'Drawer Refrigerator',
      cn: '抽屉冰箱',
      detailEn: '110L drawer fridge',
      detailCn: '110L抽屉冰箱',
      img: 'drawer-fridge',
      dim: '598 × 870 × 595 mm'
    },
    kamado: {
      icon: '🍕',
      en: 'Kamado',
      cn: '陶瓷炭烤炉',
      detailEn: '18" charcoal kamado',
      detailCn: '18寸木炭款',
      img: 'kamado',
      dim: '18"'
    },
    kegerator: {
      icon: '🍺',
      en: 'Kegerator',
      cn: '啤酒机',
      detailEn: '163L beer fridge + tap',
      detailCn: '163L啤酒冷藏+酒头',
      img: 'kegerator',
      dim: '606 × 900 × 633 mm'
    },
    rangeHood: {
      icon: '💨',
      en: 'Range Hood',
      cn: '油烟机',
      detailEn: 'Washable mesh filter',
      detailCn: '可清洗滤网',
      img: 'range-hood',
      dim: '598 × 176 × 290 mm'
    },
    tv: {
      icon: '📺',
      en: 'TV',
      cn: '电视',
      detailEn: 'TV + stand',
      detailCn: '电视+支架',
      img: 'tv',
      dim: '—'
    },
    roundLamp: {
      icon: '💡',
      en: 'Downlight',
      cn: '筒灯',
      detailEn: '4000K 7W 24V',
      detailCn: '4000K 7W 24V',
      img: 'round-lamp',
      dim: '2.5"'
    },
    led: {
      icon: '✨',
      en: 'LED Light',
      cn: '灯带',
      detailEn: 'Ambient rainproof LED',
      detailCn: '氛围防水灯带',
      img: 'led-light',
      dim: 'scales with shed'
    },
    shelf: {
      icon: '📐',
      en: 'Shelf',
      cn: '层板',
      detailEn: 'Aluminum profile shelf',
      detailCn: '铝型材层板',
      img: 'shelf',
      dim: '800 × 200 × 60 mm'
    },
    socket: {
      icon: '🔌',
      en: 'Socket',
      cn: '插座',
      detailEn: 'On-demand outlets',
      detailCn: '按需安装插座',
      img: 'socket',
      dim: '—'
    },
    drawer: {
      icon: '🗄️',
      en: 'Drawer',
      cn: '抽屉柜',
      detailEn: 'Soft-close drawer',
      detailCn: '阻尼抽屉',
      img: 'drawer',
      dim: '400 × 670 × 660 mm'
    },
    trash: {
      icon: '🗑️',
      en: 'Pull-out Trash Can',
      cn: '拉篮垃圾桶',
      detailEn: 'Pull-out bin ≥400mm cab',
      detailCn: '拉篮垃圾桶（柜宽≥400）',
      img: 'trash',
      dim: '336 × 469 × 346 mm'
    },
    wallCabinets: {
      icon: '🚪',
      en: 'Wall Cabinets',
      cn: '吊柜',
      detailEn: '304 SS wall cabinets',
      detailCn: '304不锈钢吊柜',
      img: 'wall-cabinets',
      dim: '600 × 600 × 350 mm'
    },
    woodenBox: {
      icon: '📦',
      en: 'Wooden Box',
      cn: '木箱包装',
      detailEn: 'Crate + pallet pack',
      detailCn: '木箱+栈板包装',
      img: 'wooden-box',
      dim: '2230 × 2450 × 1000 mm'
    }
  };

  function nearestLength(w) {
    const sizes = (Q() && Q().lengths) || [2200, 2900, 3200, 3500];
    return sizes.reduce((best, n) => (Math.abs(n - w) < Math.abs(best - w) ? n : best), sizes[0]);
  }

  function isTierUnlocked() {
    try {
      return localStorage.getItem(TIER_UNLOCK_KEY) === '1';
    } catch (_) {
      return false;
    }
  }

  function setTierUnlocked(on) {
    try {
      if (on) localStorage.setItem(TIER_UNLOCK_KEY, '1');
      else localStorage.removeItem(TIER_UNLOCK_KEY);
    } catch (_) {}
  }

  function tryUnlockTier(pin) {
    if (String(pin || '') === ADMIN_PIN) {
      setTierUnlocked(true);
      return true;
    }
    return false;
  }

  function resolveTier(requested) {
    const tiers = (Q() && Q().tiers) || ['1-5', '6-20', '20+'];
    if (!isTierUnlocked()) return '1-5';
    return tiers.includes(requested) ? requested : '1-5';
  }

  function getItemExw(key, length, tier) {
    const data = Q();
    if (!data || !data.items[key]) return 0;
    const L = String(nearestLength(length));
    const t = resolveTier(tier);
    const row = data.items[key].exw[L] || {};
    return Number(row[t] || 0);
  }

  /** Website sell price = EXW / 0.7 (≈30% margin on sell) */
  function exwToList(exwUsd) {
    const ratio = (Q() && Q().publicCostRatio) || 0.7;
    return Number(exwUsd) / ratio;
  }

  function listUsd(key, length, tier) {
    return exwToList(getItemExw(key, length, tier));
  }

  function stdKeys(length, doorType) {
    const data = Q();
    const L = String(nearestLength(length));
    const keys = ((data && data.stdPackage[L]) || []).slice();
    if (doorType === 'mini') {
      const i = keys.indexOf('shedStd');
      if (i >= 0) keys[i] = 'shedMini';
      else if (!keys.includes('shedMini')) keys.unshift('shedMini');
    }
    return keys;
  }

  function optionalKeys(length, doorType) {
    const data = Q();
    if (!data) return [];
    const L = String(nearestLength(length));
    const std = new Set(stdKeys(length, doorType));
    const notRec = new Set((data.notRecommended && data.notRecommended[L]) || []);
    const blocked = new Set((data.incompatible && data.incompatible[L]) || []);
    return Object.keys(data.items).filter((k) => {
      if (std.has(k)) return false;
      // Shell chosen via door tabs (Standard / Mini), not as add-on
      if (k === 'shedMini' || k === 'shedStd') return false;
      return true;
    }).map((k) => ({
      key: k,
      notRecommended: notRec.has(k) && !blocked.has(k),
      incompatible: blocked.has(k)
    }));
  }

  function sumKeysListUsd(keys, length, tier) {
    return keys.reduce((s, k) => s + listUsd(k, length, tier), 0);
  }

  function meta(key) {
    return META[key] || { icon: '➕', en: key, cn: key, detailEn: '', detailCn: '', img: null, dim: '—' };
  }

  global.OutdoorQuote = {
    META,
    TIER_UNLOCK_KEY,
    nearestLength,
    isTierUnlocked,
    setTierUnlocked,
    tryUnlockTier,
    resolveTier,
    getItemExw,
    exwToList,
    listUsd,
    stdKeys,
    optionalKeys,
    sumKeysListUsd,
    meta,
    fx: () => (Q() && Q().fx) || 6.7,
    costRatio: () => (Q() && Q().publicCostRatio) || 0.7
  };
})(window);

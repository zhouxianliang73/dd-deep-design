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
      detailEn: 'CK Series · High-Al Zn-Al-Mg coated steel · 30-year anti-perforation (coast ≥1000m)',
      detailCn: 'CK系列 · 高铝锌铝镁镀层钢板 · 海岸线≥1000m 条件下30年不穿孔',
      img: 'shed-mini',
      dim: 'L × 800 × 1450 mm'
    },
    shedStd: {
      icon: '📦',
      en: 'Standard Shed',
      cn: '标准箱体',
      detailEn: 'CK Series · High-Al Zn-Al-Mg coated steel · 30-year anti-perforation (coast ≥1000m)',
      detailCn: 'CK系列 · 高铝锌铝镁镀层钢板 · 海岸线≥1000m 条件下30年不穿孔',
      img: 'shed-standard',
      dim: 'L × 900 × 2200 mm'
    },
    cabinets: {
      icon: '🗄️',
      en: 'Kitchen Cabinets',
      cn: '厨柜',
      detailEn: 'CK Series · 1mm 304 SS + 4×4mm aluminum honeycomb · inclined countertop edge',
      detailCn: 'CK系列 · 1mm 304不锈钢 + 4×4mm铝蜂窝 · 台面斜边',
      img: 'kitchen-cabinets',
      dim: 'net length × 915 × 650 mm'
    },
    counter: {
      icon: '🪨',
      en: 'Counter Top',
      cn: '台面',
      detailEn: '304 SS body & door · ion micro-spray electrostatic finish',
      detailCn: '304不锈钢柜体/门板 · 离子微喷静电吸附工艺',
      img: 'counter-top',
      dim: 'net length × 39 × 660 mm'
    },
    bbq: {
      icon: '🔥',
      en: 'BBQ Grill',
      cn: '烧烤炉',
      detailEn: 'LP/NG convertible · 12k BTU tube burner · 10k BTU rear infrared · halogen lamps',
      detailCn: '液化/天然气可转换 · 12000BTU管烧 · 10000BTU后红外 · 卤素灯',
      img: 'bbq-grill',
      dim: '770 × 591 × 504 mm'
    },
    sink: {
      icon: '🚰',
      en: 'Sink',
      cn: '水槽',
      detailEn: 'Handmade seamless 304 SS single sink · drain basket & cutting board · handle 345mm',
      detailCn: '手工一体成型304单槽 · 含沥水篮与砧板 · 把手高度345mm',
      img: 'sink',
      dim: '560 × 420 × 215 mm'
    },
    fridge: {
      icon: '🧊',
      en: 'Fridge',
      cn: '冰箱',
      detailEn: '150L JG-150 · 5–18°C · frost-free · tempered glass door with SS frame',
      detailCn: '150L JG-150 · 5–18°C · 无霜循环 · 钢化玻璃门不锈钢框',
      img: 'fridge',
      dim: '595 × 870 × 596 mm'
    },
    drawerFridge: {
      icon: '🧊',
      en: 'Drawer Refrigerator',
      cn: '抽屉冰箱',
      detailEn: '110L BC-152 24\" · stainless drawers · single zone · frost-free LED control',
      detailCn: '110L BC-152 24寸 · 不锈钢抽屉 · 单温区 · 无霜触控',
      img: 'drawer-fridge',
      dim: '598 × 870 × 595 mm'
    },
    kamado: {
      icon: '🍕',
      en: 'Kamado',
      cn: '陶瓷炭烤炉',
      detailEn: 'Charcoal model · body Ø457mm / 18\" · grate Ø375mm · operating height 790mm',
      detailCn: '木炭款 · 炉体Ø457mm / 18寸 · 烤网Ø375mm · 操作高度790mm',
      img: 'kamado',
      dim: '18"'
    },
    kegerator: {
      icon: '🍺',
      en: 'Kegerator',
      cn: '啤酒机',
      detailEn: '163L · −2~10°C · LED control · frost-free · reversible SS door',
      detailCn: '163L · −2~10°C · LED控温 · 无霜 · 不锈钢可换向门',
      img: 'kegerator',
      dim: '606 × 900 × 633 mm'
    },
    rangeHood: {
      icon: '💨',
      en: 'Range Hood',
      cn: '油烟机',
      detailEn: 'Galvanized SS body · 3-layer aluminum mesh filter · machine/hand washable',
      detailCn: '镀锌不锈钢机身 · 三层铝网油滤 · 可机洗/手洗',
      img: 'range-hood',
      dim: '598 × 176 × 290 mm'
    },
    tv: {
      icon: '📺',
      en: 'TV',
      cn: '电视',
      detailEn: 'Outdoor LED TV (bracket sold separately)',
      detailCn: '户外LED电视（支架另选）',
      img: 'tv',
      dim: '—'
    },
    tvBracket: {
      icon: '📐',
      en: 'TV Bracket',
      cn: '电视支架',
      detailEn: 'Articulating wall mount',
      detailCn: '伸缩旋转壁挂支架',
      img: 'tv-bracket',
      dim: '645 × 420 mm（壁板 435 × 165）'
    },
    roundLamp: {
      icon: '💡',
      en: 'Downlight',
      cn: '筒灯',
      detailEn: 'Top lighting · 4000K · 7W · 24V',
      detailCn: '顶部照明 · 4000K · 7W · 24V',
      img: 'round-lamp',
      dim: '2.5"'
    },
    led: {
      icon: '✨',
      en: 'LED Light',
      cn: '灯带',
      detailEn: 'Flexible ambient lighting · rainproof · length scales with shed',
      detailCn: '柔性氛围灯带 · 防水 · 长度随箱体变化',
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
      detailEn: 'On-demand installation',
      detailCn: '按需安装',
      img: 'socket',
      dim: '—'
    },
    drawer: {
      icon: '🗄️',
      en: 'Drawer',
      cn: '抽屉柜',
      detailEn: 'Soft-close · 304 SS body & door · ion micro-spray finish',
      detailCn: '阻尼抽屉 · 304不锈钢柜体/门板 · 离子微喷工艺',
      img: 'drawer',
      dim: '400 × 670 × 660 mm'
    },
    trash: {
      icon: '🗑️',
      en: 'Pull-out Trash Can',
      cn: '拉篮垃圾桶',
      detailEn: 'Ningka pull-out · PP gray · requires cabinet width ≥400mm',
      detailCn: '宁卡拉篮垃圾桶 · PP灰 · 须装于柜宽≥400mm',
      img: 'trash',
      dim: '336 × 469 × 346 mm'
    },
    wallCabinets: {
      icon: '🚪',
      en: 'Wall Cabinets',
      cn: '吊柜',
      detailEn: '304 SS body & door · ion micro-spray electrostatic finish',
      detailCn: '304不锈钢柜体/门板 · 离子微喷静电吸附工艺',
      img: 'wall-cabinets',
      dim: '600 × 600 × 350 mm'
    },
    woodenBox: {
      icon: '📦',
      en: 'Wooden Box',
      cn: '木箱包装',
      detailEn: 'Pods install & weld · water/electrical piping · wooden crate + pallet',
      detailCn: '含舱体安装焊接 · 水电管线 · 木箱+栈板一体包装',
      img: 'wooden-box',
      dim: '2230 × 2450 × 1000 mm'
    }
  };

  function nearestLength(w) {
    const sizes = (Q() && Q().lengths) || [2200, 2900, 3200, 3500];
    return sizes.reduce((best, n) => (Math.abs(n - w) < Math.abs(best - w) ? n : best), sizes[0]);
  }

  const CHANNEL_MP = 'mp';
  const CHANNEL_INTERNAL = 'internal';
  let _channel =
    (typeof global !== 'undefined' && global.DD_QUOTE_CHANNEL) ||
    (typeof document !== 'undefined' &&
      document.documentElement &&
      document.documentElement.getAttribute('data-quote-channel')) ||
    CHANNEL_INTERNAL;

  function setChannel(ch) {
    _channel = ch === CHANNEL_MP ? CHANNEL_MP : CHANNEL_INTERNAL;
    return _channel;
  }

  function getChannel() {
    return _channel === CHANNEL_MP ? CHANNEL_MP : CHANNEL_INTERNAL;
  }

  function isMpChannel() {
    return getChannel() === CHANNEL_MP;
  }

  function mpMarkup() {
    const m = Q() && Q().mpMarkup;
    return Number(m) > 0 ? Number(m) : 2.5;
  }

  function isTierUnlocked() {
    // Internal: margins always selectable. MP: no margin UI.
    if (isMpChannel()) return false;
    return true;
  }

  function setTierUnlocked() {
    /* no-op — internal always unlocked; mp has no tiers */
  }

  function tryUnlockTier() {
    return !isMpChannel();
  }

  function resolveTier(requested) {
    if (isMpChannel()) return 'mp';
    const data = Q();
    const tiers = (data && data.tiers) || ['30%', '25%', '20%', '15%'];
    const def = (data && data.defaultTier) || '30%';
    // legacy pack aliases
    const alias = { '1-5': '25%', '6-20': '20%', '20+': '15%' };
    const req = alias[requested] || requested;
    return tiers.includes(req) ? req : def;
  }

  function getUsdCost(key, length) {
    const data = Q();
    if (!data || !data.items[key]) return 0;
    const L = String(nearestLength(length));
    const item = data.items[key];
    const raw = item.usdCost && item.usdCost[L];
    if (raw != null && Number(raw) > 0) return Number(raw);
    // derive from 25% cell if cost missing: cost = 25%price * 0.75
    const p25 = item.exw && item.exw[L] && item.exw[L]['25%'];
    if (p25) return Number(p25) * 0.75;
    return 0;
  }

  /** Internal: right-table margin sell price (already calculated in Excel). */
  function getMarginPrice(key, length, margin) {
    const data = Q();
    if (!data || !data.items[key]) return 0;
    const L = String(nearestLength(length));
    const t = resolveTier(margin);
    const row = (data.items[key].exw && data.items[key].exw[L]) || {};
    const v = Number(row[t]);
    if (v) return v;
    return Number(row['30%'] || row['25%'] || 0);
  }

  /** @deprecated name kept for call sites — returns channel sell USD */
  function getItemExw(key, length, tier) {
    return listUsd(key, length, tier);
  }

  function exwToList(usd) {
    return Number(usd) || 0;
  }

  /**
   * Channel-isolated list USD:
   * - mp: usdCost × 2.5 only
   * - internal: right-table margin 30/25/20/15
   */
  function listUsd(key, length, tier) {
    if (isMpChannel()) {
      return getUsdCost(key, length) * mpMarkup();
    }
    return getMarginPrice(key, length, tier);
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
    return Object.keys(data.items)
      .filter((k) => {
        if (std.has(k)) return false;
        if (k === 'shedMini' || k === 'shedStd') return false;
        return true;
      })
      .map((k) => ({
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
    CHANNEL_MP,
    CHANNEL_INTERNAL,
    TIER_UNLOCK_KEY,
    nearestLength,
    setChannel,
    getChannel,
    isMpChannel,
    mpMarkup,
    isTierUnlocked,
    setTierUnlocked,
    tryUnlockTier,
    resolveTier,
    getUsdCost,
    getMarginPrice,
    getItemExw,
    exwToList,
    listUsd,
    stdKeys,
    optionalKeys,
    sumKeysListUsd,
    meta,
    fx: () => (Q() && Q().fx) || 6.7,
    costRatio: () => 1
  };

  // Honor early global / data-attribute
  if (global.DD_QUOTE_CHANNEL) setChannel(global.DD_QUOTE_CHANNEL);
})(window);

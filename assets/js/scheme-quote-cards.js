/**
 * Scheme quote line cards — works when Live Server roots at dd-deep-design
 * or at scheme-center. Catalog-backed; falls back to local lite map + local images.
 */
window.SchemeQuoteCards = (() => {
  let catalogById = null;
  let catalogPromise = null;

  /** Images from 箱体报价总表 2.0 (xl/media DISPIMG) */
  const MASTER = (slug) =>
    `assets/images/products/from-master/items/${slug}.png`;
  const ELEV = (w) => `assets/images/products/suoer/${w || 3200}.png`;

  /** Item name → master Excel Color/Picture */
  const MASTER_BY_ITEM = {
    Mini: MASTER("shed-mini"),
    Standard: MASTER("shed-standard"),
    "Shed/Mini": MASTER("shed-mini"),
    "Shed/Standard": MASTER("shed-standard"),
    "Kitchen cabinets": MASTER("kitchen-cabinets"),
    "Counter Top": MASTER("counter-top"),
    "BBQ Grill": MASTER("bbq-grill"),
    Sink: MASTER("sink"),
    Fridge: MASTER("fridge"),
    "Drawer Refrigerator": MASTER("drawer-fridge"),
    Kamado: MASTER("kamado"),
    Kegerator: MASTER("kegerator"),
    "Range Hood": MASTER("range-hood"),
    TV: MASTER("tv"),
    "Round lamp": MASTER("round-lamp"),
    "LED light": MASTER("led-light"),
    Shelf: MASTER("shelf"),
    Socket: MASTER("socket"),
    Drawer: MASTER("drawer"),
    "Pull-out Trash Can": MASTER("trash"),
    "Wall Cupboard": MASTER("wall-cupboard"),
    "Wall cabinets": MASTER("wall-cabinets"),
    "Wooden Box": MASTER("wooden-box"),
  };

  /** Built-in lite catalog when ../catalog.json is outside Live Server root */
  const LITE = {
    "ok-lift-2-2m": { id: "ok-lift-2-2m", name: "Lift-up 2.2m", image: ELEV(2200) },
    "ok-lift-2-8m": { id: "ok-lift-2-8m", name: "Lift-up 2.8m", image: ELEV(2900) },
    "ok-lift-3-2m": { id: "ok-lift-3-2m", name: "Lift-up 3.2m", image: ELEV(3200) },
    "ok-oksc01b-sink": {
      id: "ok-oksc01b-sink",
      name: "Kitchen cabinets",
      image: MASTER("kitchen-cabinets"),
    },
    "ok-mk05ss304-bbq": {
      id: "ok-mk05ss304-bbq",
      name: "Counter Top",
      image: MASTER("counter-top"),
    },
    "ok-hgg6006s-bbq": {
      id: "ok-hgg6006s-bbq",
      name: "BBQ Grill",
      image: MASTER("bbq-grill"),
    },
    "ok-hgg6006s-1-sink": {
      id: "ok-hgg6006s-1-sink",
      name: "Sink",
      image: MASTER("sink"),
    },
    "ok-hoap01ss304-appliance": {
      id: "ok-hoap01ss304-appliance",
      name: "Fridge",
      image: MASTER("fridge"),
    },
    "ok-bc-152-fridge": {
      id: "ok-bc-152-fridge",
      name: "Drawer Refrigerator",
      image: MASTER("drawer-fridge"),
    },
    "ok-hbb3004e-t-bbq": {
      id: "ok-hbb3004e-t-bbq",
      name: "Kamado",
      image: MASTER("kamado"),
    },
    "ok-okbc01b-bbq": {
      id: "ok-okbc01b-bbq",
      name: "Kegerator",
      image: MASTER("kegerator"),
    },
    "ok-ho06b01ss304-bbq": {
      id: "ok-ho06b01ss304-bbq",
      name: "Range Hood",
      image: MASTER("range-hood"),
    },
    "ok-mk07ss304-pizza": { id: "ok-mk07ss304-pizza", name: "TV", image: MASTER("tv") },
    "ok-mk06ss304-corner": {
      id: "ok-mk06ss304-corner",
      name: "Light",
      image: MASTER("round-lamp"),
    },
    "ok-mk02ss304-w-appliance": {
      id: "ok-mk02ss304-w-appliance",
      name: "Socket",
      image: MASTER("socket"),
    },
    "ok-mk03ss304-w-bbq": {
      id: "ok-mk03ss304-w-bbq",
      name: "Drawer",
      image: MASTER("drawer"),
    },
    "ok-oksb01b-bbq": {
      id: "ok-oksb01b-bbq",
      name: "Pull-out Trash Can",
      image: MASTER("trash"),
    },
    "ok-okbc01s-bbq": {
      id: "ok-okbc01s-bbq",
      name: "Wall Cupboard",
      image: MASTER("wall-cupboard"),
    },
    "ok-h08-1": { id: "ok-h08-1", name: "Wooden crate", image: MASTER("wooden-box") },
  };

  const ITEM_TO_CATALOG = {
    Mini: (w) => shedId(w),
    Standard: (w) => shedId(w),
    "Shed/Mini": (w) => shedId(w),
    "Shed/Standard": (w) => shedId(w),
    "Kitchen cabinets": "ok-oksc01b-sink",
    "Counter Top": "ok-mk05ss304-bbq",
    "BBQ Grill": "ok-hgg6006s-bbq",
    Sink: "ok-hgg6006s-1-sink",
    Fridge: "ok-hoap01ss304-appliance",
    "Drawer Refrigerator": "ok-bc-152-fridge",
    Kamado: "ok-hbb3004e-t-bbq",
    Kegerator: "ok-okbc01b-bbq",
    "Range Hood": "ok-ho06b01ss304-bbq",
    TV: "ok-mk07ss304-pizza",
    "Round lamp": "ok-mk06ss304-corner",
    "LED light": "ok-mk06ss304-corner",
    Shelf: "ok-hoap01ss304-appliance",
    Socket: "ok-mk02ss304-w-appliance",
    Drawer: "ok-mk03ss304-w-bbq",
    "Pull-out Trash Can": "ok-oksb01b-bbq",
    "Wall Cupboard": "ok-okbc01s-bbq",
    "Wall cabinets": "ok-okbc01s-bbq",
    "Wooden Box": "ok-h08-1",
  };

  function shedId(widthMm) {
    if (widthMm <= 2200) return "ok-lift-2-2m";
    if (widthMm <= 2900) return "ok-lift-2-8m";
    if (widthMm <= 3200) return "ok-lift-3-2m";
    return "ok-lift-3-2m";
  }

  function inDeepDesign() {
    return /\/dd-deep-design\//i.test(location.pathname) ||
      /(classic|owner-quote|margin-console|index)\.html$/i.test(location.pathname);
  }

  function catalogCandidates() {
    // Live Server may root at scheme-center OR dd-deep-design
    return [
      "../catalog.json",
      "/catalog.json",
      "catalog.json",
      "../../catalog.json",
    ];
  }

  function absImage(path) {
    if (!path) return "";
    if (/^https?:\/\//i.test(path) || path.startsWith("assets/")) return path;
    if (path.startsWith("/images/")) {
      // Prefer scheme images when available; else ignore (lite uses assets/)
      if (inDeepDesign() && !location.pathname.includes("/dd-deep-design/")) {
        // rooted at dd-deep-design — parent /images not served
        return "";
      }
      if (location.pathname.includes("/dd-deep-design/")) return ".." + path;
      return path;
    }
    if (path.startsWith("/")) {
      if (location.pathname.includes("/dd-deep-design/")) return ".." + path;
      return path;
    }
    return path;
  }

  async function fetchCatalogMap() {
    for (const url of catalogCandidates()) {
      try {
        const res = await fetch(url + "?t=scheme-quote", { cache: "no-cache" });
        if (!res.ok) continue;
        const data = await res.json();
        const map = Object.create(null);
        (data.products || []).forEach((p) => {
          if (p && p.id) map[p.id] = p;
        });
        if (Object.keys(map).length) return map;
      } catch (_) {
        /* try next */
      }
    }
    return { ...LITE };
  }

  async function loadCatalog() {
    if (catalogById) return catalogById;
    if (!catalogPromise) {
      catalogPromise = fetchCatalogMap().then((map) => {
        // Merge lite so missing scheme images still have local thumbs
        catalogById = { ...LITE, ...map };
        return catalogById;
      });
    }
    return catalogPromise;
  }

  function resolveCatalogId(line, widthMm) {
    const key = line.key || line.name;
    const mapper = ITEM_TO_CATALOG[key] || ITEM_TO_CATALOG[line.name];
    if (!mapper) return null;
    return typeof mapper === "function" ? mapper(widthMm) : mapper;
  }

  function masterImageForLine(line, widthMm) {
    const key = (line && (line.key || line.name)) || "";
    if (key === "Mini" || key === "Shed/Mini") {
      return `assets/images/products/suoer/mini-${nearestWidth(widthMm)}.png`;
    }
    if (key === "Standard" || key === "Shed/Standard") {
      return ELEV(nearestWidth(widthMm));
    }
    return MASTER_BY_ITEM[key] || "";
  }

  function nearestWidth(widthMm) {
    const w = Number(widthMm) || 3200;
    if (w <= 2200) return 2200;
    if (w <= 2900) return 2900;
    if (w <= 3200) return 3200;
    return 3500;
  }

  function productImage(p, line, widthMm) {
    const fromMaster = masterImageForLine(line, widthMm);
    if (fromMaster) return fromMaster;
    if (!p) return "";
    // Prefer lite (master-backed) over remote scheme catalog paths
    const lite = LITE[p.id];
    if (lite && lite.image) return lite.image;
    return absImage(p.image || p.imageLocal || "") || "";
  }

  function elevPath(widthMm) {
    return ELEV(widthMm || 3200);
  }

  function moneyUsd(n) {
    if (n == null || Number.isNaN(n)) return "—";
    return (
      "$" +
      Number(n).toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
    );
  }

  async function renderCardsHtml(lines, opts = {}) {
    const map = await loadCatalog();
    const widthMm = opts.widthMm || 3200;
    const lang = opts.lang || "cn";

    const cards = lines
      .map((line, i) => {
        const catId = resolveCatalogId(line, widthMm);
        const p = (catId && map[catId]) || (catId && LITE[catId]) || null;
        const title =
          lang === "cn"
            ? line.nameCn || line.name
            : line.name || (p && p.name) || "";
        const img = productImage(p, line, widthMm) || elevPath(widthMm);
        const spec = line.dims || "—";
        const media = img
          ? `<div class="quote-card-media"><img src="${img}" alt="${title}" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.quote-card-media').classList.add('quote-card-media--emoji');this.remove()" /></div>`
          : `<div class="quote-card-media quote-card-media--emoji"><span class="ic-emoji">📦</span></div>`;

        return `<div class="quote-line-card" data-catalog-id="${catId || ""}" data-line-key="${line.key || line.name || i}">
          <div class="quote-card-media-wrap">${media}</div>
          <div class="quote-card-body">
            <div class="quote-cart-row quote-cart-row-title">
              <div class="quote-cart-cell">
                <span class="quote-cart-title">${i + 1}. ${title}</span>
              </div>
              <div class="quote-cart-cell quote-cart-cell-right">
                <span class="quote-cart-qty-plain">×${line.qty || 1}</span>
              </div>
            </div>
            <div class="quote-cart-row quote-cart-row-spec">
              <div class="quote-cart-cell">
                <span class="quote-cart-lbl">${lang === "cn" ? "规格" : "Spec"}</span>
                <span class="quote-cart-spec-val">${spec}</span>
              </div>
              <div class="quote-cart-cell quote-cart-cell-right">
                <span class="quote-cart-lbl">${lang === "cn" ? "单位" : "Unit"}</span>
                <span class="quote-cart-unit">EA</span>
              </div>
            </div>
            <div class="quote-cart-row quote-cart-row-mat">
              <div class="quote-cart-cell">
                <span class="quote-cart-lbl">${lang === "cn" ? "目录" : "Catalog"}</span>
                <span class="quote-cart-mat-val">${catId || "—"}</span>
              </div>
            </div>
            <div class="quote-cart-row quote-cart-row-price">
              <div class="quote-cart-cell">
                <span class="quote-cart-lbl">${lang === "cn" ? "单价" : "Price"}</span>
                <span class="quote-cart-unit-price">${moneyUsd(line.unitUsd)}</span>
              </div>
            </div>
            <div class="quote-cart-row quote-cart-row-fav">
              <div class="quote-cart-cell"></div>
              <div class="quote-cart-cell quote-cart-cell-right">
                <span class="quote-cart-total-inline">${moneyUsd(line.lineSellUsd)}</span>
              </div>
            </div>
          </div>
        </div>`;
      })
      .join("");

    return `<div class="quote-list-wrap"><div class="quote-card-stack">${cards}</div></div>`;
  }

  function elevBannerHtml(widthMm) {
    const src = elevPath(widthMm);
    return `<div class="quote-elev-banner"><img src="${src}" alt="Ultra ${widthMm} elevation" loading="lazy" /></div>`;
  }

  return {
    loadCatalog,
    resolveCatalogId,
    productImage,
    renderCardsHtml,
    elevBannerHtml,
    elevPath,
    ITEM_TO_CATALOG,
  };
})();

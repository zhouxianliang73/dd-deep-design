/**
 * Cost control engine — margin ladder + owner quote.
 * Formula: sellUsd = costUsd / (1 - marginRate)
 * Optional flatExwUsd overrides ladder for packaging etc.
 */
window.DDCostEngine = (() => {
  const KEY = "dd-cost-master-v2"; // bump: Wooden Box back to margin ladder

  async function load() {
    const local = localStorage.getItem(KEY);
    if (local) {
      try {
        return JSON.parse(local);
      } catch (_) {
        /* fall through */
      }
    }
    const res = await fetch("assets/js/cost-master.json");
    if (!res.ok) throw new Error("cost-master.json missing");
    const data = await res.json();
    localStorage.setItem(KEY, JSON.stringify(data));
    return data;
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function resetToBundled() {
    localStorage.removeItem(KEY);
  }

  function costUsd(item, fx) {
    if (item.costCny == null || !fx) return null;
    return item.costCny / fx;
  }

  function tierPrice(item, fx, rate) {
    if (item.flatExwUsd != null && item.flatExwUsd !== "") {
      return Number(item.flatExwUsd);
    }
    const usd = costUsd(item, fx);
    if (usd == null) return null;
    const factor = 1 - rate;
    if (factor <= 0) return null;
    return usd / factor;
  }

  function sizeById(data, sizeId) {
    return data.sizes.find((s) => s.id === sizeId) || data.sizes[0];
  }

  function quoteLines(data, { sizeId, selectedKeys, marginRate, qty = 1 }) {
    const size = sizeById(data, sizeId);
    const fx = data.meta.fx;
    const keySet = new Set(selectedKeys);
    const lines = [];
    let costCny = 0;
    let sellUsd = 0;

    size.items.forEach((item) => {
      const on = item.mandatory || keySet.has(item.key);
      if (!on) return;
      const cUsd = costUsd(item, fx);
      const price = tierPrice(item, fx, marginRate);
      const lineCost = (item.costCny || 0) * qty;
      const lineSell = (price || 0) * qty;
      costCny += lineCost;
      sellUsd += lineSell;
      lines.push({
        key: item.key,
        name: item.name,
        nameCn: item.nameCn || item.name,
        dims: item.dims,
        selection: item.selection,
        costCny: item.costCny,
        costUsd: cUsd,
        unitUsd: price,
        qty,
        lineCostCny: lineCost,
        lineSellUsd: lineSell,
        flat: item.flatExwUsd != null,
      });
    });

    const sellCny = sellUsd * fx;
    const margin = sellCny > 0 ? 1 - costCny / sellCny : 0;
    return {
      size,
      fx,
      marginRate,
      qty,
      lines,
      totals: {
        costCny,
        costUsd: costCny / fx,
        sellUsd,
        sellCny,
        margin,
        belowMin: margin < (data.meta.minMargin || 0.15),
      },
    };
  }

  function defaultSelection(size) {
    return size.items.filter((i) => i.defaultOn || i.mandatory).map((i) => i.key);
  }

  function money(n, cur) {
    if (n == null || Number.isNaN(n)) return "—";
    if (cur === "CNY") return "¥" + Math.round(n).toLocaleString("zh-CN");
    return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }

  function encodeOwnerState(state) {
    return btoa(unescape(encodeURIComponent(JSON.stringify(state))));
  }

  function decodeOwnerState(hash) {
    try {
      return JSON.parse(decodeURIComponent(escape(atob(hash))));
    } catch (_) {
      return null;
    }
  }

  return {
    load,
    save,
    resetToBundled,
    costUsd,
    tierPrice,
    quoteLines,
    defaultSelection,
    sizeById,
    money,
    encodeOwnerState,
    decodeOwnerState,
  };
})();

/* Customer accessory pick share pack — outdoor kitchen classic configurator */
(function (global) {
  var KIND = 'outdoor-customer-pick';

  function encodePack(pack) {
    try {
      return btoa(unescape(encodeURIComponent(JSON.stringify(pack))));
    } catch (_) {
      return '';
    }
  }

  function decodePack(hash) {
    try {
      var raw = String(hash || '').replace(/^#/, '').trim();
      if (!raw) return null;
      // support ?pick= / #pick= / plain hash
      if (raw.indexOf('pickreturn=') === 0) raw = raw.slice(11);
      if (raw.indexOf('pick=') === 0) raw = raw.slice(5);
      if (raw.indexOf('return=') === 0) raw = raw.slice(7);
      if (raw.indexOf('owner=') === 0) raw = raw.slice(6);
      var pack = JSON.parse(decodeURIComponent(escape(atob(raw))));
      if (!pack || pack.kind !== KIND) return null;
      return pack;
    } catch (_) {
      return null;
    }
  }

  function qtyOf(pack, key) {
    var q = Number(pack.itemQty && pack.itemQty[key]);
    if (!isFinite(q) || q < 1) return 1;
    return Math.min(24, Math.floor(q));
  }

  function lineFromKey(pack, key, role) {
    var OQ = global.OutdoorQuote;
    var m = (OQ && OQ.meta(key)) || { en: key, cn: key, dim: '—', icon: '📦' };
    var usd = OQ ? OQ.listUsd(key, pack.width, pack.qtyTier || '30%') : 0;
    var fx = OQ ? OQ.fx() : 6.7;
    var qty = qtyOf(pack, key);
    var unitUsd = Math.round(usd);
    var unitCny = Math.round(unitUsd * fx);
    return {
      catalogId: 'ok-' + key,
      key: key,
      role: role || 'opt',
      name: m.cn || m.en || key,
      nameEn: m.en || m.cn || key,
      emoji: m.icon || '📦',
      spec: m.dim || '—',
      material: m.detailCn || m.detailEn || '',
      qty: qty,
      unit: '件',
      unitPrice: unitCny,
      unitUsd: unitUsd,
      image: m.img ? 'assets/images/products/from-master/items/' + m.img + '.png' : ''
    };
  }

  /** Build mini-program project selection payload from a pick pack */
  function buildMpPayload(pack) {
    if (!pack) return null;
    var doorLabel = pack.doorType === 'wm' ? '卷帘' : '翻盖';
    var keysStd = pack.stdKeys || [];
    var keysOpt = pack.selected || [];
    var selection = [];
    keysStd.forEach(function (k) {
      selection.push(lineFromKey(pack, k, 'std'));
    });
    keysOpt.forEach(function (k) {
      if (keysStd.indexOf(k) !== -1) return;
      selection.push(lineFromKey(pack, k, 'opt'));
    });
    var totalCny = selection.reduce(function (s, line) {
      return s + (line.unitPrice || 0) * (line.qty || 1);
    }, 0);
    return {
      channel: 'outdoor-kitchen',
      clientName: '户外厨房 ' + doorLabel + ' ' + pack.width + 'mm',
      brief:
        '户外厨房报价导入 · ' +
        doorLabel +
        ' · ' +
        pack.width +
        'mm · 档 ' +
        (pack.qtyTier || '30%') +
        ' · ' +
        (pack.createdAt || ''),
      selection: selection,
      meta: {
        source: 'dd-deep-design',
        kind: KIND,
        doorType: pack.doorType,
        width: pack.width,
        qtyTier: pack.qtyTier || '30%',
        fx: (global.OutdoorQuote && global.OutdoorQuote.fx()) || 6.7,
        totalCny: totalCny,
        role: pack.role || 'outbound',
        importedAt: new Date().toISOString()
      }
    };
  }

  function attachMp(pack) {
    if (!pack) return null;
    pack.mp = buildMpPayload(pack);
    return pack;
  }

  /** Clipboard token for mini-program import */
  function mpImportText(pack) {
    var withMp = attachMp(pack);
    if (!withMp || !withMp.mp) return '';
    var slim = {
      v: 1,
      kind: KIND,
      role: withMp.role || 'return',
      doorType: withMp.doorType,
      width: withMp.width,
      qtyTier: withMp.qtyTier,
      stdKeys: withMp.stdKeys,
      selected: withMp.selected,
      itemQty: withMp.itemQty,
      createdAt: withMp.createdAt,
      mp: withMp.mp
    };
    return 'DD-OUTDOOR-MP:1:' + encodePack(slim);
  }

  function buildOutboundPack(opts) {
    opts = opts || {};
    var width = Number(opts.width) || 3200;
    var doorType = opts.doorType === 'wm' ? 'wm' : 'xt';
    var qtyTier = opts.qtyTier || '30%';
    var OQ = global.OutdoorQuote;
    if (!OQ) return null;

    var stdKeys = (opts.stdKeys || OQ.stdKeys(width, doorType) || []).slice();
    var optionals = OQ.optionalKeys(width, doorType) || [];
    var offerKeys = optionals
      .filter(function (o) {
        return o && o.key && !o.incompatible;
      })
      .map(function (o) {
        return o.key;
      });

    var suggested = [];
    var acc = opts.accessories || {};
    Object.keys(acc).forEach(function (k) {
      if (acc[k] && offerKeys.indexOf(k) !== -1) suggested.push(k);
    });

    return attachMp({
      v: 1,
      kind: KIND,
      role: 'outbound',
      doorType: doorType,
      width: width,
      qtyTier: qtyTier,
      stdKeys: stdKeys,
      itemQty: opts.itemQty || {},
      offerKeys: offerKeys,
      selected: suggested.slice(),
      notRecommended: optionals
        .filter(function (o) {
          return o.notRecommended;
        })
        .map(function (o) {
          return o.key;
        }),
      createdAt: new Date().toISOString().slice(0, 10),
      note: opts.note || ''
    });
  }

  function buildReturnPack(outbound, selectedKeys, itemQty) {
    if (!outbound) return null;
    return attachMp({
      v: 1,
      kind: KIND,
      role: 'return',
      doorType: outbound.doorType,
      width: outbound.width,
      qtyTier: outbound.qtyTier || '30%',
      stdKeys: (outbound.stdKeys || []).slice(),
      itemQty: itemQty || outbound.itemQty || {},
      offerKeys: (outbound.offerKeys || []).slice(),
      selected: (selectedKeys || []).slice(),
      notRecommended: (outbound.notRecommended || []).slice(),
      createdAt: new Date().toISOString().slice(0, 10),
      sourceDate: outbound.createdAt || '',
      note: outbound.note || ''
    });
  }

  function channelQuery() {
    var ch =
      (global.OutdoorQuote && OutdoorQuote.getChannel && OutdoorQuote.getChannel()) ||
      global.DD_QUOTE_CHANNEL ||
      'internal';
    return ch === 'mp' ? '?channel=mp' : '';
  }

  function homePage() {
    var ch =
      (global.OutdoorQuote && OutdoorQuote.getChannel && OutdoorQuote.getChannel()) ||
      global.DD_QUOTE_CHANNEL ||
      'internal';
    return ch === 'mp' ? 'quote-mp.html' : 'classic.html';
  }

  function pickUrl(pack, page) {
    var hash = encodePack(pack);
    if (!hash) return '';
    var base = page || 'customer-pick.html';
    var prefix = pack.role === 'return' ? 'return=' : 'pick=';
    var q = channelQuery();
    try {
      return new URL(base + q + '#' + prefix + hash, location.href).href;
    } catch (_) {
      return base + q + '#' + prefix + hash;
    }
  }

  function classicReturnUrl(pack) {
    var hash = encodePack(pack);
    if (!hash) return '';
    var page = homePage();
    try {
      return new URL(page + '#pickreturn=' + hash, location.href).href;
    } catch (_) {
      return page + '#pickreturn=' + hash;
    }
  }

  /** Owner-facing quote page (read-only) — same pack, importable to mini-program */
  function ownerUrl(pack) {
    var hash = encodePack(pack);
    if (!hash) return '';
    var q = channelQuery();
    try {
      return new URL('owner-outdoor.html' + q + '#owner=' + hash, location.href).href;
    } catch (_) {
      return 'owner-outdoor.html' + q + '#owner=' + hash;
    }
  }

  function copyText(text) {
    if (!text) return Promise.reject(new Error('empty'));
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        resolve();
      } catch (e) {
        reject(e);
      } finally {
        document.body.removeChild(ta);
      }
    });
  }

  global.CustomerPick = {
    KIND: KIND,
    encodePack: encodePack,
    decodePack: decodePack,
    buildOutboundPack: buildOutboundPack,
    buildReturnPack: buildReturnPack,
    buildMpPayload: buildMpPayload,
    attachMp: attachMp,
    mpImportText: mpImportText,
    pickUrl: pickUrl,
    classicReturnUrl: classicReturnUrl,
    ownerUrl: ownerUrl,
    copyText: copyText
  };
})(window);

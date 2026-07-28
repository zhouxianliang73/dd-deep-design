/* H5 projects store — seed JSON + localStorage saved configs (scheme-center-like) */
(function (global) {
  const KEY = 'dd_deep_projects_v1';

  function seedList() {
    const data = global.DD_PROJECTS_SEED;
    return (data && Array.isArray(data.projects) ? data.projects : []).map((p) =>
      Object.assign({}, p, { source: p.source || 'seed' })
    );
  }

  function readSaved() {
    try {
      const raw = localStorage.getItem(KEY);
      const list = raw ? JSON.parse(raw) : [];
      return Array.isArray(list) ? list : [];
    } catch (_) {
      return [];
    }
  }

  function writeSaved(list) {
    localStorage.setItem(KEY, JSON.stringify(list));
  }

  function list() {
    const saved = readSaved().map((p) => Object.assign({}, p, { source: 'saved' }));
    const seed = seedList();
    const byId = new Map();
    seed.forEach((p) => byId.set(p.id, p));
    saved.forEach((p) => byId.set(p.id, p));
    return Array.from(byId.values()).sort((a, b) => {
      const ta = Date.parse(a.updatedAt || a.createdAt || 0) || 0;
      const tb = Date.parse(b.updatedAt || b.createdAt || 0) || 0;
      if (tb !== ta) return tb - ta;
      if (a.source === 'saved' && b.source !== 'saved') return -1;
      if (b.source === 'saved' && a.source !== 'saved') return 1;
      return String(a.name || '').localeCompare(String(b.name || ''));
    });
  }

  function get(id) {
    return list().find((p) => p.id === id) || null;
  }

  function save(project) {
    if (!project || !project.id) throw new Error('project.id required');
    const now = new Date().toISOString();
    const next = Object.assign({}, project, {
      source: 'saved',
      updatedAt: now,
      createdAt: project.createdAt || now
    });
    const saved = readSaved().filter((p) => p.id !== next.id);
    saved.unshift(next);
    writeSaved(saved);
    return next;
  }

  function remove(id) {
    writeSaved(readSaved().filter((p) => p.id !== id));
  }

  function uid(prefix) {
    return (prefix || 'proj') + '-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  /** Build a saveable project from current outdoor quote UI state */
  function fromQuoteSnapshot(snap) {
    const width = Number(snap.width) || 2200;
    const door = snap.doorType === 'wm' ? 'wm' : 'xt';
    const doorLabel =
      door === 'wm'
        ? { cn: '卷帘门', en: 'Rolling Door', fr: 'Rideau roulant' }
        : { cn: '翻盖', en: 'Top-Flip', fr: 'Abattant' };
    const name =
      snap.name ||
      ('户外厨房 ' + doorLabel.cn + ' ' + width + 'mm');
    const nameEn =
      snap.nameEn ||
      ('Outdoor kitchen ' + doorLabel.en + ' ' + width + 'mm');
    return {
      id: snap.id || uid('ok'),
      slug: snap.slug || ('ok-' + door + '-' + width + '-' + Date.now().toString(36)),
      name: name,
      nameEn: nameEn,
      nameFr: snap.nameFr || ('Cuisine d’extérieur ' + doorLabel.fr + ' ' + width + 'mm'),
      statusLabel: '已保存',
      statusLabelEn: 'Saved',
      cover: snap.cover || '',
      summary: snap.summary || (doorLabel.cn + ' · ' + width + 'mm · ' + (snap.tier || '')),
      summaryEn: snap.summaryEn || (doorLabel.en + ' · ' + width + 'mm · ' + (snap.tier || '')),
      region: snap.region || '',
      doorType: door,
      width: width,
      tier: snap.tier || '',
      channel: snap.channel || 'internal',
      materials: snap.materials || null,
      totalCny: snap.totalCny || 0,
      totalUsd: snap.totalUsd || 0,
      pack: snap.pack || null,
      ownerUrl: snap.ownerUrl || '',
      createdAt: snap.createdAt,
      updatedAt: snap.updatedAt
    };
  }

  global.DDProjects = {
    KEY: KEY,
    list: list,
    get: get,
    save: save,
    remove: remove,
    uid: uid,
    fromQuoteSnapshot: fromQuoteSnapshot,
    readSaved: readSaved
  };
})(window);

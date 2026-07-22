/* DD Deep Design — Custom Design quote flow
 * Step: empty frame (door + width) → finish → review
 * Interior module checklist will be organized separately later.
 */
(() => {
  const C = window.DDCatalog;
  const P = window.DDPricing;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /** shed custom: 0 frame, 1 finish, 2 review */
  const state = {
    lang: localStorage.getItem('dd-lang') || 'cn',
    market: localStorage.getItem('dd-market') || 'export',
    path: 'shed',
    step: 0,
    frameId: 'F2800',
    doorType: 'xt',
    packageId: 'empty',
    selected: new Set(),
    finishId: 'CK01G-Y',
    hotSetId: 'SET-MK-US-8',
    grillOpt: 'mk04',
    fridgeOpt: 'trf',
    presetId: null,
  };

  const txt = {
    heroTitle: { en: 'Custom Design', cn: '个性定制' },
    heroDesc: {
      en: 'Start with an empty frame — same sizes as the classic site. Interior checklist comes next (organized separately).',
      cn: '先选空框架（门型与尺寸同经典官网）。内部配置清单稍后另整理。',
    },
    kicker: { en: 'Custom Design', cn: '个性定制' },
    stepFrame: { en: '1 Frame', cn: '1 框架' },
    stepFinish: { en: '2 Finish', cn: '2 饰面' },
    stepReview: { en: '3 Review', cn: '3 确认' },
    pickFrame: { en: 'Choose empty frame', cn: '选择空框架' },
    pickFrameHint: {
      en: 'Empty shell only — depth 900 × height 2250 mm. Pick door type and width (same as classic).',
      cn: '仅空框架 — 深 900 × 高 2250 mm。门型与宽度选择方式与经典官网一致。',
    },
    emptyNote: {
      en: 'Interior modules checklist will be added later — quote is shell + finish for now.',
      cn: '内部模块清单稍后整理 — 当前报价按空框架 + 饰面估算。',
    },
    pickDoor: { en: 'Door style', cn: '选择门型' },
    pickWidth: { en: 'Frame width', cn: '框架宽度' },
    continueNext: { en: 'Continue', cn: '继续' },
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
    elevView: { en: 'Elevation', cn: '立面图' },
    productView: { en: 'Product view', cn: '效果图' },
    hoverElev: { en: 'Hover a size to preview elevation', cn: '悬停尺寸可预览立面' },
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
    state.packageId = pkgId || 'empty';
    state.selected = P.resolvePackageModules(frame(), state.packageId, C);
  }

  function useEmptyFrame() {
    applyPackage('empty');
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

  /* ---------- render ---------- */

  function renderSteps() {
    const el = $('#stepPills');
    if (!el) return;
    const steps = [
      { n: 0, key: 'stepFrame' },
      { n: 1, key: 'stepFinish' },
      { n: 2, key: 'stepReview' },
    ];
    el.innerHTML = steps
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
    const doorName = L(C.doorTypes.find((d) => d.id === state.doorType)?.name);

    if (state.step === 0) {
      setStage(
        f.image.elev,
        `${t('pickFrame')} · ${L(f.label)}`,
        `${f.width} × ${f.depth} × ${f.height} mm · ${doorName}`,
        state.lang === 'cn' ? '空框架' : 'Empty',
        t('elevView')
      );
      return;
    }

    setStage(
      f.image[state.doorType],
      `${L(f.label)} · ${doorName}`,
      `${f.width} × ${f.depth} × ${f.height} mm`,
      state.lang === 'cn' ? '空框架' : 'Empty',
      t('productView')
    );
  }

  function renderFrameStep() {
    const f = frame();
    const doors = C.doorTypes
      .map((d) => {
        const thumb = f.image[d.id];
        return `
          <button type="button" class="q-option q-option-door ${state.doorType === d.id ? 'active' : ''}" data-door="${d.id}">
            <img class="q-door-thumb" src="${thumb}" alt="${L(d.name)}" />
            <span>
              <div class="title">${L(d.name)}</div>
              <div class="sub">${L(d.desc)}</div>
            </span>
          </button>`;
      })
      .join('');

    const sizes = C.frames
      .map((fr) => {
        const q = P.quote({
          path: 'shed',
          market: state.market,
          frameId: fr.id,
          doorType: state.doorType,
          packageId: 'empty',
          selected: new Set(),
          finishId: state.finishId,
          lang: state.lang,
        });
        const active = state.frameId === fr.id;
        return `
          <button type="button" class="q-bundle ${active ? 'highlight' : ''}" data-frame="${fr.id}">
            ${fr.image.elev ? `<img class="q-bundle-elev" src="${fr.image.elev}" alt="${L(fr.label)}" />` : ''}
            <div class="q-bundle-src">${L(fr.label)}${fr.badge ? ' · ' + L(fr.badge) : ''}</div>
            <div class="q-bundle-name">${fr.width} mm</div>
            <div class="q-bundle-sub">${fr.width} × ${fr.depth} × ${fr.height} mm</div>
            <div class="q-bundle-price">${money(q.total, q.currency)}</div>
          </button>`;
      })
      .join('');

    return `
      <div class="q-block">
        <h2>${t('pickFrame')}</h2>
        <p class="hint">${t('pickFrameHint')}</p>
        <p class="hint" style="margin-top:6px">${t('emptyNote')}</p>
        <div class="q-bundle-label">${t('pickDoor')}</div>
        <div class="q-options">${doors}</div>
        <div class="q-bundle-label" style="margin-top:18px">${t('pickWidth')}</div>
        <div class="q-bundle-grid" id="frameSizeGrid">${sizes}</div>
        <button type="button" class="q-btn q-btn-primary" data-nav="next" style="margin-top:16px;width:100%">${t('continueNext')}</button>
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
        <div class="q-nav-btns" style="margin-top:12px">
          <button type="button" class="q-btn q-btn-ghost" data-nav="back">${t('back')}</button>
          <button type="button" class="q-btn q-btn-primary" data-nav="next">${t('continueNext')}</button>
        </div>
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
    if (state.step === 0) panel.innerHTML = renderFrameStep();
    else if (state.step === 1) panel.innerHTML = renderFinishStep();
    else panel.innerHTML = renderReviewStep();
    bindPanel();
  }

  function bindPanel() {
    $$('[data-frame]').forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        if (btn.dataset.frame) previewFrame(btn.dataset.frame, state.doorType);
      });
      btn.addEventListener('focus', () => {
        if (btn.dataset.frame) previewFrame(btn.dataset.frame, state.doorType);
      });
      btn.addEventListener('click', () => {
        state.frameId = btn.dataset.frame;
        useEmptyFrame();
        renderBar();
        renderPanel();
        renderStage();
      });
    });

    $('#frameSizeGrid')?.addEventListener('mouseleave', () => {
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
          state.lang === 'cn' ? '空框架' : 'Empty',
          t('productView')
        );
      });
      btn.addEventListener('click', () => {
        state.doorType = btn.dataset.door;
        useEmptyFrame();
        renderBar();
        renderPanel();
        renderStage();
      });
    });

    $$('[data-finish]').forEach((btn) =>
      btn.addEventListener('click', () => {
        state.finishId = btn.dataset.finish;
        renderBar();
        renderPanel();
      })
    );

    $$('[data-nav]').forEach((btn) =>
      btn.addEventListener('click', () => {
        const a = btn.dataset.nav;
        if (a === 'back') go(Math.max(0, state.step - 1));
        if (a === 'next') go(Math.min(2, state.step + 1));
        if (a === 'restart') {
          useEmptyFrame();
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
    const f = frame();
    $('#barModel').textContent =
      state.step === 0
        ? `${t('pickFrame')} · ${f.width}mm`
        : `${modelCode()} · ${t('fob')}`;
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
    useEmptyFrame();

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

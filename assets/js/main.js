/* ============================================
   DD Deep Design — Main Scripts + Configurator
   ============================================ */

// =============================================
// TRANSLATIONS
// =============================================
const i18n = {
    'nav.about':      { en: 'About',          cn: '关于我们' },
    'nav.brand':      { en: 'Brand',          cn: '品牌' },
    'nav.configure':  { en: 'Configure',       cn: '配置方案' },
    'nav.quote':      { en: 'Quote',           cn: '业主报价' },
    'nav.margin':     { en: 'Margin',          cn: '利润阶梯' },
    'nav.specs':      { en: 'Specs',            cn: '规格' },
    'nav.hot':        { en: 'Hot Sellers',     cn: '热卖款' },
    'nav.projects':   { en: 'Projects',        cn: '项目案例' },
    'nav.contact':    { en: 'Contact',         cn: '联系我们' },
    'hero.badge':     { en: 'Premium Outdoor Living', cn: '高端户外生活' },
    'hero.title':     { en: 'Design <em>Deeper</em>.<br>Build <em>Better</em>.', cn: '<em>设计</em>更深<br><em>品质</em>更高' },
    'hero.desc':      { en: 'Engineered outdoor kitchen cabinets and BBQ stations — crafted from premium zinc-aluminum-magnesium alloy and stainless steel. Built to withstand the elements. Designed to impress.', cn: '工程级户外橱柜与烧烤站——甄选锌铝镁合金与不锈钢精制而成。无惧风雨，只为惊艳。' },
    'hero.cta1':      { en: 'Explore Products',  cn: '浏览产品' },
    'hero.cta2':      { en: 'Get a Quote',       cn: '获取报价' },
    'hero.cta3':      { en: 'View Specs →',        cn: '查看规格 →' },
    'hero.stat1':     { en: 'Projects Delivered', cn: '已完成项目' },
    'hero.stat2':     { en: 'Countries Served',   cn: '服务国家' },
    'hero.stat3':     { en: 'Export Experience',  cn: '出口经验' },
    'about.label':    { en: 'About Us',          cn: '关于我们' },
    'about.title':    { en: 'Your Partner in <em>Premium</em> Outdoor Kitchens', cn: '您的<em>高端</em>户外厨房合作伙伴' },
    'about.p1':       { en: 'DD Deep Design (深设服务) specializes in the design, manufacture, and global export of high-end outdoor kitchen cabinets. We partner with top Chinese manufacturers like THOR (索而智能家居) to deliver products that marry premium materials with precision engineering.', cn: '深设服务（DD Deep Design）专注于高端户外橱柜的设计、制造与全球出口。我们携手索而智能家居等顶级中国制造商，以高端材料与精密工艺打造卓越产品。' },
    'about.p2':       { en: 'Every cabinet is built from corrosion-resistant materials — zinc-aluminum-magnesium alloy, galvanized steel, and 304 stainless steel — ensuring your outdoor kitchen stands strong against sun, rain, and salt air, whether in Dubai, Los Angeles, or Barcelona.', cn: '每一组柜体均采用耐腐蚀材料——锌铝镁合金、镀锌钢与304不锈钢——确保您的户外厨房在迪拜、洛杉矶或巴塞罗那的海风烈日下依然坚固如新。' },
    'about.f1a':      { en: 'Fast Turnaround',   cn: '快速交期' },
    'about.f1b':      { en: '15–30 day production', cn: '15–30天生产周期' },
    'about.f2a':      { en: 'Global Shipping',   cn: '全球物流' },
    'about.f2b':      { en: 'Sea & air freight worldwide', cn: '海运空运覆盖全球' },
    'about.f3a':      { en: 'Fully Customizable',cn: '全面定制' },
    'about.f3b':      { en: 'Materials, colors & layout', cn: '材料、颜色与布局自由搭配' },
    'about.f4a':      { en: 'Turnkey Service',   cn: '一站式服务' },
    'about.f4b':      { en: 'Design → Produce → Install', cn: '设计 → 生产 → 安装' },
    'config.label':   { en: 'Product Configurator', cn: '产品配置器' },
    'config.title':   { en: 'Build Your <em>Outdoor Kitchen</em>', cn: '打造您的<em>户外厨房</em>' },
    'config.desc':    { en: 'Style → size → equipment → color — see the price instantly.', cn: '先定款式，再定尺寸，再定设备，最后定颜色——价格即时可见。' },
    'config.openCustom': { en: 'Custom Design', cn: '个性定制' },
    'config.openMargin': { en: 'Margin Ladder', cn: 'Margin Ladder' },
    'config.openCost': { en: 'Cost Control', cn: '成本控制' },
    'config.openOwnerShow': { en: 'Owner View', cn: '业主展示' },
    'config.openOwnerShow.copied': { en: 'Owner quote link copied — open to share / import to mini-program', cn: '业主报价链接已复制 — 可发给业主确认，页内可复制小程序导入码' },
    'config.openOwnerShow.fail': { en: 'Could not open owner view', cn: '无法打开业主展示' },
    'config.customerPick': { en: 'Send for customer pick', cn: '发给客户选配' },
    'config.customerPick.copied': { en: 'Customer pick link copied', cn: '客户选配链接已复制' },
    'config.customerPick.imported': { en: 'Customer picks imported', cn: '已导入客户选配' },
    'config.customerPick.fail': { en: 'Could not build link', cn: '无法生成链接' },
    'config.mpImport': { en: 'Copy mini-program import code', cn: '复制小程序导入码' },
    'config.mpImport.copied': { en: 'Import code copied — paste in mini-program Projects → Import outdoor quote', cn: '导入码已复制 — 到小程序「项目 → 导入户外报价」粘贴' },
    'config.mpImport.fail': { en: 'Could not build import code', cn: '无法生成导入码' },
    'config.langSwitch': { en: 'EN / 中文', cn: '中英切换' },
    'config.openOwnerQuote': { en: 'Owner Quote', cn: '业主报价' },
    'lib.title': { en: 'Product Library', cn: '产品库' },
    'lib.add': { en: 'Add from library', cn: '从产品库添加' },
    'lib.addHint': { en: 'Filter appliances, fridge, BBQ…', cn: '筛选电器、冰箱、烧烤等' },
    'lib.addBtn': { en: 'Add', cn: '添加' },
    'lib.added': { en: 'Added', cn: '已添加' },
    'lib.empty': { en: 'No products in this filter', cn: '该分类暂无产品' },
    'lib.fitOk': { en: 'Fits cabinet', cn: '可放入柜体' },
    'lib.fitNo': { en: 'May not fit', cn: '可能放不下' },
    'lib.fitWarn': { en: 'This item may not fit in the current cabinet cavity ({w} × 900 × 2250 mm). Add anyway?', cn: '该产品尺寸可能超出当前柜体内空（{w} × 900 × 2250 mm）。仍要添加吗？' },
    'lib.cabHint': { en: 'Cabinet cavity ref: {w} × 900 × 2250 mm — check before adding', cn: '柜体内空参考：{w} × 900 × 2250 mm — 添加前请确认能否放下' },
    'config.modeStandard': { en: 'Standard Package', cn: '标准套餐' },
    'config.step1.title': { en: 'Style → Size → Equipment → Color', cn: '款式 → 尺寸 → 设备 → 颜色' },
    'config.step1.desc':  { en: 'Pick style first, then width; equipment is on the right; colors come last.', cn: '先选款式，再选尺寸；右侧选设备，最后选颜色。' },
    'config.doorType': { en: 'Door Type', cn: '门型' },
    'config.style':    { en: 'Style', cn: '款式' },
    'config.styleSoon':{ en: 'TBD', cn: '待定' },
    'config.equipment':{ en: 'Equipment', cn: '设备配置' },
    'config.productView': { en: 'Product View', cn: '产品效果' },
    'config.topFlip':  { en: 'Top-Flip', cn: '翻盖' },
    'config.rolling':  { en: 'Rolling Door', cn: '卷帘门' },
    'config.mini':     { en: 'Mini', cn: '迷你款' },
    'config.width':    { en: 'Cabinet Width', cn: '柜体宽度' },
    'config.scrollHint': { en: '← Swipe / click / drag →', cn: '← 滑动 / 点击箭头 / 拖拽 →' },
    'config.elevation': { en: 'Elevation View', cn: '立面图' },
    'config.material': { en: 'Material:', cn: '材质：' },
    'config.matVal':   { en: 'Zinc-Aluminum-Magnesium Alloy + Galvanized Steel', cn: '锌铝镁合金 + 镀锌钢' },
    'config.fob':      { en: 'Internal · margin sell (print only)', cn: '内部报价 · 毛利价（仅打印外发）' },
    'config.exw':      { en: 'Internal Price', cn: '内部报价' },
    'config.exwMp':    { en: 'MP Price (cost × 2.5)', cn: '小程序价（成本×2.5）' },
    'config.fobMp':    { en: 'Mini-program list = cost × 2.5', cn: '小程序列表价 = 成本 × 2.5' },
    'config.tier30':   { en: '30% margin', cn: '30% 毛利' },
    'config.tier25':   { en: '25% margin', cn: '25% 毛利' },
    'config.tier20':   { en: '20% margin', cn: '20% 毛利' },
    'config.tier15m':  { en: '15% margin', cn: '15% 毛利' },
    'config.tier15':   { en: '25% margin', cn: '25% 毛利' },
    'config.tier620':  { en: '20% margin', cn: '20% 毛利' },
    'config.tier20p':  { en: '15% margin', cn: '15% 毛利' },
    'config.internalBanner': { en: 'INTERNAL ONLY — select margin, then Print / Save as JPEG. Do not share this link.', cn: '内部专用 — 选毛利后「打印/存为 JPEG」外发，勿转发本页链接。' },
    'config.mpBanner': { en: 'Mini-program price = cost × 2.5 (no other markup).', cn: '小程序通道：售价 = 成本 × 2.5（不加其他）。' },
    'config.tierLocked': { en: 'Qty tiers: admin only', cn: '货柜台数阶梯：仅管理员' },
    'config.tierUnlock': { en: 'Unlock tiers', cn: '解锁阶梯价' },
    'config.tierUnlocked': { en: 'Tier pricing unlocked', cn: '已解锁货柜阶梯价' },
    'config.tierPinPrompt': { en: 'Enter admin / approved PIN', cn: '请输入管理员或授权 PIN' },
    'config.tierPinBad': { en: 'Incorrect PIN', cn: 'PIN 不正确' },
    'config.optNotRec': { en: 'Not recommended for this length', cn: '本长度不推荐' },
    'config.optBlocked': { en: 'Not recommended for this length', cn: '本长度不推荐' },
    'config.total.note': { en: '* Internal: prices from master right-table margins. Export via Print → JPEG only.', cn: '* 内部通道：价格取自总表右侧毛利列。请用打印导出 JPEG，勿发链接。' },
    'config.total.noteMp': { en: '* Mini-program: sell = USD cost × 2.5. Shipping quoted separately.', cn: '* 小程序通道：售价 = 美元成本 × 2.5。运费另计。' },
    'config.dlSpec':   { en: '↓ Download Spec Sheet', cn: '↓ 下载规格书' },
    'config.step2.title': { en: 'Configure Interior Components', cn: '配置内部组件' },
    'config.step2.desc':  { en: 'Standard configuration for this size is pre-selected. Adjust as needed.', cn: '该尺寸标准配置已预选，可按需调整。' },
    'config.step3.title': { en: 'Add Accessories', cn: '添加配件' },
    'config.step3.desc':  { en: 'Enhance your outdoor kitchen with optional extras.', cn: '用可选配件升级您的户外厨房。' },
    'config.accExpand':   { en: 'Show more ▾', cn: '展开更多 ▾' },
    'config.accCollapse': { en: 'Show less ▴', cn: '收起 ▴' },
    'config.step4.title': { en: 'Select Colors', cn: '选择颜色' },
    'config.step4.desc':  { en: 'Choose shell and door colors — codes appear in your quote.', cn: '选择柜体与门板颜色——色号将出现在报价中。' },
    'config.bodyColor':   { en: 'Shell Color', cn: '外框颜色' },
    'config.shellPreview':{ en: 'Shell Preview', cn: '外框预览' },
    'config.doorPreview': { en: 'Door Panel Preview', cn: '门板预览' },
    'config.colorPreview':{ en: 'Color Preview', cn: '颜色预览' },
    'config.doorColor':   { en: 'Door Panel Color', cn: '门板颜色' },
    'config.bodySelected':{ en: 'Shell: ', cn: '外框：' },
    'config.doorSelected':{ en: 'Door: ', cn: '门板：' },
    'config.doorMatte':    { en: 'Solid Color', cn: '纯色' },
    'config.doorTexture':  { en: 'Texture Finish', cn: '纹理饰面' },
    'config.door.black':   { en: 'Matte Black', cn: '哑光黑' },
    'config.door.white':   { en: 'Matte White', cn: '哑光白' },
    'config.door.blue':    { en: 'Dusty Blue', cn: '雾蓝' },
    'config.door.green':   { en: 'Forest Green', cn: '森绿' },
    'config.door.walnut':  { en: 'Dark Walnut', cn: '深胡桃木纹' },
    'config.door.charcoal':{ en: 'Charcoal Ash', cn: '炭黑木纹' },
    'config.door.oak':     { en: 'Natural Oak', cn: '原橡木纹' },
    'config.door.ash':     { en: 'Light Ash', cn: '浅白蜡木纹' },
    'config.xuanli':       { en: 'Xuanli Series', cn: '玄丽系列' },
    'config.xuanliSub':    { en: 'Cabinet body + door • Standard', cn: '柜体+门板 • 标准' },
    'config.yunwen':       { en: 'Yunwen Series', cn: '云纹系列' },
    'config.yunwenSub':    { en: 'Door panel only • Wood grain', cn: '仅门板 • 木纹效果' },
    'config.zhenwen':      { en: 'Zhenwen Series', cn: '臻纹系列' },
    'config.zhenwenSub':   { en: 'Door panel only • Premium wood', cn: '仅门板 • 高端木纹' },
    'config.ss':           { en: 'Stainless Steel', cn: '不锈钢' },
    'config.ssSub':        { en: 'Door panel only • Premium', cn: '仅门板 • 高端' },
    'config.matteGroup':   { en: 'Matte Finish', cn: '哑光饰面' },
    'config.sandGroup':    { en: 'Sand Texture Finish', cn: '砂纹饰面' },
    'config.fineGroup':    { en: 'Fine Sand / Stone Texture', cn: '细砂 / 石纹' },
    'config.glossyGroup':  { en: 'Glossy / Special Finishes', cn: '亮光 / 特殊饰面' },
    'config.woodGroup':    { en: 'Wood Grain — Door Panel Only', cn: '木纹 — 仅门板' },
    'config.woodNote':     { en: 'Yunwen series offers 4 finely crafted wood grain finishes on metal substrate. Premium +¥2,000.', cn: '云纹系列提供4种精细木纹表面处理，金属基底。升级加价¥2,000。' },
    'config.premiumWoodGroup':  { en: 'Premium Wood Grain — Door Panel Only', cn: '高端木纹 — 仅门板' },
    'config.premiumWoodNote':   { en: 'Zhenwen series features ultra-realistic 4D wood textures. Premium +¥3,500.', cn: '臻纹系列采用超逼真4D木纹质感。升级加价¥3,500。' },
    'config.ssGroup':      { en: 'Stainless Steel — Door Panel Only', cn: '不锈钢 — 仅门板' },
    'config.ssNote':       { en: 'Genuine 304 stainless steel. Premium +¥5,000.', cn: '纯正304不锈钢。升级加价¥5,000。' },
    'config.countertopGroup': { en: 'Countertop Options', cn: '台面选项' },
    'config.countertop': { en: 'Countertop Finish', cn: '台面饰面' },
    'config.countertopSelected': { en: 'Top: ', cn: '台面：' },
    'config.countertopNote':  { en: 'Upgrade your countertop with these premium options.', cn: '用以下高端选项升级您的台面。' },
    'config.selected':     { en: 'Selected: ', cn: '已选：' },
    'config.dlColor':      { en: '↓ Download Full Color Catalog', cn: '↓ 下载完整色卡' },
    'config.total.title':  { en: 'Configuration Summary', cn: '配置摘要' },
    'config.total.base':   { en: 'Base Unit', cn: '基础单元' },
    'config.total.acc':    { en: 'Accessories', cn: '配件' },
    'config.total.finish': { en: 'Finish Upgrade', cn: '饰面升级' },
    'config.total.total':  { en: 'Estimated Total (List CNY)', cn: '预估总价（网站人民币）' },
    'config.total.cta':    { en: 'Request Quote →', cn: '索取报价 →' },
    'config.sticky.kicker': { en: 'Current config', cn: '当前配置' },
    'config.sticky.fx':     { en: 'FX rate', cn: '汇率' },
    'config.sticky.cny':    { en: 'CNY total', cn: '人民币计价' },
    'config.sticky.usd':    { en: 'USD estimate', cn: 'USD 估价' },
    'config.sticky.detail': { en: 'Details', cn: '明细' },
    'cases.label':    { en: 'Our Projects',   cn: '我们的项目' },
    'cases.title':    { en: 'Trusted <em>Worldwide</em>', cn: '全球<em>信赖</em>' },
    'cases.desc':     { en: 'From luxury villas in Los Angeles to waterfront properties in Spain — our outdoor kitchens are installed across the globe.', cn: '从洛杉矶的豪华别墅到西班牙的海滨物业——我们的户外厨房安装在全球各地。' },
    'cases.tag1':     { en: '🌎 USA', cn: '🌎 美国' },
    'cases.c1title':  { en: 'L.A. Wine Bar & Outdoor Kitchen', cn: '洛杉矶酒柜吧台户外厨房' },
    'cases.c1desc':   { en: 'Custom Earth Tone outdoor kitchen with wine bar for S.D. Daniels Construction.', cn: '为S.D. Daniels建筑公司定制的土色调户外厨房与酒柜吧台。' },
    'cases.c2title':  { en: 'Beverly Hills Outdoor Suite', cn: '比弗利山庄户外套间' },
    'cases.c2desc':   { en: 'Complete outdoor kitchen with stainless steel cabinets.', cn: '全配套不锈钢橱柜户外厨房。' },
    'cases.tag3':     { en: '🌎 Spain', cn: '🌎 西班牙' },
    'cases.c3title':  { en: 'Valencia Coastal Kitchen', cn: '瓦伦西亚海岸厨房' },
    'cases.c3desc':   { en: '304 stainless steel outdoor kitchen for a Mediterranean residence.', cn: '为地中海住宅定制的304不锈钢户外厨房。' },
    'cases.tag4':     { en: '🌎 Middle East', cn: '🌎 中东' },
    'cases.c4title':  { en: 'Dubai Villa Outdoor Kitchen', cn: '迪拜别墅户外厨房' },
    'cases.c4desc':   { en: 'Heat-resistant outdoor kitchen for a luxury residential project.', cn: '为豪华住宅项目打造的耐高温户外厨房。' },
    'contact.label':   { en: 'Contact Us',     cn: '联系我们' },
    'contact.title':   { en: "Let's Build Something <em>Great</em>", cn: '一起打造<em>非凡之作</em>' },
    'contact.desc':    { en: "Interested in a quote, have a custom project, or want to become a distributor? We'd love to hear from you.", cn: '需要报价、有定制项目、或想成为经销商？期待您的来信。' },
    'contact.namePh':       { en: 'Your Name *', cn: '您的姓名 *' },
    'contact.emailPh':      { en: 'Email Address *', cn: '邮箱地址 *' },
    'contact.companyPh':    { en: 'Company Name', cn: '公司名称' },
    'contact.countryPh':    { en: 'Country', cn: '国家' },
    'contact.socialPh':     { en: 'Social Media Account', cn: '社媒账号' },
    'contact.msgPh':        { en: 'Tell us about your project... *', cn: '请描述您的项目... *' },
    'contact.sendBtn':      { en: 'Send Message →', cn: '发送消息 →' },
    'contact.note':         { en: "We'll respond within 24 hours.", cn: '我们将在24小时内回复。' },
    'footer.tagline':       { en: '深设服务 — Premium outdoor kitchen solutions for the global market.', cn: '深设服务 — 全球高端户外厨房解决方案。' },
    'footer.quickLinks':    { en: 'Quick Links', cn: '快速链接' },
    'footer.support':       { en: 'Support', cn: '支持' },
    'footer.requestQuote':  { en: 'Request Quote', cn: '获取报价' },
    'footer.shipping':      { en: 'Shipping Info', cn: '物流信息' },
    'footer.warranty':      { en: 'Warranty', cn: '质保服务' },
    'footer.regions':       { en: 'Regions', cn: '服务区域' },
    'footer.region1':       { en: 'Middle East', cn: '中东' },
    'footer.region2':       { en: 'Europe', cn: '欧洲' },
    'footer.region3':       { en: 'North America', cn: '北美' },
    'footer.region4':       { en: 'Oceania', cn: '大洋洲' },
    // Accessory translations (used in JS dynamic content)
    'acc.TV-Mount':     { en: 'TV + Mount', cn: '电视+支架' },
    'acc.TV-Mount.detail': { en: 'Weatherproof LED TV & adjustable mount', cn: '防风雨LED电视及可调支架' },
    'acc.LED-Upgrade':  { en: 'LED Strip Lighting', cn: 'LED灯带' },
    'acc.LED-Upgrade.detail': { en: 'Under-cabinet ambient LED strip', cn: '柜底氛围LED灯带' },
    'acc.Shelf-Extra':  { en: 'Extra Aluminum Shelf', cn: '加装铝制层板' },
    'acc.Shelf-Extra.detail': { en: 'Additional tiered shelf rack', cn: '额外层板置物架' },
    'acc.Power-Plus':   { en: 'Extra Power Track', cn: '加装电源导轨' },
    'acc.Power-Plus.detail': { en: 'Additional weatherproof power track', cn: '额外防风雨电源导轨' },
    'acc.Countertop':   { en: 'Upgraded Countertop', cn: '升级台面' },
    'acc.Countertop.detail': { en: 'Premium stainless steel countertop', cn: '高端不锈钢台面' },
    'acc.Brand-Panel':  { en: 'Branded Side Panels', cn: '品牌侧板' },
    'acc.Brand-Panel.detail': { en: 'Custom logo/branding on end panels', cn: '端板定制品牌标识' },
    'comp.included':      { en: '✓ Included', cn: '✓ 已含' },
    'comp.includedShort': { en: 'Incl.', cn: '已含' },
    // Color series names (for buildSummary)
    'series.xuanli':    { en: 'Xuanli Series', cn: '玄丽系列' },
    'series.yunwen':    { en: 'Yunwen Series', cn: '云纹系列' },
    'series.zhenwen':   { en: 'Zhenwen Series', cn: '臻纹系列' },
    'series.stainless': { en: 'Stainless Steel', cn: '不锈钢' },

    // Specs summary section
    'specs.label':    { en: 'Specifications',    cn: '规格参数' },
    'specs.th0':      { en: 'Image',             cn: '图片' },
    'specs.title':    { en: 'Outdoor Cabinet <em>Specifications</em>', cn: '户外柜体<em>规格一览</em>' },
    'specs.desc':     { en: 'All outdoor kitchen cabinets are precision-engineered from premium materials. Detailed specifications for each model configuration.', cn: '所有户外厨房柜体均采用高端材料精密制造。各型号配置详细规格如下。' },
    'specs.th1':      { en: 'Model',             cn: '型号' },
    'specs.th2':      { en: 'Door Type',         cn: '门型' },
    'specs.th3':      { en: 'Size (WxDxH)',     cn: '尺寸 (宽x深x高)' },
    'specs.th4':      { en: 'Material',          cn: '材质' },
    'specs.th5':      { en: 'Components',        cn: '配置组件' },
    'specs.th6':      { en: 'Price (EXW)',       cn: '价格 (EXW)' },
    'specs.note1':    { en: '* All prices include tax & packaging. Shipping quoted separately. Valid for 6 months.', cn: '* 以上报价包含税、含包装费用，不包含运费。报价有效期为6个月。' },
    'specs.note2':    { en: 'Supplier: THOR Smart Home (索而智能家居) — Tel: 400-061-6669 — Dongguan, Guangdong', cn: '供应商：索而智能家居有限公司 — 电话：400-061-6669 — 东莞市洪梅镇海新路2号' },

    // Preview inline specs
    'config.summary': { en: 'Configuration Summary',   cn: '配置摘要' },
    'config.dlSpec':  { en: '↓ Download Spec Sheet', cn: '↓ 下载规格书' },
    'config.included':{ en: 'Included in this model:', cn: '本型号标准配置：' },
    'config.dlColor': { en: '↓ Download Full Color Catalog', cn: '↓ 下载完整色卡' },
    'config.colorNote':{ en: 'Colors from Color options V3.0 — shell, door & countertop', cn: '颜色来自 Color options V3.0 — 柜体 / 门板 / 台面' },
    'config.incl1':   { en: 'Top-flip cabinet body × 1', cn: '上翻门箱体 × 1' },
    'config.incl2':   { en: 'Single-door sink cabinet × 1', cn: '单门水槽柜 × 1' },
    'config.incl3':   { en: 'BBQ double-door base cabinet × 1', cn: 'BBQ烤炉对开地柜 × 1' },
    'config.incl4':   { en: 'Fridge frame cabinet × 1', cn: '冰箱框架柜 × 1' },
    'config.incl5':   { en: '3 sockets, LED strip, mobile socket', cn: '3个插座，灯带1套，移动插座1套' },
    'config.incl6':   { en: 'Aluminum shelf rack × 1', cn: '铝型材层板置物架 × 1' },
    'config.incl7':   { en: 'BBQ grill × 1, Mini fridge × 1, Range hood × 1', cn: '烧烤炉 × 1，小冰箱 × 1，抽拉烟机 × 1' },
    'config.incl8':   { en: 'Zinc-Aluminum-Magnesium Alloy + Galvanized Steel', cn: '锌铝镁合金 + 镀锌钢' },

    // Config included specs (for different sizes)
    'config.incl.xt.2200': { en: 'Single sink + BBQ base + Fridge frame + 3 sockets + LED + Shelf + BBQ + Fridge + Hood', cn: '单门水槽柜 + BBQ烤炉对开地柜 + 冰箱框架柜 + 3插座 + 灯带 + 层板 + 烧烤炉 + 冰箱 + 烟机' },
    'config.incl.xt.2900': { en: 'Single door + BBQ base + Sink base + Fridge frame + 4 sockets + LED + Shelf + BBQ + Fridge + Hood', cn: '单门地柜 + BBQ烤炉对开地柜 + 水槽地柜 + 冰箱框架柜 + 4插座 + 灯带 + 层板 + 烧烤炉 + 冰箱 + 烟机' },
    'config.incl.xt.3200': { en: '3-drawer + BBQ base + Sink base + Fridge frame + 4 sockets + LED + 2 Shelves + BBQ + Fridge + Hood', cn: '三抽地柜 + BBQ烤炉对开地柜 + 水槽地柜 + 冰箱框架柜 + 4插座 + 灯带 + 2层板 + 烧烤炉 + 冰箱 + 烟机' },
    'config.incl.xt.3500': { en: '3-drawer + Single door + BBQ base + Sink base + Fridge frame + 4 sockets + LED + 2 Shelves + BBQ + Fridge + Hood', cn: '三抽地柜 + 单门地柜 + BBQ烤炉对开地柜 + 水槽地柜 + 冰箱框架柜 + 4插座 + 灯带 + 2层板 + 烧烤炉 + 冰箱 + 烟机' },
    'config.incl.wm.2200': { en: 'Rolling body + Single sink + BBQ base + Fridge frame + 3 sockets + LED + Shelf + BBQ + Fridge + Hood', cn: '卷帘箱体 + 单门水槽柜 + BBQ烤炉对开地柜 + 冰箱框架柜 + 3插座 + 灯带 + 层板 + 烧烤炉 + 冰箱 + 烟机' },
    'config.incl.wm.2900': { en: 'Rolling body + Single door + BBQ base + Sink base + Fridge frame + 4 sockets + LED + Shelf + BBQ + Fridge + Hood', cn: '卷帘箱体 + 单门地柜 + BBQ烤炉对开地柜 + 水槽地柜 + 冰箱框架柜 + 4插座 + 灯带 + 层板 + 烧烤炉 + 冰箱 + 烟机' },
    'config.incl.wm.3200': { en: 'Rolling body + 3-drawer + BBQ base + Sink base + Fridge frame + 4 sockets + LED + 2 Shelves + BBQ + Fridge + Hood', cn: '卷帘箱体 + 三抽地柜 + BBQ烤炉对开地柜 + 水槽地柜 + 冰箱框架柜 + 4插座 + 灯带 + 2层板 + 烧烤炉 + 冰箱 + 烟机' },
    'config.incl.wm.3500': { en: 'Rolling body + 3-drawer + Single door + BBQ base + Sink base + Fridge frame + 4 sockets + LED + 2 Shelves + BBQ + Fridge + Hood', cn: '卷帘箱体 + 三抽地柜 + 单门地柜 + BBQ烤炉对开地柜 + 水槽地柜 + 冰箱框架柜 + 4插座 + 灯带 + 2层板 + 烧烤炉 + 冰箱 + 烟机' },

    // Hot-selling products section
    'hot.label':        { en: 'Hot Sellers',           cn: '热卖款' },
    'hot.title':        { en: 'Quick-Ship <em>Collections</em>', cn: '现货速发 <em>套装</em>' },
    'hot.desc':         { en: 'Pre-configured outdoor kitchen sets in 304 stainless steel \u2014 ready to ship. Perfect for fast-track projects.', cn: '304不锈钢预配户外厨房套装——即期发货。适合快速项目。' },
    'hot.tab1':         { en: 'US MK Series (8 pcs)', cn: '美标MK系列 (8件)' },
    'hot.tab2':         { en: 'European 8-Piece',      cn: '欧款8件-KD' },
    'hot.tab3':         { en: 'European Black 5-Piece',cn: '欧款黑色5件-KD' },
    'hot.tab4':         { en: 'US 3-Piece + Fridge',   cn: '美规三件套+冰箱' },
    'hot.tab5':         { en: 'European 3-Piece + Fridge', cn: '欧洲三件套+冰箱' },
    'hot.cta':          { en: 'Inquire',                cn: '询价' },
    'hot.more':         { en: 'Show details',           cn: '查看详情' },
    'hot.less':         { en: 'Hide details',           cn: '收起详情' },
    'hot.setNote':      { en: '* Prices are EXW China, following the selected qty tier (1-5 / 6-20 / 20+). Complete set prices available upon request.', cn: '* 价格为 EXW 中国离岸价，随顶部数量档（1-5 / 6-20 / 20+）联动。整套价格请询价。' },
    'hot.matBadge1':    { en: '304 Stainless Steel',   cn: '304不锈钢' },
    'hot.matBadge2':    { en: 'KD Flat-pack Shipping', cn: 'KD拆装运输' },
    'hot.matBadge3':    { en: 'Customizable Finish',   cn: '饰面可定制' },

    // Combined assembly section
    'hot.combined.title': { en: 'Assembly &amp; Blueprint',   cn: '产品组合图 &amp; 线框图' },
    'hot.combined.photo': { en: 'Product Image',             cn: '产品图' },
    'hot.combined.line':  { en: 'Line Drawing',              cn: '线框图' },

    // US MK Series items
    'hot.mk.pizza':     { en: 'Pizza Oven',            cn: '披萨烤炉' },
    'hot.mk.sink':      { en: 'Sink Cabinet',          cn: '水槽柜' },
    'hot.mk.appliance': { en: 'Appliance Cabinet',     cn: '电器柜' },
    'hot.mk.fridge':    { en: 'Drawer Refrigerator',   cn: '抽屉式冰箱' },
    'hot.mk.bbq':       { en: 'BBQ Grill',             cn: 'BBQ烤炉' },
    'hot.mk.bottom':    { en: 'Bottom Cabinet (BBQ)',  cn: '烤炉底柜' },
    'hot.mk.burner':    { en: 'Side Burner + Cabinet', cn: '侧炉+底柜' },
    'hot.mk.corner':    { en: 'Corner Cabinet',        cn: '转角柜' },

    // European 8-piece
    'hot.eu8.bbq':      { en: 'BBQ Grill',             cn: 'BBQ烤炉' },
    'hot.eu8.bottom':   { en: 'Bottom Cabinet (BBQ)',  cn: '烤炉底柜' },
    'hot.eu8.burner':   { en: 'Side Burner + Cabinet', cn: '侧炉+底柜' },

    // European Black 5-piece
    'hot.black.badge':  { en: 'Black Finish',          cn: '黑色饰面' },
    'hot.black.pizza':  { en: 'Pizza Oven (Black)',    cn: '披萨烤炉(黑色)' },
    'hot.black.sink':   { en: 'Sink Cabinet (Black)',  cn: '水槽柜(黑色)' },
    'hot.black.bbq':    { en: 'BBQ Grill (Black)',     cn: 'BBQ烤炉(黑色)' },
    'hot.black.bottom': { en: 'Bottom Cabinet (Black)',cn: '烤炉底柜(黑色)' },
    'hot.black.burner': { en: 'Side Burner (Black)',   cn: '侧炉(黑色)' },

    // US 3-piece + fridge
    'hot.us3.sink':     { en: 'Sink Cabinet',          cn: '水槽柜' },
    'hot.us3.bbq':      { en: '6-Burner BBQ',          cn: '6火眼BBQ烤炉' },
    'hot.us3.appliance':{ en: 'Appliance Cabinet',     cn: '电器柜' },
    'hot.us3.fridge':   { en: 'Refrigerator',          cn: '冰箱' },

    // European 3-piece
    'hot.eu3.sink':     { en: 'Sink Cabinet',          cn: '水槽柜' },
    'hot.eu3.bbq':      { en: '6-Burner BBQ',          cn: '6火眼BBQ烤炉' },
    'hot.eu3.appliance':{ en: 'Appliance Cabinet',     cn: '电器柜' }
};

// =============================================
// LANGUAGE STATE
// =============================================
let currentLang = 'en';

function t(key) {
    if (!i18n[key]) return key;
    return i18n[key][currentLang] || i18n[key]['en'] || key;
}

function applyTranslation() {
    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const translated = t(key);
        if (translated && translated !== key) {
            el.innerHTML = translated;
        }
    });

    // Update all data-i18n-placeholder elements (inputs)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        const translated = t(key);
        if (translated && translated !== key) {
            el.placeholder = translated;
        }
    });

    // Update lang toggle button(s)
    document.querySelectorAll('#langToggle, [data-lang-toggle]').forEach((langBtn) => {
        if (langBtn.hasAttribute('data-i18n') && langBtn.id === 'langToggleBar') {
            langBtn.textContent = t('config.langSwitch');
        } else {
            langBtn.textContent = currentLang === 'en' ? 'EN / 中文' : '中文 / EN';
        }
        langBtn.dataset.lang = currentLang;
        langBtn.title = currentLang === 'en' ? 'Switch to Chinese' : '切换到英文';
    });

    // Re-render dynamic content
    renderComponents();
    renderAccessories();
    updateHotCardToggleLabels();
    syncStdListToggleLabel();
    syncHotCardPrices();
    if (typeof window.syncQtyTierUi === 'function') window.syncQtyTierUi();
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'cn' : 'en';
    applyTranslation();
    if (window.COLOR_OPTIONS) {
        renderColorPickers({
            body: bodyColorState.code,
            door: colorState.code,
            countertop: countertopColorState.code,
        });
        syncColorExpandUi('body');
        syncColorExpandUi('door');
        paintShellPreviewActive();
    }
    updateTotal();
}

// =============================================
// PRODUCT DATA
// =============================================
/** Master table FX: $成本 = ￥成本 ÷ FX — synced from outdoor-quote-data */
const FX_USD_CNY = (window.OutdoorQuote && OutdoorQuote.fx()) || 6.7;

/**
 * Dual channel:
 * - internal (classic.html): right-table margins 30/25/20/15 — print JPEG only
 * - mp (quote-mp.html): usdCost × 2.5 only
 */
const PUBLIC_COST_RATIO = 1;
const IS_MP_CHANNEL = !!(window.OutdoorQuote && OutdoorQuote.isMpChannel && OutdoorQuote.isMpChannel());
const DEFAULT_QTY_TIER = IS_MP_CHANNEL
  ? 'mp'
  : (window.OUTDOOR_QUOTE && window.OUTDOOR_QUOTE.defaultTier) || '30%';

const HOT_IMG = (sku) => 'assets/images/products/hot-selling/display/sku-' + sku + '.png';
/** Thumbs from 箱体报价总表 2.0 Color/Picture column */
const MASTER_IMG = (slug) =>
    'assets/images/products/from-master/items/' + slug + '.png?t=20260728mat';

const ELEV_CACHE = '20260728w2900';

/**
 * Door type × width — Rolling Door from 销售单 R5; top-flip from user refs.
 */
const productImages = {
    'xt-2200': 'assets/images/products/suoer/xt-2200.png',
    'xt-2900': 'assets/images/products/suoer/xt-2900.png',
    'xt-3200': 'assets/images/products/suoer/xt-3200.png',
    'xt-3500': 'assets/images/products/suoer/xt-3500.png',
    'wm-2200': 'assets/images/products/suoer/wm-2200.png',
    'wm-2900': 'assets/images/products/suoer/wm-2900.png',
    'wm-3200': 'assets/images/products/suoer/wm-3200.png',
    'wm-3500': 'assets/images/products/suoer/wm-3500.png',
    'mini-2200': 'assets/images/products/suoer/mini-2200.png',
    'mini-2900': 'assets/images/products/suoer/mini-2900.png',
    'mini-3200': 'assets/images/products/suoer/mini-3200.png',
    'mini-3500': 'assets/images/products/suoer/mini-3500.png'
};

/** Outer frame width printed on elevation (= model width + 100) */
const elevOuterWidth = {
    2200: 2300,
    2900: 3000,
    3200: 3300,
    3500: 3600
};

function itemMeta(key) {
    return (window.OutdoorQuote && OutdoorQuote.meta(key)) || { icon: '➕', en: key, cn: key, dim: '—' };
}

function itemImage(key) {
    const m = itemMeta(key);
    return m.img ? MASTER_IMG(m.img) : null;
}

function buildComponentConfigs() {
    if (!window.OutdoorQuote) return { 2200: [], 2900: [], 3200: [], 3500: [] };
    const out = {};
    [2200, 2900, 3200, 3500].forEach((w) => {
        out[w] = OutdoorQuote.stdKeys(w, 'xt').map((key) => {
            const m = itemMeta(key);
            return {
                key,
                icon: m.icon,
                nameKey: 'item.' + key,
                detailKey: 'item.' + key + '.detail',
                defaultEn: m.en,
                defaultDetail: m.detailEn || ''
            };
        });
    });
    return out;
}

function buildItemI18n() {
    const out = {
        'comp.remove': { en: 'Remove from package', cn: '从标准配置中删除' },
        'comp.included': { en: '✓ Included', cn: '✓ 已含' },
        'comp.includedShort': { en: 'Incl.', cn: '已含' }
    };
    if (!window.OutdoorQuote) return out;
    Object.keys(OutdoorQuote.META).forEach((key) => {
        const m = OutdoorQuote.META[key];
        out['item.' + key] = { en: m.en, cn: m.cn };
        out['item.' + key + '.detail'] = { en: m.detailEn || '', cn: m.detailCn || '' };
        out['acc.' + key] = { en: m.en, cn: m.cn };
        out['acc.' + key + '.detail'] = { en: m.detailEn || '', cn: m.detailCn || '' };
    });
    return out;
}

function metaText(field) {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[currentLang] || field.en || '';
}

function resolveItemDim(key) {
    const m = itemMeta(key);
    if (key === 'woodenBox' && m.dimsByLength) {
        const w = nearestStdWidth(state.width);
        return m.dimsByLength[w] || m.dimsByLength[String(w)] || m.dim || '—';
    }
    const dim = m.dim || '—';
    if (key === 'shedStd' || key === 'shedMini' || key === 'cabinets' || key === 'counter' || key === 'led') {
        return dim.replace(/^L\b/, String(state.width)).replace('net length', String(Math.max(0, state.width - 100)));
    }
    return dim;
}

function resolveCompImage(comp) {
    const key = comp.key || String(comp.nameKey || '').replace(/^item\./, '');
    if (key === 'shedStd' || key === 'shedMini') {
        return productImages[state.doorType + '-' + nearestStdWidth(state.width)] || itemImage(key);
    }
    return itemImage(key);
}

/** Card price: ¥ left · $ right from master-table list USD */
function formatDualPriceFromUsd(listUsd, opts) {
    const prefix = (opts && opts.prefix) || '';
    const usd = Math.round(Number(listUsd) || 0);
    const cny = Math.round(usd * FX_USD_CNY);
    return (
        '<span class="price-cny">' + prefix + formatCny(cny) + '</span>' +
        '<span class="price-usd">' + prefix + formatUsd(usd) + '</span>'
    );
}

/** Footer: ¥ | qty(optional, center) | $ */
function renderLineFooter(listUsd, opts, qtyHtml) {
    const priceHtml = formatDualPriceFromUsd(listUsd, opts);
    if (qtyHtml) {
        return (
            '<div class="std-line-footer has-qty">' +
                priceHtml.replace(
                    '</span><span class="price-usd">',
                    '</span>' + qtyHtml + '<span class="price-usd">'
                ) +
            '</div>'
        );
    }
    return (
        '<div class="std-line-footer">' +
            '<span class="std-line-price">' + priceHtml + '</span>' +
        '</div>'
    );
}

function formatDualPrice(cny, opts) {
    return formatDualPriceFromUsd(cnyToUsd(Number(cny) || 0), opts);
}

function formatCompPrice(compOrKey) {
    const key = typeof compOrKey === 'string'
        ? compOrKey.replace(/^item\./, '')
        : (compOrKey.key || String(compOrKey.nameKey || '').replace(/^item\./, ''));
    const usd = window.OutdoorQuote
        ? OutdoorQuote.listUsd(key, state.width, state.qtyTier)
        : 0;
    return formatDualPriceFromUsd(usd);
}

function renderThumb(src, icon, alt) {
    if (src) {
        return (
            '<div class="item-thumb">' +
                '<img src="' + src + '" alt="' + (alt || '') + '" loading="lazy" ' +
                'onerror="this.parentElement.classList.add(\'is-placeholder\');this.remove();">' +
                '<span class="item-ph-icon" aria-hidden="true">' + icon + '</span>' +
            '</div>'
        );
    }
    return (
        '<div class="item-thumb is-placeholder">' +
            '<span class="item-ph-icon" aria-hidden="true">' + icon + '</span>' +
        '</div>'
    );
}

function removedStdSet(widthMm) {
    const w = nearestStdWidth(widthMm != null ? widthMm : state.width);
    if (!state.removedStd[w]) state.removedStd[w] = new Set();
    return state.removedStd[w];
}

function currentStdConfigs() {
    if (!window.OutdoorQuote) return componentConfigs[nearestStdWidth(state.width)] || [];
    const w = nearestStdWidth(state.width);
    return OutdoorQuote.stdKeys(w, state.doorType).map((key) => {
        const m = itemMeta(key);
        return {
            key,
            icon: m.icon,
            nameKey: 'item.' + key,
            detailKey: 'item.' + key + '.detail',
            defaultEn: m.en,
            defaultDetail: m.detailEn || ''
        };
    });
}

function activeStdConfigs() {
    const all = currentStdConfigs();
    const removed = removedStdSet();
    return all.filter((c) => !removed.has(c.key));
}

function activeStdKeys() {
    return activeStdConfigs().map((c) => c.key);
}

/** Keys that support per-line quantity steppers */
const ITEM_QTY_KEYS = new Set(['roundLamp', 'shelf']);
const ITEM_QTY_MAX = 24;

function supportsItemQty(key) {
    return ITEM_QTY_KEYS.has(key);
}

function getItemQty(key) {
    if (!supportsItemQty(key)) return 1;
    const q = Number(state.itemQty && state.itemQty[key]);
    if (!Number.isFinite(q) || q < 1) return 1;
    return Math.min(ITEM_QTY_MAX, Math.floor(q));
}

function setItemQty(key, next) {
    if (!supportsItemQty(key)) return getItemQty(key);
    if (!state.itemQty) state.itemQty = {};
    state.itemQty[key] = Math.max(1, Math.min(ITEM_QTY_MAX, Math.floor(Number(next) || 1)));
    return state.itemQty[key];
}

function renderItemQtyControls(key, opts) {
    if (!supportsItemQty(key)) return '';
    const qty = getItemQty(key);
    const disabled = !!(opts && opts.disabled);
    return (
        '<div class="std-line-qty is-enabled' + (disabled ? ' is-disabled' : '') + '" data-qty-key="' + key + '">' +
            '<button type="button" class="qty-btn qty-minus" aria-label="Decrease quantity" ' +
                (disabled || qty <= 1 ? 'disabled' : '') + '>−</button>' +
            '<span class="qty-val">' + qty + '</span>' +
            '<button type="button" class="qty-btn qty-plus" aria-label="Increase quantity" ' +
                (disabled || qty >= ITEM_QTY_MAX ? 'disabled' : '') + '>+</button>' +
        '</div>'
    );
}

/** Standard package line: left image + compact text + removable X */
function renderStdLineCard(comp) {
    const key = comp.key;
    const name = t(comp.nameKey) || comp.defaultEn;
    const detail = t(comp.detailKey) || comp.defaultDetail;
    const dim = resolveItemDim(key);
    const unitUsd = window.OutdoorQuote
        ? OutdoorQuote.listUsd(key, state.width, state.qtyTier)
        : 0;
    const qty = getItemQty(key);
    const listUsd = unitUsd * qty;
    const src = resolveCompImage(comp);
    const locked = key === 'shedStd' || key === 'shedMini' || key === 'woodenBox';
    const removeBtn = !locked
        ? '<button type="button" class="std-line-remove" data-remove-key="' +
          key +
          '" aria-label="' +
          t('comp.remove') +
          '" title="' +
          t('comp.remove') +
          '">×</button>'
        : '';
    const media = src
        ? '<div class="std-line-media"><img src="' + src + '" alt="' + name + '" loading="lazy" ' +
          'onerror="this.parentElement.classList.add(\'is-placeholder\');this.remove();">' +
          '<span class="item-ph-icon" aria-hidden="true">' + (comp.icon || '') + '</span></div>'
        : '<div class="std-line-media is-placeholder"><span class="item-ph-icon" aria-hidden="true">' +
          (comp.icon || '') + '</span></div>';
    const qtyHtml = renderItemQtyControls(key);

    const detailHtml =
        '<div class="std-line-details-panel">' +
            (dim ? '<div class="std-line-dim">' + dim + '</div>' : '') +
            (detail ? '<div class="std-line-desc">' + detail + '</div>' : '') +
        '</div>';

    return (
        '<div class="std-line-card" data-comp-key="' + key + '">' +
            removeBtn +
            '<div class="std-line-media-wrap">' + media + '</div>' +
            '<div class="std-line-body">' +
                '<strong class="std-line-name">' + name + (qty > 1 ? ' ×' + qty : '') + '</strong>' +
                detailHtml +
                renderLineFooter(listUsd, null, qtyHtml) +
            '</div>' +
        '</div>'
    );
}

// Component configs from 0000箱体报价总表 2.0 packages
const componentConfigs = buildComponentConfigs();
Object.assign(i18n, buildItemI18n());

// Accessory i18n already defined above

// =============================================
// STATE
// =============================================
let state = {
    doorType: 'xt',
    width: 2200,
    /** Sticky total only after user picks a width */
    sizeSelected: false,
    /** Internal: margin 30/25/20/15. MP channel ignores (always cost×2.5). */
    qtyTier: DEFAULT_QTY_TIER,
    accessories: {},
    extraItems: [],
    /** Per-item quantity (e.g. roundLamp / 筒灯) */
    itemQty: {},
    /** Per-width removed standard item keys: { 2200: Set(['rangeHood', ...]) } */
    removedStd: {}
};

let colorState = {
    series: 'xuanli',
    code: 'CK03F',
    name: 'Moonlight Grey, Sand Grain',
    premium: 0
};

let bodyColorState = {
    code: 'CK02F',
    name: 'Khaki Grey, Sand Texture',
    premium: 0
};

let countertopColorState = {
    code: '',
    name: '',
    premium: 0
};

/** Featured colors shown first; rest behind “Show more”. */
const SHELL_FEATURED_CODES = ['CK10G', 'CK02F', 'CK01S', 'CK01X'];
const DOOR_FEATURED_CODES = [
    'CK01G-L', 'CK03G-Y', 'CK04G-Y', 'CK09G-L', 'CK03F',
    'CM29-Y', 'CM17-Y', 'CM27-Y', 'CM22-Y', 'CM25-Y',
];
let colorExpandState = { body: false, door: false };

// =============================================
// DOM REFS
// =============================================
const doorTypeBtns = document.querySelectorAll('#doorTypeGroup .config-btn');
const sizeBtns = document.querySelectorAll('#sizeGroup .size-btn');
const accessoriesGrid = document.getElementById('accessoriesGrid');
const accessoriesCheckboxes = () => document.querySelectorAll('#accessoriesGrid input[type="checkbox"]');
const colorSwatches = () => document.querySelectorAll('#doorColorGrid .color-swatch');
const selectedColorCode = document.getElementById('selectedColorCode');
const selectedColorName = document.getElementById('selectedColorName');
// (previewModel is used in buildSummaryString, kept under same ID)
const totalModel = document.getElementById('totalModel');
const totalBasePrice = document.getElementById('totalBasePrice');
const totalAccessoriesPrice = document.getElementById('totalAccessoriesPrice');
const totalFinishPrice = document.getElementById('totalFinishPrice');
const totalFinalPrice = document.getElementById('totalFinalPrice');

// =============================================
// RENDER FUNCTIONS
// =============================================
function nearestStdWidth(w) {
    const sizes = [2200, 2900, 3200, 3500];
    return sizes.reduce((best, n) => (Math.abs(n - w) < Math.abs(best - w) ? n : best), sizes[0]);
}

function getModelName() {
    const w = nearestStdWidth(state.width);
    const base = state.doorType === 'wm' ? 'TH-WM' : 'TH-XT';
    let seriesNum = '001';
    if (w === 3200) seriesNum = '002';
    else if (w === 3500) seriesNum = '003';
    const suffix = w === 2200 ? '-X' : '';
    const custom = state.width !== w ? '-C' : '';
    return base + '-' + seriesNum + suffix + custom;
}

/** Standard package list CNY (master-table website USD × FX) */
function getBasePrice() {
    return Math.round(getBaseListUsd() * FX_USD_CNY);
}

function getBaseListUsd() {
    if (!window.OutdoorQuote) return 0;
    return activeStdKeys().reduce((sum, key) => {
        return sum + OutdoorQuote.listUsd(key, state.width, state.qtyTier) * getItemQty(key);
    }, 0);
}

function getElevationSrc(modelW) {
    const w = modelW || nearestStdWidth(state.width);
    const door = state.doorType === 'wm' ? 'wm' : 'xt';
    const key = door + '-' + w;
    const base = productImages[key] || ('assets/images/products/suoer/' + door + '-' + w + '.png');
    return base + (base.includes('?') ? '&' : '?') + 't=' + ELEV_CACHE;
}

function getElevationMaskSrc(modelW) {
    const w = modelW || nearestStdWidth(state.width);
    return 'assets/images/products/suoer/' + w + '-door-mask.png?t=' + ELEV_CACHE;
}

/** Size preview (图2 四档) + door-panel recolor from 8 swatches */
const elevPreview = {
    source: null,
    maskImg: null,
    canvas: null,
    ctx: null,
    baseData: null,
    maskData: null,
    ready: false,
    loadToken: 0
};

function elevMaskCompatible(img, mask) {
    if (!img || !mask) return false;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    const mw = mask.naturalWidth || mask.width;
    const mh = mask.naturalHeight || mask.height;
    if (!iw || !ih || !mw || !mh) return false;
    // Old CAD masks (≈1.7) must not stretch onto photo elevations (≈1.2–1.3)
    const ir = iw / ih;
    const mr = mw / mh;
    return Math.abs(ir - mr) < 0.12;
}

function cacheElevPreviewBase() {
    if (!elevPreview.source || !elevPreview.ctx) return false;
    const img = elevPreview.source;
    const w = img.naturalWidth || img.width;
    const h = img.naturalHeight || img.height;
    if (!w || !h) return false;
    elevPreview.canvas.width = w;
    elevPreview.canvas.height = h;
    elevPreview.ctx.drawImage(img, 0, 0, w, h);
    elevPreview.baseData = elevPreview.ctx.getImageData(0, 0, w, h);
    elevPreview.maskData = null;
    const mask = elevPreview.maskImg;
    if (mask && mask.naturalWidth && elevMaskCompatible(img, mask)) {
        elevPreview.ctx.drawImage(mask, 0, 0, w, h);
        elevPreview.maskData = elevPreview.ctx.getImageData(0, 0, w, h);
        elevPreview.ctx.putImageData(elevPreview.baseData, 0, 0);
    }
    elevPreview.ready = true;
    return true;
}

function paintElevDoors(hex, texture) {
    if (!elevPreview.ready && !cacheElevPreviewBase()) return;
    const base = elevPreview.baseData;
    if (!base) return;
    if (!elevPreview.maskData) {
        elevPreview.ctx.putImageData(base, 0, 0);
        return;
    }
    const { r: tr, g: tg, b: tb } = parseHexColor(hex || '#a07848');
    const out = new ImageData(new Uint8ClampedArray(base.data), base.width, base.height);
    const d = out.data;
    const src = base.data;
    const m = elevPreview.maskData.data;
    const tw = texture?.w || 0;
    const th = texture?.h || 0;
    const td = texture?.data || null;
    const refLum = 0.42;
    for (let i = 0, p = 0; i < d.length; i += 4, p++) {
        if (src[i + 3] < 8 || m[i] < 128) continue;
        const lum = (0.299 * src[i] + 0.587 * src[i + 1] + 0.114 * src[i + 2]) / 255;
        const shade = Math.min(1.35, Math.max(0.22, lum / refLum));
        let rr = tr, gg = tg, bb = tb;
        if (td && tw && th) {
            const x = p % base.width;
            const y = (p / base.width) | 0;
            const ti = (((y * 1.1) | 0) % th) * tw * 4 + (((x * 1.1) | 0) % tw) * 4;
            rr = td[ti]; gg = td[ti + 1]; bb = td[ti + 2];
        }
        d[i] = Math.min(255, Math.round(rr * shade));
        d[i + 1] = Math.min(255, Math.round(gg * shade));
        d[i + 2] = Math.min(255, Math.round(bb * shade));
    }
    elevPreview.ctx.putImageData(out, 0, 0);
}

async function paintElevFromActiveDoor() {
    const swatch = document.querySelector('#doorSeriesList .color-swatch.color-active');
    const hex = swatch?.dataset.bar || parseSwatchColor(swatch) || '#a07848';
    const textureUrl = swatch?.dataset.texture || '';
    const texture = textureUrl ? await loadDoorTexture(textureUrl) : null;
    paintElevDoors(hex, texture);
}

function loadElevationPreview(modelW) {
    if (!elevPreview.source || !elevPreview.canvas) return;
    const token = ++elevPreview.loadToken;
    const src = getElevationSrc(modelW);
    const maskSrc = getElevationMaskSrc(modelW);
    elevPreview.ready = false;
    elevPreview.baseData = null;
    elevPreview.maskData = null;

    let pending = maskSrc ? 2 : 1;
    const done = () => {
        if (token !== elevPreview.loadToken) return;
        pending -= 1;
        if (pending > 0) return;
        cacheElevPreviewBase();
        paintElevFromActiveDoor();
        centerElevationView();
        requestAnimationFrame(syncElevNavButtons);
    };

    const onSrc = () => done();
    if (elevPreview.source.getAttribute('src') === src && elevPreview.source.complete && elevPreview.source.naturalWidth) {
        onSrc();
    } else {
        elevPreview.source.addEventListener('load', onSrc, { once: true });
        elevPreview.source.src = src;
    }

    if (maskSrc && elevPreview.maskImg) {
        const onMask = () => done();
        if (elevPreview.maskImg.getAttribute('src') === maskSrc && elevPreview.maskImg.complete && elevPreview.maskImg.naturalWidth) {
            onMask();
        } else {
            elevPreview.maskImg.addEventListener('load', onMask, { once: true });
            elevPreview.maskImg.onerror = onMask;
            elevPreview.maskImg.src = maskSrc;
        }
    }
}

function initElevPreview() {
    elevPreview.source = document.getElementById('elevationImg');
    elevPreview.maskImg = document.getElementById('elevationDoorMask');
    elevPreview.canvas = document.getElementById('elevationCanvas');
    if (!elevPreview.source || !elevPreview.canvas) return;
    elevPreview.ctx = elevPreview.canvas.getContext('2d', { willReadFrequently: true });
    loadElevationPreview(nearestStdWidth(state.width));
}

/** Hot-seller cards: show stored USD as website list (no extra ratio) */
function syncHotCardPrices() {
    document.querySelectorAll('.hot-card-price').forEach((el) => {
        let base = Number(el.dataset.baseUsd);
        if (!Number.isFinite(base) || base <= 0) {
            const m = String(el.textContent || '').match(/\$\s*([\d,]+(?:\.\d+)?)/);
            base = m ? Number(m[1].replace(/,/g, '')) : 0;
            if (Number.isFinite(base) && base > 0) el.dataset.baseUsd = String(base);
        }
        if (!Number.isFinite(base) || base <= 0) return;
        const usd = Math.round(window.OutdoorQuote ? OutdoorQuote.exwToList(base) : base);
        const cny = Math.round(usd * FX_USD_CNY);
        el.innerHTML =
            '<span class="price-cny">' + formatCny(cny) + '</span>' +
            '<span class="price-usd">' + formatUsd(usd) + '</span>';
    });
}


function updatePreview() {
    const modelEl = document.getElementById('previewModel');
    const priceEl = document.getElementById('previewPrice');
    if (modelEl) modelEl.textContent = getModelName();
    if (priceEl) {
        const valEl = priceEl.querySelector('.price-value');
        if (valEl) valEl.textContent = '¥' + getBasePrice().toLocaleString();
    }
    // Update size preview (图2 四档) + door color overlay
    const modelW = nearestStdWidth(state.width);
    const outerW = elevOuterWidth[modelW] || modelW + 100;
    const elevCanvas = document.getElementById('elevationCanvas');
    if (elevCanvas) {
        elevCanvas.setAttribute(
            'aria-label',
            'Package ' + outerW + ' / ' + modelW
        );
        const preview = document.getElementById('elevationScroll')?.closest('.elevation-preview');
        if (preview) preview.classList.remove('is-scrolled');
        loadElevationPreview(modelW);
    }

    // Keep active width chip visible in horizontal strip
    const activeSize = document.querySelector('#sizeGroup .size-btn.active');
    if (activeSize && typeof activeSize.scrollIntoView === 'function') {
        activeSize.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
    
    // Standard config list = same source as Step 2
    renderStdConfig();
}

/** Center CAD in viewport (narrow: CSS; wide: scroll to mid) */
function centerElevationView() {
    const scroll = document.getElementById('elevationScroll');
    const target = document.getElementById('elevationCanvas') || document.getElementById('elevationImg');
    if (!scroll || !target) return;

    const apply = () => {
        const max = Math.max(0, scroll.scrollWidth - scroll.clientWidth);
        scroll.scrollLeft = max > 0 ? max / 2 : 0;
    };
    requestAnimationFrame(apply);
}

function syncElevNavButtons() {
    const scroll = document.getElementById('elevationScroll');
    const prev = document.getElementById('elevNavPrev');
    const next = document.getElementById('elevNavNext');
    if (!scroll || !prev || !next) return;
    const max = Math.max(0, scroll.scrollWidth - scroll.clientWidth);
    const x = scroll.scrollLeft;
    const can = max > 4;
    prev.disabled = !can || x <= 2;
    next.disabled = !can || x >= max - 2;
    prev.hidden = !can;
    next.hidden = !can;
}

function panElevationBy(delta) {
    const scroll = document.getElementById('elevationScroll');
    if (!scroll) return;
    const step = Math.max(120, Math.round(scroll.clientWidth * 0.45));
    scroll.scrollBy({ left: delta * step, behavior: 'smooth' });
}

/** Touch swipe + mouse drag + click arrows (web) */
function initElevationPan() {
    const scroll = document.getElementById('elevationScroll');
    if (!scroll) return;
    const preview = scroll.closest('.elevation-preview');
    const prev = document.getElementById('elevNavPrev');
    const next = document.getElementById('elevNavNext');
    let dragging = false;
    let moved = false;
    let startX = 0;
    let startLeft = 0;

    scroll.addEventListener('scroll', () => {
        if (!preview) return;
        const max = Math.max(0, scroll.scrollWidth - scroll.clientWidth);
        const center = max / 2;
        if (Math.abs(scroll.scrollLeft - center) > 12) preview.classList.add('is-scrolled');
        syncElevNavButtons();
    }, { passive: true });

    scroll.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        dragging = true;
        moved = false;
        startX = e.clientX;
        startLeft = scroll.scrollLeft;
        scroll.setPointerCapture(e.pointerId);
    });
    scroll.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 3) moved = true;
        scroll.scrollLeft = startLeft - dx;
    });
    const endDrag = () => { dragging = false; };
    scroll.addEventListener('pointerup', endDrag);
    scroll.addEventListener('pointercancel', endDrag);

    if (prev) {
        prev.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            panElevationBy(-1);
        });
    }
    if (next) {
        next.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            panElevationBy(1);
        });
    }

    // Keyboard when focus is on the CAD strip
    scroll.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            panElevationBy(-1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            panElevationBy(1);
        }
    });

    const afterCenter = () => {
        centerElevationView();
        requestAnimationFrame(syncElevNavButtons);
    };
    afterCenter();
    window.addEventListener('resize', () => {
        if (!dragging) afterCenter();
    }, { passive: true });

    const img = document.getElementById('elevationImg');
    if (img) img.addEventListener('load', () => requestAnimationFrame(syncElevNavButtons));
}

function focusAddAccessories(opts) {
    const scroll = !opts || opts.scroll !== false;
    const sec = document.getElementById('accSection');
    if (sec) {
        sec.classList.add('is-expanded');
        if (typeof syncAccSectionToggleLabel === 'function') syncAccSectionToggleLabel();
    }
    accListExpanded = true;
    if (typeof syncAccListCollapse === 'function') syncAccListCollapse();
    if (!scroll) return;
    const target = document.getElementById('accSection') || document.getElementById('accessoriesGrid');
    if (target) {
        try {
            target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } catch (_) {}
    }
}

/** Remove one equipment card in place — remaining cards shift up; images stay put (no list rebuild / scroll). */
function removeEquipmentCardEl(key) {
    if (!key) return;
    const list = document.getElementById('previewSpecsList');
    if (!list) return;
    const card =
        list.querySelector('.std-line-card[data-comp-key="' + key + '"]') ||
        list.querySelector('.std-line-card[data-acc-key="' + key + '"]') ||
        list.querySelector('.std-line-card[data-remove-key="' + key + '"]');
    if (card) card.remove();
    if (typeof syncStdListToggleLabel === 'function') syncStdListToggleLabel();
}

function selectedAccessoryKeys() {
    const std = new Set(activeStdKeys());
    return Object.keys(state.accessories || {}).filter((k) => {
        if (!state.accessories[k]) return false;
        if (std.has(k)) return false;
        if (isRemovedFromStd(k)) return false;
        return true;
    });
}

/** Selected optional accessory shown inside Equipment list (with ×). */
function renderListAccessoryCard(key) {
    const m = itemMeta(key);
    const name = t('acc.' + key) || t('item.' + key) || m.cn || m.en || key;
    const detail = t('acc.' + key + '.detail') || t('item.' + key + '.detail') ||
        (currentLang === 'cn' ? m.detailCn : m.detailEn) || '';
    const dim = resolveItemDim(key);
    const unitUsd = accessoryListUsd(key);
    const qty = getItemQty(key);
    const listUsd = unitUsd * qty;
    const src = itemImage(key);
    const icon = m.icon || '➕';
    const removeBtn =
        '<button type="button" class="std-line-remove" data-remove-acc="' +
        key +
        '" aria-label="' +
        t('comp.remove') +
        '" title="' +
        t('comp.remove') +
        '">×</button>';
    const media = src
        ? '<div class="std-line-media"><img src="' + src + '" alt="' + name + '" loading="lazy" ' +
          'onerror="this.parentElement.classList.add(\'is-placeholder\');this.remove();">' +
          '<span class="item-ph-icon" aria-hidden="true">' + icon + '</span></div>'
        : '<div class="std-line-media is-placeholder"><span class="item-ph-icon" aria-hidden="true">' +
          icon + '</span></div>';
    const qtyHtml = renderItemQtyControls(key);
    const detailHtml =
        '<div class="std-line-details-panel">' +
            (dim ? '<div class="std-line-dim">' + dim + '</div>' : '') +
            (detail ? '<div class="std-line-desc">' + detail + '</div>' : '') +
        '</div>';
    return (
        '<div class="std-line-card is-acc-in-list" data-comp-key="' + key + '" data-acc-key="' + key + '">' +
            removeBtn +
            '<div class="std-line-media-wrap">' + media + '</div>' +
            '<div class="std-line-body">' +
                '<strong class="std-line-name">' + name + (qty > 1 ? ' ×' + qty : '') + '</strong>' +
                detailHtml +
                renderLineFooter(listUsd, { prefix: '+' }, qtyHtml) +
            '</div>' +
        '</div>'
    );
}

function renderStdConfig() {
    const specList = document.getElementById('previewSpecsList');
    if (!specList) return;
    const configs = activeStdConfigs();
    let html = configs.map(renderStdLineCard).join('');
    html += selectedAccessoryKeys().map(renderListAccessoryCard).join('');
    specList.innerHTML = html;
    syncStdListToggleLabel();
}

function removeStdComponent(key) {
    if (!key || key === 'shedStd' || key === 'shedMini' || key === 'woodenBox') return;
    removedStdSet().add(key);
    state.accessories[key] = false;
    removeEquipmentCardEl(key);
    if (typeof renderAccessories === 'function') renderAccessories();
    if (typeof updateTotal === 'function') updateTotal();
    focusAddAccessories({ scroll: false });
}

/** Put a removed package item back into Equipment (standard). */
function restoreStdComponent(key) {
    if (!key) return;
    removedStdSet().delete(key);
    state.accessories[key] = false;
    renderStdConfig();
    if (typeof renderAccessories === 'function') renderAccessories();
    if (typeof updateTotal === 'function') updateTotal();
}

function removeAccessoryFromList(key) {
    if (!key) return;
    state.accessories[key] = false;
    removeEquipmentCardEl(key);
    if (typeof renderAccessories === 'function') renderAccessories();
    if (typeof updateTotal === 'function') updateTotal();
    focusAddAccessories({ scroll: false });
}

function addAccessoryToList(key) {
    if (!key) return;
    if (isRemovedFromStd(key)) {
        restoreStdComponent(key);
        return;
    }
    state.accessories[key] = true;
    if (supportsItemQty(key)) setItemQty(key, Math.max(1, getItemQty(key)));
    renderStdConfig();
    if (typeof renderAccessories === 'function') renderAccessories();
    if (typeof updateTotal === 'function') updateTotal();
}

function isPackageStdKey(key) {
    if (!key || !window.OutdoorQuote) return false;
    return OutdoorQuote.stdKeys(state.width, state.doorType).indexOf(key) !== -1;
}

function isRemovedFromStd(key) {
    return isPackageStdKey(key) && removedStdSet().has(key);
}

function initStdRemoveButtons() {
    const list = document.getElementById('previewSpecsList');
    if (!list || list.dataset.removeBound) return;
    list.dataset.removeBound = '1';
    list.addEventListener('click', (e) => {
        const btn = e.target.closest('.std-line-remove');
        if (!btn) return;
        e.preventDefault();
        e.stopPropagation();
        if (btn.dataset.removeAcc) {
            removeAccessoryFromList(btn.dataset.removeAcc);
            return;
        }
        removeStdComponent(btn.dataset.removeKey);
    });
}

function initItemQtyControls() {
    if (document.body.dataset.itemQtyBound) return;
    document.body.dataset.itemQtyBound = '1';
    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('.qty-btn');
        if (!btn || btn.disabled) return;
        const wrap = btn.closest('[data-qty-key]');
        const key = wrap && wrap.getAttribute('data-qty-key');
        if (!key || !supportsItemQty(key)) return;
        e.preventDefault();
        e.stopPropagation();
        const cur = getItemQty(key);
        if (btn.classList.contains('qty-plus')) setItemQty(key, cur + 1);
        else setItemQty(key, cur - 1);

        const inList = !!document.querySelector('#previewSpecsList [data-comp-key="' + key + '"]');
        const inAccPool = !!document.querySelector('#accessoriesGrid .acc-check[data-accessory="' + key + '"]');
        if (inList) renderStdConfig();
        if (inAccPool) renderAccessories();
        updateTotal();
    });
}

function initCatalogDetailsToggle() {
    if (document.body.dataset.catalogDetailsBound) return;
    document.body.dataset.catalogDetailsBound = '1';
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.std-line-details');
        if (!btn) return;
        e.preventDefault();
        e.stopPropagation();
        const card = btn.closest('.std-line-card');
        if (!card) return;
        const open = card.classList.toggle('is-details-open');
        btn.textContent = open ? t('hot.less') : t('hot.more');
    });
}

function syncStdListToggleLabel() {
    const wrap = document.getElementById('detailSpecs');
    const btn = document.getElementById('stdListToggle');
    if (!wrap || !btn) return;
    const open = wrap.classList.contains('is-expanded');
    btn.textContent = open ? '▴' : '▾';
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.title = open ? t('hot.less') : t('hot.more');
}

function initStdListToggle() {
    const wrap = document.getElementById('detailSpecs');
    const btn = document.getElementById('stdListToggle');
    if (!wrap || !btn || btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
        wrap.classList.toggle('is-expanded');
        syncStdListToggleLabel();
    });
}

function syncAccSectionToggleLabel() {
    const wrap = document.getElementById('accSection');
    const btn = document.getElementById('accSectionToggle');
    if (!wrap || !btn) return;
    const open = wrap.classList.contains('is-expanded');
    btn.textContent = open ? '▴' : '▾';
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.title = open ? t('hot.less') : t('hot.more');
}

function initAccSectionToggle() {
    const wrap = document.getElementById('accSection');
    const btn = document.getElementById('accSectionToggle');
    if (!wrap || !btn || btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
        wrap.classList.toggle('is-expanded');
        syncAccSectionToggleLabel();
    });
    syncAccSectionToggleLabel();
}

const STD_LAYOUT_KEY = 'dd-std-layout';

function applyStdLayout(layout) {
    const list = document.getElementById('previewSpecsList');
    const acc = document.getElementById('accessoriesGrid');
    const switcher = document.querySelector('#detailSpecs .std-layout-switch');
    if (!list || !switcher) return;
    const mode = (layout === 'grid' || layout === 'large') ? layout : 'list';
    list.classList.toggle('is-grid', mode === 'grid');
    list.classList.toggle('is-large', mode === 'large');
    if (acc) {
        acc.classList.toggle('is-grid', mode === 'grid');
        acc.classList.toggle('is-large', mode === 'large');
    }
    switcher.querySelectorAll('.std-layout-btn').forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.layout === mode);
    });
    try { localStorage.setItem(STD_LAYOUT_KEY, mode); } catch (_) {}
}

function initStdLayoutSwitch() {
    const switcher = document.querySelector('#detailSpecs .std-layout-switch');
    if (!switcher || switcher.dataset.bound) return;
    switcher.dataset.bound = '1';
    let saved = 'list';
    try { saved = localStorage.getItem(STD_LAYOUT_KEY) || 'list'; } catch (_) {}
    applyStdLayout(saved);
    switcher.addEventListener('click', (e) => {
        const btn = e.target.closest('.std-layout-btn');
        if (!btn) return;
        applyStdLayout(btn.dataset.layout);
    });
}

function parseSwatchColor(swatch) {
    if (!swatch) return '';
    if (swatch.dataset.bar) return swatch.dataset.bar;
    const preview = swatch.querySelector('.sw-preview');
    if (!preview) return '';
    const inline = preview.style.background || preview.style.backgroundColor || '';
    if (inline) {
        const hex = inline.match(/#([0-9a-fA-F]{3,8})/);
        if (hex) return '#' + hex[1];
        if (!/url\(/i.test(inline)) return inline;
    }
    return getComputedStyle(preview).backgroundColor || '';
}

function colorLuminance(cssColor) {
    const ctx = document.createElement('canvas').getContext('2d');
    if (!ctx) return 0.5;
    ctx.fillStyle = '#000';
    ctx.fillStyle = cssColor;
    const resolved = ctx.fillStyle;
    let r = 0, g = 0, b = 0;
    if (resolved.startsWith('#')) {
        let h = resolved.slice(1);
        if (h.length === 3) h = h.split('').map(c => c + c).join('');
        r = parseInt(h.slice(0, 2), 16);
        g = parseInt(h.slice(2, 4), 16);
        b = parseInt(h.slice(4, 6), 16);
    } else {
        const m = resolved.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (!m) return 0.5;
        r = +m[1]; g = +m[2]; b = +m[3];
    }
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function syncColorSelectedBar(swatch, barId) {
    const bar = document.getElementById(barId || 'colorSelectedInfo');
    if (!bar || !swatch) return;
    const texture = swatch.dataset.texture;
    const color = parseSwatchColor(swatch);
    if (texture) {
        bar.style.backgroundImage = `url('${texture}')`;
        bar.style.backgroundSize = 'cover';
        bar.style.backgroundPosition = 'center';
        bar.style.backgroundColor = color || '#333';
    } else {
        bar.style.backgroundImage = '';
        bar.style.backgroundSize = '';
        bar.style.backgroundPosition = '';
        if (color) bar.style.backgroundColor = color;
    }
    const light = color ? colorLuminance(color) > 0.62 : false;
    bar.classList.toggle('is-light', light);
    bar.classList.toggle('is-dark', !light);
    bar.classList.toggle('has-texture', !!texture);
}

function renderComponents() {
    // Interior list lives in Step 1「本型号标准配置」only
    renderStdConfig();
}

function libPriceCny(key) {
    if (!window.OutdoorQuote) return 0;
    return Math.round(OutdoorQuote.listUsd(key, 2200, DEFAULT_QTY_TIER) * FX_USD_CNY);
}

const productLibrary = [
    { id: 'lib-fridge', cat: 'fridge', sku: 'JG-150', name: { en: 'Outdoor Fridge', cn: '户外冰箱' }, dim: '595×870×596 mm', priceCny: libPriceCny('fridge'), icon: '🧊', img: MASTER_IMG('fridge'), itemKey: 'fridge' },
    { id: 'lib-fridge2', cat: 'fridge', sku: 'BC-152', name: { en: 'Drawer Fridge', cn: '抽屉冰箱' }, dim: '598×870×595 mm', priceCny: libPriceCny('drawerFridge'), icon: '🧊', img: MASTER_IMG('drawer-fridge'), itemKey: 'drawerFridge' },
    { id: 'lib-hood', cat: 'appliance', sku: 'HOOD', name: { en: 'Range Hood', cn: '油烟机' }, dim: '598×176×290 mm', priceCny: libPriceCny('rangeHood'), icon: '💨', img: MASTER_IMG('range-hood'), itemKey: 'rangeHood' },
    { id: 'lib-bbq', cat: 'bbq', sku: 'BBQ', name: { en: 'BBQ Grill', cn: '烧烤炉' }, dim: '770×591×504 mm', priceCny: libPriceCny('bbq'), icon: '🔥', img: MASTER_IMG('bbq-grill'), itemKey: 'bbq' },
    { id: 'lib-sink', cat: 'sink', sku: 'SINK', name: { en: 'Sink', cn: '水槽' }, dim: '560×420×215 mm', priceCny: libPriceCny('sink'), icon: '🚰', img: MASTER_IMG('sink'), itemKey: 'sink' },
    { id: 'lib-keg', cat: 'appliance', sku: 'KEG', name: { en: 'Kegerator', cn: '啤酒机' }, dim: '606×900×633 mm', priceCny: libPriceCny('kegerator'), icon: '🍺', img: MASTER_IMG('kegerator'), itemKey: 'kegerator' },
    { id: 'lib-kamado', cat: 'appliance', sku: 'KAMADO', name: { en: 'Kamado', cn: '陶瓷炭烤炉' }, dim: '18"', priceCny: libPriceCny('kamado'), icon: '🍕', img: MASTER_IMG('kamado'), itemKey: 'kamado' },
    { id: 'lib-tv', cat: 'appliance', sku: 'TV', name: { en: 'TV', cn: '电视' }, dim: '—', priceCny: libPriceCny('tv'), icon: '📺', img: MASTER_IMG('tv'), itemKey: 'tv' },
    { id: 'lib-tv-bracket', cat: 'appliance', sku: 'TV-BRACKET', name: { en: 'TV Bracket', cn: '电视支架' }, dim: '645×420 mm', priceCny: libPriceCny('tvBracket'), icon: '📐', img: MASTER_IMG('tv-bracket'), itemKey: 'tvBracket' }
];

const libCats = [
    { id: 'all', en: 'All', cn: '全部' },
    { id: 'fridge', en: 'Fridge', cn: '冰箱' },
    { id: 'appliance', en: 'Appliance', cn: '电器' },
    { id: 'bbq', en: 'BBQ', cn: '烧烤' },
    { id: 'sink', en: 'Sink', cn: '水槽' },
    { id: 'storage', en: 'Storage', cn: '储物' }
];

let libFilter = 'all';

function accessoryListUsd(key) {
    return window.OutdoorQuote ? OutdoorQuote.listUsd(key, state.width, state.qtyTier) : 0;
}

function accessoryPriceCny(key) {
    return Math.round(accessoryListUsd(key) * FX_USD_CNY);
}

function renderAccLineCard(item) {
    const key = item.key;
    const m = itemMeta(key);
    const name = t('acc.' + key) || m.cn || m.en || key;
    const detail = t('acc.' + key + '.detail') || (currentLang === 'cn' ? m.detailCn : m.detailEn) || '';
    const dim = resolveItemDim(key);
    const unitUsd = accessoryListUsd(key);
    const qty = getItemQty(key);
    const listUsd = unitUsd * qty;
    const price = Math.round(listUsd * FX_USD_CNY);
    const src = itemImage(key);
    const icon = m.icon || '➕';
    const fit = checkFitsCabinet(dim);
    const blocked = !!(item.incompatible || (!fit.ok && !fit.unknown));
    const caution = !blocked && !!item.notRecommended;
    const restoreStd = !blocked && !!item.restoreStd;
    const warn = (blocked || caution)
        ? '<span class="acc-warn">' + t(blocked ? 'config.optBlocked' : 'config.optNotRec') + '</span>'
        : '';
    const media = src
        ? '<div class="std-line-media"><img src="' + src + '" alt="' + name + '" loading="lazy" onerror="this.parentElement.classList.add(\'is-placeholder\');this.remove();"><span class="item-ph-icon" aria-hidden="true">' + icon + '</span></div>'
        : '<div class="std-line-media is-placeholder"><span class="item-ph-icon" aria-hidden="true">' + icon + '</span></div>';
    // Pending pool: always gray 待选 (never is-checked here)
    const stateClass = blocked ? ' is-disabled' : (caution ? ' is-not-rec' : '');
    const detailHtml =
        '<div class="std-line-details-panel">' +
            (dim ? '<div class="std-line-dim">' + dim + '</div>' : '') +
            (detail ? '<div class="std-line-desc">' + detail + '</div>' : '') +
            warn +
        '</div>';
    const qtyHtml = renderItemQtyControls(key, { disabled: true });
    const pricePrefix = restoreStd ? '' : '+';

    return (
        '<label class="std-line-card acc-line-card is-pending ' + stateClass + '"' +
            (blocked ? ' aria-disabled="true"' : '') +
            (restoreStd ? ' data-restore-std="1"' : '') +
            ' data-acc-key="' + key + '">' +
            '<input type="checkbox" class="acc-check" data-accessory="' + key + '" data-price="' + price + '" ' +
                (restoreStd ? 'data-restore-std="1" ' : '') +
                (blocked ? ' disabled' : '') + '>' +
            '<div class="std-line-media-wrap">' + media + '</div>' +
            '<div class="std-line-body">' +
                '<strong class="std-line-name">' + name + '</strong>' +
                detailHtml +
                renderLineFooter(listUsd, { prefix: pricePrefix }, qtyHtml) +
            '</div>' +
        '</label>'
    );
}

function renderExtraItemCard(item) {
    const name = item.name[currentLang] || item.name.en;
    const media = item.img
        ? '<div class="std-line-media"><img src="' + item.img + '" alt="' + name + '" loading="lazy" onerror="this.parentElement.classList.add(\'is-placeholder\');this.remove();"><span class="item-ph-icon" aria-hidden="true">' + item.icon + '</span></div>'
        : '<div class="std-line-media is-placeholder"><span class="item-ph-icon" aria-hidden="true">' + item.icon + '</span></div>';
    return (
        '<div class="std-line-card acc-line-card is-checked" data-extra-id="' + item.id + '">' +
            '<button type="button" class="std-line-remove acc-remove" data-remove-extra="' + item.id + '" aria-label="Remove">×</button>' +
            '<div class="std-line-media-wrap">' + media + '</div>' +
            '<div class="std-line-body">' +
                '<strong class="std-line-name">' + name + '</strong>' +
                '<div class="std-line-details-panel">' + item.dim + '</div>' +
                '<div class="std-line-footer">' +
                    '<span class="std-line-price">' + formatDualPrice(item.priceCny, { prefix: '+' }) + '</span>' +
                '</div>' +
            '</div>' +
        '</div>'
    );
}

function renderAddCard() {
    return (
        '<button type="button" class="std-line-card std-add-card acc-add-card" id="openProductLibrary">' +
            '<div class="std-line-media-wrap"><div class="std-line-media is-placeholder std-add-media"><span class="item-ph-icon">＋</span></div></div>' +
            '<div class="std-line-body">' +
                '<strong class="std-line-name" data-i18n-keep>' + t('lib.add') + '</strong>' +
                '<div class="std-line-details-panel" style="display:block">' + t('lib.addHint') + '</div>' +
            '</div>' +
        '</button>'
    );
}

/** Parse "W×D×H mm" → [w,d,h] numbers */
function parseDimMm(dimStr) {
    const nums = String(dimStr || '').match(/\d+(?:\.\d+)?/g);
    if (!nums || nums.length < 2) return null;
    return nums.slice(0, 3).map(Number);
}

/** Cabinet cavity reference: width × 900 × 2250 */
function cabinetCavityMm() {
    return [state.width || 2200, 900, 2250];
}

/**
 * Fit check: product dims (any orientation) must fit inside cavity.
 * Returns { ok, unknown, cavity }
 */
function checkFitsCabinet(dimStr) {
    const cavity = cabinetCavityMm();
    const prod = parseDimMm(dimStr);
    if (!prod) return { ok: true, unknown: true, cavity };
    const p = prod.slice();
    while (p.length < 3) p.push(0);
    p.sort((a, b) => a - b);
    const c = cavity.slice().sort((a, b) => a - b);
    const ok = p[0] <= c[0] && p[1] <= c[1] && p[2] <= c[2];
    return { ok, unknown: false, cavity };
}

function libFitLabel(fit) {
    if (fit.unknown) return '';
    return fit.ok ? t('lib.fitOk') : t('lib.fitNo');
}

let accListExpanded = false;

function syncAccListCollapse() {
    const grid = accessoriesGrid;
    const btn = document.getElementById('accExpandToggle');
    if (!grid || !btn) return;
    const count = grid.querySelectorAll('.std-line-card').length;
    const needToggle = count > 4;
    grid.classList.toggle('is-collapsed', needToggle && !accListExpanded);
    btn.hidden = !needToggle;
    if (!needToggle) {
        accListExpanded = false;
        return;
    }
    btn.textContent = accListExpanded ? t('config.accCollapse') : t('config.accExpand');
    btn.setAttribute('aria-expanded', accListExpanded ? 'true' : 'false');
}

function initAccListToggle() {
    const btn = document.getElementById('accExpandToggle');
    if (!btn || btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
        accListExpanded = !accListExpanded;
        syncAccListCollapse();
    });
}

function renderAccessories() {
    if (!accessoriesGrid) return;
    const opts = window.OutdoorQuote
        ? OutdoorQuote.optionalKeys(state.width, state.doorType)
        : [];
    // Items removed from standard package reappear as gray pending add-ons
    if (window.OutdoorQuote) {
        const active = new Set(activeStdKeys());
        const L = String(nearestStdWidth(state.width));
        const nrec = (window.OUTDOOR_QUOTE && window.OUTDOOR_QUOTE.notRecommended) || {};
        const blockedMap = (window.OUTDOOR_QUOTE && window.OUTDOOR_QUOTE.incompatible) || {};
        const notRec = new Set(nrec[L] || []);
        const blocked = new Set(blockedMap[L] || []);
        OutdoorQuote.stdKeys(state.width, state.doorType).forEach((k) => {
            if (active.has(k)) return;
            if (k === 'shedStd' || k === 'shedMini' || k === 'woodenBox') return;
            if (!opts.some((o) => o.key === k)) {
                opts.push({
                    key: k,
                    notRecommended: notRec.has(k) && !blocked.has(k),
                    incompatible: blocked.has(k),
                    restoreStd: true
                });
            } else {
                const hit = opts.find((o) => o.key === k);
                if (hit) hit.restoreStd = true;
            }
        });
    }
    const allowed = new Set(opts.map((o) => o.key));
    Object.keys(state.accessories).forEach((k) => {
        if (!allowed.has(k) && !isRemovedFromStd(k)) state.accessories[k] = false;
    });

    // Add Accessories = gray 待选 only (selected ones live in Equipment list)
    const accData = opts.map((o) => {
        const dim = resolveItemDim(o.key);
        const fit = checkFitsCabinet(dim);
        const incompatible = !!(o.incompatible || (!fit.ok && !fit.unknown));
        const restoreStd = !incompatible && (!!o.restoreStd || isRemovedFromStd(o.key));
        if (incompatible && state.accessories[o.key]) state.accessories[o.key] = false;
        if (restoreStd) state.accessories[o.key] = false;
        const selected = !incompatible && !restoreStd && !!state.accessories[o.key];
        return {
            key: o.key,
            notRecommended: o.notRecommended,
            incompatible,
            restoreStd,
            selected
        };
    }).filter((o) => {
        if (o.incompatible) return true;
        if (o.restoreStd) return true;
        return !o.selected;
    });

    let html = accData.map(renderAccLineCard).join('');
    html += (state.extraItems || []).map(renderExtraItemCard).join('');
    html += renderAddCard();
    accessoriesGrid.innerHTML = html;

    accessoriesGrid.querySelectorAll('.acc-check').forEach((cb) => {
        cb.addEventListener('change', function () {
            if (!this.checked) {
                this.checked = false;
                return;
            }
            const key = this.dataset.accessory;
            addAccessoryToList(key);
        });
    });

    accessoriesGrid.querySelectorAll('[data-remove-extra]').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-remove-extra');
            state.extraItems = (state.extraItems || []).filter((x) => x.id !== id);
            renderAccessories();
            updateTotal();
        });
    });

    const addBtn = document.getElementById('openProductLibrary');
    if (addBtn) addBtn.addEventListener('click', () => openProductLibrary());

    initAccListToggle();
    syncAccListCollapse();
}

function getAccessoriesTotal() {
    let total = 0;
    for (const [key, checked] of Object.entries(state.accessories)) {
        if (checked) total += accessoryPriceCny(key) * getItemQty(key);
    }
    (state.extraItems || []).forEach(item => {
        if (item.itemKey && window.OutdoorQuote) {
            total += accessoryPriceCny(item.itemKey) * getItemQty(item.itemKey);
        } else {
            total += item.priceCny || 0;
        }
    });
    return total;
}

function getAccessoriesListUsd() {
    let total = 0;
    for (const [key, checked] of Object.entries(state.accessories)) {
        if (checked) total += accessoryListUsd(key) * getItemQty(key);
    }
    (state.extraItems || []).forEach(item => {
        if (item.itemKey && window.OutdoorQuote) {
            total += accessoryListUsd(item.itemKey) * getItemQty(item.itemKey);
        } else {
            total += (item.priceCny || 0) / FX_USD_CNY;
        }
    });
    return total;
}

function openProductLibrary(cat) {
    const drawer = document.getElementById('productLibrary');
    if (!drawer) return;
    if (cat) libFilter = cat;
    drawer.hidden = false;
    document.body.style.overflow = 'hidden';
    const hint = document.getElementById('libCabHint');
    if (hint) {
        hint.textContent = t('lib.cabHint').replace('{w}', String(state.width));
        hint.hidden = false;
    }
    renderProductLibrary();
}

function closeProductLibrary() {
    const drawer = document.getElementById('productLibrary');
    if (!drawer) return;
    drawer.hidden = true;
    document.body.style.overflow = '';
}

function renderProductLibrary() {
    const filters = document.getElementById('libFilters');
    const list = document.getElementById('libList');
    if (!filters || !list) return;

    filters.innerHTML = libCats.map(c => (
        '<button type="button" class="lib-filter-btn' + (libFilter === c.id ? ' active' : '') + '" data-cat="' + c.id + '">' +
        (currentLang === 'cn' ? c.cn : c.en) + '</button>'
    )).join('');

    filters.querySelectorAll('.lib-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            libFilter = btn.dataset.cat;
            renderProductLibrary();
        });
    });

    const items = productLibrary.filter(p => libFilter === 'all' || p.cat === libFilter);
    list.innerHTML = items.map(p => {
        const name = p.name[currentLang] || p.name.en;
        const already = (state.extraItems || []).some(x => x.id === p.id);
        const fit = checkFitsCabinet(p.dim);
        const fitText = libFitLabel(fit);
        const fitClass = fit.unknown ? '' : (fit.ok ? 'is-fit' : 'is-nofit');
        return (
            '<div class="std-line-card lib-item-card' + (fit.ok || fit.unknown ? '' : ' lib-item-nofit') + '">' +
                '<div class="std-line-media-wrap"><div class="std-line-media' + (p.img ? '' : ' is-placeholder') + '">' +
                    (p.img ? '<img src="' + p.img + '" alt="' + name + '" loading="lazy">' : '') +
                    '<span class="item-ph-icon" aria-hidden="true">' + p.icon + '</span></div></div>' +
                '<div class="std-line-body">' +
                    '<strong class="std-line-name">' + name + '</strong>' +
                    '<div class="std-line-details-panel">' +
                        (p.dim ? '<div class="std-line-dim">' + p.dim + '</div>' : '') +
                        (p.sku ? '<div class="std-line-desc">' + p.sku + '</div>' : '') +
                        (fitText ? '<span class="lib-fit-badge ' + fitClass + '">' + fitText + '</span>' : '') +
                    '</div>' +
                    '<div class="std-line-footer">' +
                        '<span class="std-line-price">' + formatDualPrice(p.priceCny) + '</span>' +
                        '<button type="button" class="std-line-cta lib-add-btn" data-add-lib="' + p.id + '" ' + (already ? 'disabled' : '') + '>' +
                            (already ? t('lib.added') : t('lib.addBtn')) +
                        '</button>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
    }).join('') || ('<p class="lib-empty">' + t('lib.empty') + '</p>');

    list.querySelectorAll('[data-add-lib]').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-add-lib');
            const prod = productLibrary.find(p => p.id === id);
            if (!prod) return;
            const fit = checkFitsCabinet(prod.dim);
            if (!fit.ok && !fit.unknown) {
                const msg = t('lib.fitWarn').replace('{w}', String(state.width));
                if (!window.confirm(msg)) return;
            }
            if (!(state.extraItems || []).some(x => x.id === id)) {
                state.extraItems = state.extraItems || [];
                state.extraItems.push(prod);
            }
            renderAccessories();
            updateTotal();
            closeProductLibrary();
        });
    });
}

function initProductLibrary() {
    const mask = document.getElementById('libDrawerMask');
    const close = document.getElementById('libClose');
    if (mask) mask.addEventListener('click', closeProductLibrary);
    if (close) close.addEventListener('click', closeProductLibrary);
}

function formatCny(n) {
    return '¥\u00A0' + Number(n).toLocaleString('zh-CN', { maximumFractionDigits: 0 });
}

function formatUsd(n) {
    return (
        '$\u00A0' +
        Number(n).toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })
    );
}

function cnyToUsd(cny) {
    return Number(cny) / FX_USD_CNY;
}

function updateTotal() {
    const baseUsd = getBaseListUsd();
    const accUsd = getAccessoriesListUsd();
    const finishCny = (colorState.premium || 0) + (bodyColorState.premium || 0);
    const finishUsd = finishCny / FX_USD_CNY;
    const usd = Math.round(baseUsd + accUsd + finishUsd);
    const base = Math.round(baseUsd * FX_USD_CNY);
    const accessories = Math.round(accUsd * FX_USD_CNY);
    const finish = Math.round(finishCny);
    const total = base + accessories + finish;
    const model = getModelName();
    const fxText = '1 USD = ' + FX_USD_CNY + ' CNY';

    if (totalModel) totalModel.textContent = model;
    if (totalBasePrice) totalBasePrice.textContent = formatCny(base);
    const accRow = document.getElementById('totalAccessoriesRow');
    if (accRow) accRow.style.display = accessories > 0 ? 'flex' : 'none';
    if (totalAccessoriesPrice) {
        totalAccessoriesPrice.textContent = accessories > 0 ? '+' + formatCny(accessories) : formatCny(0);
    }
    if (totalFinishPrice) totalFinishPrice.textContent = finish > 0 ? '+' + formatCny(finish) : formatCny(0);
    if (totalFinalPrice) totalFinalPrice.textContent = formatCny(total);

    const totalFx = document.getElementById('totalFxRate');
    const totalUsd = document.getElementById('totalFinalUsd');
    if (totalFx) totalFx.textContent = fxText;
    if (totalUsd) totalUsd.textContent = formatUsd(usd);

    const stickyModel = document.getElementById('stickyModel');
    const stickyDims = document.getElementById('stickyDims');
    const stickyFx = document.getElementById('stickyFx');
    const stickyCny = document.getElementById('stickyTotalCny');
    const stickyUsd = document.getElementById('stickyTotalUsd');
    const stickyMaterial = document.getElementById('stickyMaterial');
    const stickyFob = document.getElementById('stickyFob');
    if (stickyModel) stickyModel.textContent = model;
    if (stickyDims) {
        stickyDims.textContent = state.width + '*900*2200';
    }
    if (stickyFx) stickyFx.textContent = String(FX_USD_CNY);
    if (stickyCny) stickyCny.textContent = formatCny(total);
    if (stickyUsd) stickyUsd.textContent = formatUsd(usd);
    if (stickyMaterial) stickyMaterial.textContent = t('config.matVal');
    if (stickyFob) stickyFob.textContent = t('config.fob');
}

let quoteStickyInView = false;

function syncQuoteSticky() {
    const sticky = document.getElementById('quoteSticky');
    if (!sticky) return;
    const on = !!state.sizeSelected && quoteStickyInView;
    sticky.classList.toggle('is-pinned', on);
    document.body.classList.toggle('has-quote-sticky', on);
    document.body.classList.remove('has-quote-sticky-inset');
    sticky.classList.remove('is-dock-left');
    sticky.style.left = '';
    sticky.style.width = '';
}

function initQuoteSticky() {
    const sticky = document.getElementById('quoteSticky');
    const products = document.getElementById('products');
    const configurator = products && products.querySelector('.configurator');
    if (!sticky || !products || !configurator) return;

    // Show total bar only after size is chosen AND configurator is on screen
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(
            ([entry]) => {
                quoteStickyInView = !!(entry && entry.isIntersecting);
                syncQuoteSticky();
            },
            { root: null, threshold: 0, rootMargin: '-8% 0px -8% 0px' }
        );
        io.observe(configurator);
        syncQuoteSticky();
        return;
    }

    const syncPinned = () => {
        const rect = configurator.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        quoteStickyInView = rect.top < vh * 0.92 && rect.bottom > vh * 0.08;
        syncQuoteSticky();
    };
    syncPinned();
    window.addEventListener('scroll', syncPinned, { passive: true });
    window.addEventListener('resize', syncPinned);
}

function syncDoorTypeCards() {
    document.querySelectorAll('#shellDoorTabs .shell-door-tab').forEach((btn) => {
        btn.classList.toggle('is-active', btn.dataset.door === state.doorType);
    });
}

function selectDoorType(value) {
    if (!value || value === 'mini' || value === state.doorType) return;
    state.doorType = value;
    syncDoorTypeCards();
    if (typeof loadShellPreviewForDoor === 'function') loadShellPreviewForDoor();
    updateAll();
}

function initShellDoorTabs() {
    const tabs = document.getElementById('shellDoorTabs');
    if (!tabs || tabs.dataset.bound) return;
    tabs.dataset.bound = '1';
    if (state.doorType === 'mini') state.doorType = 'xt';
    syncDoorTypeCards();
    tabs.addEventListener('click', (e) => {
        const btn = e.target.closest('.shell-door-tab');
        if (!btn || btn.disabled || btn.classList.contains('is-placeholder') || !btn.dataset.door) return;
        selectDoorType(btn.dataset.door);
    });
}

function updateAll() {
    updatePreview();
    renderComponents();
    renderAccessories();
    updateTotal();
    syncHotCardPrices();
    const libDrawer = document.getElementById('productLibrary');
    if (libDrawer && !libDrawer.hidden) renderProductLibrary();
}

// =============================================
// EVENT BINDINGS
// =============================================

// Language toggle (nav + toolbar)
document.querySelectorAll('#langToggle, [data-lang-toggle]').forEach((btn) => {
    btn.addEventListener('click', toggleLanguage);
});

// Size buttons — sticky total appears only after a width is chosen
sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        sizeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.width = parseInt(btn.dataset.width, 10);
        state.sizeSelected = true;
        updateAll();
        syncQuoteSticky();
    });
});

// Internal: margin chips. MP: no margin UI (price fixed at cost×2.5).
(function initQtyTiers() {
    state.qtyTier = DEFAULT_QTY_TIER;
    const host = document.getElementById('marginTierBar');
    window.syncQtyTiersUi = function () {
        if (IS_MP_CHANNEL) {
            state.qtyTier = 'mp';
            if (host) host.hidden = true;
            return;
        }
        if (!host) return;
        host.hidden = false;
        host.querySelectorAll('[data-margin]').forEach((btn) => {
            btn.classList.toggle('is-active', btn.getAttribute('data-margin') === state.qtyTier);
        });
    };
    if (host && !IS_MP_CHANNEL) {
        host.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-margin]');
            if (!btn) return;
            state.qtyTier = btn.getAttribute('data-margin') || '30%';
            window.syncQtyTiersUi();
            if (typeof updateAll === 'function') updateAll();
            else {
                if (typeof renderStdConfig === 'function') renderStdConfig();
                if (typeof renderAccessories === 'function') renderAccessories();
                if (typeof updateTotal === 'function') updateTotal();
                if (typeof syncQuoteSticky === 'function') syncQuoteSticky();
            }
        });
    }
    window.syncQtyTiersUi();
})();

function applyChannelChrome() {
    const banner = document.getElementById('channelBanner');
    const stickyExw = document.querySelector('.quote-sticky-exw');
    const stickyFob = document.getElementById('stickyFob');
    const totalNote = document.querySelector('[data-i18n="config.total.note"]');
    if (IS_MP_CHANNEL) {
        document.documentElement.setAttribute('data-quote-channel', 'mp');
        document.body.classList.add('quote-channel-mp');
        document.body.classList.remove('quote-channel-internal');
        if (banner) banner.textContent = t('config.mpBanner');
        if (stickyExw) stickyExw.textContent = t('config.exwMp');
        if (stickyFob) stickyFob.textContent = t('config.fobMp');
        if (totalNote) totalNote.textContent = t('config.total.noteMp');
        document.querySelectorAll('.internal-only').forEach((el) => {
            el.hidden = true;
        });
    } else {
        document.documentElement.setAttribute('data-quote-channel', 'internal');
        document.body.classList.add('quote-channel-internal');
        document.body.classList.remove('quote-channel-mp');
        if (banner) banner.textContent = t('config.internalBanner');
        if (stickyExw) stickyExw.textContent = t('config.exw');
        if (stickyFob) stickyFob.textContent = t('config.fob');
        if (totalNote) totalNote.textContent = t('config.total.note');
        document.querySelectorAll('.mp-only').forEach((el) => {
            el.hidden = true;
        });
    }
}

// Shell preview: recolor black cabinet photo to selected shell swatch
const shellPreview = {
    source: null,
    maskImg: null,
    canvas: null,
    ctx: null,
    baseData: null,
    maskData: null,
    ready: false
};

function parseHexColor(hex) {
    if (!hex) return { r: 40, g: 40, b: 40 };
    let h = String(hex).trim().replace('#', '');
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    return {
        r: parseInt(h.slice(0, 2), 16) || 0,
        g: parseInt(h.slice(2, 4), 16) || 0,
        b: parseInt(h.slice(4, 6), 16) || 0
    };
}

/** Keep source lighting/matte look; only shift to selected shell color */
function tintShellRgb(tr, tg, tb, lum) {
    // Photo already has the desired matte shading — remap luminance onto target color
    const L = Math.min(1, Math.max(0, lum));
    // Black shell midtones sit low; lift so light colors still read, while keeping form light
    const s = 0.18 + Math.pow(L / 0.42, 0.92) * 0.82;
    const shade = Math.min(1.05, Math.max(0.12, s));
    return {
        r: Math.min(255, Math.round(tr * shade)),
        g: Math.min(255, Math.round(tg * shade)),
        b: Math.min(255, Math.round(tb * shade))
    };
}

function cacheShellPreviewBase() {
    if (!shellPreview.source || !shellPreview.ctx) return false;
    const img = shellPreview.source;
    const w = img.naturalWidth || img.width;
    const h = img.naturalHeight || img.height;
    if (!w || !h) return false;
    shellPreview.canvas.width = w;
    shellPreview.canvas.height = h;
    shellPreview.ctx.drawImage(img, 0, 0, w, h);
    shellPreview.baseData = shellPreview.ctx.getImageData(0, 0, w, h);
    shellPreview.maskData = null;
    const mask = shellPreview.maskImg;
    if (mask && mask.naturalWidth && state.doorType === 'xt') {
        shellPreview.ctx.drawImage(mask, 0, 0, w, h);
        shellPreview.maskData = shellPreview.ctx.getImageData(0, 0, w, h);
        shellPreview.ctx.putImageData(shellPreview.baseData, 0, 0);
    }
    shellPreview.ready = true;
    return true;
}

function renderShellPreview(hex, doorHex, doorTexture) {
    if (!shellPreview.ready && !cacheShellPreviewBase()) return;
    const base = shellPreview.baseData;
    if (!base) return;
    const { r: tr, g: tg, b: tb } = parseHexColor(hex || '#111111');
    const { r: dr, g: dg, b: db } = parseHexColor(doorHex || '#a07848');
    const out = new ImageData(new Uint8ClampedArray(base.data), base.width, base.height);
    const d = out.data;
    const src = base.data;
    const m = shellPreview.maskData ? shellPreview.maskData.data : null;
    const tw = doorTexture?.w || 0;
    const th = doorTexture?.h || 0;
    const td = doorTexture?.data || null;
    const refLum = 0.48;
    for (let i = 0, p = 0; i < d.length; i += 4, p++) {
        const pr = src[i], pg = src[i + 1], pb = src[i + 2], pa = src[i + 3];
        if (pa < 8) continue;

        // Door panels follow the 8 door colors
        if (m && m[i] >= 128) {
            const lum = (0.299 * pr + 0.587 * pg + 0.114 * pb) / 255;
            const shade = Math.min(1.35, Math.max(0.25, lum / refLum));
            let rr = dr, gg = dg, bb = db;
            if (td && tw && th) {
                const x = p % base.width;
                const y = (p / base.width) | 0;
                const ti = (((y * 1.15) | 0) % th) * tw * 4 + (((x * 1.15) | 0) % tw) * 4;
                rr = td[ti]; gg = td[ti + 1]; bb = td[ti + 2];
            }
            d[i] = Math.min(255, Math.round(rr * shade));
            d[i + 1] = Math.min(255, Math.round(gg * shade));
            d[i + 2] = Math.min(255, Math.round(bb * shade));
            continue;
        }

        const maxc = Math.max(pr, pg, pb);
        const minc = Math.min(pr, pg, pb);
        // Keep near-white studio background
        if (minc > 235 && maxc - minc < 18) {
            d[i] = pr; d[i + 1] = pg; d[i + 2] = pb;
            continue;
        }
        // Keep warm LED strip (bright yellowish)
        if (maxc > 190 && pr > pg && pg > pb + 8 && (pr - pb) > 25) {
            d[i] = pr; d[i + 1] = pg; d[i + 2] = pb;
            continue;
        }
        // Keep metallic gas struts (bright cool gray)
        if (maxc > 165 && maxc - minc < 28 && minc > 120) {
            d[i] = pr; d[i + 1] = pg; d[i + 2] = pb;
            continue;
        }
        // Keep light wood / warm midtones if no mask (avoid muddy doors)
        if (!m && maxc - minc > 25 && pr > pb + 20 && (0.299 * pr + 0.587 * pg + 0.114 * pb) > 90) {
            d[i] = pr; d[i + 1] = pg; d[i + 2] = pb;
            continue;
        }
        const lum = (0.299 * pr + 0.587 * pg + 0.114 * pb) / 255;
        const tint = tintShellRgb(tr, tg, tb, lum);
        d[i] = tint.r;
        d[i + 1] = tint.g;
        d[i + 2] = tint.b;
    }
    shellPreview.ctx.putImageData(out, 0, 0);
}

async function paintShellPreviewActive() {
    const active = document.querySelector('#bodyColorGrid .body-swatch.color-active');
    const hex = (active && (active.dataset.bar || parseSwatchColor(active))) || '#8f8b84';
    const doorSwatch = document.querySelector('#doorColorGrid .color-swatch.color-active');
    const doorHex = doorSwatch?.dataset.bar || parseSwatchColor(doorSwatch) || '#a07848';
    const textureUrl = doorSwatch?.dataset.texture || '';
    const texture = textureUrl ? await loadDoorTexture(textureUrl) : null;
    renderShellPreview(hex, doorHex, texture);
}

/** Switch flip-cover / rolling-door base photo, then re-tint */
function loadShellPreviewForDoor() {
    const srcEl = shellPreview.source || document.getElementById('shellPreviewSource');
    if (!srcEl) return;
    let next = srcEl.dataset.srcXt || 'assets/img/shell-preview.png';
    if (state.doorType === 'wm') {
        next = srcEl.dataset.srcWm || 'assets/img/shell-preview-roll.png';
    }
    shellPreview.ready = false;
    shellPreview.baseData = null;
    const paint = () => {
        cacheShellPreviewBase();
        paintShellPreviewActive();
    };
    if (srcEl.getAttribute('src') === next && srcEl.complete && srcEl.naturalWidth) {
        paint();
        return;
    }
    srcEl.addEventListener('load', paint, { once: true });
    srcEl.src = next;
}

function initShellPreview() {
    shellPreview.source = document.getElementById('shellPreviewSource');
    shellPreview.maskImg = document.getElementById('shellDoorMask');
    shellPreview.canvas = document.getElementById('shellPreviewCanvas');
    if (!shellPreview.source || !shellPreview.canvas) return;
    shellPreview.ctx = shellPreview.canvas.getContext('2d', { willReadFrequently: true });

    const onReady = () => {
        cacheShellPreviewBase();
        paintShellPreviewActive();
    };

    let pending = 1 + (shellPreview.maskImg ? 1 : 0);
    const tick = () => {
        pending -= 1;
        if (pending <= 0) onReady();
    };
    if (shellPreview.source.complete && shellPreview.source.naturalWidth) tick();
    else shellPreview.source.addEventListener('load', tick, { once: true });
    if (shellPreview.maskImg) {
        if (shellPreview.maskImg.complete && shellPreview.maskImg.naturalWidth) tick();
        else shellPreview.maskImg.addEventListener('load', tick, { once: true });
    }
}

function getColorOptions() {
    return window.COLOR_OPTIONS || null;
}

function colorItemName(item) {
    if (!item) return '';
    return (currentLang === 'cn' ? item.cn : item.en) || item.en || item.code;
}

function colorSeriesLabel(key, meta) {
    if (!meta) return key;
    const i18nKey = 'config.' + key;
    if (i18n[i18nKey]) return t(i18nKey);
    return currentLang === 'cn' ? meta.cn : meta.en;
}

function buildColorSwatchHtml(item, { body = false, active = false, more = false } = {}) {
    const name = colorItemName(item);
    const bar = item.bar || '#9ca3af';
    const img = item.img || '';
    const previewStyle = img
        ? `background-image:url('${img}');background-size:cover;background-position:center`
        : `background:${bar}`;
    const cls = [
        'color-swatch',
        'color-card',
        body ? 'body-swatch' : '',
        more ? 'color-swatch-more' : '',
        active ? 'color-active' : '',
    ].filter(Boolean).join(' ');
    const textureAttr = img ? ` data-texture="${img}"` : '';
    const title = (name ? item.code + ' — ' + name : item.code).replace(/"/g, '&quot;');
    return (
        `<button type="button" class="${cls}" data-code="${item.code}" data-premium="${item.premium || 0}" ` +
        `data-bar="${bar}" data-series="${item.series}" title="${title}"${textureAttr}>` +
        `<span class="sw-preview sw-card-preview" style="${previewStyle}"></span>` +
        `<span class="sw-meta"><strong class="sw-code">${item.code}</strong></span>` +
        `</button>`
    );
}

function orderColorItems(items, featuredCodes) {
    const byCode = new Map(items.map((it) => [it.code, it]));
    const featured = [];
    featuredCodes.forEach((code) => {
        const it = byCode.get(code);
        if (it) featured.push(it);
    });
    const featuredSet = new Set(featuredCodes);
    const rest = items
        .filter((it) => !featuredSet.has(it.code))
        .sort((a, b) => a.code.localeCompare(b.code));
    return { featured, rest };
}

function syncColorExpandUi(kind) {
    const gridId = kind === 'body' ? 'bodyColorGrid' : 'doorColorGrid';
    const btnId = kind === 'body' ? 'bodyColorExpand' : 'doorColorExpand';
    const grid = document.getElementById(gridId);
    const btn = document.getElementById(btnId);
    if (!grid || !btn) return;
    const moreCount = grid.querySelectorAll('.color-swatch-more').length;
    const expanded = !!colorExpandState[kind];
    grid.classList.toggle('is-collapsed', !expanded);
    btn.hidden = moreCount === 0;
    btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    btn.textContent = expanded ? t('config.accCollapse') : t('config.accExpand');
}

function fillColorGrid(grid, items, featuredCodes, activeCode, { body = false, kind = 'body' } = {}) {
    const { featured, rest } = orderColorItems(items, featuredCodes);
    const html =
        featured.map((it) => buildColorSwatchHtml(it, { body, active: it.code === activeCode, more: false })).join('') +
        rest.map((it) => buildColorSwatchHtml(it, { body, active: it.code === activeCode, more: true })).join('');
    grid.innerHTML = html;
    // Auto-expand if current selection is in the “more” pool
    if (rest.some((it) => it.code === activeCode)) {
        colorExpandState[kind] = true;
    }
    syncColorExpandUi(kind);
}

/** Fill shell / door / countertop pickers from COLOR_OPTIONS (Color options V3.0). */
function renderColorPickers(active) {
    const data = getColorOptions();
    const bodyGrid = document.getElementById('bodyColorGrid');
    const doorGrid = document.getElementById('doorColorGrid');
    if (!data || !bodyGrid || !doorGrid) return;

    const defs = data.defaults || {};
    const bodyDef = (active && active.body) || bodyColorState.code || defs.body || 'CK02F';
    const doorDef = (active && active.door) || colorState.code || 'CK03F';
    const topDef = (active && active.countertop) || countertopColorState.code || defs.countertop || '';

    const bodyItems = data.items.filter(
        (it) => it.scope === 'body_door' || it.series === 'xuanli'
    );
    fillColorGrid(bodyGrid, bodyItems, SHELL_FEATURED_CODES, bodyDef, { body: true, kind: 'body' });

    const doorItems = data.items.filter((it) => it.series !== 'countertop');
    fillColorGrid(doorGrid, doorItems, DOOR_FEATURED_CODES, doorDef, { body: true, kind: 'door' });

    const topBlock = document.getElementById('countertopColorBlock');
    const topGrid = document.getElementById('countertopColorGrid');
    const topItems = data.items.filter((it) => it.series === 'countertop');
    if (topBlock && topGrid && topItems.length) {
        topBlock.hidden = false;
        topGrid.innerHTML = topItems
            .map((it) => buildColorSwatchHtml(it, { body: true, active: it.code === topDef }))
            .join('');
        const topItem = topItems.find((it) => it.code === topDef) || topItems[0];
        countertopColorState.code = topItem.code;
        countertopColorState.name = colorItemName(topItem);
        countertopColorState.premium = topItem.premium || 0;
        const codeEl = document.getElementById('selectedCountertopCode');
        const nameEl = document.getElementById('selectedCountertopName');
        if (codeEl) codeEl.textContent = countertopColorState.code;
        if (nameEl) nameEl.textContent = '— ' + countertopColorState.name;
    }

    const bodyItem = bodyItems.find((it) => it.code === bodyDef) || bodyItems[0];
    if (bodyItem) {
        bodyColorState.code = bodyItem.code;
        bodyColorState.name = colorItemName(bodyItem);
        bodyColorState.premium = bodyItem.premium || 0;
        const codeEl = document.getElementById('selectedBodyColorCode');
        const nameEl = document.getElementById('selectedBodyColorName');
        if (codeEl) codeEl.textContent = bodyColorState.code;
        if (nameEl) nameEl.textContent = '— ' + bodyColorState.name;
    }

    const doorItem =
        doorItems.find((it) => it.code === doorDef) ||
        doorItems.find((it) => it.code === 'CK03F') ||
        doorItems[0];
    if (doorItem) {
        colorState.series = doorItem.series;
        colorState.code = doorItem.code;
        colorState.name = colorItemName(doorItem);
        colorState.premium = doorItem.premium || 0;
        if (selectedColorCode) selectedColorCode.textContent = colorState.code;
        if (selectedColorName) selectedColorName.textContent = '— ' + colorState.name;
    }
}

// Cabinet body color selection
document.addEventListener('click', function(e) {
    const swatch = e.target.closest('#bodyColorGrid .body-swatch');
    if (!swatch) return;
    document.querySelectorAll('#bodyColorGrid .body-swatch').forEach(s => s.classList.remove('color-active'));
    swatch.classList.add('color-active');
    bodyColorState.code = swatch.dataset.code;
    bodyColorState.premium = parseInt(swatch.dataset.premium) || 0;
    bodyColorState.name = swatch.title || swatch.querySelector('small')?.textContent || swatch.dataset.code;
    const codeEl = document.getElementById('selectedBodyColorCode');
    const nameEl = document.getElementById('selectedBodyColorName');
    if (codeEl) codeEl.textContent = bodyColorState.code;
    if (nameEl) nameEl.textContent = '— ' + bodyColorState.name;
    syncColorSelectedBar(swatch, 'bodyColorSelectedInfo');
    paintShellPreviewActive();
    updateTotal();
});

// Countertop finish selection
document.addEventListener('click', function(e) {
    const swatch = e.target.closest('#countertopColorGrid .color-swatch');
    if (!swatch) return;
    document.querySelectorAll('#countertopColorGrid .color-swatch').forEach(s => s.classList.remove('color-active'));
    swatch.classList.add('color-active');
    countertopColorState.code = swatch.dataset.code;
    countertopColorState.premium = parseInt(swatch.dataset.premium) || 0;
    countertopColorState.name = swatch.title || swatch.querySelector('small')?.textContent || swatch.dataset.code;
    const codeEl = document.getElementById('selectedCountertopCode');
    const nameEl = document.getElementById('selectedCountertopName');
    if (codeEl) codeEl.textContent = countertopColorState.code;
    if (nameEl) nameEl.textContent = '— ' + countertopColorState.name;
    syncColorSelectedBar(swatch, 'countertopSelectedInfo');
    updateTotal();
});

// Texture cache + elev sync (single color preview canvas handles shell + door)
const doorTextureCache = Object.create(null);

function loadDoorTexture(url) {
    if (!url) return Promise.resolve(null);
    if (doorTextureCache[url]) return Promise.resolve(doorTextureCache[url]);
    return new Promise((resolve) => {
        const img = new Image();
        img.decoding = 'async';
        img.onload = () => {
            const c = document.createElement('canvas');
            c.width = img.naturalWidth || img.width;
            c.height = img.naturalHeight || img.height;
            const cx = c.getContext('2d', { willReadFrequently: true });
            cx.drawImage(img, 0, 0);
            const data = {
                w: c.width,
                h: c.height,
                data: cx.getImageData(0, 0, c.width, c.height).data
            };
            doorTextureCache[url] = data;
            resolve(data);
        };
        img.onerror = () => resolve(null);
        img.src = url;
    });
}

async function paintDoorPreviewFromSwatch(swatch) {
    if (!swatch) {
        swatch = document.querySelector('#doorColorGrid .color-swatch.color-active');
    }
    if (!swatch) return;
    const hex = swatch.dataset.bar || parseSwatchColor(swatch) || '#2c2e31';
    const textureUrl = swatch.dataset.texture || '';
    const texture = textureUrl ? await loadDoorTexture(textureUrl) : null;
    paintElevDoors(hex, texture);
    paintShellPreviewActive();
}

function initDoorPreview() {
    // Legacy no-op: shell + door colors share #shellPreviewCanvas
}

// Door panel color selection (same container as shell)
document.addEventListener('click', function(e) {
    const swatch = e.target.closest('#doorColorGrid .color-swatch');
    if (!swatch) return;
    if (swatch.dataset.series) colorState.series = swatch.dataset.series;
    colorSwatches().forEach(s => s.classList.remove('color-active'));
    swatch.classList.add('color-active');
    colorState.code = swatch.dataset.code;
    colorState.premium = parseInt(swatch.dataset.premium) || 0;
    colorState.name = swatch.title || swatch.querySelector('small')?.textContent || swatch.dataset.code;
    if (selectedColorCode) selectedColorCode.textContent = colorState.code;
    if (selectedColorName) selectedColorName.textContent = '— ' + colorState.name;
    syncColorSelectedBar(swatch, 'colorSelectedInfo');
    paintDoorPreviewFromSwatch(swatch);
    updateTotal();
});

// Shell / door color “Show more”
document.addEventListener('click', function(e) {
    const btn = e.target.closest('#bodyColorExpand, #doorColorExpand');
    if (!btn) return;
    const kind = btn.id === 'bodyColorExpand' ? 'body' : 'door';
    colorExpandState[kind] = !colorExpandState[kind];
    syncColorExpandUi(kind);
});

// =============================================
// INIT
// =============================================
try {
    renderColorPickers();
    updateAll();
    applyTranslation();
    initShellDoorTabs();
    initElevPreview();
    initShellPreview();
    initDoorPreview();
    const initialBodySwatch = document.querySelector('#bodyColorGrid .body-swatch.color-active');
    if (initialBodySwatch) syncColorSelectedBar(initialBodySwatch, 'bodyColorSelectedInfo');
    const initialSwatch = document.querySelector('#doorColorGrid .color-swatch.color-active');
    if (initialSwatch) syncColorSelectedBar(initialSwatch, 'colorSelectedInfo');
    const initialTopSwatch = document.querySelector('#countertopColorGrid .color-swatch.color-active');
    if (initialTopSwatch) syncColorSelectedBar(initialTopSwatch, 'countertopSelectedInfo');
    syncColorExpandUi('body');
    syncColorExpandUi('door');
} catch (err) {
    console.error('DD quote init failed', err);
}

// =============================================
// NAVBAR & SCROLL
// =============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
});

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function closeMobileNav() {
    if (!navLinks) return;
    navLinks.classList.remove('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
}

function openMobileNav() {
    if (!navLinks) return;
    navLinks.classList.add('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
}

if (navToggle && navLinks) {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navLinks.classList.contains('open')) closeMobileNav();
        else openMobileNav();
    });

    // 点击菜单项 / 语言切换后自动收起
    navLinks.addEventListener('click', (e) => {
        if (e.target.closest('a, button, .nav-link, .lang-toggle')) {
            closeMobileNav();
        }
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            closeMobileNav();
            const navHeight = navbar.offsetHeight;
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navHeight, behavior: 'smooth' });
        }
    });
});

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const summaryField = document.getElementById('configSummary');
        if (summaryField && summaryField.value) {
            const textarea = contactForm.querySelector('textarea');
            textarea.value = textarea.value + '\n\n--- CONFIGURATION ---\n' + summaryField.value;
        }
        const btn = contactForm.querySelector('.btn-submit');
        const originalText = btn.textContent;
        btn.textContent = currentLang === 'en' ? 'Sending...' : '发送中...';
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = currentLang === 'en' ? 'Message Sent! ✓' : '已发送！✓';
            btn.style.background = '#2d8a4e';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.disabled = false;
                contactForm.reset();
            }, 3000);
        }, 1500);
    });
}

// Fade-in observer — threshold 0 so tall sections (color grids) still reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0, rootMargin: '0px 0px -10% 0px' });

document.querySelectorAll('.section, .config-step, .config-total, .case-card, .hot-card, .specs-table, .step1-panel').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    observer.observe(el);
    // Reveal immediately if already in / near viewport (avoids white screen on tall pages)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        observer.unobserve(el);
    }
});

// =============================================
// GLOBAL: Build summary string for form
// =============================================
function buildSummaryString() {
    try {
        const model = document.getElementById('previewModel')?.textContent || '';
        const width = document.querySelector('#sizeGroup .size-btn.active')?.dataset.width || String(state.width || 2200);
        const bodyCode = document.getElementById('selectedBodyColorCode')?.textContent || '';
        const bodyName = document.getElementById('selectedBodyColorName')?.textContent?.replace('— ', '') || '';
        const colorCode = document.getElementById('selectedColorCode')?.textContent || '';
        const colorName = document.getElementById('selectedColorName')?.textContent?.replace('— ', '') || '';
        const topCode = document.getElementById('selectedCountertopCode')?.textContent || '';
        const topName = document.getElementById('selectedCountertopName')?.textContent?.replace('— ', '') || '';
        const totalPrice = document.getElementById('totalFinalPrice')?.textContent || '';

        const accItems = [];
        document.querySelectorAll('#accessoriesGrid input[type="checkbox"]').forEach(cb => {
            if (cb.checked) {
                const label = cb.closest('.acc-line-card')?.querySelector('.std-line-name')?.textContent || cb.dataset.accessory;
                accItems.push(label);
            }
        });
        const stdNames = activeStdConfigs().map((c) => {
            const label = t(c.nameKey) || c.defaultEn;
            const q = getItemQty(c.key);
            return q > 1 ? label + ' ×' + q : label;
        });

        const tierKey = {
            '30%': 'config.tier30',
            '25%': 'config.tier25',
            '20%': 'config.tier20',
            '15%': 'config.tier15m',
            '1-5': 'config.tier25',
            '6-20': 'config.tier20',
            '20+': 'config.tier15m',
            mp: 'config.exwMp'
        }[state.qtyTier];
        const tierLabel = tierKey ? t(tierKey) : state.qtyTier;
        const dims = `${width} × 900 × 2200 mm`;
        const usdTotal = document.getElementById('totalFinalUsd')?.textContent || '';
        const topLineEn = topCode && topCode !== '—' ? `Countertop: ${topCode} — ${topName}` : null;
        const topLineCn = topCode && topCode !== '—' ? `台面颜色：${topCode} — ${topName}` : null;
        const lines = currentLang === 'en'
            ? [`Model: ${model}`, `Size: ${dims}`, `Website price · ${tierLabel}`, `Package: ${stdNames.join(', ')}`, `Body Color: ${bodyCode} — ${bodyName}`, `Door Color: ${colorCode} — ${colorName}`, topLineEn, `Options: ${accItems.length ? accItems.join(', ') : 'none'}`, `Estimated Total: ${totalPrice} / ${usdTotal}`].filter(Boolean)
            : [`型号：${model}`, `尺寸：${dims}`, `网站报价 · ${tierLabel}`, `标配：${stdNames.join('、')}`, `箱体颜色：${bodyCode} — ${bodyName}`, `门板颜色：${colorCode} — ${colorName}`, topLineCn, `选配：${accItems.length ? accItems.join('、') : '无'}`, `预估总价：${totalPrice} / ${usdTotal}`].filter(Boolean);
        return lines.join('\n');
    } catch(e) {
        return currentLang === 'en' ? 'Configuration: see selections above' : '配置：请参考上方选择';
    }
}

// =============================================
// HOT SELLERS TAB SWITCHING + CARD EXPAND
// =============================================
function hotToggleLabel(expanded) {
    return expanded ? t('hot.less') : t('hot.more');
}

function updateHotCardToggleLabels() {
    document.querySelectorAll('.hot-card-toggle').forEach(btn => {
        const card = btn.closest('.hot-card');
        btn.textContent = hotToggleLabel(card && card.classList.contains('is-expanded'));
    });
}

function initHotCardExpand() {
    // Details always visible — no expand toggle
    document.querySelectorAll('.hot-card-toggle').forEach((btn) => btn.remove());
    document.querySelectorAll('.hot-card').forEach((card) => {
        card.classList.add('is-expanded');
    });
}

function buildCurrentOwnerPack() {
    if (!window.CustomerPick || !window.OutdoorQuote) return null;
    const selected = Object.keys(state.accessories || {}).filter((k) => state.accessories[k]);
    const materials = collectSelectedMaterials();
    return CustomerPick.attachMp({
        v: 1,
        kind: CustomerPick.KIND,
        role: 'owner',
        doorType: state.doorType,
        width: state.width,
        qtyTier: state.qtyTier || DEFAULT_QTY_TIER,
        stdKeys: activeStdKeys(),
        itemQty: state.itemQty || {},
        offerKeys: [],
        selected: selected,
        materials: materials,
        createdAt: new Date().toISOString().slice(0, 10)
    });
}

/** Snapshot shell / door / countertop picks for owner quote + mini-program import */
function collectSelectedMaterials() {
    const CO = window.COLOR_OPTIONS;
    const findItem = (code) => {
        if (!CO || !code || !Array.isArray(CO.items)) return null;
        return CO.items.find((it) => it.code === code) || null;
    };
    const bodyItem = findItem(bodyColorState.code);
    const doorItem = findItem(colorState.code);
    const topItem = findItem(countertopColorState.code);
    const pick = (kind, stateObj, item) => ({
        kind: kind,
        code: stateObj.code || (item && item.code) || '',
        name: stateObj.name || (item && (item.cn || item.en)) || '',
        bar: (item && item.bar) || '',
        img: (item && item.img) || '',
        premium: Number(stateObj.premium) || (item && item.premium) || 0
    });
    return {
        body: pick('body', bodyColorState, bodyItem),
        door: pick('door', colorState, doorItem),
        countertop: pick('countertop', countertopColorState, topItem)
    };
}

function shareOwnerShow() {
    if (!window.CustomerPick || !window.OutdoorQuote) {
        alert(t('config.openOwnerShow.fail'));
        return;
    }
    const pack = buildCurrentOwnerPack();
    if (!pack) {
        alert(t('config.openOwnerShow.fail'));
        return;
    }
    const url = CustomerPick.ownerUrl(pack);
    if (!url) {
        alert(t('config.openOwnerShow.fail'));
        return;
    }
    CustomerPick.copyText(url)
        .then(() => {
            alert(t('config.openOwnerShow.copied') + '\n' + url);
            window.open(url, '_blank', 'noopener');
        })
        .catch(() => {
            prompt(t('config.openOwnerShow.copied'), url);
            window.open(url, '_blank', 'noopener');
        });
}

function shareCustomerPickLink() {
    if (!window.CustomerPick || !window.OutdoorQuote) {
        alert(t('config.customerPick.fail'));
        return;
    }
    const pack = CustomerPick.buildOutboundPack({
        width: state.width,
        doorType: state.doorType,
        qtyTier: state.qtyTier || DEFAULT_QTY_TIER,
        stdKeys: activeStdKeys(),
        accessories: state.accessories || {},
        itemQty: state.itemQty || {},
        materials: collectSelectedMaterials()
    });
    if (!pack) {
        alert(t('config.customerPick.fail'));
        return;
    }
    const url = CustomerPick.pickUrl(pack, 'customer-pick.html');
    CustomerPick.copyText(url)
        .then(() => {
            alert(t('config.customerPick.copied') + '\n' + url);
        })
        .catch(() => {
            prompt(t('config.customerPick.copied'), url);
        });
}

function shareMpImportCode() {
    if (!window.CustomerPick || !window.OutdoorQuote) {
        alert(t('config.mpImport.fail'));
        return;
    }
    const pack = buildCurrentOwnerPack();
    const text = pack ? CustomerPick.mpImportText(pack) : '';
    if (!text) {
        alert(t('config.mpImport.fail'));
        return;
    }
    CustomerPick.copyText(text)
        .then(() => alert(t('config.mpImport.copied')))
        .catch(() => prompt(t('config.mpImport.copied'), text));
}

function applyCustomerPickReturn(pack) {
    if (!pack || pack.kind !== CustomerPick.KIND) return false;
    const width = Number(pack.width) || state.width;
    if ([2200, 2900, 3200, 3500].indexOf(width) !== -1) state.width = width;
    if (pack.doorType === 'xt' || pack.doorType === 'wm') state.doorType = pack.doorType;
    if (pack.qtyTier) state.qtyTier = pack.qtyTier;

    // Align package: restore all std from pack, clear removals not in return intent
    if (Array.isArray(pack.stdKeys)) {
        const want = new Set(pack.stdKeys);
        const allStd = OutdoorQuote.stdKeys(state.width, state.doorType);
        const removed = removedStdSet();
        removed.clear();
        allStd.forEach((k) => {
            if (!want.has(k) && k !== 'shedStd' && k !== 'shedMini' && k !== 'woodenBox') {
                removed.add(k);
            }
        });
    }

    state.accessories = state.accessories || {};
    Object.keys(state.accessories).forEach((k) => {
        state.accessories[k] = false;
    });
    (pack.selected || []).forEach((k) => {
        state.accessories[k] = true;
    });
    if (pack.itemQty && typeof pack.itemQty === 'object') {
        state.itemQty = Object.assign({}, state.itemQty || {}, pack.itemQty);
    }

    // Sync size / door UI
    document.querySelectorAll('#sizeGroup .size-btn').forEach((btn) => {
        btn.classList.toggle('active', Number(btn.dataset.width) === state.width);
    });
    document.querySelectorAll('.shell-door-tab').forEach((btn) => {
        btn.classList.toggle('is-active', btn.dataset.door === state.doorType);
    });

    if (typeof renderStdConfig === 'function') renderStdConfig();
    if (typeof renderAccessories === 'function') renderAccessories();
    if (typeof updatePreview === 'function') updatePreview();
    if (typeof updateTotal === 'function') updateTotal();
    if (typeof syncDoorTypeCards === 'function') syncDoorTypeCards();
    return true;
}

function initCustomerPickShare() {
    ['btnCustomerPick', 'btnCustomerPickTop'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', shareCustomerPickLink);
    });
    const ownerBtn = document.getElementById('btnOwnerShow');
    if (ownerBtn) ownerBtn.addEventListener('click', shareOwnerShow);
    const mpBtn = document.getElementById('btnMpImport');
    if (mpBtn) mpBtn.addEventListener('click', shareMpImportCode);
}

function consumeCustomerPickReturnHash() {
    if (!window.CustomerPick) return;
    const raw = String(location.hash || '').replace(/^#/, '');
    if (!raw || raw.indexOf('pickreturn=') !== 0) return;
    const pack = CustomerPick.decodePack(raw);
    if (!pack || pack.role !== 'return') return;
    if (applyCustomerPickReturn(pack)) {
        history.replaceState(null, '', location.pathname + location.search);
        setTimeout(() => {
            alert(t('config.customerPick.imported'));
            const total = document.getElementById('configTotal');
            if (total) total.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    applyChannelChrome();
    if (typeof window.syncQtyTiersUi === 'function') window.syncQtyTiersUi();

    const tabs = document.querySelectorAll('.hot-tab');
    const grids = document.querySelectorAll('.hot-grid');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Hide all grids
            grids.forEach(g => g.classList.remove('active'));
            
            // Show selected grid
            const setId = this.dataset.set;
            const target = document.getElementById('set-' + setId);
            if (target) {
                target.classList.add('active');
            }
        });
    });

    initHotCardExpand();
    initStdListToggle();
    initAccSectionToggle();
    initStdLayoutSwitch();
    initStdRemoveButtons();
    initItemQtyControls();
    initCatalogDetailsToggle();
    initProductLibrary();
    initElevationPan();
    initQuoteSticky();
    initShellDoorTabs();
    syncDoorTypeCards();
    initCustomerPickShare();
    consumeCustomerPickReturnHash();
    updateTotal();
    syncHotCardPrices();
});

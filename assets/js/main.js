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
    'config.desc':    { en: 'Select your size, choose your components, add accessories — see the price instantly.', cn: '选择尺寸、搭配组件、添加配件——价格即时可见。' },
    'config.openCustom': { en: 'Custom Design', cn: '个性定制' },
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
    'config.step1.title': { en: 'Choose Size & Door Style', cn: '选择尺寸与门型' },
    'config.step1.desc':  { en: 'All cabinets: 900mm deep × 2250mm high. Select width & door — standard components are listed in this model.', cn: '标准柜体：深900mm × 高2250mm。选择尺寸与门型，本型号标准配置见右侧清单。' },
    'config.doorType': { en: 'Door Type', cn: '门型' },
    'config.topFlip':  { en: 'Top-Flip', cn: '上翻门' },
    'config.rolling':  { en: 'Rolling Shutter', cn: '卷帘门' },
    'config.width':    { en: 'Cabinet Width', cn: '柜体宽度' },
    'config.material': { en: 'Material:', cn: '材质：' },
    'config.matVal':   { en: 'Zinc-Aluminum-Magnesium Alloy + Galvanized Steel', cn: '锌铝镁合金 + 镀锌钢' },
    'config.fob':      { en: 'FOB China (base)', cn: '中国离岸价（基础）' },
    'config.dlSpec':   { en: '↓ Download Spec Sheet', cn: '↓ 下载规格书' },
    'config.step2.title': { en: 'Configure Interior Components', cn: '配置内部组件' },
    'config.step2.desc':  { en: 'Standard configuration for this size is pre-selected. Adjust as needed.', cn: '该尺寸标准配置已预选，可按需调整。' },
    'config.step3.title': { en: 'Add Accessories', cn: '添加配件' },
    'config.step3.desc':  { en: 'Enhance your outdoor kitchen with optional extras.', cn: '用可选配件升级您的户外厨房。' },
    'config.step4.title': { en: 'Select Door Colors', cn: '选择门板颜色' },
    'config.step4.desc':  { en: 'Choose door panel colors — codes appear in your quote.', cn: '选择门板颜色——色号将出现在报价中。' },
    'config.bodyColor':   { en: 'Shell Color', cn: '柜体颜色' },
    'config.shellPreview':{ en: 'Shell Preview', cn: '柜体预览' },
    'config.doorPreview': { en: 'Door Panel Preview', cn: '门板预览' },
    'config.doorColor':   { en: 'Door Panel Color', cn: '门板颜色' },
    'config.bodySelected':{ en: 'Shell: ', cn: '柜体：' },
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
    'config.countertopNote':  { en: 'Upgrade your countertop with these premium options.', cn: '用以下高端选项升级您的台面。' },
    'config.selected':     { en: 'Selected: ', cn: '已选：' },
    'config.dlColor':      { en: '↓ Download Full Color Catalog', cn: '↓ 下载完整色卡' },
    'config.total.title':  { en: 'Configuration Summary', cn: '配置摘要' },
    'config.total.base':   { en: 'Base Unit', cn: '基础单元' },
    'config.total.acc':    { en: 'Accessories', cn: '配件' },
    'config.total.finish': { en: 'Finish Upgrade', cn: '饰面升级' },
    'config.total.total':  { en: 'Estimated Total (FOB)', cn: '预估总价（FOB）' },
    'config.total.note':   { en: '* Price includes tax & packaging. Shipping quoted separately.', cn: '* 价格含税含包装，运费另计。' },
    'config.total.cta':    { en: 'Request Quote →', cn: '索取报价 →' },
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
    'contact.emailLabel':   { en: 'Email', cn: '邮箱' },
    'contact.phoneLabel':   { en: 'Phone / WhatsApp', cn: '电话 / WhatsApp' },
    'contact.officeLabel':  { en: 'Office', cn: '办公地址' },
    'contact.officeAddr':   { en: 'Guangdong, China', cn: '中国广东' },
    'contact.officeSvc':    { en: 'Serving clients worldwide', cn: '服务全球客户' },
    'contact.tradeLabel':   { en: 'Trade Terms', cn: '贸易条款' },
    'contact.tradeTerms':   { en: 'FOB / CIF / DDP available', cn: '可做FOB / CIF / DDP' },
    'contact.moq':          { en: 'MOQ: 1 unit', cn: '起订量：1台' },
    'contact.namePh':       { en: 'Your Name *', cn: '您的姓名 *' },
    'contact.emailPh':      { en: 'Email Address *', cn: '邮箱地址 *' },
    'contact.companyPh':    { en: 'Company Name', cn: '公司名称' },
    'contact.countryPh':    { en: 'Country', cn: '国家' },
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
    'specs.th6':      { en: 'Price (FOB)',       cn: '价格 (FOB)' },
    'specs.note1':    { en: '* All prices include tax & packaging. Shipping quoted separately. Valid for 6 months.', cn: '* 以上报价包含税、含包装费用，不包含运费。报价有效期为6个月。' },
    'specs.note2':    { en: 'Supplier: THOR Smart Home (索而智能家居) — Tel: 400-061-6669 — Dongguan, Guangdong', cn: '供应商：索而智能家居有限公司 — 电话：400-061-6669 — 东莞市洪梅镇海新路2号' },

    // Preview inline specs
    'config.summary': { en: 'Configuration Summary',   cn: '配置摘要' },
    'config.dlSpec':  { en: '↓ Download Spec Sheet', cn: '↓ 下载规格书' },
    'config.included':{ en: 'Included in this model:', cn: '本型号标准配置：' },
    'config.dlColor': { en: '↓ Download Full Color Catalog', cn: '↓ 下载完整色卡' },
    'config.colorNote':{ en: '🔴 Colors shown above — 30+ finishes available', cn: '🔴 上方已展示全部颜色 — 30+ 种饰面可选' },
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
    'config.incl.xt.2900': { en: 'Single door + BBQ base + Sink base + Fridge frame + 4 sockets + LED + Shelf + BBQ + Fridge + Hood + TV', cn: '单门地柜 + BBQ烤炉对开地柜 + 水槽地柜 + 冰箱框架柜 + 4插座 + 灯带 + 层板 + 烧烤炉 + 冰箱 + 烟机 + 电视' },
    'config.incl.xt.3200': { en: '3-drawer + BBQ base + Sink base + Fridge frame + 4 sockets + LED + 2 Shelves + BBQ + Fridge + Hood + TV', cn: '三抽地柜 + BBQ烤炉对开地柜 + 水槽地柜 + 冰箱框架柜 + 4插座 + 灯带 + 2层板 + 烧烤炉 + 冰箱 + 烟机 + 电视' },
    'config.incl.xt.3500': { en: '3-drawer + Single door + BBQ base + Sink base + Fridge frame + 4 sockets + LED + 2 Shelves + BBQ + Fridge + Hood + TV', cn: '三抽地柜 + 单门地柜 + BBQ烤炉对开地柜 + 水槽地柜 + 冰箱框架柜 + 4插座 + 灯带 + 2层板 + 烧烤炉 + 冰箱 + 烟机 + 电视' },
    'config.incl.wm.2200': { en: 'Rolling body + Single sink + BBQ base + Fridge frame + 3 sockets + LED + Shelf + BBQ + Fridge + Hood', cn: '卷帘箱体 + 单门水槽柜 + BBQ烤炉对开地柜 + 冰箱框架柜 + 3插座 + 灯带 + 层板 + 烧烤炉 + 冰箱 + 烟机' },
    'config.incl.wm.2900': { en: 'Rolling body + Single door + BBQ base + Sink base + Fridge frame + 4 sockets + LED + Shelf + BBQ + Fridge + Hood + TV', cn: '卷帘箱体 + 单门地柜 + BBQ烤炉对开地柜 + 水槽地柜 + 冰箱框架柜 + 4插座 + 灯带 + 层板 + 烧烤炉 + 冰箱 + 烟机 + 电视' },
    'config.incl.wm.3200': { en: 'Rolling body + 3-drawer + BBQ base + Sink base + Fridge frame + 4 sockets + LED + 2 Shelves + BBQ + Fridge + Hood + TV', cn: '卷帘箱体 + 三抽地柜 + BBQ烤炉对开地柜 + 水槽地柜 + 冰箱框架柜 + 4插座 + 灯带 + 2层板 + 烧烤炉 + 冰箱 + 烟机 + 电视' },
    'config.incl.wm.3500': { en: 'Rolling body + 3-drawer + Single door + BBQ base + Sink base + Fridge frame + 4 sockets + LED + 2 Shelves + BBQ + Fridge + Hood + TV', cn: '卷帘箱体 + 三抽地柜 + 单门地柜 + BBQ烤炉对开地柜 + 水槽地柜 + 冰箱框架柜 + 4插座 + 灯带 + 2层板 + 烧烤炉 + 冰箱 + 烟机 + 电视' },

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
    'hot.more':         { en: 'Show details',           cn: '展开全部' },
    'hot.less':         { en: 'Show less',              cn: '收起' },
    'hot.setNote':      { en: '* Prices are FOB China. Complete set prices available upon request.', cn: '* 价格为FOB中国离岸价。整套价格请询价。' },
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

    // Update lang toggle button text
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.textContent = currentLang === 'en' ? 'EN / 中文' : '中文 / EN';
        langBtn.dataset.lang = currentLang;
        langBtn.title = currentLang === 'en' ? 'Switch to Chinese' : '切换到英文';
    }

    // Re-render dynamic content
    renderComponents();
    renderAccessories();
    updateHotCardToggleLabels();
    syncStdListToggleLabel();
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'cn' : 'en';
    applyTranslation();
    // Re-calculate total to refresh finish label
    updateTotal();
}

// =============================================
// PRODUCT DATA
// =============================================
const basePrices = {
    'xt': { 2200: 36132, 2900: 40788, 3200: 44326, 3500: 46460 },
    'wm': { 2200: 33570, 2900: 38769, 3200: 41231, 3500: 43767 }
};

const accessoryPrices = {
    'TV-Mount': 3500,
    'LED-Upgrade': 1200,
    'Shelf-Extra': 800,
    'Power-Plus': 900,
    'Countertop': 5500,
    'Brand-Panel': 2000
};

const productImages = {
    'xt-2200': 'assets/images/products/suoer/suoer-topflip-2200.png',
    'xt-2900': 'assets/images/products/suoer/suoer-topflip-2900.png',
    'xt-3200': 'assets/images/products/suoer/suoer-topflip-3200.png',
    'xt-3500': 'assets/images/products/suoer/suoer-topflip-3500.png',
    'wm-2200': 'assets/images/products/suoer/suoer-rollshutter-2200.png',
    'wm-2900': 'assets/images/products/suoer/suoer-rollshutter-2900.png',
    'wm-3200': 'assets/images/products/suoer/suoer-rollshutter-3200.png',
    'wm-3500': 'assets/images/products/suoer/suoer-rollshutter-3500.png'
};

const HOT_IMG = (sku) => 'assets/images/products/hot-selling/display/sku-' + sku + '.png';

/** Component / accessory thumbs — null => placeholder card */
const componentImageMap = {
    'comp.mainCab': 'dynamic-main',
    'comp.sink': HOT_IMG('MK01SS304'),
    'comp.sinkDrawer': HOT_IMG('HGG6006S-1-SINK'),
    'comp.bbq': HOT_IMG('HGG6006S'),
    'comp.fridge': HOT_IMG('REF-SS304-A'),
    'comp.hood': HOT_IMG('HO06B01SS304'),
    'comp.singleDoor': HOT_IMG('OKSC01B'),
    'comp.drawer3': HOT_IMG('MK03SS304-W'),
    'comp.tv': null,
    'comp.elec': null,
    'comp.rack': null,
    'comp.rack2': null
};

const accessoryImageMap = {
    'TV-Mount': null,
    'LED-Upgrade': null,
    'Shelf-Extra': null,
    'Power-Plus': null,
    'Countertop': HOT_IMG('OKBC01S'),
    'Brand-Panel': null
};

/** Reference FOB USD for line cards (package-included; shown as ref / Incl.) */
const componentPriceUsd = {
    'comp.mainCab': null,
    'comp.sink': 251,
    'comp.sinkDrawer': 251,
    'comp.bbq': 302,
    'comp.fridge': 142,
    'comp.hood': 1037,
    'comp.singleDoor': 192,
    'comp.drawer3': 198,
    'comp.tv': null,
    'comp.elec': null,
    'comp.rack': null,
    'comp.rack2': null
};

/** Full item specs: dim / material / weight / params */
const componentMeta = {
    'comp.mainCab': {
        dim: 'frame × 900 × 2250 mm',
        material: { en: 'Zn-Al-Mg + Galvanized', cn: '锌铝镁合金 + 镀锌钢' },
        weight: null,
        params: { en: 'Top-flip / Rolling shutter body', cn: '上翻门 / 卷帘门箱体' }
    },
    'comp.sink': {
        dim: '813 × 660 × 962 mm',
        material: { en: '304# SS', cn: '304# 不锈钢' },
        weight: '49.5 kg',
        params: { en: 'Single-door sink cabinet', cn: '单门水槽柜' }
    },
    'comp.sinkDrawer': {
        dim: '813 × 660 × 962 mm',
        material: { en: '304# SS', cn: '304# 不锈钢' },
        weight: '52 kg',
        params: { en: 'False drawer front, sink inside', cn: '假抽屉面板，内置水槽' }
    },
    'comp.bbq': {
        dim: '813 × 660 × 719 mm',
        material: { en: '304# SS', cn: '304# 不锈钢' },
        weight: '62.5 kg',
        params: { en: 'Double-door base for BBQ', cn: '双门烧烤炉地柜' }
    },
    'comp.fridge': {
        dim: '892 × 660 × 962 mm',
        material: { en: '304# SS', cn: '304# 不锈钢' },
        weight: '28.5 kg',
        params: { en: 'Mini fridge cabinet frame', cn: '迷你冰箱框架柜' }
    },
    'comp.hood': {
        dim: '1465 × 1180 × 600 mm',
        material: { en: '304# SS', cn: '304# 不锈钢' },
        weight: '103 kg',
        params: { en: 'Slide-out extractor', cn: '侧吸式抽拉烟机' }
    },
    'comp.singleDoor': {
        dim: '813 × 660 × 962 mm',
        material: { en: '304# SS', cn: '304# 不锈钢' },
        weight: '49.5 kg',
        params: { en: 'Single-door storage cabinet', cn: '单门储物地柜' }
    },
    'comp.drawer3': {
        dim: '813 × 660 × 719 mm',
        material: { en: '304# SS', cn: '304# 不锈钢' },
        weight: '62.5 kg',
        params: { en: 'Triple drawer base', cn: '三抽地柜' }
    },
    'comp.tv': {
        dim: '—',
        material: { en: 'Weatherproof', cn: '户外防水' },
        weight: null,
        params: { en: 'Weatherproof LED TV + mount', cn: '户外防水电视 + 支架' }
    },
    'comp.elec': {
        dim: '—',
        material: { en: 'IP-rated', cn: '防护等级配件' },
        weight: null,
        params: { en: '3–4 outlets, LED strip, power track', cn: '3–4 插座、LED 灯带、电源导轨' }
    },
    'comp.rack': {
        dim: '—',
        material: { en: 'Aluminum', cn: '铝型材' },
        weight: null,
        params: { en: 'Shelf rack × 1', cn: '层板置物架 × 1' }
    },
    'comp.rack2': {
        dim: '—',
        material: { en: 'Aluminum', cn: '铝型材' },
        weight: null,
        params: { en: 'Shelf racks × 2', cn: '层板置物架 × 2' }
    }
};

function metaText(field) {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[currentLang] || field.en || '';
}

function resolveMainCabDim() {
    return state.width + ' × 900 × 2250 mm';
}

function resolveCompImage(comp) {
    const mapped = componentImageMap[comp.nameKey];
    if (mapped === 'dynamic-main') {
        return productImages[state.doorType + '-' + nearestStdWidth(state.width)] || null;
    }
    return mapped || null;
}

function formatCompPrice(nameKey) {
    const usd = componentPriceUsd[nameKey];
    if (usd == null) {
        return '<span class="std-line-price is-incl">' + t('comp.includedShort') + '</span>';
    }
    return '<span class="std-line-price">$' + Number(usd).toLocaleString() + '</span>';
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

/** Standard package line: left image + compact text (no price column) */
function renderStdLineCard(comp) {
    const name = t(comp.nameKey) || comp.defaultEn;
    const detail = t(comp.detailKey) || comp.defaultDetail;
    const meta = componentMeta[comp.nameKey] || {};
    const dim = comp.nameKey === 'comp.mainCab' ? resolveMainCabDim() : (meta.dim || '—');
    const material = metaText(meta.material) || '—';
    const weight = meta.weight || '';
    const params = metaText(meta.params) || detail;
    const paramLine = [material, weight, params].filter(Boolean).join(' · ');
    const src = resolveCompImage(comp);
    const media = src
        ? '<div class="std-line-media"><img src="' + src + '" alt="' + name + '" loading="lazy" ' +
          'onerror="this.parentElement.classList.add(\'is-placeholder\');this.remove();">' +
          '<span class="item-ph-icon" aria-hidden="true">' + (comp.icon || '') + '</span></div>'
        : '<div class="std-line-media is-placeholder"><span class="item-ph-icon" aria-hidden="true">' +
          (comp.icon || '') + '</span></div>';

    return (
        '<div class="std-line-card">' +
            '<div class="std-line-media-wrap">' + media + '</div>' +
            '<div class="std-line-body">' +
                '<div class="std-line-row std-line-row-title">' +
                    '<strong class="std-line-name">' + name + '</strong>' +
                    '<span class="std-line-qty">×1</span>' +
                '</div>' +
                '<div class="std-line-row std-line-row-spec">' +
                    '<span class="std-line-spec-text">' + dim + '</span>' +
                '</div>' +
                '<div class="std-line-row std-line-row-params">' +
                    '<span class="std-line-params-text">' + paramLine + '</span>' +
                '</div>' +
            '</div>' +
        '</div>'
    );
}

// Component configs with i18n keys
const componentConfigs = {
    2200: [
        { icon: '📦', nameKey: 'comp.mainCab',    detailKey: 'comp.mainCab.detail', defaultEn: 'Main Cabinet', defaultDetail: 'Top-flip / Rolling shutter' },
        { icon: '🚰', nameKey: 'comp.sink',        detailKey: 'comp.sink.detail', defaultEn: 'Single Sink Base', defaultDetail: 'Single-door sink cabinet' },
        { icon: '🔥', nameKey: 'comp.bbq',         detailKey: 'comp.bbq.detail', defaultEn: 'BBQ Grill Cabinet', defaultDetail: 'Double-door base for BBQ' },
        { icon: '🧊', nameKey: 'comp.fridge',      detailKey: 'comp.fridge.detail', defaultEn: 'Fridge Frame', defaultDetail: 'Mini fridge cabinet' },
        { icon: '💨', nameKey: 'comp.hood',        detailKey: 'comp.hood.detail', defaultEn: 'Extractor Hood', defaultDetail: 'Slide-out extractor' },
        { icon: '🔌', nameKey: 'comp.elec',        detailKey: 'comp.elec.detail', defaultEn: 'Electrical', defaultDetail: '3 outlets, LED strip, power track' },
        { icon: '📐', nameKey: 'comp.rack',        detailKey: 'comp.rack.detail', defaultEn: 'Aluminum Rack', defaultDetail: 'Shelf rack × 1' }
    ],
    2900: [
        { icon: '📦', nameKey: 'comp.mainCab',    detailKey: 'comp.mainCab.detail', defaultEn: 'Main Cabinet', defaultDetail: 'Top-flip / Rolling shutter' },
        { icon: '🚪', nameKey: 'comp.singleDoor',  detailKey: 'comp.singleDoor.detail', defaultEn: 'Single-Door Base', defaultDetail: 'Storage cabinet' },
        { icon: '🔥', nameKey: 'comp.bbq',         detailKey: 'comp.bbq.detail', defaultEn: 'BBQ Grill Cabinet', defaultDetail: 'Double-door base for BBQ' },
        { icon: '🚰', nameKey: 'comp.sinkDrawer',  detailKey: 'comp.sinkDrawer.detail', defaultEn: 'Sink Base w/ Drawer', defaultDetail: 'False drawer front, sink inside' },
        { icon: '🧊', nameKey: 'comp.fridge',      detailKey: 'comp.fridge.detail', defaultEn: 'Fridge Frame', defaultDetail: 'Mini fridge cabinet' },
        { icon: '💨', nameKey: 'comp.hood',        detailKey: 'comp.hood.detail', defaultEn: 'Extractor Hood', defaultDetail: 'Slide-out extractor' },
        { icon: '📺', nameKey: 'comp.tv',          detailKey: 'comp.tv.detail', defaultEn: 'TV + Mount', defaultDetail: 'Weatherproof LED TV' },
        { icon: '🔌', nameKey: 'comp.elec',        detailKey: 'comp.elec.detail', defaultEn: 'Electrical', defaultDetail: '4 outlets, LED strip, power track' }
    ],
    3200: [
        { icon: '📦', nameKey: 'comp.mainCab',    detailKey: 'comp.mainCab.detail', defaultEn: 'Main Cabinet', defaultDetail: 'Top-flip / Rolling shutter' },
        { icon: '🗄️', nameKey: 'comp.drawer3',    detailKey: 'comp.drawer3.detail', defaultEn: '3-Drawer Base', defaultDetail: 'Triple drawer cabinet' },
        { icon: '🔥', nameKey: 'comp.bbq',         detailKey: 'comp.bbq.detail', defaultEn: 'BBQ Grill Cabinet', defaultDetail: 'Double-door base for BBQ' },
        { icon: '🚰', nameKey: 'comp.sinkDrawer',  detailKey: 'comp.sinkDrawer.detail', defaultEn: 'Sink Base w/ Drawer', defaultDetail: 'False drawer front, sink inside' },
        { icon: '🧊', nameKey: 'comp.fridge',      detailKey: 'comp.fridge.detail', defaultEn: 'Fridge Frame', defaultDetail: 'Mini fridge cabinet' },
        { icon: '💨', nameKey: 'comp.hood',        detailKey: 'comp.hood.detail', defaultEn: 'Extractor Hood', defaultDetail: 'Slide-out extractor' },
        { icon: '📺', nameKey: 'comp.tv',          detailKey: 'comp.tv.detail', defaultEn: 'TV + Mount', defaultDetail: 'Weatherproof LED TV' },
        { icon: '📐', nameKey: 'comp.rack2',       detailKey: 'comp.rack2.detail', defaultEn: 'Aluminum Racks', defaultDetail: 'Shelf racks × 2' },
        { icon: '🔌', nameKey: 'comp.elec',        detailKey: 'comp.elec.detail', defaultEn: 'Electrical', defaultDetail: '4 outlets, LED strip, power track' }
    ],
    3500: [
        { icon: '📦', nameKey: 'comp.mainCab',    detailKey: 'comp.mainCab.detail', defaultEn: 'Main Cabinet', defaultDetail: 'Top-flip / Rolling shutter' },
        { icon: '🗄️', nameKey: 'comp.drawer3',    detailKey: 'comp.drawer3.detail', defaultEn: '3-Drawer Base', defaultDetail: 'Triple drawer cabinet' },
        { icon: '🚪', nameKey: 'comp.singleDoor',  detailKey: 'comp.singleDoor.detail', defaultEn: 'Single-Door Base', defaultDetail: 'Extra storage cabinet' },
        { icon: '🔥', nameKey: 'comp.bbq',         detailKey: 'comp.bbq.detail', defaultEn: 'BBQ Grill Cabinet', defaultDetail: 'Double-door base for BBQ' },
        { icon: '🚰', nameKey: 'comp.sinkDrawer',  detailKey: 'comp.sinkDrawer.detail', defaultEn: 'Sink Base w/ Drawer', defaultDetail: 'False drawer front, sink inside' },
        { icon: '🧊', nameKey: 'comp.fridge',      detailKey: 'comp.fridge.detail', defaultEn: 'Fridge Frame', defaultDetail: 'Mini fridge cabinet' },
        { icon: '💨', nameKey: 'comp.hood',        detailKey: 'comp.hood.detail', defaultEn: 'Extractor Hood', defaultDetail: 'Slide-out extractor' },
        { icon: '📺', nameKey: 'comp.tv',          detailKey: 'comp.tv.detail', defaultEn: 'TV + Mount', defaultDetail: 'Weatherproof LED TV' },
        { icon: '📐', nameKey: 'comp.rack2',       detailKey: 'comp.rack2.detail', defaultEn: 'Aluminum Racks', defaultDetail: 'Shelf racks × 2' },
        { icon: '🔌', nameKey: 'comp.elec',        detailKey: 'comp.elec.detail', defaultEn: 'Electrical', defaultDetail: '4 outlets, LED strip, power track' }
    ]
};

// Component name translations
const compI18n = {
    'comp.mainCab':       { en: 'Main Cabinet',      cn: '主柜体' },
    'comp.mainCab.detail':{ en: 'Top-flip / Rolling shutter', cn: '上翻门 / 卷帘门' },
    'comp.sink':          { en: 'Single Sink Base',  cn: '单槽水槽柜' },
    'comp.sink.detail':   { en: 'Single-door sink cabinet', cn: '单门水槽柜' },
    'comp.bbq':           { en: 'BBQ Grill Cabinet', cn: '烧烤炉柜' },
    'comp.bbq.detail':    { en: 'Double-door base for BBQ', cn: '双门烧烤炉地柜' },
    'comp.fridge':        { en: 'Fridge Frame',      cn: '冰箱框架柜' },
    'comp.fridge.detail': { en: 'Mini fridge cabinet', cn: '迷你冰箱柜' },
    'comp.hood':          { en: 'Extractor Hood',    cn: '抽拉烟机' },
    'comp.hood.detail':   { en: 'Slide-out extractor', cn: '侧吸式抽油烟机' },
    'comp.elec':          { en: 'Electrical',        cn: '电气系统' },
    'comp.elec.detail':   { en: '3-4 outlets, LED strip, power track', cn: '3-4个插座、LED灯带、电源导轨' },
    'comp.rack':          { en: 'Aluminum Rack',     cn: '铝制层板架' },
    'comp.rack.detail':   { en: 'Shelf rack × 1',   cn: '层板置物架 × 1' },
    'comp.singleDoor':    { en: 'Single-Door Base',  cn: '单门地柜' },
    'comp.singleDoor.detail': { en: 'Storage cabinet', cn: '储物柜' },
    'comp.sinkDrawer':    { en: 'Sink Base w/ Drawer', cn: '水槽地柜含抽屉' },
    'comp.sinkDrawer.detail': { en: 'False drawer front, sink inside', cn: '假抽屉面板，内置水槽' },
    'comp.tv':            { en: 'TV + Mount',        cn: '电视+支架' },
    'comp.tv.detail':     { en: 'Weatherproof LED TV', cn: '防风雨LED电视' },
    'comp.drawer3':       { en: '3-Drawer Base',     cn: '三抽地柜' },
    'comp.drawer3.detail':{ en: 'Triple drawer cabinet', cn: '三层抽屉地柜' },
    'comp.rack2':         { en: 'Aluminum Racks',    cn: '铝制层板架' },
    'comp.rack2.detail':  { en: 'Shelf racks × 2',  cn: '层板置物架 × 2' }
};
// Merge component i18n into main
Object.assign(i18n, compI18n);

// Accessory i18n already defined above

// =============================================
// STATE
// =============================================
let state = {
    doorType: 'xt',
    width: 2200,
    accessories: {
        'TV-Mount': false,
        'LED-Upgrade': false,
        'Shelf-Extra': false,
        'Power-Plus': false,
        'Countertop': false,
        'Brand-Panel': false
    },
    extraItems: []
};

let colorState = {
    series: 'texture',
    code: 'DP-W3',
    name: 'Natural Oak',
    premium: 0
};

let bodyColorState = {
    code: 'CK02F',
    name: 'CK02F',
    premium: 0
};

// =============================================
// DOM REFS
// =============================================
const doorTypeBtns = document.querySelectorAll('#doorTypeGroup .config-btn');
const sizeBtns = document.querySelectorAll('#sizeGroup .size-btn');
const accessoriesGrid = document.getElementById('accessoriesGrid');
const accessoriesCheckboxes = () => document.querySelectorAll('#accessoriesGrid input[type="checkbox"]');
const colorSwatches = () => document.querySelectorAll('#doorSeriesList .color-swatch');
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
    const base = state.doorType === 'xt' ? 'TH-XT' : 'TH-WM';
    let seriesNum = '001';
    if (w === 3200) seriesNum = '002';
    else if (w === 3500) seriesNum = '003';
    const suffix = w === 2200 ? '-X' : '';
    const custom = state.width !== w ? '-C' : '';
    return base + '-' + seriesNum + suffix + custom;
}

function getBasePrice() {
    return basePrices[state.doorType][nearestStdWidth(state.width)];
}

function updatePreview() {
    // Update model name and dimensions in detail card
    const modelEl = document.getElementById('previewModel');
    const widthEl = document.getElementById('previewWidth');
    const priceEl = document.getElementById('previewPrice');
    if (modelEl) modelEl.textContent = getModelName();
    if (widthEl) widthEl.textContent = state.width;
    if (priceEl) {
        const valEl = priceEl.querySelector('.price-value');
        if (valEl) valEl.textContent = '¥' + getBasePrice().toLocaleString();
    }
    // Update door type image + badge (from 产品立面 folder)
    const doorImg = document.getElementById('doorTypeImg');
    const badge = document.getElementById('doorBadge');
    if (doorImg && badge) {
        const isXt = state.doorType === 'xt';
        // Force refresh by adding timestamp
        const ts = new Date().getTime();
        doorImg.src = (isXt 
            ? 'assets/images/products/suoer/door-topflip.png'
            : 'assets/images/products/suoer/door-rollshutter.png') + '?t=' + ts;
        const label = isXt 
            ? (currentLang === 'en' ? '\u25B2 Top-Flip' : '\u25B2 \u4E0A\u7FFB\u95E8')
            : (currentLang === 'en' ? '\u2630 Rolling Shutter' : '\u2630 \u5377\u5E18\u95E8');
        badge.innerHTML = label;
        badge.className = 'door-badge ' + (isXt ? 'xt-badge' : 'wm-badge');
    }
    
    // Update elevation image (use custom elevation images from 产品立面)
    const elevImg = document.getElementById('elevationImg');
    const elevWidth = document.getElementById('elevWidth');
    if (elevImg) {
        // Use size-specific elevation images from the product catalog
        const ts = new Date().getTime();
        const elevW = nearestStdWidth(state.width);
        elevImg.src = 'assets/images/products/suoer/' + elevW + '.png' + '?t=' + ts;
    }
    if (elevWidth) elevWidth.textContent = state.width;
    
    // Standard config list = same source as Step 2
    renderStdConfig();
}

function renderStdConfig() {
    const specList = document.getElementById('previewSpecsList');
    if (!specList) return;
    const configs = componentConfigs[nearestStdWidth(state.width)] || [];
    specList.innerHTML = configs.map(renderStdLineCard).join('');
    syncStdListToggleLabel();
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

const STD_LAYOUT_KEY = 'dd-std-layout';

function applyStdLayout(layout) {
    const list = document.getElementById('previewSpecsList');
    const switcher = document.querySelector('#detailSpecs .std-layout-switch');
    if (!list || !switcher) return;
    const mode = (layout === 'grid' || layout === 'large') ? layout : 'list';
    list.classList.toggle('is-grid', mode === 'grid');
    list.classList.toggle('is-large', mode === 'large');
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

/** Accessories hidden when already covered by standard package components */
const accessoryCoveredBy = {
    'TV-Mount': ['comp.tv'],
    'LED-Upgrade': ['comp.elec'],
    'Shelf-Extra': ['comp.rack', 'comp.rack2'],
    'Power-Plus': ['comp.elec']
};

const accessoryMeta = {
    'TV-Mount': { dim: '—', params: { en: 'Weatherproof LED TV + mount', cn: '户外防水电视 + 支架' }, icon: '📺', cat: 'appliance' },
    'LED-Upgrade': { dim: '—', params: { en: 'Under-cabinet LED strip', cn: '柜下氛围灯带升级' }, icon: '💡', cat: 'elec' },
    'Shelf-Extra': { dim: '—', params: { en: 'Extra aluminum shelf rack', cn: '额外铝型材层架' }, icon: '📐', cat: 'storage' },
    'Power-Plus': { dim: '—', params: { en: 'Extra weatherproof power track', cn: '额外防风雨电源导轨' }, icon: '🔌', cat: 'elec' },
    'Countertop': { dim: 'custom', params: { en: 'Premium SS countertop', cn: '高端不锈钢台面' }, icon: '🪨', cat: 'finish' },
    'Brand-Panel': { dim: '—', params: { en: 'Branded end panels', cn: '端板品牌定制' }, icon: '🏷️', cat: 'finish' }
};

const productLibrary = [
    { id: 'lib-fridge', cat: 'fridge', sku: 'REF-SS304-A', name: { en: 'Outdoor Fridge', cn: '户外冰箱' }, dim: '420×695×450 mm', priceCny: 3200, icon: '🧊', img: HOT_IMG('REF-SS304-A') },
    { id: 'lib-fridge2', cat: 'fridge', sku: 'BC-152', name: { en: 'Drawer Fridge', cn: '抽屉冰箱' }, dim: '595×598×870 mm', priceCny: 4980, icon: '🧊', img: HOT_IMG('BC-152') },
    { id: 'lib-appl', cat: 'appliance', sku: 'MK02SS304-W', name: { en: 'Appliance Cabinet', cn: '电器柜' }, dim: '892×660×962 mm', priceCny: 990, icon: '🚪', img: HOT_IMG('MK02SS304-W') },
    { id: 'lib-hood', cat: 'appliance', sku: 'HO06B01SS304', name: { en: 'Extractor Hood', cn: '抽拉烟机' }, dim: '1465×1180×600 mm', priceCny: 7200, icon: '💨', img: HOT_IMG('HO06B01SS304') },
    { id: 'lib-bbq', cat: 'bbq', sku: 'HGG6006S', name: { en: '6-Burner BBQ', cn: '六头烧烤炉' }, dim: '1465×1180×600 mm', priceCny: 7800, icon: '🔥', img: HOT_IMG('HGG6006S') },
    { id: 'lib-sink', cat: 'sink', sku: 'MK01SS304', name: { en: 'Sink Cabinet', cn: '水槽柜' }, dim: '813×660×962 mm', priceCny: 1760, icon: '🚰', img: HOT_IMG('MK01SS304') },
    { id: 'lib-pizza', cat: 'appliance', sku: 'MK07SS304', name: { en: 'Pizza Oven', cn: '披萨烤炉' }, dim: '702×662×2069 mm', priceCny: 3660, icon: '🍕', img: HOT_IMG('MK07SS304') },
    { id: 'lib-corner', cat: 'storage', sku: 'MK06SS304', name: { en: 'Corner Cabinet', cn: '转角柜' }, dim: '777×777×962 mm', priceCny: 1690, icon: '📐', img: HOT_IMG('MK06SS304') }
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

function stdCompKeys() {
    return (componentConfigs[nearestStdWidth(state.width)] || []).map(c => c.nameKey);
}

function isAccessoryCovered(key) {
    const covers = accessoryCoveredBy[key];
    if (!covers) return false;
    const keys = stdCompKeys();
    return covers.some(k => keys.includes(k));
}

function renderAccLineCard(item) {
    const name = t('acc.' + item.key) || item.key;
    const meta = accessoryMeta[item.key] || {};
    const detail = t('acc.' + item.key + '.detail') || metaText(meta.params) || '';
    const dim = meta.dim === 'custom' ? (state.width + ' × 900 × — mm') : (meta.dim || '—');
    const price = accessoryPrices[item.key];
    const src = accessoryImageMap[item.key];
    const icon = meta.icon || '➕';
    const media = src
        ? '<div class="std-line-media"><img src="' + src + '" alt="' + name + '" loading="lazy" onerror="this.parentElement.classList.add(\'is-placeholder\');this.remove();"><span class="item-ph-icon" aria-hidden="true">' + icon + '</span></div>'
        : '<div class="std-line-media is-placeholder"><span class="item-ph-icon" aria-hidden="true">' + icon + '</span></div>';
    const checked = item.checked ? 'is-checked' : '';

    return (
        '<label class="std-line-card acc-line-card ' + checked + '">' +
            '<input type="checkbox" class="acc-check" data-accessory="' + item.key + '" data-price="' + price + '" ' + (item.checked ? 'checked' : '') + '>' +
            '<div class="std-line-media-wrap">' + media + '</div>' +
            '<div class="std-line-body">' +
                '<div class="std-line-row std-line-row-title">' +
                    '<strong class="std-line-name">' + name + '</strong>' +
                    '<span class="std-line-price">+¥' + price.toLocaleString() + '</span>' +
                '</div>' +
                '<div class="std-line-row std-line-row-spec">' +
                    '<span class="std-line-spec-text">' + dim + '</span>' +
                    '<span class="std-line-qty">×1</span>' +
                '</div>' +
                '<div class="std-line-row std-line-row-params">' +
                    '<span class="std-line-params-text">' + detail + '</span>' +
                '</div>' +
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
            '<div class="std-line-media-wrap">' + media + '</div>' +
            '<div class="std-line-body">' +
                '<div class="std-line-row std-line-row-title">' +
                    '<strong class="std-line-name">' + name + '</strong>' +
                    '<span class="std-line-price">+¥' + item.priceCny.toLocaleString() + '</span>' +
                '</div>' +
                '<div class="std-line-row std-line-row-spec">' +
                    '<span class="std-line-spec-text">' + item.dim + '</span>' +
                    '<button type="button" class="acc-remove" data-remove-extra="' + item.id + '" aria-label="Remove">×</button>' +
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
                '<div class="std-line-row std-line-row-title">' +
                    '<strong class="std-line-name" data-i18n-keep>' + t('lib.add') + '</strong>' +
                '</div>' +
                '<div class="std-line-row std-line-row-spec">' +
                    '<span class="std-line-spec-text">' + t('lib.addHint') + '</span>' +
                '</div>' +
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

function renderAccessories() {
    if (!accessoriesGrid) return;
    const accData = [
        { key: 'TV-Mount', checked: state.accessories['TV-Mount'] },
        { key: 'LED-Upgrade', checked: state.accessories['LED-Upgrade'] },
        { key: 'Shelf-Extra', checked: state.accessories['Shelf-Extra'] },
        { key: 'Power-Plus', checked: state.accessories['Power-Plus'] },
        { key: 'Countertop', checked: state.accessories['Countertop'] },
        { key: 'Brand-Panel', checked: state.accessories['Brand-Panel'] }
    ].filter(item => !isAccessoryCovered(item.key));

    // Clear covered accessories from state so they don't inflate total
    Object.keys(accessoryCoveredBy).forEach(key => {
        if (isAccessoryCovered(key)) state.accessories[key] = false;
    });

    let html = accData.map(renderAccLineCard).join('');
    html += (state.extraItems || []).map(renderExtraItemCard).join('');
    html += renderAddCard();
    accessoriesGrid.innerHTML = html;

    accessoriesGrid.querySelectorAll('.acc-check').forEach(cb => {
        cb.addEventListener('change', function() {
            state.accessories[this.dataset.accessory] = this.checked;
            this.closest('.acc-line-card')?.classList.toggle('is-checked', this.checked);
            updateTotal();
        });
    });

    accessoriesGrid.querySelectorAll('[data-remove-extra]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-remove-extra');
            state.extraItems = (state.extraItems || []).filter(x => x.id !== id);
            renderAccessories();
            updateTotal();
        });
    });

    const addBtn = document.getElementById('openProductLibrary');
    if (addBtn) addBtn.addEventListener('click', () => openProductLibrary());
}

function getAccessoriesTotal() {
    let total = 0;
    for (const [key, checked] of Object.entries(state.accessories)) {
        if (checked && !isAccessoryCovered(key)) total += accessoryPrices[key] || 0;
    }
    (state.extraItems || []).forEach(item => { total += item.priceCny || 0; });
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
                    '<div class="std-line-row std-line-row-title">' +
                        '<strong class="std-line-name">' + name + '</strong>' +
                        '<span class="std-line-price">¥' + p.priceCny.toLocaleString() + '</span>' +
                    '</div>' +
                    '<div class="std-line-row std-line-row-spec">' +
                        '<span class="std-line-spec-text">' + p.dim + ' · ' + p.sku + '</span>' +
                        '<button type="button" class="lib-add-btn" data-add-lib="' + p.id + '" ' + (already ? 'disabled' : '') + '>' +
                            (already ? t('lib.added') : t('lib.addBtn')) +
                        '</button>' +
                    '</div>' +
                    (fitText
                        ? '<div class="std-line-row"><span class="lib-fit-badge ' + fitClass + '">' + fitText + '</span></div>'
                        : '') +
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

function updateTotal() {
    const base = getBasePrice();
    const accessories = getAccessoriesTotal();
    const finish = (colorState.premium || 0) + (bodyColorState.premium || 0);
    const total = base + accessories + finish;

    totalModel.textContent = getModelName();
    totalBasePrice.textContent = '¥' + base.toLocaleString();
    document.getElementById('totalAccessoriesRow').style.display = accessories > 0 ? 'flex' : 'none';
    totalAccessoriesPrice.textContent = accessories > 0 ? '+¥' + accessories.toLocaleString() : '¥0';
    totalFinishPrice.textContent = finish > 0 ? '+¥' + finish.toLocaleString() : '¥0';
    totalFinalPrice.textContent = '¥' + total.toLocaleString();
}

function updateAll() {
    updatePreview();
    renderComponents();
    renderAccessories();
    updateTotal();
}

// =============================================
// EVENT BINDINGS
// =============================================

// Language toggle
document.getElementById('langToggle').addEventListener('click', toggleLanguage);

// Door type buttons
doorTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        doorTypeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.doorType = btn.dataset.value;
        updateAll();
    });
});

// Size buttons
sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        sizeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.width = parseInt(btn.dataset.width);
        updateAll();
    });
});

// Config mode tabs: 标准套餐（当前页）/ 个性定制 → index.html 空框架
(function initConfigModeTabs() {
    const tabs = document.querySelectorAll('#configModeTabs [data-mode]');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.toggle('active', t === tab));
        });
    });
})();

// Shell preview: recolor black cabinet photo to selected shell swatch
const shellPreview = {
    source: null,
    canvas: null,
    ctx: null,
    baseData: null,
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
    shellPreview.ready = true;
    return true;
}

function renderShellPreview(hex) {
    if (!shellPreview.ready && !cacheShellPreviewBase()) return;
    const base = shellPreview.baseData;
    if (!base) return;
    const { r: tr, g: tg, b: tb } = parseHexColor(hex || '#111111');
    const out = new ImageData(new Uint8ClampedArray(base.data), base.width, base.height);
    const d = out.data;
    const src = base.data;
    for (let i = 0; i < d.length; i += 4) {
        const pr = src[i], pg = src[i + 1], pb = src[i + 2], pa = src[i + 3];
        if (pa < 8) continue;
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
        // Also remap bright edge glare on shell (was looking like metal reflection)
        const lum = (0.299 * pr + 0.587 * pg + 0.114 * pb) / 255;
        const tint = tintShellRgb(tr, tg, tb, lum);
        d[i] = tint.r;
        d[i + 1] = tint.g;
        d[i + 2] = tint.b;
    }
    shellPreview.ctx.putImageData(out, 0, 0);
}

function initShellPreview() {
    shellPreview.source = document.getElementById('shellPreviewSource');
    shellPreview.canvas = document.getElementById('shellPreviewCanvas');
    if (!shellPreview.source || !shellPreview.canvas) return;
    shellPreview.ctx = shellPreview.canvas.getContext('2d', { willReadFrequently: true });

    const paintActive = () => {
        const active = document.querySelector('#bodyColorGrid .body-swatch.color-active');
        const hex = active?.dataset.bar || parseSwatchColor(active) || '#8f8b84';
        renderShellPreview(hex);
    };

    const onReady = () => {
        cacheShellPreviewBase();
        paintActive();
    };

    if (shellPreview.source.complete && shellPreview.source.naturalWidth) onReady();
    else shellPreview.source.addEventListener('load', onReady, { once: true });
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
    renderShellPreview(swatch.dataset.bar || parseSwatchColor(swatch));
    // Keep door preview shell in sync with this selection
    paintDoorPreviewFromSwatch();
    updateTotal();
});

// Door preview: recolor masked door panels to selected solid/texture
const doorPreview = {
    source: null,
    maskImg: null,
    canvas: null,
    ctx: null,
    baseData: null,
    maskData: null,
    ready: false,
    textureCache: Object.create(null)
};

function cacheDoorPreviewBase() {
    if (!doorPreview.source || !doorPreview.maskImg || !doorPreview.ctx) return false;
    const img = doorPreview.source;
    const mask = doorPreview.maskImg;
    const w = img.naturalWidth || img.width;
    const h = img.naturalHeight || img.height;
    if (!w || !h || !mask.naturalWidth) return false;
    doorPreview.canvas.width = w;
    doorPreview.canvas.height = h;
    doorPreview.ctx.drawImage(img, 0, 0, w, h);
    doorPreview.baseData = doorPreview.ctx.getImageData(0, 0, w, h);
    doorPreview.ctx.drawImage(mask, 0, 0, w, h);
    doorPreview.maskData = doorPreview.ctx.getImageData(0, 0, w, h);
    doorPreview.ctx.putImageData(doorPreview.baseData, 0, 0);
    doorPreview.ready = true;
    return true;
}

function loadDoorTexture(url) {
    if (!url) return Promise.resolve(null);
    if (doorPreview.textureCache[url]) return Promise.resolve(doorPreview.textureCache[url]);
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
            doorPreview.textureCache[url] = data;
            resolve(data);
        };
        img.onerror = () => resolve(null);
        img.src = url;
    });
}

function getActiveShellHex() {
    const active = document.querySelector('#bodyColorGrid .body-swatch.color-active');
    return active?.dataset.bar || parseSwatchColor(active) || '#8f8b84';
}

function renderDoorPreview(opts) {
    const hex = opts?.hex || '#2c2e31';
    const shellHex = opts?.shellHex || getActiveShellHex();
    const texture = opts?.texture || null;
    if (!doorPreview.ready && !cacheDoorPreviewBase()) return;
    const base = doorPreview.baseData;
    const mask = doorPreview.maskData;
    if (!base || !mask) return;
    const { r: tr, g: tg, b: tb } = parseHexColor(hex);
    const { r: sr, g: sg, b: sb } = parseHexColor(shellHex);
    const out = new ImageData(new Uint8ClampedArray(base.data), base.width, base.height);
    const d = out.data;
    const src = base.data;
    const m = mask.data;
    const tw = texture?.w || 0;
    const th = texture?.h || 0;
    const td = texture?.data || null;
    const refLum = 0.48; // ~avg teal luminance

    for (let i = 0, p = 0; i < d.length; i += 4, p++) {
        const pr = src[i], pg = src[i + 1], pb = src[i + 2], pa = src[i + 3];
        if (pa < 8) continue;

        // Door panels (masked)
        if (m[i] >= 128) {
            const lum = (0.299 * pr + 0.587 * pg + 0.114 * pb) / 255;
            const shade = Math.min(1.35, Math.max(0.25, lum / refLum));
            let rr = tr, gg = tg, bb = tb;
            if (td && tw && th) {
                const x = p % base.width;
                const y = (p / base.width) | 0;
                const tx = ((x * 1.15) | 0) % tw;
                const ty = ((y * 1.15) | 0) % th;
                const ti = (ty * tw + tx) * 4;
                rr = td[ti];
                gg = td[ti + 1];
                bb = td[ti + 2];
            }
            d[i] = Math.min(255, Math.round(rr * shade));
            d[i + 1] = Math.min(255, Math.round(gg * shade));
            d[i + 2] = Math.min(255, Math.round(bb * shade));
            continue;
        }

        // Shell / frame: match selected Shell Color (same logic as shell preview card)
        const maxc = Math.max(pr, pg, pb);
        const minc = Math.min(pr, pg, pb);
        if (minc > 235 && maxc - minc < 18) continue; // studio bg
        if (maxc > 190 && pr > pg && pg > pb + 8 && (pr - pb) > 25) continue; // LED
        if (maxc > 175 && maxc - minc < 22 && minc > 140) continue; // gas struts only
        // stainless countertop / silver accents (keep brighter metals)
        if (maxc > 155 && maxc - minc < 30 && minc > 110) continue;
        // Remap dark + mid shell (incl. edge glare) to matte shell color
        if (maxc > 170 || (maxc - minc > 55 && minc > 40)) continue;
        const lum = (0.299 * pr + 0.587 * pg + 0.114 * pb) / 255;
        const tint = tintShellRgb(sr, sg, sb, lum);
        d[i] = tint.r;
        d[i + 1] = tint.g;
        d[i + 2] = tint.b;
    }
    doorPreview.ctx.putImageData(out, 0, 0);
}

async function paintDoorPreviewFromSwatch(swatch) {
    if (!swatch) {
        swatch = document.querySelector('#doorSeriesList .color-swatch.color-active');
    }
    if (!swatch) return;
    const hex = swatch.dataset.bar || parseSwatchColor(swatch) || '#2c2e31';
    const textureUrl = swatch.dataset.texture || '';
    const texture = textureUrl ? await loadDoorTexture(textureUrl) : null;
    renderDoorPreview({ hex, texture, shellHex: getActiveShellHex() });
}

function initDoorPreview() {
    doorPreview.source = document.getElementById('doorPreviewSource');
    doorPreview.maskImg = document.getElementById('doorPreviewMask');
    doorPreview.canvas = document.getElementById('doorPreviewCanvas');
    if (!doorPreview.source || !doorPreview.maskImg || !doorPreview.canvas) return;
    doorPreview.ctx = doorPreview.canvas.getContext('2d', { willReadFrequently: true });

    let pending = 2;
    const tryReady = () => {
        pending -= 1;
        if (pending > 0) return;
        cacheDoorPreviewBase();
        paintDoorPreviewFromSwatch();
    };

    if (doorPreview.source.complete && doorPreview.source.naturalWidth) tryReady();
    else doorPreview.source.addEventListener('load', tryReady, { once: true });

    if (doorPreview.maskImg.complete && doorPreview.maskImg.naturalWidth) tryReady();
    else doorPreview.maskImg.addEventListener('load', tryReady, { once: true });
}

// Door panel color selection (delegated across 4 series)
document.addEventListener('click', function(e) {
    const swatch = e.target.closest('#doorSeriesList .color-swatch');
    if (!swatch) return;
    const block = swatch.closest('.door-series-block');
    if (block && block.dataset.series) colorState.series = block.dataset.series;
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

// =============================================
// INIT
// =============================================
updateAll();
applyTranslation();
initShellPreview();
initDoorPreview();
const initialBodySwatch = document.querySelector('#bodyColorGrid .body-swatch.color-active');
if (initialBodySwatch) syncColorSelectedBar(initialBodySwatch, 'bodyColorSelectedInfo');
const initialSwatch = document.querySelector('#doorSeriesList .color-swatch.color-active');
if (initialSwatch) syncColorSelectedBar(initialSwatch, 'colorSelectedInfo');

// =============================================
// NAVBAR & SCROLL
// =============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
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

// Fade-in observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.section, .config-step, .config-total, .case-card, .hot-card, .specs-table, .step1-panel').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// =============================================
// GLOBAL: Build summary string for form
// =============================================
function buildSummaryString() {
    try {
        const model = document.getElementById('previewModel')?.textContent || '';
        const doorType = document.querySelector('#doorTypeGroup .config-btn.active')?.dataset.value || 'xt';
        const width = document.querySelector('#sizeGroup .size-btn.active')?.dataset.width || '2200';
        const doorLabel = doorType === 'xt' ? (currentLang === 'en' ? 'Top-Flip' : '上翻门') : (currentLang === 'en' ? 'Rolling Shutter' : '卷帘门');
        const bodyCode = document.getElementById('selectedBodyColorCode')?.textContent || '';
        const bodyName = document.getElementById('selectedBodyColorName')?.textContent?.replace('— ', '') || '';
        const colorCode = document.getElementById('selectedColorCode')?.textContent || '';
        const colorName = document.getElementById('selectedColorName')?.textContent?.replace('— ', '') || '';
        const totalPrice = document.getElementById('totalFinalPrice')?.textContent || '';

        const accItems = [];
        document.querySelectorAll('#accessoriesGrid input[type="checkbox"]').forEach(cb => {
            if (cb.checked) {
                const label = cb.closest('.accessory-item')?.querySelector('strong')?.textContent || cb.dataset.accessory;
                accItems.push(label);
            }
        });

        const lines = currentLang === 'en'
            ? [`Model: ${model}`, `Door Type: ${doorLabel}`, `Size: ${width} × 900 × 2250 mm`, `Body Color: ${bodyCode} — ${bodyName}`, `Door Color: ${colorCode} — ${colorName}`, `Accessories: ${accItems.length ? accItems.join(', ') : 'Standard only'}`, `Estimated Total: ${totalPrice} (FOB China)`]
            : [`型号：${model}`, `门型：${doorLabel}`, `尺寸：${width} × 900 × 2250 mm`, `箱体颜色：${bodyCode} — ${bodyName}`, `门板颜色：${colorCode} — ${colorName}`, `配件：${accItems.length ? accItems.join(', ') : '标准配置'}`, `预估总价：${totalPrice}（FOB中国）`];
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
    document.querySelectorAll('.hot-card').forEach(card => {
        if (card.classList.contains('hot-card-remark')) return;
        const body = card.querySelector('.hot-card-body');
        if (!body || body.querySelector('.hot-card-toggle')) return;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'hot-card-toggle';
        btn.textContent = hotToggleLabel(false);

        const footer = body.querySelector('.hot-card-footer');
        if (footer) body.insertBefore(btn, footer);
        else body.appendChild(btn);

        const toggle = (e) => {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            const open = card.classList.toggle('is-expanded');
            btn.textContent = hotToggleLabel(open);
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        };

        btn.setAttribute('aria-expanded', 'false');
        btn.addEventListener('click', toggle);

        // Tap card (not inquire) to expand/collapse on mobile
        card.addEventListener('click', (e) => {
            if (e.target.closest('.hot-card-btn') || e.target.closest('.hot-card-toggle')) return;
            toggle(e);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
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
    initStdLayoutSwitch();
    initProductLibrary();
});

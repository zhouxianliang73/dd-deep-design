/* ============================================
   DD Deep Design — Main Scripts + Configurator
   ============================================ */

// =============================================
// TRANSLATIONS
// =============================================
const i18n = {
    'nav.about':      { en: 'About',          cn: '关于我们' },
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
    'config.step1.title': { en: 'Choose Size & Door Style', cn: '选择尺寸与门型' },
    'config.step1.desc':  { en: 'All cabinets: 900mm deep × 2250mm high. Select the width that fits your space.', cn: '标准柜体：深900mm × 高2250mm。选择适合您空间的宽度。' },
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
    'config.step4.title': { en: 'Select Color Series & Finish', cn: '选择颜色系列与饰面' },
    'config.step4.desc':  { en: 'Choose from our Color Options V3.0 catalog. Click any color to select — the finish code will appear in your quote.', cn: '从Color Options V3.0色卡中选择。点击颜色即可选中——色号将出现在报价中。' },
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
    'comp.included':    { en: '✓ Included', cn: '✓ 含' },
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
    'config.included':{ en: '📌 Included in this model:', cn: '📌 本型号标准配置：' },
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
        'LED-Upgrade': true,
        'Shelf-Extra': false,
        'Power-Plus': false,
        'Countertop': false,
        'Brand-Panel': false
    }
};

let colorState = {
    series: 'xuanli',
    code: 'CK01G-Y',
    name: 'Arctic White, Matte',
    premium: 0
};

// =============================================
// DOM REFS
// =============================================
const doorTypeBtns = document.querySelectorAll('#doorTypeGroup .config-btn');
const sizeBtns = document.querySelectorAll('#sizeGroup .size-btn');
const componentsGrid = document.getElementById('componentsGrid');
const accessoriesGrid = document.getElementById('accessoriesGrid');
const accessoriesCheckboxes = () => document.querySelectorAll('#accessoriesGrid input[type="checkbox"]');
const seriesTabs = document.querySelectorAll('#seriesTabs .series-tab');
const colorSwatches = () => document.querySelectorAll('.color-swatch');
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
function getModelName() {
    const base = state.doorType === 'xt' ? 'TH-XT' : 'TH-WM';
    let seriesNum = '001';
    if (state.width === 3200) seriesNum = '002';
    else if (state.width === 3500) seriesNum = '003';
    const suffix = state.width === 2200 ? '-X' : '';
    return base + '-' + seriesNum + suffix;
}

function getBasePrice() {
    return basePrices[state.doorType][state.width];
}

function getAccessoriesTotal() {
    let total = 0;
    for (const [key, checked] of Object.entries(state.accessories)) {
        if (checked) total += accessoryPrices[key];
    }
    return total;
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
        doorImg.src = isXt 
            ? 'assets/images/products/suoer/\u4E0A\u7FFB\u95E8.png'
            : 'assets/images/products/suoer/\u5377\u5E18\u95E8.png';
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
        elevImg.src = 'assets/images/products/suoer/' + state.width + '.png';
    }
    if (elevWidth) elevWidth.textContent = state.width;
    
    // Update included specs dynamically
    const specList = document.getElementById('previewSpecsList');
    if (specList) {
        const inclKey = 'config.incl.' + state.doorType + '.' + state.width;
        const inclText = t(inclKey);
        if (inclText && inclText !== inclKey) {
            const items = inclText.split(', ');
            specList.innerHTML = items.map(item => '<li>' + item + '</li>').join('');
        }
    }
}

function renderComponents() {
    const configs = componentConfigs[state.width];
    let html = '';
    configs.forEach(comp => {
        const name = t(comp.nameKey) || comp.defaultEn;
        const detail = t(comp.detailKey) || comp.defaultDetail;
        const badge = t('comp.included');
        html += `
            <div class="component-item included">
                <span class="comp-icon">${comp.icon}</span>
                <span class="comp-info">
                    <strong>${name}</strong>
                    <small>${detail}</small>
                </span>
                <span class="comp-badge">${badge}</span>
            </div>
        `;
    });
    componentsGrid.innerHTML = html;
}

function renderAccessories() {
    const accData = [
        { key: 'TV-Mount', checked: state.accessories['TV-Mount'] },
        { key: 'LED-Upgrade', checked: state.accessories['LED-Upgrade'] },
        { key: 'Shelf-Extra', checked: state.accessories['Shelf-Extra'] },
        { key: 'Power-Plus', checked: state.accessories['Power-Plus'] },
        { key: 'Countertop', checked: state.accessories['Countertop'] },
        { key: 'Brand-Panel', checked: state.accessories['Brand-Panel'] }
    ];
    let html = '';
    accData.forEach(item => {
        const name = t('acc.' + item.key) || item.key;
        const detail = t('acc.' + item.key + '.detail') || '';
        const price = accessoryPrices[item.key];
        html += `
            <label class="accessory-item">
                <input type="checkbox" data-accessory="${item.key}" data-price="${price}" ${item.checked ? 'checked' : ''}>
                <span class="acc-info">
                    <strong>${name}</strong>
                    <small>${detail}</small>
                </span>
                <span class="acc-price">+¥${price.toLocaleString()}</span>
            </label>
        `;
    });
    accessoriesGrid.innerHTML = html;

    // Re-bind events
    document.querySelectorAll('#accessoriesGrid input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', function() {
            state.accessories[this.dataset.accessory] = this.checked;
            updateTotal();
        });
    });
}

function updateTotal() {
    const base = getBasePrice();
    const accessories = getAccessoriesTotal();
    const finish = colorState.premium;
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

// Series tabs (color)
seriesTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        seriesTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const series = tab.dataset.series;
        colorState.series = series;
        document.querySelectorAll('.series-colors').forEach(c => c.classList.remove('active'));
        document.getElementById('colors-' + series).classList.add('active');
        const firstColor = document.querySelector('#colors-' + series + ' .color-swatch');
        if (firstColor) {
            document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('color-active'));
            firstColor.classList.add('color-active');
            colorState.code = firstColor.dataset.code;
            colorState.premium = parseInt(firstColor.dataset.premium) || 0;
            colorState.name = firstColor.title || firstColor.querySelector('small')?.textContent || firstColor.dataset.code;
            selectedColorCode.textContent = colorState.code;
            selectedColorName.textContent = '— ' + colorState.name;
            updateTotal();
        }
    });
});

// Color swatch selection (delegated)
document.addEventListener('click', function(e) {
    const swatch = e.target.closest('.color-swatch');
    if (!swatch) return;
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('color-active'));
    swatch.classList.add('color-active');
    colorState.code = swatch.dataset.code;
    colorState.premium = parseInt(swatch.dataset.premium) || 0;
    colorState.name = swatch.title || swatch.querySelector('small')?.textContent || swatch.dataset.code;
    selectedColorCode.textContent = colorState.code;
    selectedColorName.textContent = '— ' + colorState.name;
    updateTotal();
});

// =============================================
// INIT
// =============================================
updateAll();
applyTranslation();

// =============================================
// NAVBAR & SCROLL
// =============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
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

        const lang = currentLang === 'en' ? 'EN' : 'CN';
        const lines = currentLang === 'en'
            ? [`Model: ${model}`, `Door Type: ${doorLabel}`, `Size: ${width} × 900 × 2250 mm`, `Color: ${colorCode} — ${colorName}`, `Accessories: ${accItems.length ? accItems.join(', ') : 'Standard only'}`, `Estimated Total: ${totalPrice} (FOB China)`]
            : [`型号：${model}`, `门型：${doorLabel}`, `尺寸：${width} × 900 × 2250 mm`, `颜色：${colorCode} — ${colorName}`, `配件：${accItems.length ? accItems.join(', ') : '标准配置'}`, `预估总价：${totalPrice}（FOB中国）`];
        return lines.join('\n');
    } catch(e) {
        return currentLang === 'en' ? 'Configuration: see selections above' : '配置：请参考上方选择';
    }
}

// =============================================
// HOT SELLERS TAB SWITCHING
// =============================================
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
});


// Color grid toggle
function toggleColors(btn) {
    const grid = btn.previousElementSibling;
    if (!grid || !grid.classList.contains('color-grid')) return;
    const isExpanded = grid.classList.contains('expanded');
    if (isExpanded) {
        grid.classList.remove('expanded');
        grid.classList.add('collapsed');
        btn.innerHTML = 'Show All \u2193';
    } else {
        grid.classList.remove('collapsed');
        grid.classList.add('expanded');
        btn.innerHTML = 'Show Less \u2191';
    }
}

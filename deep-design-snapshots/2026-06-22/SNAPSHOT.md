# deep design 快照 · 2026-06-22

## 路径

| 用途 | 路径 |
|------|------|
| 主工作区 | `D:\DD-cursor\DD-design\` |
| 预览 | `file:///D:/DD-cursor/DD-design/1.html` |
| 本快照（桌面） | `C:\Users\LocalAccount\Desktop\deep-design-snapshots\2026-06-22\` |
| 本快照（仓库旁） | `D:\DD-cursor\deep-design-snapshots\2026-06-22\` |

## 文件清单

- `1.md` / `1.html` — 单文件原型（改 md 后需同步 html）
- `app-state.json` — 版本与功能索引
- `comm-structure.json` — 沟通记录结构
- `comm-process.json` — 沟通流程

## 本版里程碑

1. **子容器折叠修复**：`.project-shell.is-open > .project-shell-body` 子选择器，嵌套容器独立展开
2. **THOR 八类报价**：虚拟项目 `p-thor`（陈先生 · THOR 不锈钢厨柜），`quoteCategories` 八类结构
3. **清单 + 选品联动**：每版块表格末行「+」→ 选品 Tab，推荐 20 款，选后回项目中心对应版块
4. **项目中心**：统一 shell、合并/拆分、Tab 过滤（项目/我的）

## 关键符号

- `THOR_KITCHEN_QUOTE_CATEGORIES`、`renderQuoteCategoriesHtml`
- `shopPickerContext`、`openShopForQuoteSection`、`renderQuoteAddRowHtml`
- `initProjectShellInteractions` 内 `[data-goto-shop]`

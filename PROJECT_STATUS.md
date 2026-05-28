# ZD Tech 项目状态

> 最后更新：2026-05-28

## 项目概述

- **名称**：zdhome — ZD Tech 自媒体工作室官网
- **域名**：[etboodonline.com](https://www.etboodonline.com)
- **技术栈**：Next.js 14 + React 18 + TypeScript + Tailwind CSS + Radix UI
- **后端**：Supabase（认证）、Vercel KV（数据）
- **部署**：Vercel（含 Google Analytics + AdSense）

## 页面结构

| 页面 | 路径 | 状态 |
|---|---|---|
| 首页 | `/` | 活跃 |
| 项目列表 | `/project` | 活跃，含分类筛选 |
| 服务 | `/service` | 活跃 |
| 我们做什么 | `/what-we-do` | 活跃 |
| 联系我们 | `/contact` | 活跃 |
| 订阅确认 | `/confirm` | 活跃 |
| 博客 | `/blog` | 占位 |
| 新闻 | `/news` | 占位 |

## 作品分类

| 分类 | 数量 | 项目 |
|---|---|---|
| Roblox | 2 | Apex Mind、LOBSTER BUMP |
| 网页游戏 | 5 | 龙虾跑酷、Mini Soccer、群雄战记、FootBall、Save Man、暗杀 |
| DApp | 2 | Are You Okay?、Sui Write3 |
| 工具 | 6 | OPC Hub、DeGame、OC Network、Sui Best Practices、Stable Gateway、Free Model |
| 文章 | 2 | Sui MOVE 教程、DeTask 教程 |
| 小说 | 2 | 码农穿越平民世界、群雄战记（链接指向外部番茄小说） |

## 小说功能状态

**已分离。** 提交 `3bf5d42` (2026-05-26) 移除了全部站内小说功能：

- 删除了 `/novels` 页面路由和 API
- 删除了 `src/data/chapters/` 全部章节数据
- 删除了 `src/data/novels.ts` 配置
- 删除了小说相关 i18n 文本
- 首页小说展示区也已移除（`ad14cc9`）

项目列表中保留 2 个小说条目，仅作为外部链接跳转到番茄小说。**不再在本项目内维护小说功能。**

## 最近更新

- 游戏图片预加载优化
- 新增暗杀（Assassin）H5 网页游戏
- AI HOT Daily 新闻模块
- 友情链接，主题色调整为桃红色系
- 小说功能分离

## 小说源文件

- 《寻夫》源文件：`D:\soon\小说寻夫\xunfu.md`（已翻译，待新项目承载）
- 其他小说章节源文件位于 Git 历史 `3bf5d42` 之前

## 注意事项

- 存在三种锁文件（`package-lock.json`、`pnpm-lock.yaml`、`yarn.lock`），建议统一
- `notes.json` 为空白占位
- 博客和新闻页面待开发
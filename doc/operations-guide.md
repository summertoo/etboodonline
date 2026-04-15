# etboodonline 项目操作说明

> 更新日期: 2026-04-15
> 技术栈: Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS

---

## 1. 项目结构

```
etboodonline/
├── public/                    # 静态资源
│   ├── robots.txt             # 爬虫规则（含 AI 爬虫许可）
│   ├── sitemap.xml            # 站点地图
│   └── detask9.png            # 首页展示图片
├── src/
│   ├── app/                   # Next.js App Router 目录
│   │   ├── layout.tsx         # 根布局（全局 metadata、JSON-LD、Providers）
│   │   ├── globals.css        # 全局样式
│   │   ├── page.tsx           # 首页 (/)
│   │   ├── providers.tsx      # 客户端 Providers（Sui、QueryClient、Theme）
│   │   ├── what-we-do/page.tsx
│   │   ├── service/page.tsx
│   │   ├── project/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── contact/page.tsx
│   │   └── api/
│   │       ├── subscribe/route.ts    # 邮件订阅 API
│   │       └── subscribers/route.ts  # 订阅列表查询 API
│   ├── components/
│   │   ├── Navbar.tsx         # 共享导航栏组件
│   │   ├── component/
│   │   │   └── homepage.css   # Cyber 主题样式
│   │   └── ui/                # shadcn/ui 组件
│   │       ├── avatar.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── input.tsx
│   └── lib/
│       └── utils.ts           # 工具函数（cn）
├── doc/                       # 项目文档
│   ├── seo-audit.md           # SEO 审计报告
│   ├── seo-strategy.md        # SEO 策略方案
│   ├── geo-strategy.md        # GEO 策略方案
│   ├── action-plan.md         # 实施行动计划
│   └── operations-guide.md    # 本文件
├── next.config.js             # Next.js 配置
├── tailwind.config.ts         # Tailwind CSS 配置
├── tsconfig.json              # TypeScript 配置
├── postcss.config.js          # PostCSS 配置
└── package.json               # 项目依赖和脚本
```

---

## 2. 常用命令

### 开发

```bash
# 安装依赖
npm install

# 启动开发服务器 (http://localhost:3000)
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器（本地测试构建结果）
npm run start

# 代码检查
npm run lint
```

### 部署

```bash
# 提交更改
git add -A
git commit -m "描述你做了什么"

# 推送到远程（触发 Vercel 自动部署）
git push
```

### 查询订阅者

```bash
# 查询当前订阅者列表（需要 ADMIN_SECRET）
curl -s -H "Authorization: Bearer YOUR_ADMIN_SECRET" \
  "https://etboodonline.vercel.app/api/subscribers"
```

---

## 3. 添加新页面

### 步骤

1. 创建页面文件：

```bash
mkdir -p src/app/your-page
```

2. 创建 `src/app/your-page/page.tsx`：

```tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

// SEO 元数据 - 每个页面必须有
export const metadata: Metadata = {
  title: "页面标题",               // 会自动拼接 "| ZD Tech"
  description: "页面描述，150字以内",
};

export default function YourPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container">
      <Navbar />

      <section className="text-center py-20 cyber-hero">
        <h2 className="text-4xl font-bold mb-4 cyber-title">页面标题</h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">
          页面副标题
        </p>
      </section>

      {/* 页面内容 */}

      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">Copyright &copy; 2026 ZD Tech</p>
      </footer>
    </div>
  );
}
```

3. 更新导航栏：编辑 `src/components/Navbar.tsx` 的 `navItems` 数组

4. 更新 sitemap：编辑 `public/sitemap.xml`，添加新页面 URL

---

## 4. 添加新项目

编辑 `src/app/page.tsx`（首页）和 `src/app/project/page.tsx`（项目页）中的数据数组：

```tsx
// 在 projectsData 数组中添加
{
  id: 7,
  title: "新项目名称",
  description: "项目描述",
  liveUrl: "https://项目地址.com/",
  githubUrl: "https://github.com/用户名/仓库",
  icon: "pie-chart",  // 可选: pie-chart, bar-chart, briefcase, smartphone
}
```

---

## 5. 修改 SEO 信息

### 全站默认 metadata

编辑 `src/app/layout.tsx` 中的 `metadata` 对象：

```tsx
export const metadata: Metadata = {
  title: {
    default: "ZD Tech - 你的标语",
    template: "%s | ZD Tech",  // 子页面标题模板
  },
  description: "全站默认描述",
  keywords: ["关键词1", "关键词2"],
  openGraph: {
    // 社交媒体分享预览配置
    images: [{ url: "/og-image.png" }],
  },
};
```

### 单页面 metadata

在各页面的 `page.tsx` 中导出 `metadata`：

```tsx
export const metadata: Metadata = {
  title: "页面标题",           // 最终显示为 "页面标题 | ZD Tech"
  description: "页面描述",
};
```

### 结构化数据 (JSON-LD)

编辑 `src/app/layout.tsx` 中的 `jsonLd` 对象，修改公司信息：

```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZD Tech",
  url: "https://www.etboodonline.com",
  sameAs: [
    "https://github.com/etboodXJ",
    "https://twitter.com/你的账号",
  ],
};
```

---

## 6. Vercel 部署配置

### 环境变量（Vercel 后台设置）

| 变量名 | 用途 | 必需 |
|--------|------|------|
| `KV_REST_API_URL` | Vercel KV 连接地址 | 是（订阅功能） |
| `KV_REST_API_TOKEN` | Vercel KV 认证 Token | 是（订阅功能） |

### 自动部署

- 推送到 `main` 分支会自动触发 Vercel 构建部署
- Vercel 自动识别 Next.js，无需手动配置构建命令
- 构建日志在 Vercel Dashboard → Deployments 查看

### 自定义域名

1. Vercel Dashboard → Settings → Domains
2. 添加 `www.etboodonline.com`
3. 按提示配置 DNS

---

## 7. 样式自定义

### Cyber 主题色

编辑 `src/components/component/homepage.css` 中的 CSS 变量：

```css
:root {
  --cyber-primary: #0ea5e9;      /* 主色 - 天蓝 */
  --cyber-secondary: #8b5cf6;    /* 副色 - 紫色 */
  --cyber-bg: #f8fafc;           /* 背景色 */
  --cyber-text: #1e293b;         /* 文字色 */
  --cyber-muted: #64748b;        /* 次要文字色 */
  --cyber-border: #e2e8f0;       /* 边框色 */
}
```

### Tailwind 配置

编辑 `tailwind.config.ts` 添加自定义样式。

---

## 8. 备份与回滚

### 旧文件备份

迁移时旧的 Vite 文件已备份到 `.backup-vite/` 目录：

```
.backup-vite/
├── api/                    # 旧的 Vercel Serverless Functions
├── pages/                  # 旧的页面组件
├── App.tsx                 # 旧的入口组件
├── main.tsx                # 旧的渲染入口
├── homepage.tsx.bak        # 旧的首页组件
├── index.html              # 旧的 HTML 模板
├── vite.config.ts          # 旧的 Vite 配置
└── tsconfig.node.json      # 旧的 TS 配置
```

### Git 回滚

```bash
# 查看提交历史
git log --oneline

# 回滚到迁移前（如果需要）
git revert HEAD

# 或回滚到指定提交
git reset --hard <commit-hash>
```

---

## 9. 常见问题

### Q: 本地开发时 API 不工作？

A: Next.js 的 API Routes 需要 Vercel KV 环境变量。本地开发时可以：
- 安装 Vercel CLI: `npm i -g vercel`
- 运行 `vercel link` 关联项目
- 运行 `vercel env pull .env.local` 拉取环境变量
- 然后 `npm run dev`

### Q: 页面样式和迁移前不一致？

A: 确认 `globals.css` 和 `homepage.css` 都已正确导入到 `layout.tsx` 中。

### Q: 如何添加新的 shadcn/ui 组件？

A: 
```bash
npx shadcn-ui@latest add dialog
```
组件会自动添加到 `src/components/ui/` 目录。

### Q: 构建报错 "Cannot find module"？

A: 
```bash
# 清理并重新安装
rm -rf node_modules .next
npm install
npm run build
```

### Q: Vercel 部署失败？

A: 检查 Vercel Dashboard 的构建日志。常见原因：
- 环境变量未设置（KV 相关）
- TypeScript 类型错误（本地运行 `npm run build` 验证）
- 依赖版本冲突

---

## 10. 性能监控

### Google Search Console

1. 访问 https://search.google.com/search-console
2. 添加 `www.etboodonline.com` 属性
3. 提交 sitemap: `https://www.etboodonline.com/sitemap.xml`
4. 监控索引状态和搜索表现

### Vercel Analytics

在 Vercel Dashboard → Analytics 查看：
- 页面访问量
- Core Web Vitals (LCP, FID, CLS)
- 地理分布

### Lighthouse 检测

```bash
# Chrome DevTools → Lighthouse → Analyze page load
# 或命令行：
npx lighthouse https://www.etboodonline.com --view
```

---

## 11. 联系方式

- Email: etbood@gmail.com
- GitHub: https://github.com/summertoo/etboodonline

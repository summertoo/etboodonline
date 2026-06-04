export interface SiteUpdateItem {
  id: string;
  date: string;
  title: {
    zh: string;
    en: string;
  };
  summary: {
    zh: string;
    en: string;
  };
  details: {
    zh: string[];
    en: string[];
  };
}

export const siteUpdates: SiteUpdateItem[] = [
  {
    id: "2026-06-04-hot-news",
    date: "2026-06-04",
    title: {
      zh: "综合热点新闻栏目已接入",
      en: "General Hot News Feed Added",
    },
    summary: {
      zh: "首页与新闻页新增综合热点分类，并自动显示最新日期的热点与 AI 新闻。",
      en: "Added a general hot-news category and made the homepage/news page show the latest dated hot and AI updates together.",
    },
    details: {
      zh: [
        "根据 2026-06-04 热点内容精选整理 8 条综合新闻，并去掉外链。",
        "首页新闻栏改为按最新日期聚合显示，可同时看到当天热点新闻与 AI 日报。",
        "新闻页新增分类标识，区分 Hot News 与 AI Daily。",
      ],
      en: [
        "Curated 8 general-interest hot news items from the 2026-06-04 source and removed external links.",
        "Homepage news now groups entries by the latest date so hot news and AI daily updates appear together.",
        "The news page now distinguishes Hot News and AI Daily with separate category badges.",
      ],
    },
  },
  {
    id: "2026-06-03-admin-dashboard-and-launch-tracking",
    date: "2026-06-03",
    title: {
      zh: "后台统计面板与启动次数追踪上线",
      en: "Admin Dashboard and Launch Tracking Added",
    },
    summary: {
      zh: "新增项目启动次数统计，并完成独立后台查看界面。",
      en: "Added project launch tracking and a standalone admin dashboard for reviewing stats.",
    },
    details: {
      zh: [
        "项目主按钮点击会写入数据库，用于统计每个游戏或项目的启动次数。",
        "新增管理员专用统计 RPC，可查看点击、点赞、收藏与留言明细。",
        "完成独立 React/Vite 后台，支持登录后查看各项目数据。",
      ],
      en: [
        "Project launch buttons now write click records to the database for per-project usage tracking.",
        "Added an admin-only dashboard RPC for clicks, likes, favorites, and comment details.",
        "Built a standalone React/Vite admin panel for reviewing project metrics after sign-in.",
      ],
    },
  },
  {
    id: "2026-06-03-comment-limit",
    date: "2026-06-03",
    title: {
      zh: "留言限制与公告体验完善",
      en: "Comment Limits and Update Notice Improvements",
    },
    summary: {
      zh: "补充每项目留言上限、错误提示，并准备更新公告机制。",
      en: "Added per-project comment limits, clearer error handling, and update notice support.",
    },
    details: {
      zh: [
        "每个用户在单个项目下最多可留言 5 条。",
        "前端与 Supabase RPC 同步增加留言上限保护。",
        "留言失败时显示明确提示，不再静默失败。",
      ],
      en: [
        "Each user can post up to 5 comments per project.",
        "Comment limits are enforced in both the frontend and Supabase RPC.",
        "Comment failures now show explicit feedback instead of failing silently.",
      ],
    },
  },
  {
    id: "2026-06-03-comment-modal-fix",
    date: "2026-06-03",
    title: {
      zh: "留言弹窗层级修复",
      en: "Comment Modal Layer Fix",
    },
    summary: {
      zh: "修复留言后弹窗被项目卡片遮挡和闪烁的问题。",
      en: "Fixed the comment modal being covered and flickering after posting.",
    },
    details: {
      zh: [
        "留言弹窗改为 portal 挂载到 document.body。",
        "避免被卡片 hover 动画和 overflow-hidden 影响。",
      ],
      en: [
        "The comment modal now renders through a portal into document.body.",
        "This avoids hover transform and overflow-hidden conflicts from project cards.",
      ],
    },
  },
  {
    id: "2026-06-03-project-comments",
    date: "2026-06-03",
    title: {
      zh: "项目留言功能上线",
      en: "Project Comments Launched",
    },
    summary: {
      zh: "项目卡片新增留言入口，支持查看与发布留言。",
      en: "Project cards now support viewing and posting comments.",
    },
    details: {
      zh: [
        "新增留言图标和评论弹窗。",
        "登录后可发布留言，未登录用户也可查看已有留言。",
        "个人中心新增 My Comments 记录区。",
      ],
      en: [
        "Added a comment icon and dedicated comment modal.",
        "Signed-in users can post comments while guests can still view them.",
        "Added a My Comments section in the personal center.",
      ],
    },
  },
  {
    id: "2026-06-03-social-actions",
    date: "2026-06-03",
    title: {
      zh: "项目社交按钮重做",
      en: "Project Social Actions Redesigned",
    },
    summary: {
      zh: "点赞、收藏与转发按钮改为更简洁直观的图标样式。",
      en: "Like, favorite, and share actions were redesigned into a cleaner icon-based UI.",
    },
    details: {
      zh: [
        "点赞按钮使用空心白心，选中后显示红色实心心。",
        "收藏按钮使用空心星形，选中后显示橙色实心星。",
        "新增转发按钮，支持分享到 X。",
      ],
      en: [
        "Like uses a white outline heart and turns solid red when active.",
        "Favorite uses an outline star and turns solid orange when active.",
        "Added a share action with X sharing support.",
      ],
    },
  },
  {
    id: "2026-06-02-grandpa-farm",
    date: "2026-06-02",
    title: {
      zh: "新增网页游戏 爷爷的农场",
      en: "Added the Web Game Grandpa's Desert Farm",
    },
    summary: {
      zh: "首页与项目页加入 Grandpa's Desert Farm 展示与试玩入口。",
      en: "Grandpa's Desert Farm was added to the homepage and project listing.",
    },
    details: {
      zh: [
        "新增游戏卡片、封面图与试玩链接。",
        "中英文名称同步补齐。",
      ],
      en: [
        "Added the game card, cover image, and play link.",
        "Completed both Chinese and English naming support.",
      ],
    },
  },
  {
    id: "2026-06-02-news-refresh",
    date: "2026-06-02",
    title: {
      zh: "首页新闻与新闻页同步更新",
      en: "Homepage News and News Page Refreshed",
    },
    summary: {
      zh: "根据最新 AI 日报补充新闻内容，并同步到新闻栏目。",
      en: "Added the latest summarized AI daily update to both homepage and news page.",
    },
    details: {
      zh: [
        "首页新闻仅保留最近 1 天的内容。",
        "新闻内容做了简化概括并去掉外链。",
      ],
      en: [
        "Homepage news now keeps only the latest 1-day updates.",
        "News content was simplified and external links were removed.",
      ],
    },
  },
  {
    id: "2026-06-02-my-menu",
    date: "2026-06-02",
    title: {
      zh: "My 入口并入登录菜单",
      en: "My Entry Moved into Login Menu",
    },
    summary: {
      zh: "登录后的 My 入口移入头像下拉菜单，导航栏更简洁。",
      en: "The My entry now lives inside the signed-in dropdown menu for a cleaner navbar.",
    },
    details: {
      zh: [
        "减少主导航占用空间。",
        "登录后的操作入口更集中。",
      ],
      en: [
        "Frees up space in the main navigation.",
        "Groups signed-in actions in one place.",
      ],
    },
  },
  {
    id: "2026-06-02-social-sql",
    date: "2026-06-02",
    title: {
      zh: "Supabase 社交功能 SQL 同步",
      en: "Supabase Social SQL Synced",
    },
    summary: {
      zh: "补齐线上数据库函数后，点赞与收藏恢复正常。",
      en: "Likes and favorites resumed working after the missing Supabase SQL was applied.",
    },
    details: {
      zh: [
        "修复 get_project_social_stats 缺失导致的 404。",
        "线上执行 SQL 后，点赞收藏功能恢复。",
      ],
      en: [
        "Fixed the missing get_project_social_stats RPC that caused 404 errors.",
        "Likes and favorites worked again after the SQL sync.",
      ],
    },
  },
  {
    id: "2026-06-01-news-module",
    date: "2026-06-01",
    title: {
      zh: "新闻模块上线",
      en: "News Module Added",
    },
    summary: {
      zh: "站点增加独立新闻栏目，用于展示 AI 与科技更新。",
      en: "The site gained a dedicated news section for AI and tech updates.",
    },
    details: {
      zh: [
        "新增首页新闻预览区。",
        "新增独立新闻页用于汇总内容。",
      ],
      en: [
        "Added a homepage news preview section.",
        "Added a dedicated news page for full update lists.",
      ],
    },
  },
  {
    id: "2026-05-31-home-refresh",
    date: "2026-05-31",
    title: {
      zh: "首页项目展示升级",
      en: "Homepage Project Presentation Refresh",
    },
    summary: {
      zh: "优化项目卡片展示方式，强化分区与视觉层次。",
      en: "Improved the project card presentation and section hierarchy on the homepage.",
    },
    details: {
      zh: [
        "网页游戏、Roblox、DApp、工具等模块更清晰。",
        "卡片交互和展示结构更统一。",
      ],
      en: [
        "Web games, Roblox, DApps, and tools are now separated more clearly.",
        "Card interaction and layout became more consistent.",
      ],
    },
  },
];

export const latestSiteUpdates = siteUpdates.slice(0, 5);

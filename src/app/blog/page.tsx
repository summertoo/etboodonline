"use client";

import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";

export default function Blog() {
  const { t, lang } = useLang();

  const articles = [
    {
      id: "sui-move-series",
      title: "从0基础开始写 Sui MOVE 应用&游戏实战系列",
      desc:
        lang === "zh"
          ? "在登链社区连载的 Sui Move 开发系列教程，从零基础到实战项目。"
          : "A Sui Move development tutorial series on LearnBlockchain, from beginner to real-world projects.",
      platform: "登链社区",
      url: "https://learnblockchain.cn/column/47",
      category: "tutorial",
    },
    {
      id: "detask-series",
      title: "星航计划 DeTask 找活网 Web3 DApp 应用开发",
      desc:
        lang === "zh"
          ? "星航计划实战项目，从零开发 Web3 去中心化任务平台 DApp。"
          : "Star Voyage project: building a decentralized task platform DApp on Web3.",
      platform: "登链社区",
      url: "https://learnblockchain.cn/column/43",
      category: "tutorial",
    },
  ];

  const novels = [
    {
      id: "coder-transmigrate",
      title: "码农穿越平民世界",
      desc:
        lang === "zh"
          ? "一个程序员意外穿越到平民世界，用代码思维解决古代生活难题的故事。连载于番茄小说。"
          : "A web novel about a coder who transmigrates to the common people's world. Serialized on Fanqie Novel.",
      platform: "番茄小说",
      url: "https://fanqienovel.com/page/7516472366981975102",
    },
    {
      id: "warlord-heroes",
      title: "群雄战记：中华英雄传",
      desc:
        lang === "zh"
          ? "重温经典武侠，群雄逐鹿的江湖故事。连载于番茄小说。"
          : "Relive classic wuxia tales of heroes contending for supremacy. Serialized on Fanqie Novel.",
      platform: "番茄小说",
      url: "https://fanqienovel.com/page/7631541666125450302",
    },
    {
      id: "mulan-first-battle",
      title: "群雄战记·英灵殿·花木兰第一战",
      desc:
        lang === "zh"
          ? "群雄战记世界观下的短篇故事，聚焦花木兰的第一场战斗与英灵觉醒。发布于番茄小说。"
          : "A short story in the Warlord Chronicles universe, focused on Hua Mulan's first battle and heroic awakening. Published on Fanqie Novel.",
      platform: "番茄小说",
      url: "https://fanqienovel.com/main/writer/preview-short/7636763598840152600",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container fly-in">
      <Navbar />

      <section className="text-center py-20 cyber-hero">
        <h2 className="text-4xl font-bold mb-4 cyber-title">{t("blog.title")}</h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">{t("blog.subtitle")}</p>
      </section>

      <section className="py-12">
        <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
          {lang === "zh" ? "📖 技术教程" : "📖 Technical Tutorials"}
        </h3>
        <p className="mb-10 text-center cyber-subtitle">
          {lang === "zh" ? "区块链开发实战教程系列" : "Blockchain development tutorial series"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="cyber-card h-full group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-40 overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-500 to-cyan-400">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl">📚</span>
                </div>
              </div>
              <CardContent className="p-5">
                <h4 className="font-semibold text-lg mb-2">{article.title}</h4>
                <p className="text-sm mb-4 cyber-subtitle">{article.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--cyber-muted)]">
                    📌 {article.platform}
                  </span>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <Button className="cyber-button-small">{t("articles.read")}</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
          {lang === "zh" ? "📚 创作小说" : "📚 Creative Writing"}
        </h3>
        <p className="mb-10 text-center cyber-subtitle">
          {lang === "zh" ? "原创小说与文学创作" : "Original novels and creative works"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {novels.map((novel) => (
            <Card key={novel.id} className="cyber-card h-full group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-40 overflow-hidden rounded-t-lg bg-gradient-to-br from-rose-400 to-orange-400">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl">📖</span>
                </div>
              </div>
              <CardContent className="p-5">
                <h4 className="font-semibold text-lg mb-2">{novel.title}</h4>
                <p className="text-sm mb-4 cyber-subtitle">{novel.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--cyber-muted)]">
                    📖 {novel.platform}
                  </span>
                  <a href={novel.url} target="_blank" rel="noopener noreferrer">
                    <Button className="cyber-button-small">{t("novels.read")}</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">{t("footer.copyright")}</p>
      </footer>
    </div>
  );
}

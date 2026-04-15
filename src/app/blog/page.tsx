"use client";

import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";

export default function Blog() {
  const { t } = useLang();

  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container fly-in">
      <Navbar />
      <section className="text-center py-20 cyber-hero">
        <h2 className="text-4xl font-bold mb-4 cyber-title">{t("blog.title")}</h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">{t("blog.subtitle")}</p>
      </section>
      <section className="py-16 max-w-3xl mx-auto text-center">
        <div className="p-12 rounded-xl border border-[var(--cyber-border)] bg-white">
          <div className="text-5xl mb-4">✍️</div>
          <h3 className="text-xl font-semibold mb-3">{t("blog.comingSoon")}</h3>
          <p className="cyber-subtitle">{t("blog.comingDesc")}</p>
        </div>
      </section>
      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">{t("footer.copyright")}</p>
      </footer>
    </div>
  );
}

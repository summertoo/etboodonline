"use client";

import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";

export default function WhatWeDo() {
  const { t } = useLang();

  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container fly-in">
      <Navbar />
      <section className="text-center py-20 cyber-hero">
        <h2 className="text-4xl font-bold mb-4 cyber-title">{t("whatwedo.title")}</h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">{t("whatwedo.subtitle")}</p>
      </section>
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "🌐", titleKey: "whatwedo.dappTitle", descKey: "whatwedo.dappDesc" },
            { icon: "🎮", titleKey: "whatwedo.gameTitle", descKey: "whatwedo.gameDesc" },
            { icon: "🛠️", titleKey: "whatwedo.consultTitle", descKey: "whatwedo.consultDesc" },
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-xl border border-[var(--cyber-border)] bg-white text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{t(item.titleKey)}</h3>
              <p className="cyber-subtitle">{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">{t("footer.copyright")}</p>
      </footer>
    </div>
  );
}

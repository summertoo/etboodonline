"use client";

import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";

export default function Service() {
  const { t } = useLang();

  const services = [
    { num: "01", titleKey: "service.s1Title", descKey: "service.s1Desc" },
    { num: "02", titleKey: "service.s2Title", descKey: "service.s2Desc" },
    { num: "03", titleKey: "service.s3Title", descKey: "service.s3Desc" },
    { num: "04", titleKey: "service.s4Title", descKey: "service.s4Desc" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container fly-in">
      <Navbar />
      <section className="text-center py-20 cyber-hero">
        <h2 className="text-4xl font-bold mb-4 cyber-title">{t("service.title")}</h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">{t("service.subtitle")}</p>
      </section>
      <section className="py-16">
        <div className="space-y-8 max-w-3xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="p-6 rounded-xl border border-[var(--cyber-border)] bg-white flex items-start gap-4">
              <span className="text-2xl font-bold cyber-title">{s.num}</span>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t(s.titleKey)}</h3>
                <p className="cyber-subtitle">{t(s.descKey)}</p>
              </div>
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

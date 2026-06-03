"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { latestSiteUpdates } from "@/data/updates";

export default function WhatWeDo() {
  const { t, lang } = useLang();
  const [sent, setSent] = useState(false);

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
            <div
              key={i}
              className="p-8 rounded-xl border border-[var(--cyber-border)] bg-white text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{t(item.titleKey)}</h3>
              <p className="cyber-subtitle">{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
          {lang === "zh" ? "历史修改记录" : "Change History"}
        </h3>
        <p className="mb-10 text-center cyber-subtitle">
          {lang === "zh"
            ? "记录网站近期做过的功能更新与页面调整。"
            : "A running log of recent feature updates and site changes."}
        </p>
        <div className="max-w-4xl mx-auto space-y-4">
          {latestSiteUpdates.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-[var(--cyber-border)] bg-white p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h4 className="text-xl font-semibold text-[var(--cyber-text)]">
                  {lang === "zh" ? item.title.zh : item.title.en}
                </h4>
                <span className="text-sm text-[var(--cyber-muted)]">
                  {item.date}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-[var(--cyber-muted)]">
                {lang === "zh" ? item.summary.zh : item.summary.en}
              </p>
              <ul className="mt-4 space-y-2">
                {(lang === "zh" ? item.details.zh : item.details.en).map(
                  (detail, index) => (
                    <li
                      key={`${item.id}-${index}`}
                      className="rounded-xl bg-[var(--cyber-accent-light)] px-4 py-3 text-sm text-[var(--cyber-text)]"
                    >
                      {detail}
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
          {t("contact.title")}
        </h3>
        <p className="mb-10 text-center cyber-subtitle">{t("contact.subtitle")}</p>
        <div className="max-w-lg mx-auto">
          <div className="p-8 rounded-xl border border-[var(--cyber-border)] bg-white space-y-6">
            <div className="text-center space-y-2">
              <p className="font-semibold text-lg">{t("contact.email")}</p>
              <a
                href="mailto:etbood@gmail.com"
                className="text-[var(--cyber-primary)] hover:underline"
              >
                etbood@gmail.com
              </a>
            </div>
            <hr className="border-[var(--cyber-border)]" />
            <div className="text-center">
              <p className="font-semibold text-lg mb-4">{t("contact.quickMsg")}</p>
              {sent ? (
                <p className="text-green-600 font-medium">{t("contact.sent")}</p>
              ) : (
                <div className="space-y-3">
                  <Input
                    className="cyber-input"
                    placeholder={t("contact.yourEmail")}
                    type="email"
                  />
                  <textarea
                    className="w-full p-3 rounded-lg border border-[var(--cyber-border)] focus:border-[var(--cyber-primary)] focus:outline-none focus:ring-2 focus:ring-[rgba(14,165,233,0.12)] resize-none"
                    rows={4}
                    placeholder={t("contact.yourMsg")}
                  />
                  <Button
                    className="cyber-button w-full"
                    onClick={() => {
                      window.open("mailto:etbood@gmail.com");
                      setSent(true);
                    }}
                  >
                    {t("contact.send")}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">{t("footer.copyright")}</p>
      </footer>
    </div>
  );
}

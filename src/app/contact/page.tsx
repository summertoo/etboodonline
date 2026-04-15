"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";

export default function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container fly-in">
      <Navbar />
      <section className="text-center py-20 cyber-hero">
        <h2 className="text-4xl font-bold mb-4 cyber-title">{t("contact.title")}</h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">{t("contact.subtitle")}</p>
      </section>
      <section className="py-16 max-w-lg mx-auto">
        <div className="p-8 rounded-xl border border-[var(--cyber-border)] bg-white space-y-6">
          <div className="text-center space-y-2">
            <p className="font-semibold text-lg">{t("contact.email")}</p>
            <a href="mailto:etbood@gmail.com" className="text-[var(--cyber-primary)] hover:underline">etbood@gmail.com</a>
          </div>
          <hr className="border-[var(--cyber-border)]" />
          <div className="text-center">
            <p className="font-semibold text-lg mb-4">{t("contact.quickMsg")}</p>
            {sent ? (
              <p className="text-green-600 font-medium">{t("contact.sent")}</p>
            ) : (
              <div className="space-y-3">
                <Input className="cyber-input" placeholder={t("contact.yourEmail")} type="email" />
                <textarea className="w-full p-3 rounded-lg border border-[var(--cyber-border)] focus:border-[var(--cyber-primary)] focus:outline-none focus:ring-2 focus:ring-[rgba(14,165,233,0.12)] resize-none" rows={4} placeholder={t("contact.yourMsg")} />
                <Button className="cyber-button w-full" onClick={() => { window.open("mailto:etbood@gmail.com"); setSent(true); }}>{t("contact.send")}</Button>
              </div>
            )}
          </div>
        </div>
      </section>
      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">{t("footer.copyright")}</p>
      </footer>
    </div>
  );
}

"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang, translations } from "@/lib/i18n";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  toggleLang: () => {},
  t: (key: string) => key,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  // Detect language on first mount
  useEffect(() => {
    const saved = localStorage.getItem("zdtech-lang") as Lang | null;
    if (saved && (saved === "en" || saved === "zh")) {
      setLang(saved);
    } else {
      // Auto-detect: Chinese browsers default to zh, others to en
      const browserLang = navigator.language || navigator.languages?.[0] || "en";
      const isZh = browserLang.toLowerCase().startsWith("zh");
      setLang(isZh ? "zh" : "en");
    }
    setMounted(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("zdtech-lang", lang);
    }
  }, [lang, mounted]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "zh" : "en"));

  const t = (key: string): string => {
    return translations[lang][key] || translations["en"][key] || key;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

"use client";

import Link from "next/link";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ConsentChoice = "all" | "necessary" | null;

type ConsentContextValue = {
  choice: ConsentChoice | undefined;
  saveChoice: (choice: Exclude<ConsentChoice, null>) => void;
};

const STORAGE_KEY = "zdtech-consent-v1";
const OPEN_EVENT = "zdtech:open-consent";
const ConsentContext = createContext<ConsentContextValue | null>(null);

function loadGoogleAnalytics() {
  if (document.getElementById("zdtech-google-analytics")) return;

  const measurementId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-MPXWZKWM9W";
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { anonymize_ip: true });

  const script = document.createElement("script");
  script.id = "zdtech-google-analytics";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

export function ConsentManager({ children }: { children: ReactNode }) {
  const [choice, setChoice] = useState<ConsentChoice | undefined>(undefined);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setChoice(saved === "all" || saved === "necessary" ? saved : null);

    const openSettings = () => setSettingsOpen(true);
    window.addEventListener(OPEN_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_EVENT, openSettings);
  }, []);

  useEffect(() => {
    if (choice === "all") loadGoogleAnalytics();
  }, [choice]);

  const value = useMemo<ConsentContextValue>(
    () => ({
      choice,
      saveChoice(nextChoice) {
        localStorage.setItem(STORAGE_KEY, nextChoice);
        if (nextChoice === "necessary") {
          window.gtag?.("consent", "update", {
            analytics_storage: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
          });
        }
        setChoice(nextChoice);
        setSettingsOpen(false);
      },
    }),
    [choice],
  );

  const showDialog = choice === null || settingsOpen;

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {showDialog && (
        <aside
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
          className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl border border-[var(--cyber-border)] bg-[var(--cyber-bg)] p-5 shadow-2xl sm:bottom-5"
        >
          <h2 id="cookie-consent-title" className="mb-2 text-lg font-bold">
            Cookie 与隐私设置 / Cookie & privacy settings
          </h2>
          <p className="text-sm leading-6 text-[var(--cyber-muted)]">
            我们仅在获得同意后加载 Google Analytics 和 Google AdSense。
            You can allow analytics and advertising cookies or continue with
            essential storage only. See our{" "}
            <Link href="/privacy" className="text-[var(--cyber-primary)] underline">
              privacy policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              className="cyber-button-small w-full sm:w-auto"
              onClick={() => value.saveChoice("all")}
            >
              全部同意 / Accept all
            </button>
            <button
              type="button"
              className="w-full border border-[var(--cyber-border)] px-4 py-2 text-sm text-[var(--cyber-text)] sm:w-auto"
              onClick={() => value.saveChoice("necessary")}
            >
              仅必要 / Necessary only
            </button>
          </div>
        </aside>
      )}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used inside ConsentManager.");
  }
  return context;
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

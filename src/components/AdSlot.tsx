"use client";

import { useEffect, useRef } from "react";
import { useConsent } from "@/components/ConsentManager";

type AdSlotProps = {
  slot?: string;
  label?: string;
  format?: "auto" | "fluid" | "rectangle";
};

const clientId =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-9035468310087485";

export default function AdSlot({
  slot,
  label = "Advertisement",
  format = "auto",
}: AdSlotProps) {
  const { choice } = useConsent();
  const requested = useRef(false);

  useEffect(() => {
    if (choice !== "all") return;

    const requestAd = () => {
      if (!slot || requested.current) return;
      requested.current = true;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        requested.current = false;
      }
    };

    const existing = document.getElementById(
      "zdtech-adsense",
    ) as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.loaded === "true") requestAd();
      else existing.addEventListener("load", requestAd, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = "zdtech-adsense";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        requestAd();
      },
      { once: true },
    );
    document.head.appendChild(script);
  }, [choice, slot]);

  if (choice !== "all" || !slot) return null;

  return (
    <aside
      aria-label={label}
      className="mx-auto my-8 w-full max-w-6xl px-4 text-center"
    >
      <span className="mb-2 block text-[10px] uppercase text-[var(--cyber-muted)]">
        {label}
      </span>
      <ins
        className="adsbygoogle block min-h-[90px]"
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </aside>
  );
}

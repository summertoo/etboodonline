"use client";

import { openConsentSettings } from "@/components/ConsentManager";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="hover:text-[var(--cyber-primary)]"
      onClick={openConsentSettings}
    >
      Cookie settings
    </button>
  );
}

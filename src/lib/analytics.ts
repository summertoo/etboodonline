"use client";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    adsbygoogle?: Record<string, unknown>[];
  }
}

export function trackEvent(
  eventName: string,
  parameters: Record<string, string | number | boolean> = {},
) {
  window.gtag?.("event", eventName, parameters);
}

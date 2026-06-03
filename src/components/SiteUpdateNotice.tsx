"use client";

import { useEffect, useMemo, useState } from "react";
import { useLang } from "@/components/LangProvider";
import { latestSiteUpdates } from "@/data/updates";

const STORAGE_KEY = "zdtech-last-seen-update-id";

export default function SiteUpdateNotice() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);

  const latestUpdate = latestSiteUpdates[0];
  const recentUpdates = useMemo(() => latestSiteUpdates.slice(0, 10), []);

  useEffect(() => {
    if (!latestUpdate) return;

    const seenId = window.localStorage.getItem(STORAGE_KEY);
    if (seenId !== latestUpdate.id) {
      setOpen(true);
    }
  }, [latestUpdate]);

  if (!latestUpdate || !open) return null;

  function handleClose() {
    window.localStorage.setItem(STORAGE_KEY, latestUpdate.id);
    setOpen(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4">
      <div className="w-full max-w-3xl rounded-3xl border border-[var(--cyber-border)] bg-white shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-[var(--cyber-border)] px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyber-primary)]">
              {lang === "zh" ? "网站更新公告" : "Website Update Notice"}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-[var(--cyber-text)]">
              {lang === "zh" ? latestUpdate.title.zh : latestUpdate.title.en}
            </h3>
            <p className="mt-1 text-sm text-[var(--cyber-muted)]">
              {latestUpdate.date}
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-full border border-[var(--cyber-border)] px-3 py-1 text-sm text-[var(--cyber-muted)] transition hover:border-[var(--cyber-primary)] hover:text-[var(--cyber-primary)]"
          >
            {lang === "zh" ? "关闭" : "Close"}
          </button>
        </div>

        <div className="space-y-5 px-6 py-5">
          <p className="text-sm leading-7 text-[var(--cyber-muted)]">
            {lang === "zh"
              ? latestUpdate.summary.zh
              : latestUpdate.summary.en}
          </p>

          <div className="rounded-2xl bg-[var(--cyber-accent-light)] p-4">
            <p className="mb-3 text-sm font-semibold text-[var(--cyber-text)]">
              {lang === "zh" ? "最近更新记录" : "Recent Updates"}
            </p>
            <div className="space-y-3">
              {recentUpdates.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-[var(--cyber-border)] bg-white px-4 py-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-[var(--cyber-text)]">
                      {lang === "zh" ? item.title.zh : item.title.en}
                    </p>
                    <span className="text-xs text-[var(--cyber-muted)]">
                      {item.date}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--cyber-muted)]">
                    {lang === "zh" ? item.summary.zh : item.summary.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

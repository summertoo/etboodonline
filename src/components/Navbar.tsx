"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/components/LangProvider";

const navKeys = [
  { href: "/", labelKey: "nav.home" },
  { href: "/project", labelKey: "nav.project" },
  { href: "/service", labelKey: "nav.service" },
  { href: "/blog", labelKey: "nav.blog" },
  { href: "/novels", labelKey: "nav.novels" },
  { href: "/news", labelKey: "nav.news" },
  { href: "/what-we-do", labelKey: "nav.whatWeDo" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLang();

  return (
    <header className="py-6 flex justify-between items-center cyber-header">
      <Link href="/" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
        <Image
          src="/avatars/logo.png"
          alt="ZD Tech Logo"
          width={40}
          height={40}
          className="rounded-lg"
          priority
        />
        <h1 className="text-3xl font-bold">ZD Tech</h1>
      </Link>
      <nav className="cyber-nav flex items-center gap-4" aria-label="Main navigation">
        <ul className="flex space-x-1">
          {navKeys.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[var(--cyber-primary)] bg-[rgba(14,165,233,0.08)]"
                      : ""
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={toggleLang}
          className="px-3 py-1.5 text-xs font-semibold rounded-md border border-[var(--cyber-border)] text-[var(--cyber-muted)] hover:text-[var(--cyber-primary)] hover:border-[var(--cyber-primary)] transition-all duration-200"
          title={lang === "en" ? "切换到中文" : "Switch to English"}
        >
          {lang === "en" ? "中" : "EN"}
        </button>
      </nav>
    </header>
  );
}

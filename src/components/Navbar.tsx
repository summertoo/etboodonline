"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/components/LangProvider";
import AuthModal from "./AuthModal";
import { supabase } from "@/lib/supabase";

const navKeys = [
  { href: "/", labelKey: "nav.home" },
  { href: "/project", labelKey: "nav.project" },
  { href: "/service", labelKey: "nav.service" },
  { href: "/blog", labelKey: "nav.blog" },
  { href: "/news", labelKey: "nav.news" },
  { href: "/what-we-do", labelKey: "nav.whatWeDo" },
];

function getUserNickname(user: any): string {
  if (user?.user_metadata?.nickname) return user.user_metadata.nickname;
  if (user?.user_metadata?.player_name) return user.user_metadata.player_name;
  return user?.email?.split("@")[0] || "User";
}

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLang();
  const [authOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState<{ id: string; nickname: string } | null>(
    null,
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          nickname: getUserNickname(session.user),
        });
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser({
            id: session.user.id,
            nickname: getUserNickname(session.user),
          });
        } else {
          setUser(null);
        }
      },
    );
    return () => listener?.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setUserMenuOpen(false);
  }, [pathname]);

  function handleLogin(nickname: string, _userId: string) {
    setUser({ id: _userId, nickname });
    setAuthOpen(false);
    setUserMenuOpen(false);
    setMobileMenuOpen(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setUser(null);
    setUserMenuOpen(false);
    setMobileMenuOpen(false);
  }

  return (
    <>
      <header className="py-4 md:py-6 flex flex-wrap justify-between items-center cyber-header">
        <Link
          href="/"
          className="flex items-center gap-3"
          style={{ textDecoration: "none" }}
        >
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
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav
          className="cyber-nav hidden md:flex items-center gap-4"
          aria-label="Main navigation"
        >
          <ul className="flex space-x-1">
            {navKeys.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`cyber-nav-link px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive ? "is-active text-[var(--cyber-hover-pink)]" : ""
                    }`}
                    style={{ textDecoration: "none" }}
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              );
            })}
          </ul>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen((open) => !open)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--cyber-border)] text-sm font-medium hover:border-[var(--cyber-primary)] transition-all"
              >
                <span className="w-6 h-6 rounded-full bg-[var(--cyber-primary)] text-white flex items-center justify-center text-xs font-bold">
                  {user.nickname.charAt(0)}
                </span>
                <span>{user.nickname}</span>
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                  <Link
                    href="/me"
                    onClick={() => setUserMenuOpen(false)}
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:text-[var(--cyber-primary)]"
                    style={{ textDecoration: "none" }}
                  >
                    {t("nav.me")}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-sm text-gray-600 hover:text-red-500 text-left"
                  >
                    {t("nav.logout")}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setAuthOpen(true)}
              className="px-3 py-1.5 text-xs font-semibold rounded-md border border-[var(--cyber-border)] text-[var(--cyber-primary)] hover:bg-[var(--cyber-primary)] hover:text-white transition-all duration-200"
            >
              {t("nav.login")}
            </button>
          )}

          <button
            onClick={toggleLang}
            className="px-3 py-1.5 text-xs font-semibold rounded-md border border-[var(--cyber-border)] text-[var(--cyber-muted)] hover:text-[var(--cyber-hover-pink)] hover:border-[var(--cyber-hover-pink)] transition-all duration-200"
            title={lang === "en" ? "切换到中文" : "Switch to English"}
          >
            {lang === "en" ? "中" : "EN"}
          </button>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full mt-3 pt-3 border-t border-[var(--cyber-border)]">
            <ul className="flex flex-col gap-1">
              {navKeys.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? "is-active text-[var(--cyber-hover-pink)]"
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
            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[var(--cyber-border)]">
              {user ? (
                <>
                  <span className="w-6 h-6 rounded-full bg-[var(--cyber-primary)] text-white flex items-center justify-center text-xs font-bold">
                    {user.nickname.charAt(0)}
                  </span>
                  <span className="text-sm font-medium">{user.nickname}</span>
                  <Link
                    href="/me"
                    onClick={() => setMobileMenuOpen(false)}
                    className="ml-auto px-3 py-1 text-xs font-semibold rounded-md border border-[var(--cyber-border)] text-[var(--cyber-primary)] hover:bg-[var(--cyber-primary)] hover:text-white transition-all"
                    style={{ textDecoration: "none" }}
                  >
                    {t("nav.me")}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-1 text-xs font-semibold rounded-md border border-[var(--cyber-border)] text-red-500 hover:bg-red-50 transition-all"
                  >
                    {t("nav.logout")}
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAuthOpen(true);
                  }}
                  className="px-3 py-1.5 text-xs font-semibold rounded-md border border-[var(--cyber-border)] text-[var(--cyber-primary)] hover:bg-[var(--cyber-primary)] hover:text-white transition-all"
                >
                  {t("nav.login")}
                </button>
              )}
              <button
                onClick={toggleLang}
                className="px-3 py-1.5 text-xs font-semibold rounded-md border border-[var(--cyber-border)] text-[var(--cyber-muted)] hover:text-[var(--cyber-hover-pink)] hover:border-[var(--cyber-hover-pink)] transition-all"
              >
                {lang === "en" ? "中" : "EN"}
              </button>
            </div>
          </div>
        )}
      </header>

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
}

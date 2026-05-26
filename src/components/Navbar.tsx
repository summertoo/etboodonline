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
  return user?.email?.split("@")[0] || "用户";
}

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLang();
  const [authOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState<{ id: string; nickname: string } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          nickname: getUserNickname(session.user),
        });
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          nickname: getUserNickname(session.user),
        });
      } else {
        setUser(null);
      }
    });
    return () => listener?.subscription.unsubscribe();
  }, []);

  function handleLogin(nickname: string, _userId: string) {
    setUser({ id: _userId, nickname });
    setAuthOpen(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setUser(null);
  }

  return (
    <>
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

          {user ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--cyber-border)] text-sm font-medium hover:border-[var(--cyber-primary)] transition-all"
              >
                <span className="w-6 h-6 rounded-full bg-[var(--cyber-primary)] text-white flex items-center justify-center text-xs font-bold">
                  {user.nickname.charAt(0)}
                </span>
                <span>{user.nickname}</span>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-sm text-gray-600 hover:text-red-500 text-left"
                  >
                    退出登录
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setAuthOpen(true)}
              className="px-3 py-1.5 text-xs font-semibold rounded-md border border-[var(--cyber-border)] text-[var(--cyber-primary)] hover:bg-[var(--cyber-primary)] hover:text-white transition-all duration-200"
            >
              登录
            </button>
          )}

          <button
            onClick={toggleLang}
            className="px-3 py-1.5 text-xs font-semibold rounded-md border border-[var(--cyber-border)] text-[var(--cyber-muted)] hover:text-[var(--cyber-primary)] hover:border-[var(--cyber-primary)] transition-all duration-200"
            title={lang === "en" ? "切换到中文" : "Switch to English"}
          >
            {lang === "en" ? "中" : "EN"}
          </button>
        </nav>
      </header>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} onLogin={handleLogin} />
    </>
  );
}
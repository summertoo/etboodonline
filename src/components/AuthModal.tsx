"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useLang } from "@/components/LangProvider";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  onLogin: (nickname: string, userId: string) => void;
}

export default function AuthModal({ open, onClose, onLogin }: AuthModalProps) {
  const { t } = useLang();
  const [tab, setTab] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [tab, open]);

  if (!open) return null;

  function getNick(user: any, fallback: string) {
    // 1. Try user_metadata.nickname (set during signup)
    if (user?.user_metadata?.nickname) return user.user_metadata.nickname;
    // 2. Try user_metadata.player_name (set by game app)
    if (user?.user_metadata?.player_name) return user.user_metadata.player_name;
    // 3. Fallback to email prefix
    return fallback;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (tab === "register") {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { nickname: nickname || email.split("@")[0] } },
        });
        if (signUpError) {
          if (signUpError.message.includes("already registered")) {
            setError(t("auth.error.emailRegistered"));
          } else {
            setError(signUpError.message);
          }
          return;
        }
        if (data.user?.identities?.length === 0) {
          setError(t("auth.error.emailRegistered"));
          return;
        }
        if (!data.user) {
          setError(t("auth.error.registerFailed"));
          return;
        }
        if (data.session) {
          const nick = getNick(data.user, email.split("@")[0]);
          onLogin(nick, data.user.id);
          onClose();
        } else {
          setError(t("auth.error.registerSuccess"));
        }
      } else {
        const { data, error: loginError } =
          await supabase.auth.signInWithPassword({
            email,
            password,
          });
        if (loginError) {
          setError(t("auth.error.loginFailed"));
          return;
        }
        if (!data.user) {
          setError(t("auth.error.loginFailed2"));
          return;
        }
        const nick = getNick(data.user, email.split("@")[0]);
        onLogin(nick, data.user.id);
        onClose();
      }
    } catch (err) {
      setError(t("auth.error.unknown"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl">
        {/* Tabs */}
        <div className="flex mb-6 border-b border-gray-200">
          <button
            className={`flex-1 pb-3 text-sm font-medium transition-colors ${tab === "login" ? "text-[var(--cyber-primary)] border-b-2 border-[var(--cyber-primary)]" : "text-gray-400"}`}
            onClick={() => setTab("login")}
          >
            {t("auth.login")}
          </button>
          <button
            className={`flex-1 pb-3 text-sm font-medium transition-colors ${tab === "register" ? "text-[var(--cyber-primary)] border-b-2 border-[var(--cyber-primary)]" : "text-gray-400"}`}
            onClick={() => setTab("register")}
          >
            {t("auth.register")}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder={t("auth.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[var(--cyber-primary)]"
          />
          <input
            type="password"
            placeholder={t("auth.password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[var(--cyber-primary)]"
          />
          {tab === "register" && (
            <input
              type="text"
              placeholder={t("auth.nickname")}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[var(--cyber-primary)]"
            />
          )}

          {error && (
            <p
              className={`text-sm ${error.includes(t("auth.error.registerSuccess")) ? "text-green-600" : "text-red-500"}`}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg text-sm font-medium text-white bg-[var(--cyber-primary)] hover:opacity-90 disabled:opacity-50 transition-all"
          >
            {loading
              ? t("auth.processing")
              : tab === "login"
                ? t("auth.login")
                : t("auth.register")}
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 w-full py-2 text-sm text-gray-400 hover:text-gray-600"
        >
          {t("auth.close")}
        </button>
      </div>
    </div>
  );
}

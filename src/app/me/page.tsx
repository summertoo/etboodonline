"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/LangProvider";
import { projects } from "@/data/projects";
import { dailyCheckin, fetchMyCenterData, type CenterData } from "@/lib/social";
import { supabase } from "@/lib/supabase";

export default function MePage() {
  const { lang } = useLang();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [centerData, setCenterData] = useState<CenterData | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session?.user) {
        setIsLoggedIn(false);
        setLoading(false);
        return;
      }

      setIsLoggedIn(true);
      setEmail(session.user.email || "");

      try {
        const data = await fetchMyCenterData();
        if (data.success) {
          setCenterData(data);
        }
      } finally {
        setLoading(false);
      }
    });
  }, []);

  const likedProjects = useMemo(() => {
    const liked = new Set(centerData?.likes.map((item) => item.project_id) || []);
    return projects.filter((project) => liked.has(project.id));
  }, [centerData]);

  const favoriteProjects = useMemo(() => {
    const favorites = new Set(
      centerData?.favorites.map((item) => item.project_id) || [],
    );
    return projects.filter((project) => favorites.has(project.id));
  }, [centerData]);

  async function handleCheckin() {
    setSubmitting(true);
    try {
      const result = await dailyCheckin();
      if (!result.success) return;

      setCenterData((prev) =>
        prev
          ? {
              ...prev,
              today_checked_in: true,
              credits: { balance: result.new_balance },
              recent_checkins: [
                {
                  checkin_date: new Date().toISOString().slice(0, 10),
                  points_awarded: result.points_awarded,
                  created_at: new Date().toISOString(),
                },
                ...prev.recent_checkins,
              ].slice(0, 7),
              credit_logs: result.points_awarded
                ? [
                    {
                      id: Date.now(),
                      amount: result.points_awarded,
                      type: "earn",
                      description: "daily_checkin",
                      created_at: new Date().toISOString(),
                    },
                    ...prev.credit_logs,
                  ].slice(0, 20)
                : prev.credit_logs,
            }
          : prev,
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 cyber-container fly-in">
      <Navbar />

      <section className="text-center py-16 cyber-hero">
        <h2 className="text-4xl font-bold mb-4 cyber-title">
          {lang === "zh" ? "我的中心" : "My Center"}
        </h2>
        <p className="cyber-subtitle max-w-2xl mx-auto">
          {lang === "zh"
            ? "查看账户、积分、签到、收藏和点赞记录。"
            : "View your account, credits, check-ins, favorites, and likes."}
        </p>
      </section>

      {loading ? (
        <div className="py-20 text-center cyber-subtitle">
          {lang === "zh" ? "加载中..." : "Loading..."}
        </div>
      ) : !isLoggedIn ? (
        <Card className="cyber-card max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-3">
              {lang === "zh" ? "请先登录" : "Please sign in first"}
            </h3>
            <p className="cyber-subtitle mb-4">
              {lang === "zh"
                ? "登录后即可使用点赞、收藏、签到和积分。"
                : "Sign in to use likes, favorites, check-ins, and credits."}
            </p>
            <Link href="/">
              <Button>{lang === "zh" ? "返回首页" : "Back Home"}</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-16">
          <Card className="cyber-card lg:col-span-1">
            <CardHeader>
              <CardTitle>{lang === "zh" ? "账户信息" : "Account"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">
                <span className="font-semibold">
                  {lang === "zh" ? "昵称：" : "Nickname: "}
                </span>
                {centerData?.profile?.nickname || email.split("@")[0]}
              </p>
              <p className="text-sm break-all">
                <span className="font-semibold">Email: </span>
                {email}
              </p>
              <p className="text-sm">
                <span className="font-semibold">
                  {lang === "zh" ? "积分：" : "Credits: "}
                </span>
                {centerData?.credits.balance || 0}
              </p>
            </CardContent>
          </Card>

          <Card className="cyber-card lg:col-span-2">
            <CardHeader>
              <CardTitle>{lang === "zh" ? "每日签到" : "Daily Check-In"}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium">
                  {centerData?.today_checked_in
                    ? lang === "zh"
                      ? "今天已签到"
                      : "Checked in today"
                    : lang === "zh"
                      ? "今天还未签到"
                      : "You have not checked in today"}
                </p>
                <p className="text-sm cyber-subtitle">
                  {lang === "zh"
                    ? "每日签到可获得 10 积分。"
                    : "Daily check-in grants 10 credits."}
                </p>
              </div>
              <Button
                onClick={handleCheckin}
                disabled={centerData?.today_checked_in || submitting}
              >
                {centerData?.today_checked_in
                  ? lang === "zh"
                    ? "已签到"
                    : "Checked In"
                  : submitting
                    ? lang === "zh"
                      ? "提交中..."
                      : "Submitting..."
                    : lang === "zh"
                      ? "立即签到"
                      : "Check In"}
              </Button>
            </CardContent>
          </Card>

          <Card className="cyber-card lg:col-span-2">
            <CardHeader>
              <CardTitle>{lang === "zh" ? "我的收藏" : "My Favorites"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {favoriteProjects.length === 0 ? (
                <p className="text-sm cyber-subtitle">
                  {lang === "zh" ? "暂无收藏。" : "No favorites yet."}
                </p>
              ) : (
                favoriteProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between gap-4 rounded-lg border border-[var(--cyber-border)] p-4"
                  >
                    <div>
                      <p className="font-medium">
                        {project.title || project.titleKey || project.id}
                      </p>
                      <p className="text-sm cyber-subtitle">{project.id}</p>
                    </div>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target={project.liveUrl.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="outline">
                          {lang === "zh" ? "查看" : "Open"}
                        </Button>
                      </a>
                    )}
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          <Card className="cyber-card lg:col-span-1">
            <CardHeader>
              <CardTitle>{lang === "zh" ? "最近签到" : "Recent Check-Ins"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {centerData?.recent_checkins.length ? (
                centerData.recent_checkins.map((item) => (
                  <div key={item.created_at} className="text-sm">
                    <p className="font-medium">{item.checkin_date}</p>
                    <p className="cyber-subtitle">+{item.points_awarded}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm cyber-subtitle">
                  {lang === "zh" ? "暂无签到记录。" : "No check-ins yet."}
                </p>
              )}
            </CardContent>
          </Card>

          <Card className="cyber-card lg:col-span-2">
            <CardHeader>
              <CardTitle>{lang === "zh" ? "我的点赞" : "My Likes"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {likedProjects.length === 0 ? (
                <p className="text-sm cyber-subtitle">
                  {lang === "zh" ? "暂无点赞。" : "No likes yet."}
                </p>
              ) : (
                likedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between gap-4 rounded-lg border border-[var(--cyber-border)] p-4"
                  >
                    <div>
                      <p className="font-medium">
                        {project.title || project.titleKey || project.id}
                      </p>
                      <p className="text-sm cyber-subtitle">{project.id}</p>
                    </div>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target={project.liveUrl.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="outline">
                          {lang === "zh" ? "查看" : "Open"}
                        </Button>
                      </a>
                    )}
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          <Card className="cyber-card lg:col-span-1">
            <CardHeader>
              <CardTitle>{lang === "zh" ? "积分流水" : "Credit Logs"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {centerData?.credit_logs.length ? (
                centerData.credit_logs.map((item) => (
                  <div key={`${item.id}-${item.created_at}`} className="text-sm">
                    <p className="font-medium">
                      {item.amount > 0 ? `+${item.amount}` : item.amount}
                    </p>
                    <p className="cyber-subtitle">{item.description || item.type}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm cyber-subtitle">
                  {lang === "zh" ? "暂无积分流水。" : "No credit logs yet."}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

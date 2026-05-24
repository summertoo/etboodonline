"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";

interface FeedbackFormProps {
  lang: string;
}

export default function FeedbackForm({ lang }: FeedbackFormProps) {
  const [content, setContent] = useState("");
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isZh = lang === "zh";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim()) return;
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      await supabase.from("user_feedback").insert({
        content: content.trim(),
        contact: contact.trim() || null,
        user_id: user?.id || null,
      });
      setSubmitted(true);
      setContent("");
      setContact("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Feedback submit error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-2 cyber-title">
          {isZh ? "💬 需求与建议" : "💬 Requests & Feedback"}
        </h3>
        <p className="text-center text-sm mb-8 cyber-subtitle opacity-70">
          {isZh ? "告诉我们您需要什么功能，或留下您的想法和建议" : "Tell us what you need, or share your ideas and suggestions"}
        </p>

        {submitted ? (
          <div className="p-6 rounded-xl border border-green-200 bg-green-50 text-center">
            <p className="text-green-600 font-medium">
              {isZh ? "✅ 提交成功！感谢您的反馈！" : "✅ Submitted! Thanks for your feedback!"}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={isZh ? "写下您的需求、建议或想法..." : "Write your request, suggestion or idea..."}
              rows={4}
              required
              maxLength={2000}
              className="w-full px-4 py-3 rounded-lg border border-[var(--cyber-border)] text-sm focus:outline-none focus:border-[var(--cyber-primary)] resize-none"
            />
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder={isZh ? "联系方式（选填）" : "Contact (optional)"}
              maxLength={100}
              className="w-full px-4 py-2.5 rounded-lg border border-[var(--cyber-border)] text-sm focus:outline-none focus:border-[var(--cyber-primary)]"
            />
            <button
              type="submit"
              disabled={loading || !content.trim()}
              className="w-full py-2.5 rounded-lg text-sm font-medium text-white bg-[var(--cyber-primary)] hover:opacity-90 disabled:opacity-50 transition-all"
            >
              {loading ? (isZh ? "提交中..." : "Submitting...") : isZh ? "提交反馈" : "Submit Feedback"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

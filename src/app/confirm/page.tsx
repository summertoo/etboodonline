"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import { useLang } from "@/components/LangProvider";

export default function ConfirmPage() {
  const { t } = useLang();
  const [status, setStatus] = useState(t("confirm.verifying"));
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setStatus(t("confirm.verifying"));

    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const type = params.get("type");
    const emailParam = params.get("email");

    const supabase = createClient();

    if (token && type === "signup") {
      if (emailParam) {
        supabase.auth
          .verifyOtp({ email: emailParam, token, type: "signup" })
          .then(({ error }) => {
            if (error) {
              supabase.auth.getSession().then(({ data, error }) => {
                if (error || !data.session) {
                  setStatus(
                    t("confirm.failed") +
                      (error?.message || t("confirm.invalid")),
                  );
                  setSuccess(false);
                } else {
                  setStatus(t("confirm.success"));
                  setSuccess(true);
                }
              });
            } else {
              setStatus(t("confirm.success"));
              setSuccess(true);
            }
          });
      } else {
        supabase.auth.getSession().then(({ data, error }) => {
          if (error || !data.session) {
            setStatus(t("confirm.invalidLink"));
            setSuccess(false);
          } else {
            setStatus(t("confirm.success"));
            setSuccess(true);
          }
        });
      }
    } else {
      setStatus(t("confirm.invalid"));
      setSuccess(false);
    }
  }, [t]);

  const bgColor = success ? "#10b981" : "#ef4444";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#1a1a2e",
        color: "#fff",
      }}
    >
      <div
        style={{
          padding: "40px",
          borderRadius: "16px",
          background: bgColor,
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>{status}</h1>
        {success && (
          <a href="/" style={{ color: "#fff", textDecoration: "underline" }}>
            {t("confirm.backHome")}
          </a>
        )}
      </div>
    </div>
  );
}

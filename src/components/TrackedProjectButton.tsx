"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { recordProjectClick } from "@/lib/social";
import { supabase } from "@/lib/supabase";

interface TrackedProjectButtonProps {
  projectId: string;
  href: string;
  sourcePage: string;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  children: React.ReactNode;
}

export default function TrackedProjectButton({
  projectId,
  href,
  sourcePage,
  className,
  target,
  rel,
  children,
}: TrackedProjectButtonProps) {
  const lockedRef = useRef(false);
  const [pending, setPending] = useState(false);

  const resolvedTarget = target ?? (href.startsWith("http") ? "_blank" : "_self");
  const resolvedRel =
    rel ?? (resolvedTarget === "_blank" ? "noopener noreferrer" : undefined);

  async function sendClickWithKeepalive() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const session = await supabase.auth.getSession();
    const accessToken = session.data.session?.access_token;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error("Missing Supabase configuration.");
    }

    const response = await fetch(
      `${supabaseUrl}/rest/v1/rpc/record_project_click`,
      {
        method: "POST",
        keepalive: true,
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${accessToken ?? supabaseAnonKey}`,
        },
        body: JSON.stringify({
          p_project_id: projectId,
          p_target_url: href,
          p_source_page: sourcePage,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Click tracking failed with ${response.status}`);
    }
  }

  async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const hasModifierKey =
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0;

    if (resolvedTarget === "_blank" || hasModifierKey) {
      void recordProjectClick(projectId, href, sourcePage).catch(() => {});
      return;
    }

    event.preventDefault();

    if (lockedRef.current) return;
    lockedRef.current = true;
    setPending(true);

    try {
      await Promise.race([
        sendClickWithKeepalive().catch(() =>
          recordProjectClick(projectId, href, sourcePage).catch(() => {}),
        ),
        new Promise<void>((resolve) => {
          window.setTimeout(resolve, 250);
        }),
      ]);
    } finally {
      window.location.assign(href);
    }
  }

  return (
    <Button className={className} asChild>
      <a
        href={href}
        target={resolvedTarget}
        rel={resolvedRel}
        onClick={handleClick}
        className={pending ? "pointer-events-none opacity-70" : undefined}
      >
        {children}
      </a>
    </Button>
  );
}

"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  projectId: string;
  children: ReactNode;
};

export default function TrackedLink({
  projectId,
  children,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackEvent("project_destination_click", {
          project_id: projectId,
          destination: props.href || "",
        });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}

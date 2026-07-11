"use client";

import React from "react";
import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";
import { LangProvider } from "@/components/LangProvider";
import { ConsentManager } from "@/components/ConsentManager";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Theme appearance="dark">
      <LangProvider>
        <ConsentManager>{children}</ConsentManager>
      </LangProvider>
    </Theme>
  );
}

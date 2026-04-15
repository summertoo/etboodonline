"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [stage, setStage] = useState<"enter" | "exit">("enter");

  useEffect(() => {
    // Trigger exit animation
    setStage("exit");

    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setStage("enter");
    }, 200); // match exit duration

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <div
      style={{
        opacity: stage === "enter" ? 1 : 0,
        transform: stage === "enter" ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.25s ease, transform 0.25s ease",
      }}
    >
      {displayChildren}
    </div>
  );
}

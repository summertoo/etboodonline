"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPath.current && ref.current) {
      prevPath.current = pathname;
      const el = ref.current;
      // Restart animation
      el.classList.remove("animate-page-in");
      void el.offsetWidth; // force reflow
      el.classList.add("animate-page-in");
    }
  }, [pathname]);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [animKey, setAnimKey] = useState(pathname);
  const [animClass, setAnimClass] = useState("");

  useEffect(() => {
    // Trigger bounce-in animation on route change
    setAnimClass("");
    requestAnimationFrame(() => {
      setAnimKey(pathname);
      setAnimClass("animate-page-in");
    });
  }, [pathname]);

  return (
    <div key={animKey} className={animClass}>
      {children}
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/service", label: "Service" },
  { href: "/project", label: "Project" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="py-6 flex justify-between items-center cyber-header">
      <Link href="/" className="text-3xl font-bold" style={{ textDecoration: "none" }}>
        <h1>ZD Tech</h1>
      </Link>
      <nav className="cyber-nav" aria-label="Main navigation">
        <ul className="flex space-x-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[var(--cyber-primary)] bg-[rgba(14,165,233,0.08)]"
                      : ""
                  }`}
                  style={{
                    textDecoration: "none",
                    position: "relative",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

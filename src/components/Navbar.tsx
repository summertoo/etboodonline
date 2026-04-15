"use client";

import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/service", label: "Service" },
  { href: "/project", label: "Project" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="py-6 flex justify-between items-center cyber-header">
      <Link href="/" className="text-3xl font-bold" style={{ textDecoration: "none" }}>
        <h1>ZD Tech</h1>
      </Link>
      <nav className="cyber-nav" aria-label="Main navigation">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

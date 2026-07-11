import Link from "next/link";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export default function LegalFooter() {
  return (
    <footer className="border-t border-[var(--cyber-border)] px-4 py-6 text-center text-xs text-[var(--cyber-muted)]">
      <nav
        aria-label="Legal"
        className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
      >
        <Link href="/privacy" className="hover:text-[var(--cyber-primary)]">
          Privacy
        </Link>
        <Link href="/terms" className="hover:text-[var(--cyber-primary)]">
          Terms
        </Link>
        <CookieSettingsButton />
        <a
          href="mailto:etbood@gmail.com"
          className="hover:text-[var(--cyber-primary)]"
        >
          etbood@gmail.com
        </a>
      </nav>
    </footer>
  );
}

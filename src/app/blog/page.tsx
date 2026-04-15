import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest insights, tutorials, and updates from ZD Tech on Web3 development, Sui blockchain, and decentralized technologies.",
};

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container">
      <Navbar />

      <section className="text-center py-20 cyber-hero">
        <h2 className="text-4xl font-bold mb-4 cyber-title">Blog</h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">
          Insights, tutorials, and updates from the team.
        </p>
      </section>

      <section className="py-16 max-w-3xl mx-auto text-center">
        <div className="p-12 rounded-xl border border-[var(--cyber-border)] bg-white">
          <div className="text-5xl mb-4">✍️</div>
          <h3 className="text-xl font-semibold mb-3">Coming Soon</h3>
          <p className="cyber-subtitle">
            We&apos;re working on some great content. Stay tuned!
          </p>
        </div>
      </section>

      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">Copyright &copy; 2026 ZD Tech</p>
      </footer>
    </div>
  );
}

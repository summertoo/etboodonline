import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "ZD Tech offers end-to-end Web3 development services including smart contract development, DApp creation, game development, and blockchain consulting on Sui.",
};

export default function Service() {
  const services = [
    {
      title: "Smart Contract Development",
      desc: "Secure, audited Move smart contracts on Sui Network.",
    },
    {
      title: "Frontend & UI/UX",
      desc: "Modern React-based interfaces with wallet integration and responsive design.",
    },
    {
      title: "Game Development",
      desc: "Browser games, Roblox experiences, and blockchain-powered game economies.",
    },
    {
      title: "DevOps & Deployment",
      desc: "CI/CD pipelines, Vercel deployment, and infrastructure management.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container">
      <Navbar />

      <section className="text-center py-20 cyber-hero">
        <h2 className="text-4xl font-bold mb-4 cyber-title">Our Services</h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">
          End-to-end solutions for your Web3 journey.
        </p>
      </section>

      <section className="py-16">
        <div className="space-y-8 max-w-3xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-[var(--cyber-border)] bg-white flex items-start gap-4"
            >
              <span className="text-2xl font-bold cyber-title">0{i + 1}</span>
              <div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="cyber-subtitle">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">Copyright &copy; 2026 ZD Tech</p>
      </footer>
    </div>
  );
}

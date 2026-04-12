import { Link } from "react-router-dom"
import "../components/component/homepage.css"

export default function Service() {
  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container">
      <header className="py-6 flex justify-between items-center cyber-header">
        <Link to="/" className="text-3xl font-bold" style={{ textDecoration: "none" }}>
          <h1>Write ZD Tech</h1>
        </Link>
        <nav className="cyber-nav">
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/what-we-do">What We Do</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section className="text-center py-20 cyber-hero">
        <h2 className="text-4xl font-bold mb-4 cyber-title">Our Services</h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">
          End-to-end solutions for your Web3 journey.
        </p>
      </section>

      <section className="py-16">
        <div className="space-y-8 max-w-3xl mx-auto">
          {[
            { title: "Smart Contract Development", desc: "Secure, audited Move smart contracts on Sui Network." },
            { title: "Frontend & UI/UX", desc: "Modern React-based interfaces with wallet integration and responsive design." },
            { title: "Game Development", desc: "Browser games, Roblox experiences, and blockchain-powered game economies." },
            { title: "DevOps & Deployment", desc: "CI/CD pipelines, Vercel deployment, and infrastructure management." },
          ].map((s, i) => (
            <div key={i} className="p-6 rounded-xl border border-[var(--cyber-border)] bg-white flex items-start gap-4">
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
        <p className="cyber-subtitle">Copyright © 2026 ZD tech</p>
      </footer>
    </div>
  )
}

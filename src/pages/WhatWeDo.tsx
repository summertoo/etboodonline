import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import "../components/component/homepage.css"

export default function WhatWeDo() {
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
        <h2 className="text-4xl font-bold mb-4 cyber-title">What We Do</h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">
          We build decentralized applications, web3 games, and creative tools on cutting-edge blockchain technology.
        </p>
      </section>

      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl border border-[var(--cyber-border)] bg-white text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-3">DApp Development</h3>
            <p className="cyber-subtitle">Full-stack decentralized application development on Sui Network, from smart contracts to frontend interfaces.</p>
          </div>
          <div className="p-8 rounded-xl border border-[var(--cyber-border)] bg-white text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold mb-3">Web3 Games</h3>
            <p className="cyber-subtitle">Browser-based and Roblox games with blockchain integration, NFT assets, and play-to-earn mechanics.</p>
          </div>
          <div className="p-8 rounded-xl border border-[var(--cyber-border)] bg-white text-center">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-xl font-semibold mb-3">Technical Consulting</h3>
            <p className="cyber-subtitle">Architecture design, code review, and technical guidance for blockchain projects and teams.</p>
          </div>
        </div>
      </section>

      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">Copyright © 2026 ZD tech</p>
      </footer>
    </div>
  )
}

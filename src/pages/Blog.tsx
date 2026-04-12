import { Link } from "react-router-dom"
import "../components/component/homepage.css"

export default function Blog() {
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
        <h2 className="text-4xl font-bold mb-4 cyber-title">Blog</h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">
          Insights, tutorials, and updates from the team.
        </p>
      </section>

      <section className="py-16 max-w-3xl mx-auto text-center">
        <div className="p-12 rounded-xl border border-[var(--cyber-border)] bg-white">
          <div className="text-5xl mb-4">✍️</div>
          <h3 className="text-xl font-semibold mb-3">Coming Soon</h3>
          <p className="cyber-subtitle">We're working on some great content. Stay tuned!</p>
        </div>
      </section>

      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">Copyright © 2026 ZD tech</p>
      </footer>
    </div>
  )
}

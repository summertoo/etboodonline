import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import "../components/component/homepage.css"

export default function Contact() {
  const [sent, setSent] = useState(false)

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
        <h2 className="text-4xl font-bold mb-4 cyber-title">Contact Us</h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">
          Have a project in mind? Let's talk.
        </p>
      </section>

      <section className="py-16 max-w-lg mx-auto">
        <div className="p-8 rounded-xl border border-[var(--cyber-border)] bg-white space-y-6">
          <div className="text-center space-y-2">
            <p className="font-semibold text-lg">📧 Email</p>
            <a href="mailto:etbood@gmail.com" className="text-[var(--cyber-primary)] hover:underline">
              etbood@gmail.com
            </a>
          </div>

          <hr className="border-[var(--cyber-border)]" />

          <div className="text-center">
            <p className="font-semibold text-lg mb-4">💬 Quick Message</p>
            {sent ? (
              <p className="text-green-600 font-medium">Thanks! We'll get back to you soon.</p>
            ) : (
              <div className="space-y-3">
                <Input className="cyber-input" placeholder="Your email" type="email" />
                <textarea
                  className="w-full p-3 rounded-lg border border-[var(--cyber-border)] focus:border-[var(--cyber-primary)] focus:outline-none focus:ring-2 focus:ring-[rgba(14,165,233,0.12)] resize-none"
                  rows={4}
                  placeholder="Your message..."
                />
                <Button className="cyber-button w-full" onClick={() => {
                  window.open("mailto:etbood@gmail.com")
                  setSent(true)
                }}>
                  Send Message
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">Copyright © 2026 ZD tech</p>
      </footer>
    </div>
  )
}

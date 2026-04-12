import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import "../components/component/homepage.css"

const projects = [
  {
    title: "Are You Okay?",
    desc: "A Decentralized Check-In Triggered Timed Transfer DApp On Sui Network",
    url: "https://ruok3.vercel.app/",
    github: "https://github.com/summertoo/ruok",
  },
  {
    title: "Mini Soccer",
    desc: "Mini Soccer is a game that allows players to play soccer in the metaverse.",
    url: "https://soccerdemo.edgeone.app/",
  },
  {
    title: "Sui Write3",
    desc: "A platform for novel authors to upload novels.",
    github: "https://github.com/etboodXJ/SuiWrite3",
    comingSoon: true,
  },
  {
    title: "Hand Battle",
    desc: "A game where players can battle with their hands.",
    url: "https://handbattle.etboodonline.com/",
  },
  {
    title: "Legion Management",
    desc: "Game Legion Management.",
    url: "https://www.etboodonline.com/dyj/",
  },
]

export default function Project() {
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
        <h2 className="text-4xl font-bold mb-4 cyber-title">Projects</h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">
          Our portfolio of DApps, games, and tools.
        </p>
      </section>

      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Card key={i} className="cyber-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">{p.title}</h4>
                <p className="mb-4">{p.desc}</p>
                <div className="flex space-x-2">
                  {p.url && (
                    <Button className="cyber-button-small" onClick={() => window.open(p.url, "_blank")}>Visit</Button>
                  )}
                  {p.github && (
                    <Button className="cyber-button-small" onClick={() => window.open(p.github, "_blank")}>GitHub</Button>
                  )}
                  {p.comingSoon && !p.url && (
                    <Button className="cyber-button-small" onClick={() => alert("Coming soon!")}>Coming Soon</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">Copyright © 2026 ZD tech</p>
      </footer>
    </div>
  )
}

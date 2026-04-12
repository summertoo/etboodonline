import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Homepage } from "./components/component/homepage"
import WhatWeDo from "./pages/WhatWeDo"
import Service from "./pages/Service"
import Project from "./pages/Project"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"

import './app/globals.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Services from './components/Services'
import Counter from './components/Counter'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'

const SECTIONS = ['about', 'services', 'skills', 'education', 'experience']

export default function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observers = SECTIONS.map(id => {
      const el = document.getElementById(id) || document.querySelector(`[data-section="${id}"]`)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <div id="colorlib-page">
      <div className="container-wrap">
        <Sidebar activeSection={activeSection} />
        <div id="colorlib-main">
          <About />
          <Services />
          <Counter />
          <Skills />
          <Education />
          <Experience />
        </div>
      </div>
    </div>
  )
}

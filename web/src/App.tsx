import { useEffect } from 'react'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Engagements, Founder, Process, Services, Stack, Work } from './components/Sections'

export default function App() {
  // The page renders after the browser's own jump to #hash, so do it once mounted.
  useEffect(() => {
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-cyan px-4 py-2 font-semibold text-on-cyan focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Founder />
        <Stack />
        <Work />
        <Projects />
        <Process />
        <Engagements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

import { Background } from '@/components/portfolio/background'
import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Skills } from '@/components/portfolio/skills'
import { Projects } from '@/components/portfolio/projects'
import { Experience } from '@/components/portfolio/experience'
import { Philosophy } from '@/components/portfolio/philosophy'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import { siteConfig } from '@/config/siteConfig'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Hyperspeed from '@/blocks/Backgrounds/Hyperspeed/Hyperspeed'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white bg-transparent">
      <div className="absolute inset-0 -z-10">
        <Hyperspeed />
      </div>
      <Hero name={siteConfig.hero.name} tagline={siteConfig.hero.tagline} content={siteConfig.about.content} />
      <Experience experience={siteConfig.experience} />
      <Education education={siteConfig.education} />
      <Projects projects={siteConfig.projects} />
      <Skills skills={siteConfig.skills} />
      <Certifications certifications={siteConfig.certifications} />
      <Contact />

    </main>
  )
}
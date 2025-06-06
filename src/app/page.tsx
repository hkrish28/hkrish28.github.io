import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import { siteConfig } from '@/config/siteConfig'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-100 via-white to-blue-100 text-gray-900">
      <Hero name={siteConfig.hero.name} tagline={siteConfig.hero.tagline} />
      <Projects projects={siteConfig.projects} />
      <About content={siteConfig.about.content} />
      <Experience experience={siteConfig.experience} />
      <Education education={siteConfig.education} />
      <Skills skills={siteConfig.skills} />
    </main>
  )
}

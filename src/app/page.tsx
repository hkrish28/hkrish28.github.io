import Hero from '@/components/Hero'
import { siteConfig } from '@/config/siteConfig'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import { projects } from '@/config/projectsConfig'
import { ExpandableProjectCards } from '@/components/ui/ExpandableProjectCards'


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white bg-transparent">
      <Hero name={siteConfig.hero.name} tagline={siteConfig.hero.tagline} content={siteConfig.about.content} />
      <Experience experience={siteConfig.experience} />
      <Education education={siteConfig.education} />
      <ExpandableProjectCards projects={projects} />
      <Skills skills={siteConfig.skills} />
      <Certifications certifications={siteConfig.certifications} />
      <Contact />

    </main>
  )
}
'use client'

import { siteConfig } from '@/config/siteConfig'
import SectionReveal from './SectionReveal'
import { motion } from 'framer-motion'

const sections = [
  { id: 'projects', title: 'Projects', content: siteConfig.projects },
  { id: 'about', title: 'About Me', content: siteConfig.about.content },
  { id: 'experience', title: 'Experience', content: siteConfig.experience },
  { id: 'education', title: 'Education', content: siteConfig.education },
  { id: 'skills', title: 'Skills', content: siteConfig.skills },
  { id: 'certifications', title: 'Certifications', content: siteConfig.certifications }
]

export default function InfinitePortfolio() {
  return (
    <div className="space-y-16 px-4 py-10 max-w-4xl mx-auto text-white">
      {sections.map((section, idx) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-black/60 rounded-lg p-6 shadow-lg backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          <SectionReveal id={section.id} content={section.content} />
        </motion.div>
      ))}
    </div>
  )
}

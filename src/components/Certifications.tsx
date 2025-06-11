'use client'

import { motion } from 'framer-motion'
import Section from './Section'

type Certification = {
  name: string
  provider: string
  date: string
  link?: string
}

export default function Certifications({ certifications }: { certifications: Certification[] }) {
  return (
    <Section title="Certifications" className="text-white">
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="space-y-6"
      >
        {certifications.map((cert, idx) => (
          <motion.li
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="border-l-4 border-indigo-400 pl-4"
          >
            <div className="flex justify-between items-center">
              <h3 className="item-heading">{cert.name}</h3>
              <span className="item-period">{cert.date}</span>
            </div>
            <p className="item-degree">{cert.provider}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 text-lg underline mt-1 inline-block"
              >
                View Certificate
              </a>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}

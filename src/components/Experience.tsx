'use client'

import Section from './Section'

type ExperienceItem = {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export default function Experience({ experience }: { experience: ExperienceItem[] }) {
  return (
    <Section title="Experience" className="text-white">
      <div className="space-y-10">
        {experience.map((exp, idx) => (
          <div key={idx} className="item-border relative">
            <div className="absolute left-[-10px] top-1 w-4 h-4 bg-indigo-400 rounded-full" />
            <h3 className="item-heading">
              {exp.role} — <span className="text-indigo-300">{exp.company}</span>
            </h3>
            <p className="item-location mb-1">{exp.location}</p>
            <p className="item-period mb-3">{exp.period}</p>
            <ul className="list-text">
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

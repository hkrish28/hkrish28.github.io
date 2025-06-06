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
          <div key={idx} className="border-l-4 border-indigo-400 pl-6 relative">
            <div className="absolute left-[-10px] top-1 w-4 h-4 bg-indigo-400 rounded-full" />
            <h3 className="text-xl font-bold">
              {exp.role} — <span className="text-indigo-300">{exp.company}</span>
            </h3>
            <p className="text-sm text-gray-400 mb-1">{exp.location}</p>
            <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
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

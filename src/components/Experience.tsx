type ExperienceItem = {
    role: string
    company: string
    location: string
    period: string
    bullets: string[]
  }
  
  export default function Experience({ experience }: { experience: ExperienceItem[] }) {
    return (
      <section className="py-24 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-10">
          {experience.map((exp, idx) => (
            <div key={idx} className="border-l-4 border-indigo-500 pl-6 relative">
              <div className="absolute left-[-10px] top-1 w-4 h-4 bg-indigo-500 rounded-full" />
              <h3 className="text-xl font-bold">{exp.role} — <span className="text-indigo-600">{exp.company}</span></h3>
              <p className="text-sm text-gray-500 mb-1">{exp.location}</p>
              <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
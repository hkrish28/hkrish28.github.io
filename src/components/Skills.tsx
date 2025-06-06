import Section from './Section'

type SkillCategory = {
  category: string
  items: string[]
}

export default function Skills({ skills }: { skills: SkillCategory[] }) {
  return (
    <Section title="Technical Skills" className="text-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-bold mb-2 text-indigo-300">{skill.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <li
                  key={i}
                  className="bg-indigo-900 border border-indigo-600 rounded px-3 py-1 text-sm text-indigo-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

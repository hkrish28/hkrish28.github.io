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
            <h3 className="item-heading">{skill.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <li key={i} className="skill-badge">
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

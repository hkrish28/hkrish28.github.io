type SkillCategory = {
    category: string
    items: string[]
  }
  
  export default function Skills({ skills }: { skills: SkillCategory[] }) {
    return (
      <section className="py-24 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-12">Technical Skills</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold mb-2">{skill.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="bg-white border border-gray-300 rounded px-3 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
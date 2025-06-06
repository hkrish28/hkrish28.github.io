import Section from './Section'

type EducationItem = {
  school: string
  location: string
  degree: string
  gpa?: string
  period: string
  details: string[]
}

export default function Education({ education }: { education: EducationItem[] }) {
  return (
    <Section title="Education" className="text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((item, idx) => (
          <div key={idx} className="border-l-4 border-indigo-400 pl-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">{item.school}</h3>
              <span className="text-sm text-indigo-300">{item.period}</span>
            </div>
            <p className="text-sm text-indigo-200">{item.location}</p>
            <p className="mt-1 font-medium text-indigo-100">
              {item.degree} {item.gpa && `| GPA: ${item.gpa}`}
            </p>
            <ul className="list-disc list-inside mt-2 text-indigo-200 space-y-1">
              {item.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

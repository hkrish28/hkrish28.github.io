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
      <section className="py-24 px-6 bg-gradient-to-b from-blue-100 to-indigo-100">
        <h2 className="text-3xl font-semibold text-center mb-12">Education</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, idx) => (
            <div key={idx} className="border-l-4 border-indigo-500 pl-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{item.school}</h3>
                <span className="text-sm text-gray-500">{item.period}</span>
              </div>
              <p className="text-sm text-gray-600">{item.location}</p>
              <p className="mt-1 font-medium">{item.degree} {item.gpa && `| GPA: ${item.gpa}`}</p>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                {item.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
type Project = {
  name: string
  techStack: string[]
  period: string
  description: string[]
  links?: {
    repo?: string
    demo?: string
  }
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
      <div className="max-w-5xl mx-auto space-y-10">
        {projects.map((project, idx) => (
          <div key={idx} className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{project.period}</p>
              </div>
              <div className="space-x-3">
                {project.links?.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-sm underline">Live</a>
                )}
                {project.links?.repo && (
                  <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-sm underline">Code</a>
                )}
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="mt-3 text-sm text-gray-600">
              <strong>Stack:</strong> {project.techStack.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

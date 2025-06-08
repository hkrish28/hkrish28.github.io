import Section from './Section'

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
    <Section title="Projects" className="text-white">
      <div className="max-w-5xl mx-auto space-y-10">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="item-heading text-white">{project.name}</h3>
                <p className="item-period text-white/70 mb-2">{project.period}</p>
              </div>
              <div className="space-x-3">
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-300 text-sm underline"
                  >
                    Live
                  </a>
                )}
                {project.links?.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-300 text-sm underline"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
            <ul className="list-text text-white/80 mt-2">
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="mt-3 list-text text-white/70">
              <strong>Stack:</strong> {project.techStack.join(', ')}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

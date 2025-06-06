type Project = {
    title: string
    description: string
  }
  
  export default function Projects({ projects }: { projects: Project[] }) {
    return (
      <section className="py-24 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div key={idx} className="p-6 bg-indigo-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
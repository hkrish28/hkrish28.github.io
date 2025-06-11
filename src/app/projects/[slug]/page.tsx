import { notFound } from "next/navigation";
import { projects } from "@/config/projectsConfig";
import Image from "next/image";
import BackButton from "@/components/BackButton";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const { name, period, techStack, details, screenshots, links } = project;

  return (
    <div className="max-w-5xl mx-auto px-6 py-24 text-white space-y-10">
      <BackButton />
      <h1 className="text-4xl font-bold">{name}</h1>
      <p className="text-gray-400 text-lg">{period}</p>

      <div className="text-indigo-300 font-medium">
        Tech Stack: {techStack.join(", ")}
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-200">{details.overview}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Why This Project</h2>
        <p className="text-gray-200">{details.why}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Key Learnings</h2>
        <p className="text-gray-200">{details.learnings}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Achievements</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-200">
          {details.achievements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {details.future && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Future Enhancements</h2>
          <p className="text-gray-200">{details.future}</p>
        </section>
      )}

      {details.extra && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Extra Notes</h2>
          <p className="text-gray-200">{details.extra}</p>
        </section>
      )}

      {screenshots && screenshots?.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {screenshots?.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`Screenshot ${idx + 1}`}
                width={800}
                height={450}
                className="rounded-lg shadow-lg"
              />
            ))}
          </div>
        </section>
      )}

      <div className="flex flex-row space-x-6">
        {links?.repo && (
          <a
            href={links.repo}
            className="text-indigo-300 underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code on GitHub
          </a>
        )}

        {links?.demo && (
          <a
            href={links.demo}
            className="text-indigo-300 underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Demo
          </a>
        )}
      </div>
    </div>
  );
}

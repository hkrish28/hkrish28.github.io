'use client'

import { useRouter } from "next/navigation"; // Next.js 13+ app router useRouter
import Section from "./Section";
import { Project } from "@/types/projectTypes";

/* This component is deprecated for ExpandableProjectCards*/
export default function Projects({ projects }: { projects: Project[] }) {
  const router = useRouter();

  return (
    <Section title="Projects" className="text-white">
      <div className="max-w-5xl mx-auto space-y-10">
        {projects.map((project) => (
          <div
            key={project.slug}
            onClick={() => router.push(`/projects/${project.slug}`)}
            className="project-card cursor-pointer hover:bg-white/5 transition-colors duration-200 rounded-lg p-1"
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                router.push(`/projects/${project.slug}`);
              }
            }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="item-heading text-white hover:underline">
                  {project.name}
                </h3>
                <p className="item-period text-white/70 mb-2">{project.period}</p>
              </div>
              <div className="space-x-3">
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-300 text-sm underline"
                    onClick={(e) => e.stopPropagation()}
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
                    onClick={(e) => e.stopPropagation()}
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
              <strong>Stack:</strong> {project.techStack.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

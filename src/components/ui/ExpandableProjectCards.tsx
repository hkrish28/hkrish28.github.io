// components/ExpandableProjectCards.tsx
'use client';

import React, { useEffect, useId, useRef, useState, useMemo } from 'react'; // Added useMemo
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import Image from 'next/image';

import { Project } from '@/types/projectTypes'; // Ensure Project type has tags: string[]
import Section from '../Section';

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black dark:text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

interface ExpandableProjectCardsProps {
  projects: Project[];
}

export function ExpandableProjectCards({ projects }: ExpandableProjectCardsProps) {
  const [active, setActive] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null); // Renamed 'ref' to 'modalRef' and specified type for consistency
  const id = useId();

  // --- Pagination and Filtering States ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of projects per page
  const [selectedTags, setSelectedTags] = useState<string[]>([]); // State for selected tags

  // Dynamically collect all unique tags from your projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [projects]); // Recalculate if the projects list changes

  // Filtered projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return projects; // If no tags selected, show all projects
    }
    return projects.filter(project =>
      // Check if at least one selected tag is present in the project's tags
      selectedTags.some(selectedTag => project.tags.includes(selectedTag))
    );
  }, [projects, selectedTags]);

  // Paginated projects
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProjects.slice(startIndex, endIndex);
  }, [filteredProjects, currentPage, itemsPerPage]);


  // --- Pagination and Filtering Handlers ---
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Optional: Scroll to top of projects section on page change
    const sectionElement = document.getElementById(projectsSectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleTagToggle = (tag: string) => {
    setCurrentPage(1); // Reset to the first page when filters change
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag) // Remove tag if already selected
        : [...prev, tag] // Add tag if not selected
    );
  };


  // --- Existing Modal Logic ---
  const projectsSectionId = "projects-section"; // ID for the Projects section to scroll to

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    // Corrected cleanup for event listener (removeEventListener needs the exact same function reference)
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  // Using modalRef for useOutsideClick
  useOutsideClick(modalRef, () => setActive(null));

  const handleCardClick = (project: Project) => {
    // Scroll to the "Projects" section only if the modal is not active (i.e., we are opening it)
    if (!active) {
      const sectionElement = document.getElementById(projectsSectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setActive(project);
  };

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Apply backdrop-filter for blur here
            className="fixed inset-0 bg-black/20 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4 sm:p-8">
            <motion.button
              key={`close-button-${active.slug}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-8 w-8 z-10"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.slug}-${id}`}
              ref={modalRef} // Using modalRef here
              // Max height for the expanded card itself, and overflow-y-auto on the card
              className="w-full max-w-[800px] h-full max-h-[90vh] md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-xl sm:rounded-3xl shadow-2xl overflow-hidden"
            >
              {active.thumbnail && (
                <motion.div layoutId={`thumbnail-${active.slug}-${id}`}>
                  <Image
                    src={active.thumbnail}
                    alt={`${active.name} thumbnail`}
                    width={800}
                    height={450}
                    className="w-full h-48 sm:h-64 object-cover object-top"
                  />
                </motion.div>
              )}

              {/* This is the scrollable content area */}
              <div className="flex-1 flex flex-col p-4 sm:p-6 overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <motion.h3
                      layoutId={`title-${active.slug}-${id}`}
                      className="font-bold text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200"
                    >
                      {active.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`techstack-${active.slug}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mt-1"
                    >
                      <span className="font-semibold">Tech Stack:</span> {active.techStack.join(', ')}
                    </motion.p>
                    <motion.p
                      layoutId={`period-${active.slug}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base"
                    >
                      <span className="font-semibold">Period:</span> {active.period}
                    </motion.p>
                  </div>

                  <div className="flex space-x-3 mt-1 ml-4 flex-shrink-0">
                    {active.links?.demo && (
                      <motion.a
                        layoutId={`demo-link-${active.slug}-${id}`}
                        href={active.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 text-sm rounded-full font-bold bg-green-500 text-white hover:bg-green-600 transition-colors duration-200"
                      >
                        Live
                      </motion.a>
                    )}
                    {active.links?.repo && (
                      <motion.a
                        layoutId={`repo-link-${active.slug}-${id}`}
                        href={active.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 text-sm rounded-full font-bold bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
                      >
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Detailed Content */}
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base space-y-4"
                >
                  <section>
                    <h4 className="font-semibold text-lg sm:text-xl mb-1">Overview</h4>
                    <p>{active.details.overview}</p>
                  </section>

                  <section>
                    <h4 className="font-semibold text-lg sm:text-xl mb-1">Why This Project</h4>
                    <p>{active.details.why}</p>
                  </section>

                  <section>
                    <h4 className="font-semibold text-lg sm:text-xl mb-1">Key Learnings</h4>
                    <p>{active.details.learnings}</p>
                  </section>

                  <section>
                    <h4 className="font-semibold text-lg sm:text-xl mb-1">Achievements</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {active.details.achievements.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  {active.details.future && (
                    <section>
                      <h4 className="font-semibold text-lg sm:text-xl mb-1">Future Enhancements</h4>
                      <p>{active.details.future}</p>
                    </section>
                  )}

                  {active.details.extra && (
                    <section>
                      <h4 className="font-semibold text-lg sm:text-xl mb-1">Extra Notes</h4>
                      <p>{active.details.extra}</p>
                    </section>
                  )}

                  {active.screenshots && active.screenshots.length > 0 && (
                    <section>
                      <h4 className="font-semibold text-lg sm:text-xl mb-2">Screenshots</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {active.screenshots.map((src, idx) => (
                          <Image
                            key={idx}
                            src={src}
                            alt={`${active.name} screenshot ${idx + 1}`}
                            width={400}
                            height={225}
                            className="rounded-lg shadow-md w-full h-auto object-cover"
                          />
                        ))}
                      </div>
                    </section>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* List of Project Cards */}
      <Section title="Projects" className="text-white" id={projectsSectionId}>
        {/* Tag Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              // Apply base skill-badge styling and conditional active/inactive styles
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                selectedTags.includes(tag)
                  ? 'bg-indigo-600 text-white' // Active filter style
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600' // Inactive filter style
              }`}
            >
              {tag}
            </button>
          ))}
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="px-4 py-2 text-sm rounded-full font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          )}
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {currentProjects.map((project) => (
            <motion.div
              layoutId={`card-${project.slug}-${id}`}
              key={`card-${project.slug}-${id}`}
              onClick={() => handleCardClick(project)}
              className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-white/5 transition-colors duration-200 rounded-xl cursor-pointer shadow-sm dark:shadow-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCardClick(project);
                }
              }}
            >
              <div className="flex gap-4 flex-col md:flex-row items-center md:items-start w-full md:w-auto">
                {project.thumbnail && (
                  <motion.div layoutId={`thumbnail-${project.slug}-${id}`} className="flex-shrink-0">
                    <Image
                      src={project.thumbnail}
                      alt={`${project.name} thumbnail`}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover w-20 h-20"
                    />
                  </motion.div>
                )}
                <div className="flex-1 text-center md:text-left mt-2 md:mt-0">
                  <motion.h3
                    layoutId={`title-${project.slug}-${id}`}
                    className="font-bold text-lg text-white hover:underline" // Original classes
                  >
                    {project.name}
                  </motion.h3>
                  <motion.p
                    layoutId={`techstack-${project.slug}-${id}`}
                    className="text-white/70 text-sm mt-1" // Original classes
                  >
                    <span className="font-semibold">Tech Stack:</span> {project.techStack.join(', ')}
                  </motion.p>
                  <motion.p
                    layoutId={`period-${project.slug}-${id}`}
                    className="text-white/70 text-sm" // Original classes
                  >
                    <span className="font-semibold">Period:</span> {project.period}
                  </motion.p>
                  {project.description && project.description.length > 0 && (
                    <p className="text-white/80 mt-2 line-clamp-2"> {/* Original classes, added line-clamp */}
                      {project.description[0]}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex space-x-3 mt-4 md:mt-0 flex-shrink-0">
                {project.links?.demo && (
                  <motion.a
                    layoutId={`demo-link-${project.slug}-${id}`}
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live
                  </motion.a>
                )}
                {project.links?.repo && (
                  <motion.a
                    layoutId={`repo-link-${project.slug}-${id}`}
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-full font-bold bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Code
                  </motion.a>
                )}
              </div>
            {/* </div> */}
          </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full font-bold bg-gray-700 text-white disabled:opacity-50 hover:bg-gray-600 transition-colors duration-200"
            >
              Previous
            </button>
            <span className="text-white text-lg">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full font-bold bg-gray-700 text-white disabled:opacity-50 hover:bg-gray-600 transition-colors duration-200"
            >
              Next
            </button>
          </div>
        )}
      </Section>
    </>
  );
}
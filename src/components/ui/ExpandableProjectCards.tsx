// components/ExpandableProjectCards.tsx
'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import Image from 'next/image';

import { Project } from '@/types/projectTypes';
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
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(null);
      }
    }

    // Keep body overflow hidden only if a card is active
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

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
              ref={ref}
              // Max height for the expanded card itself, and overflow-y-auto on the card
              className="w-full max-w-[800px] h-full max-h-[90vh] md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-xl sm:rounded-3xl shadow-2xl overflow-hidden" // Added max-h-[90vh]
            >
              {/* Main Project Image/Thumbnail for expanded view */}
              { active.thumbnail && (
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
              <div className="flex-1 flex flex-col p-4 sm:p-6 overflow-y-auto custom-scrollbar"> {/* Ensure this div scrolls */}
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
      <Section title="Projects" className="text-white">
      <div className="max-w-5xl mx-auto space-y-6">
        {projects.map((project) => (
          <motion.div
            layoutId={`card-${project.slug}-${id}`}
            key={`card-${project.slug}-${id}`}
            onClick={() => setActive(project)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-white/5 transition-colors duration-200 rounded-xl cursor-pointer shadow-sm dark:shadow-none"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActive(project);
              }
            }}
          >
            <div className="flex gap-4 flex-col md:flex-row items-center md:items-start w-full md:w-auto">
              {project.thumbnail  && (
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
                  className="font-bold item-heading hover:underline"
                >
                  {project.name}
                </motion.h3>
                <motion.p
                  layoutId={`techstack-${project.slug}-${id}`}
                  className="item-location mt-1"
                >
                  <span className="font-semibold">Tech Stack:</span> {project.techStack.join(', ')}
                </motion.p>
                <motion.p
                  layoutId={`period-${project.slug}-${id}`}
                  className="item-period"
                >
                  <span className="font-semibold">Period:</span> {project.period}
                </motion.p>
                {project.description && project.description.length > 0 && (
                  <p className="item-list mt-2  ">
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
          </motion.div>
        ))}
      </div>
      </Section>
    </>
  );
}
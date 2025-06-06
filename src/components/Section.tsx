'use client'

import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Section({
  title,
  children,
  className = '',
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={`py-24 px-6 text-white ${className}`}
    >
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-center mb-12"
      >
        {title}
      </motion.h2>
      <div className="max-w-5xl mx-auto backdrop-blur-sm bg-black/30 p-6 rounded-xl">
        {children}
      </div>
    </section>
  )
}

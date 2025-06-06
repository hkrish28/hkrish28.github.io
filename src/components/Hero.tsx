'use client'

import { motion } from 'framer-motion'

export default function Hero({ name, tagline }: { name: string; tagline: string }) {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm {name}
      </motion.h1>
      <motion.p
        className="text-xl max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {tagline}
      </motion.p>
    </section>
  )
}

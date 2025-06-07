'use client'

import { motion } from 'framer-motion'
import Section from './Section'
import ProfileCard from '@/blocks/Components/ProfileCard/ProfileCard'
import { Github, Linkedin, Download } from 'lucide-react'
import Link from 'next/link'

export default function Hero({
  name,
  tagline,
  content,
}: {
  name: string
  tagline: string
  content: string
}) {
  return (
    <Section title="" className="text-white">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Card (Left) */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ProfileCard
            name={name}
            title={tagline}
            handle="hkrish28"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/hari.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact clicked')}
          />
        </motion.div>

        {/* About Content (Right) */}
        <motion.div
          className="text-left max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-semibold mb-6">About Me</h2>
          <p className="text-xl text-white/80 leading-relaxed mb-6">{content}</p>

          {/* Social + Resume */}
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="https://github.com/hkrish28" target="_blank">
              <Github className="w-6 h-6 hover:text-indigo-400 transition-colors" />
            </Link>
            <Link href="https://linkedin.com/in/hkrish28" target="_blank">
              <Linkedin className="w-6 h-6 hover:text-indigo-400 transition-colors" />
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 bg-indigo-600 text-white text-sm px-4 py-2 rounded-full hover:bg-indigo-500 transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

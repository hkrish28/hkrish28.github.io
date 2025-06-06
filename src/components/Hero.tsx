'use client'

import { motion } from 'framer-motion'
import Section from './Section'
import ProfileCard from '@/blocks/Components/ProfileCard/ProfileCard'

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
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-lg text-white/80">{content}</p>
        </motion.div>
      </div>
    </Section>
  )
}

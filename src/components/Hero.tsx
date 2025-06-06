'use client'

import ProfileCard from '@/blocks/Components/ProfileCard/ProfileCard';
import { motion } from 'framer-motion'

export default function Hero({ name, tagline }: { name: string; tagline: string }) {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6">

    <motion.div
        className="mt-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}>
        <ProfileCard
        name="Harikrishnan U"
        title="Software Engineer"
        handle="hkrish28"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/hari.png"
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => console.log('Contact clicked')}
        />
        </motion.div>
    </section>
  )
}

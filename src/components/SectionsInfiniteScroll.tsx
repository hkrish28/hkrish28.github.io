'use client'

import { useRouter } from 'next/navigation'
import InfiniteScroll from '@/blocks/Components/InfiniteScroll/InfiniteScroll'

const sections = [
  { title: 'Projects', path: '/projects' },
  { title: 'About Me', path: '/about' },
  { title: 'Experience', path: '/experience' },
  { title: 'Education', path: '/education' },
  { title: 'Skills', path: '/skills' },
  { title: 'Certifications', path: '/certifications' },
]

export default function SectionsScroller() {
  const router = useRouter()

  const items = sections.map((section) => ({
    content: (
      <div
        key={section.title}
        onClick={() => router.push(section.path)}
        className="cursor-pointer select-none text-xl font-semibold p-6 rounded shadow text-center transition active:scale-95"
      >
        {section.title}
      </div>
    ),
  }))

  return (
    <div className="relative">
      <InfiniteScroll
        items={items}
        isTilted
        tiltDirection="left"
        autoplay
        autoplaySpeed={0.1}
        autoplayDirection="down"
        pauseOnHover
      />
    </div>
  )
}

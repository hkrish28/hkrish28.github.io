'use client'

import Hero from '@/components/Hero'
import SectionsInfiniteScroller from '@/components/SectionsInfiniteScroll' // Your simplified infinite scroll navigator

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center">
      <Hero name="Harikrishnan U" tagline="I build delightful frontend experiences..." />
      
      <div className="w-full max-w-4xl px-4 mt-[-4rem] z-10">
        <SectionsInfiniteScroller />
      </div>
    </main>
  )
}

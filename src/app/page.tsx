import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import { siteConfig } from '@/config/siteConfig'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Hyperspeed from '@/blocks/Backgrounds/Hyperspeed/Hyperspeed'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white bg-transparent">
      <div className="absolute inset-0 -z-10">
        <Hyperspeed
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [12, 80],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      </div>
      <Hero name={siteConfig.hero.name} tagline={siteConfig.hero.tagline} content={siteConfig.about.content} />
      <Projects projects={siteConfig.projects} />
      <Experience experience={siteConfig.experience} />
      <Education education={siteConfig.education} />
      <Skills skills={siteConfig.skills} />
      <Certifications certifications={siteConfig.certifications} />
    </main>
  )
}


// export default function Home() {
//   return (
//     <main className="relative min-h-screen overflow-hidden text-gray-900">
//       {/* Hyperspeed background */}
//       <div className="absolute inset-0 -z-10">
//         <Hyperspeed
//           effectOptions={{
//             distortion: 'turbulentDistortion',
//             length: 400,
//             roadWidth: 10,
//             islandWidth: 2,
//             lanesPerRoad: 4,
//             fov: 90,
//             fovSpeedUp: 150,
//             speedUp: 2,
//             carLightsFade: 0.4,
//             totalSideLightSticks: 20,
//             lightPairsPerRoadWay: 40,
//             shoulderLinesWidthPercentage: 0.05,
//             brokenLinesWidthPercentage: 0.1,
//             lightStickWidth: [0.12, 0.5],
//             lightStickHeight: [1.3, 1.7],
//             movingAwaySpeed: [60, 80],
//             movingCloserSpeed: [-120, -160],
//             carLightsLength: [12, 80],
//             carLightsRadius: [0.05, 0.14],
//             carWidthPercentage: [0.3, 0.5],
//             carShiftX: [-0.8, 0.8],
//             carFloorSeparation: [0, 5],
//             colors: {
//               roadColor: 0x080808,
//               islandColor: 0x0a0a0a,
//               background: 0x000000,
//               shoulderLines: 0xffffff,
//               brokenLines: 0xffffff,
//               leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
//               rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
//               sticks: 0x03b3c3,
//             },
//           }}
//         />
//       </div>

//       {/* Foreground content */}
//       <Hero name={siteConfig.hero.name} tagline={siteConfig.hero.tagline} />
//       <Projects projects={siteConfig.projects} />
//       <About content={siteConfig.about.content} />
//       <Experience experience={siteConfig.experience} />
//       <Education education={siteConfig.education} />
//       <Skills skills={siteConfig.skills} />
//       <Certifications certifications={siteConfig.certifications} />
//     </main>
//   )
// }

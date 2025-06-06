// 'use client'

// import { motion } from 'framer-motion'
// import Section from './Section'

// type Certification = {
//   name: string
//   provider: string
//   date: string
//   link?: string
// }

// export default function Certifications({ certifications }: { certifications: Certification[] }) {
//   return (
//     <Section title="Certifications" className="bg-white">
//       <motion.ul
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={{
//           hidden: {},
//           visible: { transition: { staggerChildren: 0.1 } }
//         }}
//         className="space-y-6"
//       >
//         {certifications.map((cert, idx) => (
//           <motion.li
//             key={idx}
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 }
//             }}
//             className="border-l-4 border-indigo-500 pl-4"
//           >
//             <div className="flex justify-between items-center">
//               <h3 className="text-lg font-semibold">{cert.name}</h3>
//               <span className="text-sm text-gray-500">{cert.date}</span>
//             </div>
//             <p className="text-sm text-gray-600">{cert.provider}</p>
//             {cert.link && (
//               <a
//                 href={cert.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-indigo-600 text-sm underline mt-1 inline-block"
//               >
//                 View Certificate
//               </a>
//             )}
//           </motion.li>
//         ))}
//       </motion.ul>
//     </Section>
//   )
// }

'use client'

import InfiniteScroll from '@/blocks/Components/InfiniteScroll/InfiniteScroll';
import PixelCard from '@/blocks/Components/PixelCard/PixelCard'
import Section from './Section'

type Certification = {
  name: string
  provider: string
  date: string
  link?: string
}

export default function Certifications({ certifications }: { certifications: Certification[] }) {
  const items = certifications.map((cert, idx) => ({
    content: (
      <PixelCard key={idx} variant="blue" className="text-black bg-white">
        <div className="relative z-10 p-4 flex flex-col items-start text-left h-full justify-center">
          <h3 className="text-lg font-semibold">{cert.name}</h3>
          <p className="text-sm text-gray-600">{cert.provider}</p>
          <span className="text-xs text-gray-500 mt-1">{cert.date}</span>
          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 text-sm underline mt-2"
            >
              View Certificate
            </a>
          )}
        </div>
      </PixelCard>
    )
  }));

  return (
    <Section title="Certifications" className="bg-white">
      <div className="py-8">
        <InfiniteScroll
          items={items}
          width="100%"
          maxHeight="600px"
          itemMinHeight={250}
          negativeMargin="-2em"
          autoplay
          autoplaySpeed={0.6}
          pauseOnHover
          isTilted
          tiltDirection="left"
        />
      </div>
    </Section>
  )
}

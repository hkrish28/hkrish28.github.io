import DecryptedText from '@/blocks/TextAnimations/DecryptedText/DecryptedText'

type Props = {
  id: string
  content: any
}

export default function SectionReveal({ id, content }: Props) {
  const renderTextArray = (arr: string[]) => (
    <ul className="list-disc pl-5 space-y-1">
      {arr.map((line, i) => (
        <li key={i}>
          <DecryptedText text={line} speed={25} animateOn="view" />
        </li>
      ))}
    </ul>
  )

  const renderContent = () => {
    switch (id) {
      case 'about':
        return <DecryptedText text={content} animateOn="view" speed={40} />
      case 'projects':
        return content.map((proj: any, i: number) => (
          <div key={i} className="mb-6">
            <DecryptedText text={proj.name} className="text-lg font-bold" speed={30} />
            <p className="text-sm text-gray-300 italic mb-1">{proj.period}</p>
            {renderTextArray(proj.description)}
            {proj.links?.demo && (
              <a href={proj.links.demo} className="text-indigo-400 underline text-sm mt-2 inline-block" target="_blank">
                View Demo
              </a>
            )}
          </div>
        ))
      case 'experience':
      case 'education':
        return content.map((item: any, i: number) => (
          <div key={i} className="mb-6">
            <DecryptedText text={`${item.role || item.degree} @ ${item.company || item.school}`} className="text-lg font-bold" />
            <p className="text-sm text-gray-300 italic mb-1">{item.period}</p>
            {renderTextArray(item.bullets || item.details || [])}
          </div>
        ))
      case 'skills':
        return content.map((cat: any, i: number) => (
          <div key={i} className="mb-4">
            <DecryptedText text={cat.category} className="font-semibold" />
            {renderTextArray(cat.items)}
          </div>
        ))
      case 'certifications':
        return content.map((cert: any, i: number) => (
          <div key={i} className="mb-4">
            <DecryptedText text={cert.name} className="font-semibold" />
            <p className="text-sm text-gray-300">{cert.provider} — {cert.date}</p>
            <a href={cert.link} target="_blank" className="text-indigo-400 underline text-sm">View Certificate</a>
          </div>
        ))
      default:
        return null
    }
  }

  return <div className="space-y-4">{renderContent()}</div>
}

type SectionCardProps = {
    title: string
    onClick: () => void
  }
  
  export default function SectionCard({ title, onClick }: SectionCardProps) {
    return (
      <div
        onClick={onClick}
        className="cursor-pointer bg-white/10 p-4 rounded-lg hover:bg-white/20 transition"
      >
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    )
  }
  
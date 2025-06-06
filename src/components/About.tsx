export default function About({ content }: { content: string }) {
    return (
      <section className="py-24 px-6 bg-gradient-to-b from-blue-100 to-indigo-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">{content}</p>
      </section>
    )
  }
  
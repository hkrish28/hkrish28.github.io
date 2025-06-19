'use client'

export default function Header() {
  const links = [
    { name: 'About', href: '#About' },
    { name: 'Experience', href: '#Experience' },
    { name: 'Education', href: '#Education' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Certifications', href: '#Certifications' },
    { name: 'Contact', href: '#Contact Me' }
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-90 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-white">{"< Harikrishnan Unnikrishna />"}</div>

        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white hover:text-indigo-400 transition-colors duration-200 text-base font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

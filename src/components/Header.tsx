import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Categories', href: '#categories' },
  { label: 'Artists', href: '#artists' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border-2 border-amber-400 flex items-center justify-center">
            <span className="text-amber-400 font-bold text-lg leading-none">A</span>
          </div>
          <span className="text-white text-xl tracking-[0.25em] uppercase font-light">
            Art<span className="text-amber-400 font-semibold">Studio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-stone-300 hover:text-amber-400 text-sm tracking-widest uppercase transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 border border-amber-400 text-amber-400 text-sm tracking-widest uppercase hover:bg-amber-400 hover:text-black transition-all duration-300"
          >
            Exhibit
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-black/95 backdrop-blur-md ${
          menuOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-stone-300 hover:text-amber-400 text-sm tracking-widest uppercase transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 border border-amber-400 text-amber-400 text-sm tracking-widest uppercase hover:bg-amber-400 hover:text-black transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Exhibit
          </a>
        </nav>
      </div>
    </header>
  )
}

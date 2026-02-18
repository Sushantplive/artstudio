const footerLinks = {
  Explore: ['Painting', 'Photography', 'Sculpture', 'Digital Art', 'Street Art', 'Textile'],
  Company: ['About Us', 'Our Artists', 'Exhibitions', 'Press', 'Careers'],
  Support: ['Help Center', 'Contact', 'Shipping', 'Returns', 'Privacy Policy'],
}

const socials = [
  { name: 'Instagram', icon: '📸', href: '#' },
  { name: 'Pinterest', icon: '📌', href: '#' },
  { name: 'Twitter', icon: '🐦', href: '#' },
  { name: 'YouTube', icon: '▶', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-stone-900">
      {/* Contact / Newsletter banner */}
      <div id="contact" className="bg-amber-400 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <p className="text-black/60 text-xs tracking-[0.5em] uppercase mb-3">Stay Connected</p>
            <h3 className="text-3xl sm:text-4xl font-light text-black">
              Get Art in Your <span className="font-bold italic">Inbox</span>
            </h3>
            <p className="text-black/70 mt-3 max-w-md">
              Subscribe for weekly curated picks, artist spotlights, and exclusive exhibition invites.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 bg-black/10 border border-black/20 text-black placeholder:text-black/50 outline-none focus:border-black text-sm"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-black text-amber-400 text-sm tracking-widest uppercase font-semibold hover:bg-stone-900 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border-2 border-amber-400 flex items-center justify-center">
                <span className="text-amber-400 font-bold text-lg">A</span>
              </div>
              <span className="text-white text-xl tracking-[0.25em] uppercase font-light">
                Art<span className="text-amber-400 font-semibold">Studio</span>
              </span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs mb-8">
              A global online gallery celebrating art across six disciplines — connecting artists,
              collectors, and enthusiasts worldwide since 2013.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-10 h-10 border border-stone-800 flex items-center justify-center text-stone-500 hover:border-amber-400 hover:text-amber-400 transition-all duration-300 text-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white text-xs tracking-[0.3em] uppercase font-semibold mb-6">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-stone-500 text-sm hover:text-amber-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-xs tracking-wide">
            © 2026 ArtStudio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Terms', 'Privacy', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-stone-600 text-xs hover:text-amber-400 transition-colors duration-300 tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

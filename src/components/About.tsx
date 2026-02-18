export default function About() {
  return (
    <section id="about" className="py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80"
                alt="Art studio interior"
                className="w-full h-full object-cover"
              />
              {/* Decorative border offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-amber-400/40 -z-10" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-4 sm:left-8 bg-amber-400 p-6 text-black min-w-[160px]">
              <div className="text-4xl font-bold">12+</div>
              <div className="text-sm tracking-widest uppercase mt-1 font-medium">Years of Excellence</div>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:pl-8">
            <p className="text-amber-400 text-xs tracking-[0.5em] uppercase mb-5">Our Story</p>
            <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight mb-8">
              A Space Where{' '}
              <span className="italic text-amber-400">Creativity</span>{' '}
              Has No Limits
            </h2>
            <div className="w-16 h-px bg-amber-400 mb-8" />

            <p className="text-stone-400 leading-relaxed mb-6">
              ArtStudio was founded in 2013 with a simple but powerful mission: to build a global
              home for artists and art lovers alike. We believe art transcends borders, languages,
              and time — and our platform is built to reflect that belief.
            </p>
            <p className="text-stone-400 leading-relaxed mb-10">
              From classical oil paintings to avant-garde digital installations, we curate works
              across six major art disciplines, giving voice to both established masters and
              emerging talent from every corner of the world.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { title: 'Authenticity', desc: 'Every artwork is verified and directly from the artist.' },
                { title: 'Diversity', desc: 'Celebrating art from every culture and background.' },
                { title: 'Community', desc: 'Connecting artists with collectors and lovers of art.' },
                { title: 'Education', desc: 'Free resources and workshops for all skill levels.' },
              ].map((v) => (
                <div key={v.title}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-amber-400" />
                    <h4 className="text-white text-sm font-semibold tracking-wide">{v.title}</h4>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-amber-400 text-black text-sm tracking-widest uppercase font-semibold hover:bg-amber-300 transition-all duration-300"
              >
                Work With Us
              </a>
              <a
                href="#gallery"
                className="px-8 py-3 border border-stone-600 text-stone-300 text-sm tracking-widest uppercase hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

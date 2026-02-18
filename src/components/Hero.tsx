export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=1920&q=80')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

      {/* Decorative line left */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
        <div className="w-px h-24 bg-amber-400/60" />
        <span className="text-amber-400/70 text-xs tracking-[0.3em] uppercase [writing-mode:vertical-rl]">
          Scroll Down
        </span>
        <div className="w-px h-24 bg-amber-400/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-white text-base tracking-[0.5em] uppercase mb-6 font-semibold drop-shadow-lg">
          Welcome to{' '}
          <span className="text-rose-400 bg-rose-400/10 px-2 py-0.5 rounded">Anamika</span>{' '}
          <span className="text-amber-300">ArtStudio</span>
        </p>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light text-white leading-tight mb-8">
          Where{' '}
          <span className="italic text-amber-400">Art</span>
          {' '}Meets{' '}
          <br className="hidden sm:block" />
          <span className="font-semibold">Imagination</span>
        </h1>

        <p className="text-stone-300 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Discover breathtaking works across painting, photography, sculpture, digital art,
          street art, and textile — curated from artists around the world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-10 py-4 bg-amber-400 text-black text-sm tracking-widest uppercase font-semibold hover:bg-amber-300 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/30"
          >
            Explore Gallery
          </a>
          <a
            href="#categories"
            className="px-10 py-4 border border-white/50 text-white text-sm tracking-widest uppercase hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
          >
            Browse Categories
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 flex flex-wrap justify-center gap-12">
          {[
            { number: '2,400+', label: 'Artworks' },
            { number: '180+', label: 'Artists' },
            { number: '6', label: 'Art Types' },
            { number: '42', label: 'Countries' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold text-amber-400">{stat.number}</div>
              <div className="text-stone-400 text-xs tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-amber-400 to-transparent animate-bounce" />
      </div>
    </section>
  )
}

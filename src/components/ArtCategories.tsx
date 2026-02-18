const categories = [
  {
    id: 1,
    name: 'Painting',
    count: '640 works',
    description: 'Oil, acrylic, watercolor & mixed media on canvas',
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&q=80',
    color: 'from-red-900/80',
  },
  {
    id: 2,
    name: 'Photography',
    count: '520 works',
    description: 'Fine art, portrait, landscape & documentary photography',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80',
    color: 'from-blue-900/80',
  },
  {
    id: 3,
    name: 'Sculpture',
    count: '310 works',
    description: 'Stone, metal, clay & contemporary 3D installations',
    image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&q=80',
    color: 'from-amber-900/80',
  },
  {
    id: 4,
    name: 'Digital Art',
    count: '480 works',
    description: 'Digital illustration, generative & AI-assisted art',
    image: 'https://images.unsplash.com/photo-1648737966769-7e7e16ffcf3f?w=600&q=80',
    color: 'from-purple-900/80',
  },
  {
    id: 5,
    name: 'Street Art',
    count: '275 works',
    description: 'Murals, graffiti, stencil & urban public installations',
    image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=600&q=80',
    color: 'from-green-900/80',
  },
  {
    id: 6,
    name: 'Textile & Craft',
    count: '195 works',
    description: 'Weaving, embroidery, ceramics & hand-made craft art',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    color: 'from-rose-900/80',
  },
]

export default function ArtCategories() {
  return (
    <section id="categories" className="py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-amber-400 text-xs tracking-[0.5em] uppercase mb-4">Explore</p>
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-6">
            Art <span className="italic text-amber-400">Categories</span>
          </h2>
          <div className="w-16 h-px bg-amber-400 mx-auto mb-6" />
          <p className="text-stone-400 max-w-xl mx-auto leading-relaxed">
            From timeless oil paintings to cutting-edge digital creations — discover six distinct
            worlds of artistic expression.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative overflow-hidden cursor-pointer aspect-[4/3]"
            >
              {/* Background image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${cat.color} via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-90`}
              />

              {/* Default view */}
              <div className="absolute inset-0 flex flex-col justify-end p-7 transition-all duration-500 group-hover:-translate-y-4">
                <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">{cat.count}</p>
                <h3 className="text-white text-2xl font-light tracking-wide">{cat.name}</h3>
              </div>

              {/* Hover description */}
              <div className="absolute inset-0 flex flex-col justify-end p-7 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">{cat.count}</p>
                <h3 className="text-white text-2xl font-light tracking-wide mb-3">{cat.name}</h3>
                <p className="text-stone-300 text-sm leading-relaxed mb-5">{cat.description}</p>
                <button className="self-start px-5 py-2 border border-amber-400 text-amber-400 text-xs tracking-widest uppercase hover:bg-amber-400 hover:text-black transition-all duration-300">
                  View All →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

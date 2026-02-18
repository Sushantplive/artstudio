import { useState } from 'react'

const filters = ['All', 'Painting', 'Photography', 'Sculpture', 'Digital Art', 'Street Art', 'Textile']

const artworks = [
  {
    id: 1,
    title: 'Golden Horizon',
    artist: 'Elena Vasquez',
    type: 'Painting',
    image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=600&q=80',
    tall: true,
  },
  {
    id: 2,
    title: 'Urban Shadows',
    artist: 'Marcus Bell',
    type: 'Photography',
    image: 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?w=600&q=80',
    tall: false,
  },
  {
    id: 3,
    title: 'Marble Dreams',
    artist: 'Sofia Chen',
    type: 'Sculpture',
    image: 'https://images.unsplash.com/photo-1555591342-1689ca5b791e?w=600&q=80',
    tall: false,
  },
  {
    id: 4,
    title: 'Neon Flux',
    artist: 'James Okafor',
    type: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
    tall: true,
  },
  {
    id: 5,
    title: 'City Canvas',
    artist: 'Lena Müller',
    type: 'Street Art',
    image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=600&q=80',
    tall: false,
  },
  {
    id: 6,
    title: 'Woven Stories',
    artist: 'Amara Diallo',
    type: 'Textile',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    tall: false,
  },
  {
    id: 7,
    title: 'Silent Forest',
    artist: 'Hiroshi Tanaka',
    type: 'Photography',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',
    tall: true,
  },
  {
    id: 8,
    title: 'Abstract Verse',
    artist: 'Elena Vasquez',
    type: 'Painting',
    image: 'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=600&q=80',
    tall: false,
  },
  {
    id: 9,
    title: 'Chromatic Flow',
    artist: 'James Okafor',
    type: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&q=80',
    tall: false,
  },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All' ? artworks : artworks.filter((a) => a.type === activeFilter)

  return (
    <section id="gallery" className="py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber-400 text-xs tracking-[0.5em] uppercase mb-4">Curated</p>
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-6">
            Featured <span className="italic text-amber-400">Gallery</span>
          </h2>
          <div className="w-16 h-px bg-amber-400 mx-auto" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 text-xs tracking-widest uppercase border transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-amber-400 border-amber-400 text-black font-semibold'
                  : 'border-stone-700 text-stone-400 hover:border-amber-400 hover:text-amber-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((art) => (
            <div
              key={art.id}
              className="group relative overflow-hidden break-inside-avoid cursor-pointer"
            >
              <img
                src={art.image}
                alt={art.title}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  art.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-amber-400 text-xs tracking-widest uppercase mb-2">
                  {art.type}
                </span>
                <h3 className="text-white text-xl font-light mb-1">{art.title}</h3>
                <p className="text-stone-400 text-sm">by {art.artist}</p>
                <button className="mt-4 self-start px-4 py-2 border border-amber-400 text-amber-400 text-xs tracking-widest uppercase hover:bg-amber-400 hover:text-black transition-all duration-300">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-14">
          <button className="px-12 py-4 border border-stone-600 text-stone-300 text-sm tracking-widest uppercase hover:border-amber-400 hover:text-amber-400 transition-all duration-300">
            Load More Artworks
          </button>
        </div>
      </div>
    </section>
  )
}

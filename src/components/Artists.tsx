const artists = [
  {
    id: 1,
    name: 'Elena Vasquez',
    specialty: 'Oil Painting',
    country: 'Spain',
    works: 48,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
    bio: 'Known for her luminous landscapes and evocative portraits blending classical technique with modern sensibility.',
    featured: 'Golden Horizon',
  },
  {
    id: 2,
    name: 'Hiroshi Tanaka',
    specialty: 'Photography',
    country: 'Japan',
    works: 62,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
    bio: 'Documentary and fine-art photographer exploring the space between silence and movement in nature.',
    featured: 'Silent Forest',
  },
  {
    id: 3,
    name: 'Amara Diallo',
    specialty: 'Textile & Craft',
    country: 'Senegal',
    works: 34,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80',
    bio: 'Weaving ancestral patterns into contemporary tapestries that tell stories of identity and memory.',
    featured: 'Woven Stories',
  },
  {
    id: 4,
    name: 'James Okafor',
    specialty: 'Digital Art',
    country: 'Nigeria',
    works: 91,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
    bio: 'Pioneering Afrofuturist digital illustrator merging mythology and speculative design.',
    featured: 'Neon Flux',
  },
  {
    id: 5,
    name: 'Sofia Chen',
    specialty: 'Sculpture',
    country: 'Taiwan',
    works: 27,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80',
    bio: 'Creating ethereal marble and resin forms that interrogate the boundary between fragility and permanence.',
    featured: 'Marble Dreams',
  },
  {
    id: 6,
    name: 'Lena Müller',
    specialty: 'Street Art',
    country: 'Germany',
    works: 55,
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&q=80',
    bio: 'Berlin-based muralist turning grey city walls into vibrant socio-political narratives.',
    featured: 'City Canvas',
  },
]

export default function Artists() {
  return (
    <section id="artists" className="py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-amber-400 text-xs tracking-[0.5em] uppercase mb-4">Meet</p>
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-6">
            Featured <span className="italic text-amber-400">Artists</span>
          </h2>
          <div className="w-16 h-px bg-amber-400 mx-auto mb-6" />
          <p className="text-stone-400 max-w-xl mx-auto leading-relaxed">
            Visionary creators from across the globe — each bringing a unique voice, culture,
            and perspective to the world of art.
          </p>
        </div>

        {/* Artists grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="group bg-[#141414] border border-stone-800 hover:border-amber-400/50 transition-all duration-500 overflow-hidden"
            >
              {/* Artist image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={artist.avatar}
                  alt={artist.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

                {/* Country badge */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 text-xs text-stone-300 tracking-widest uppercase">
                  {artist.country}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">
                  {artist.specialty}
                </p>
                <h3 className="text-white text-xl font-light mb-3">{artist.name}</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-5 line-clamp-2">
                  {artist.bio}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white font-semibold">{artist.works}</span>
                    <span className="text-stone-500 text-xs ml-1 tracking-wide">works</span>
                  </div>
                  <button className="px-4 py-2 border border-stone-700 text-stone-400 text-xs tracking-widest uppercase group-hover:border-amber-400 group-hover:text-amber-400 transition-all duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button className="px-12 py-4 border border-stone-600 text-stone-300 text-sm tracking-widest uppercase hover:border-amber-400 hover:text-amber-400 transition-all duration-300">
            See All Artists
          </button>
        </div>
      </div>
    </section>
  )
}

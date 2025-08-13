const items = [
  { name: 'Kyoto, Japan', img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Amalfi, Italy', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2069&auto=format&fit=crop' },
  { name: 'Reykjavík, Iceland', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Bali, Indonesia', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2069&auto=format&fit=crop' },
  { name: 'Santorini, Greece', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2069&auto=format&fit=crop' },
  { name: 'Cappadocia, Türkiye', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2069&auto=format&fit=crop' },
]

export function Destinations() {
  return (
    <section id="destinations" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Trending destinations</h2>
        <p className="section-subtitle">Popular picks curated for every season.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((d) => (
            <figure key={d.name} className="group overflow-hidden rounded-2xl shadow-soft">
              <img src={d.img} alt={d.name} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="p-4 bg-white flex items-center justify-between">
                <span className="font-semibold">{d.name}</span>
                <span className="text-primary-600 text-sm">View</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

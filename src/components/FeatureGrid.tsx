const features = [
  { title: 'Tailor‑made itineraries', desc: 'Your tastes, our expertise. We craft your route, day by day.', icon: '🗺️' },
  { title: 'Real‑time assistance', desc: 'Chat with a human expert while you travel.', icon: '🤝' },
  { title: 'Best value', desc: 'Transparent pricing powered by our smart calculator.', icon: '💸' },
  { title: 'Sustainably minded', desc: 'We prioritize local partners and low‑impact travel.', icon: '🌱' },
]

export function FeatureGrid() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Why travelers choose Wanderly</h2>
        <p className="section-subtitle">We blend technology with human care to deliver unforgettable trips.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card p-6">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

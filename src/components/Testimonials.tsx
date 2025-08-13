const items = [
  { name: 'Sara M.', text: 'Our Iceland trip was flawless. The live chat assistance was a lifesaver during a storm!', avatar: '🧭' },
  { name: 'Leon M.', text: 'The calculator helped us set a realistic budget. Hotels and tours were spot on.', avatar: '🗻' },
  { name: 'Anika S.', text: 'Loved the sustainable picks and local guides. Felt authentic and easy.', avatar: '🍃' },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="section-title">Traveler stories</h2>
        <p className="section-subtitle">Real experiences from our community.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <blockquote key={t.name} className="card p-6">
              <div className="text-3xl">{t.avatar}</div>
              <p className="mt-3 text-gray-700">{t.text}</p>
              <footer className="mt-4 text-sm text-gray-600">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

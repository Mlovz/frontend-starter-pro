export function CTA() {
  return (
    <section id="cta" className="section bg-primary-600 text-white">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">Ready to design your trip?</h3>
          <p className="mt-2 text-white/80">Talk to an expert and get a day-by-day itinerary within 48 hours.</p>
        </div>
        <a href="#calculator" className="btn-secondary bg-white text-primary-700">Start with the calculator</a>
      </div>
    </section>
  )
}

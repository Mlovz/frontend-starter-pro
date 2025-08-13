import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop" alt="" className="h-[80vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-white/0" />
      </div>
      <div className="container pt-24 pb-16 md:pt-40 md:pb-28 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Design your next <span className="text-primary-300">escape</span> with Wanderly
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-2xl mt-6 text-lg md:text-xl text-gray-200"
        >
          Curated routes, smart budgeting and real human experts. From weekend getaways to once-in-a-lifetime journeys.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <a href="#calculator" className="btn-primary">Estimate your trip</a>
          <a href="#destinations" className="btn-secondary">Explore destinations</a>
        </motion.div>
      </div>
    </section>
  )
}

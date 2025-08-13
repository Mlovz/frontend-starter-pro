import Link from 'next/link'
import { useState } from 'react'
import clsx from 'classnames'

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-extrabold text-primary-700 text-lg">wanderly<span className="text-primary-500">.</span></Link>
        <nav className={clsx("md:flex items-center gap-6", open ? "block" : "hidden md:block")}>
          <a href="#destinations" className="hover:text-primary-600">Destinations</a>
          <a href="#calculator" className="hover:text-primary-600">Calculator</a>
          <a href="#testimonials" className="hover:text-primary-600">Stories</a>
          <a href="#contact" className="hover:text-primary-600">Contact</a>
          <a href="#cta" className="btn-primary ml-2">Plan a trip</a>
        </nav>
        <button onClick={()=>setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </header>
  )
}

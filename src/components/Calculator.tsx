import { useMemo, useState } from 'react'
import { estimate } from '@/utils/calc'

const destinations = ['Kyoto, Japan','Amalfi, Italy','Reykjavík, Iceland','Bali, Indonesia','Santorini, Greece','Cappadocia, Türkiye']

export function Calculator() {
  const [payload, setPayload] = useState({
    destination: destinations[0],
    travelers: 2,
    nights: 7,
    hotelClass: 'comfort' as 'budget'|'comfort'|'luxury',
    flights: true,
    activitiesLevel: 'standard' as 'light'|'standard'|'premium',
    name: '',
    email: ''
  })

  const { breakdown, total } = useMemo(()=>estimate(payload), [payload])

  const backend = process.env.NEXT_PUBLIC_BACKEND_URL

  async function submitLead() {
    if (!backend) { alert('Backend URL is not configured'); return }
    const res = await fetch(`${backend}/api/forms/submit`, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ 
        name: payload.name, 
        email: payload.email, 
        message: `Trip inquiry: ${payload.destination}, ${payload.nights} nights, ${payload.travelers} travelers. Est total: $${total}` 
      })
    })
    if (res.ok) alert('Thanks! We will contact you shortly.')
    else alert('Failed to submit. Please try again.')
  }

  return (
    <section id="calculator" className="section">
      <div className="container">
        <h2 className="section-title">Trip budget calculator</h2>
        <p className="section-subtitle">Adjust parameters to see a transparent estimate. Submit to get a detailed plan.</p>
        <div className="mt-8 grid lg:grid-cols-2 gap-8 items-start">

          <div className="card p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1">
                <span className="text-sm text-gray-600">Destination</span>
                <select value={payload.destination} onChange={e=>setPayload(v=>({...v, destination: e.target.value}))} className="rounded-lg border-gray-300">
                  {destinations.map(d=> <option key={d} value={d}>{d}</option>)}
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm text-gray-600">Travelers</span>
                <input type="number" min={1} value={payload.travelers} onChange={e=>setPayload(v=>({...v, travelers: +e.target.value}))} className="rounded-lg border-gray-300" />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm text-gray-600">Nights</span>
                <input type="number" min={1} value={payload.nights} onChange={e=>setPayload(v=>({...v, nights: +e.target.value}))} className="rounded-lg border-gray-300" />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm text-gray-600">Hotel class</span>
                <select value={payload.hotelClass} onChange={e=>setPayload(v=>({...v, hotelClass: e.target.value as any}))} className="rounded-lg border-gray-300">
                  <option value="budget">Budget</option>
                  <option value="comfort">Comfort</option>
                  <option value="luxury">Luxury</option>
                </select>
              </label>
              <label className="flex items-center gap-3 mt-2">
                <input type="checkbox" checked={payload.flights} onChange={e=>setPayload(v=>({...v, flights: e.target.checked}))} />
                Include flights
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm text-gray-600">Activities</span>
                <select value={payload.activitiesLevel} onChange={e=>setPayload(v=>({...v, activitiesLevel: e.target.value as any}))} className="rounded-lg border-gray-300">
                  <option value="light">Light</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                </select>
              </label>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-lg">Estimate</h3>
            <dl className="mt-4 space-y-2 text-sm">
              {Object.entries(breakdown).map(([k,v])=> (
                <div key={k} className="flex justify-between"><dt className="capitalize">{k}</dt><dd>${Math.round(v).toLocaleString()}</dd></div>
              ))}
            </dl>
            <div className="mt-4 border-t pt-4 flex items-center justify-between">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-2xl font-extrabold text-primary-700">${total.toLocaleString()}</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              <input placeholder="Your name" className="rounded-lg border-gray-300" value={payload.name} onChange={e=>setPayload(v=>({...v, name: e.target.value}))} />
              <input placeholder="Email" className="rounded-lg border-gray-300" value={payload.email} onChange={e=>setPayload(v=>({...v, email: e.target.value}))} />
              <button onClick={submitLead} className="btn-primary sm:col-span-2">Get detailed plan</button>
            </div>
            <p className="text-xs text-gray-500 mt-2">By submitting you agree to our terms.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

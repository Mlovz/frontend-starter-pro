import { useState } from 'react'

export function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL

  async function submit() {
    if (!backend) { alert('Backend URL is not configured'); return }
    const res = await fetch(`${backend}/api/forms/submit`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(form)
    })
    if (res.ok) alert('Thanks! We will reach out soon.')
    else alert('Submission failed.')
  }

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Contact us</h2>
        <p className="section-subtitle">Prefer to chat with a human? Leave us a note.</p>
        <div className="card p-6 mt-8 grid sm:grid-cols-2 gap-4">
          <input className="rounded-lg border-gray-300" placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
          <input className="rounded-lg border-gray-300" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
          <textarea className="rounded-lg border-gray-300 sm:col-span-2" rows={4} placeholder="Tell us about your dream trip" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
          <button onClick={submit} className="btn-primary sm:col-span-2">Send</button>
        </div>
      </div>
    </section>
  )
}

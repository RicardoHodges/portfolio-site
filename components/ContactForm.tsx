import { useState } from 'react'
import axios from 'axios'

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus(null)
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const payload = {
      name: String(form.get('name') || '').trim(),
      email: String(form.get('email') || '').trim(),
      message: String(form.get('message') || '').trim(),
      honeypot: String(form.get('hp') || '')
    }

    try {
      const res = await axios.post('/api/contact', payload)
      setStatus(res.data.message || 'Enviado')
      e.currentTarget.reset()
    } catch (err: any) {
      setStatus(err?.response?.data?.message || 'Erro ao enviar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-12">
      <h3 className="text-2xl font-semibold">Contato</h3>
      <p className="mt-2 text-gray-400">Vamos construir algo seguro e escalável — mande uma mensagem.</p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-3 max-w-xl">
        <input name="hp" type="text" className="hidden" aria-hidden="true" />
        <input name="name" placeholder="Seu nome" required className="p-2 bg-gray-800 rounded border border-gray-700" />
        <input name="email" type="email" placeholder="Seu e-mail" required className="p-2 bg-gray-800 rounded border border-gray-700" />
        <textarea name="message" rows={6} placeholder="Como posso ajudar?" required className="p-2 bg-gray-800 rounded border border-gray-700" />
        <button type="submit" disabled={loading} className="bg-primary px-4 py-2 rounded text-white">{loading ? 'Enviando...' : 'Enviar mensagem'}</button>
        {status && <div className="text-sm text-gray-300">{status}</div>}

        <div className="mt-4 text-xs text-gray-500">Links: <a className="text-primary" href="https://github.com/">GitHub</a> • <a className="text-primary" href="https://linkedin.com/">LinkedIn</a></div>
      </form>
    </section>
  )
}

import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import validator from 'validator'

const sanitize = (s: string) => s.replace(/<[^>]*>?/gm, '').trim()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  const { name, email, message, honeypot, recaptchaToken } = req.body || {}

  // Basic anti-spam: honeypot
  if (honeypot) return res.status(400).json({ message: 'Spam detected' })

  if (!name || !email || !message) return res.status(400).json({ message: 'Missing fields' })

  if (!validator.isEmail(email)) return res.status(400).json({ message: 'Invalid email' })

  // Optional: verify reCAPTCHA if RECAPTCHA_SECRET env provided
  if (process.env.RECAPTCHA_SECRET) {
    try {
      const r = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.RECAPTCHA_SECRET}&response=${encodeURIComponent(recaptchaToken)}`
      })
      const data = await r.json()
      if (!data.success || data.score < 0.3) {
        return res.status(400).json({ message: 'Failed reCAPTCHA' })
      }
    } catch (e) {
      return res.status(500).json({ message: 'reCAPTCHA validation failed' })
    }
  }

  const cleanName = sanitize(name)
  const cleanMessage = sanitize(message)

  // Send email if SMTP configured
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      })

      await transporter.sendMail({
        from: `${cleanName} <${email}>`,
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
        subject: `Portfolio contact from ${cleanName}`,
        text: `${cleanMessage}\n\n---\nEmail: ${email}`
      })

      return res.status(200).json({ message: 'Message sent' })
    } catch (err) {
      console.error('mail error', err)
      return res.status(500).json({ message: 'Failed to send' })
    }
  }

  // Fallback: log to console (useful for local dev)
  console.log('Contact:', { name: cleanName, email, message: cleanMessage })
  return res.status(200).json({ message: 'Message received (logged)' })
}

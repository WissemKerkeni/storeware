import { useState, type FormEvent } from 'react'
import { contact } from '../content'
import { Icon, primaryButton } from './ui'

const projectTypes = ['Website / E-commerce', 'SaaS product', 'Business platform', 'AI automation / chatbot', 'Not sure yet']

const field =
  'w-full rounded-xl border border-surface-high bg-surface-low px-4 py-3 text-sm text-ink placeholder:text-outline focus:border-cyan/60 focus:outline-none focus:ring-2 focus:ring-cyan/20'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const subject = `New project: ${data.get('type')} (${name})`
    const body = [
      `Name: ${name}`,
      `Email: ${data.get('email')}`,
      `Company: ${data.get('company') || '-'}`,
      `Project type: ${data.get('type')}`,
      '',
      String(data.get('message') ?? ''),
    ].join('\n')
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="mx-auto w-full max-w-[86rem] px-4 py-24 sm:px-6 lg:px-12">
      <div className="relative overflow-hidden rounded-3xl border border-surface-high/40 bg-gradient-to-br from-surface to-surface-low p-6 shadow-2xl sm:p-12 lg:p-16">
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-cyan/15 blur-[100px]" />
        <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-violet-deep/20 blur-[100px]" />

        <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface-high px-3.5 py-1.5 font-mono text-xs font-semibold text-cyan">
              <span className="h-2 w-2 rounded-full bg-cyan" />
              Engineer-to-engineer consultation
            </div>
            <h2 className="text-3xl font-bold text-ink sm:text-5xl sm:leading-[1.12]">
              Have a project in mind? Let's build it.
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Book a free 30-minute discovery call with Wissem Kerkeni. We'll review your idea or existing stack,
              define the scope and send you a clear plan, with no sales pressure.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${contact.email}?subject=${encodeURIComponent('Discovery call request - Storeware')}`} className={`${primaryButton} flex-1`}>
                <Icon name="mail" className="text-lg" />
                <span>{contact.email}</span>
              </a>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-surface-high px-5 py-3.5 font-display font-semibold text-ink transition-colors hover:bg-surface-highest"
              >
                <Icon name="chat" className="text-lg text-cyan" />
                <span>WhatsApp</span>
              </a>
            </div>

            <ul className="grid gap-3 font-mono text-xs text-muted sm:grid-cols-2">
              <li className="flex items-center gap-2"><Icon name="schedule" className="text-sm text-cyan-soft" /> CET / UTC+1 · Europe &amp; MENA</li>
              <li className="flex items-center gap-2"><Icon name="videocam" className="text-sm text-cyan-soft" /> Google Meet / Zoom</li>
              <li className="flex items-center gap-2"><Icon name="lock" className="text-sm text-cyan-soft" /> NDA signed on request</li>
              <li className="flex items-center gap-2"><Icon name="code" className="text-sm text-cyan-soft" /> 100% IP assigned to you</li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-2xl border border-surface-high/60 bg-surface-lowest/80 p-5 shadow-xl backdrop-blur-xl sm:p-6"
          >
            <div className="flex items-center justify-between border-b border-surface-high/40 pb-3">
              <div className="flex items-center gap-3">
                <Icon name="calendar_month" className="text-cyan" />
                <span className="font-display font-semibold text-ink">Tell us about your project</span>
              </div>
              <span className="hidden rounded bg-surface px-2 py-0.5 font-mono text-xs text-cyan-soft sm:inline">Free</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1.5">
                <span className="text-xs font-medium text-muted">Name</span>
                <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
              </label>
              <label className="space-y-1.5">
                <span className="text-xs font-medium text-muted">Email</span>
                <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1.5">
                <span className="text-xs font-medium text-muted">Company (optional)</span>
                <input name="company" autoComplete="organization" className={field} placeholder="Company" />
              </label>
              <label className="space-y-1.5">
                <span className="text-xs font-medium text-muted">Project type</span>
                <select name="type" className={field} defaultValue={projectTypes[0]}>
                  {projectTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="space-y-1.5">
              <span className="text-xs font-medium text-muted">Message</span>
              <textarea name="message" required rows={4} className={`${field} resize-y`} placeholder="Goals, timeline, budget range…" />
            </label>
            <button type="submit" className={`${primaryButton} w-full`}>
              <Icon name="send" className="text-lg" />
              Send message
            </button>
            <p className="text-center text-xs text-outline" aria-live="polite">
              {sent
                ? `Your email app should open now. If it doesn't, write to ${contact.email}.`
                : 'Opens your email app with the message ready to send.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

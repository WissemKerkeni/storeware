import { contact, navLinks } from '../content'
import { Icon, Logo, Monogram } from './ui'

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  )
}

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

const year = new Date().getFullYear()

const socialLink = 'flex items-center gap-2 text-sm text-muted transition-colors hover:text-cyan-soft'

export function Footer() {
  return (
    <footer className="w-full border-t border-surface-high/30 bg-surface-lowest">
      <div className="mx-auto max-w-[86rem] px-4 pt-16 pb-12 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 pb-14 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Logo suffix="Studio" />
            <p className="max-w-sm text-sm text-muted">
              Software studio building websites, SaaS products, business platforms and AI automations for
              ambitious businesses.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="chip bg-surface-low text-cyan-dim">Angular</span>
              <span className="chip bg-surface-low text-violet">NestJS</span>
              <span className="chip bg-surface-low text-sky">Spring Boot</span>
              <span className="chip bg-surface-low text-cyan">AI Agents</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-ink">Studio</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li className="flex items-center gap-2"><Icon name="location_on" className="text-sm text-cyan-dim" /> {contact.location}</li>
              <li className="flex items-center gap-2"><Icon name="schedule" className="text-sm text-cyan-dim" /> UTC+1 (CET)</li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 transition-colors hover:text-cyan-soft">
                  <Icon name="mail" className="text-sm text-cyan-dim" /> {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-cyan-soft">
                  <Icon name="chat" className="text-sm text-cyan-dim" /> {contact.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-ink">Index</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-ink">Founder</h4>
            <div className="flex items-center gap-3 pb-2">
              <Monogram />
              <div>
                <div className="text-sm font-semibold text-ink">Wissem Kerkeni</div>
                <div className="text-xs text-muted">Founder &amp; Lead Engineer</div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={socialLink}>
                <LinkedInMark /> LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className={socialLink}>
                <GitHubMark /> GitHub
              </a>
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className={socialLink}>
                <Icon name="chat" className="text-base" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-surface-high/40 pt-8 sm:flex-row">
          <p className="text-xs text-muted">© {year} Storeware (storeware.tn). Monastir, Tunisia.</p>
          <p className="text-xs text-outline">Crafted with architectural rigor.</p>
        </div>
      </div>
    </footer>
  )
}

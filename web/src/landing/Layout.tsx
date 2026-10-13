import { useEffect, useState } from 'react'
import { contact } from '../content'
import { Icon, Logo, Monogram } from '../components/ui'
import { whatsappLink, type Lang, type LandingContent } from './types'

const languages: { code: Lang | 'en'; label: string; name: string; href: string }[] = [
  { code: 'fr', label: 'FR', name: 'Français', href: '/fr' },
  { code: 'de', label: 'DE', name: 'Deutsch', href: '/de' },
  { code: 'en', label: 'EN', name: 'English', href: '/' },
]

/** Renders "[PRIX]"-style tokens as highlighted placeholders still to be filled in. */
export function Fill({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\[[^\]]+\])/).map((part, i) =>
        /^\[[^\]]+\]$/.test(part) ? (
          <mark
            key={i}
            className="rounded bg-amber-300/15 px-1 text-amber-200 outline-1 outline-amber-300/60 outline-dashed"
          >
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  )
}

export function LangSwitcher({ current, label }: { current: Lang; label: string }) {
  return (
    <nav aria-label={label} className="flex items-center rounded-full bg-surface-low p-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
      {languages.map((l) => {
        const active = l.code === current
        return (
          <a
            key={l.code}
            href={l.href}
            hrefLang={l.code}
            lang={l.code}
            title={l.name}
            aria-current={active ? 'page' : undefined}
            className={`rounded-full px-2.5 py-1 font-display text-xs font-bold tracking-wide transition-colors ${
              active ? 'bg-cyan text-on-cyan' : 'text-muted hover:text-ink'
            }`}
          >
            {l.label}
          </a>
        )
      })}
    </nav>
  )
}

/** `base` prefixes the in-page anchors when the header is used on a sub-page such as the Impressum. */
export function LandingHeader({ c, base = '' }: { c: LandingContent; base?: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface-lowest/85 shadow-[0_1px_8px_rgba(0,0,0,0.3)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-12">
        <a href={base || '#top'} aria-label="Storeware" className="shrink-0">
          <Logo suffix={null} />
        </a>

        <nav aria-label="Navigation" className="hidden items-center gap-7 lg:flex">
          {c.nav.map((l) => (
            <a key={l.href} href={base + l.href} className="text-sm text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitcher current={c.lang} label={c.menu.languages} />
          <a
            href={whatsappLink(c.whatsappText)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-cyan px-4 py-2 font-display text-sm font-semibold text-on-cyan transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] sm:inline-flex"
          >
            <Icon name="chat" className="text-base" />
            {c.headerCta}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? c.menu.close : c.menu.open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} className="text-2xl" />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Menu" className="border-t border-surface-high/60 bg-surface-lowest/95 px-4 pt-2 pb-6 lg:hidden">
          <ul>
            {c.nav.map((l) => (
              <li key={l.href}>
                <a
                  href={base + l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-surface-high/40 py-3.5 font-display text-lg font-semibold text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink(c.whatsappText)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-cyan px-4 py-3 font-display font-semibold text-on-cyan"
          >
            <Icon name="chat" className="text-lg" />
            {c.hero.primary}
          </a>
        </nav>
      )}
    </header>
  )
}

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

const footerHeading = 'font-mono text-sm font-semibold uppercase tracking-wider text-ink'
const footerLink = 'flex items-center gap-2 text-sm text-muted transition-colors hover:text-cyan-soft'
const chipColors = ['text-cyan-dim', 'text-violet', 'text-sky', 'text-cyan']

/** `base` prefixes the in-page anchors when the footer is used on a sub-page such as the Impressum. */
export function LandingFooter({ c, base = '' }: { c: LandingContent; base?: string }) {
  const f = c.footer
  const whatsapp = whatsappLink(c.whatsappText)
  return (
    <footer className="w-full border-t border-surface-high/30 bg-surface-lowest">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 pb-14 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Logo suffix="Studio" />
            <p className="max-w-sm text-sm text-muted">{f.tagline}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {f.chips.map((chip, i) => (
                <span key={chip} className={`chip bg-surface-low ${chipColors[i % chipColors.length]}`}>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className={footerHeading}>{f.studioTitle}</h2>
            <ul className="space-y-2.5 text-sm text-muted">
              <li className="flex items-center gap-2"><Icon name="location_on" className="text-sm text-cyan-dim" /> {f.location}</li>
              <li className="flex items-center gap-2"><Icon name="schedule" className="text-sm text-cyan-dim" /> {f.timezone}</li>
              <li>
                <a href={`mailto:${contact.email}`} className={footerLink}>
                  <Icon name="mail" className="text-sm text-cyan-dim" /> {contact.email}
                </a>
              </li>
              <li>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={footerLink}>
                  <Icon name="chat" className="text-sm text-cyan-dim" /> {contact.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className={footerHeading}>{f.indexTitle}</h2>
            <ul className="space-y-2">
              {c.nav.map((l) => (
                <li key={l.href}>
                  <a href={base + l.href} className="text-sm text-muted transition-colors hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className={footerHeading}>{f.founderTitle}</h2>
            <div className="flex items-center gap-3 pb-2">
              <Monogram />
              <div>
                <div className="text-sm font-semibold text-ink">Wissem Kerkeni</div>
                <div className="text-xs text-muted">{f.founderRole}</div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={footerLink}>
                <LinkedInMark /> LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className={footerLink}>
                <GitHubMark /> GitHub
              </a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={footerLink}>
                <Icon name="chat" className="text-base" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-surface-high/40 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {year} Storeware (storeware.tn). {f.rights}
          </p>
          <nav aria-label={f.languagesTitle} className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {f.legal?.map((l) => (
              <a key={l.href} href={l.href} className="font-semibold text-ink underline-offset-4 hover:text-cyan-soft hover:underline">
                {l.label}
              </a>
            ))}
            {languages.map((l) => (
              <a
                key={l.code}
                href={l.href}
                hrefLang={l.code}
                lang={l.code}
                aria-current={l.code === c.lang ? 'page' : undefined}
                className={l.code === c.lang ? 'text-cyan' : 'text-muted transition-colors hover:text-ink'}
              >
                {l.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

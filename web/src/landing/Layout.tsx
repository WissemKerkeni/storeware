import { useEffect, useState } from 'react'
import { contact } from '../content'
import { Icon, Logo } from '../components/ui'
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

const year = new Date().getFullYear()

export function LandingFooter({ c }: { c: LandingContent }) {
  return (
    <footer className="border-t border-surface-high/30 bg-surface-lowest">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-14 pb-10 sm:px-6 md:grid-cols-3 lg:px-12">
        <div className="space-y-3">
          <Logo suffix={null} />
          <p className="max-w-xs text-sm text-muted">{c.footer.tagline}</p>
          <p className="flex items-center gap-2 text-sm text-muted">
            <Icon name="location_on" className="text-base text-cyan-dim" />
            {c.footer.location}
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-ink">{c.footer.contactTitle}</h2>
          <ul className="space-y-2.5 text-sm text-muted">
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 transition-colors hover:text-cyan-soft">
                <Icon name="mail" className="text-base text-cyan-dim" /> {contact.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink(c.whatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-cyan-soft"
              >
                <Icon name="chat" className="text-base text-cyan-dim" /> WhatsApp {contact.whatsappDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-ink">{c.footer.languagesTitle}</h2>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {languages.map((l) => (
              <li key={l.code}>
                <a href={l.href} hrefLang={l.code} lang={l.code} className="text-muted transition-colors hover:text-ink">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-surface-high/40 px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:px-6 lg:px-12">
        <p>© {year} Storeware (storeware.tn)</p>
        {c.footer.legal && (
          <ul className="flex gap-5">
            {c.footer.legal.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-semibold text-ink underline-offset-4 hover:text-cyan-soft hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  )
}

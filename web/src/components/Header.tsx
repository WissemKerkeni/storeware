import { useEffect, useState } from 'react'
import { navLinks } from '../content'
import { Icon, Logo, Monogram } from './ui'

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface-lowest/80 shadow-[0_1px_8px_rgba(0,0,0,0.3)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[86rem] items-center justify-between gap-6 px-4 sm:px-6 lg:px-12">
        <a href="#top" aria-label="Storeware home" className="transition-transform hover:scale-[1.02]">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden items-center gap-2 rounded-full bg-surface-low px-3 py-1.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] md:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">Open for projects</span>
          </div>
          <a
            href="#contact"
            className="hidden rounded-xl bg-cyan px-4 py-2 font-display text-sm font-semibold text-on-cyan transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] sm:inline-flex"
          >
            Start a project
          </a>
          <a href="#founder" aria-label="About the founder" className="hidden sm:block">
            <Monogram />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} className="text-2xl" />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-surface-high/60 bg-surface-lowest/95 px-4 pb-6 pt-2 xl:hidden">
          <ul className="mx-auto max-w-7xl">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-surface-high/40 py-3.5 font-display text-lg font-semibold text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 flex justify-center rounded-xl bg-cyan px-4 py-3 font-display font-semibold text-on-cyan sm:hidden"
          >
            Start a project
          </a>
        </nav>
      )}
    </header>
  )
}

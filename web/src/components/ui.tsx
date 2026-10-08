import type { ReactNode } from 'react'

export function Icon({ name, className = '' }: { name: string; className?: string }) {
  return (
    <span aria-hidden="true" className={`icon ${className}`}>
      {name}
    </span>
  )
}

export function Logo({ suffix = '.tn' }: { suffix?: string }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#0a0e17" />
        <rect x="1" y="1" width="30" height="30" rx="7" fill="none" stroke="#00f0ff" strokeOpacity=".4" strokeWidth="2" />
        <path d="M16 7l9 9-9 9-9-9z" fill="#00f0ff" />
        <path d="M16 12l4 4-4 4-4-4z" fill="#0a0e17" />
      </svg>
      <span className="font-display text-xl font-bold tracking-tight text-ink">Storeware</span>
      <span className="rounded bg-surface px-2 py-0.5 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-dim">
        {suffix}
      </span>
    </span>
  )
}

export function Monogram({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  if (size === 'lg') {
    return (
      <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-2 border-cyan/60 bg-surface-lowest shadow-[0_0_40px_rgba(0,240,255,0.25)] transition-transform duration-500 group-hover:scale-105">
        <span className="bg-gradient-to-br from-cyan-soft via-cyan to-violet bg-clip-text font-display text-5xl font-bold text-transparent select-none">
          WK
        </span>
      </div>
    )
  }
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan/40 bg-surface-high font-mono text-xs font-bold text-cyan-dim shadow-[0_0_12px_rgba(0,240,255,0.2)]">
      WK
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
  center?: boolean
}) {
  return (
    <div className={`space-y-3 ${center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}`}>
      <span className="eyebrow block">{eyebrow}</span>
      <h2 className="text-3xl font-bold text-ink sm:text-5xl sm:leading-[1.12]">{title}</h2>
      {children && <p className="text-muted">{children}</p>}
    </div>
  )
}

export const primaryButton =
  'inline-flex items-center justify-center gap-2.5 rounded-xl bg-cyan px-6 py-3.5 font-display font-semibold text-on-cyan transition-all hover:shadow-[0_0_24px_rgba(0,240,255,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan'

export const secondaryButton =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-surface px-5 py-3.5 font-display font-semibold text-ink transition-colors hover:bg-surface-high focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan'

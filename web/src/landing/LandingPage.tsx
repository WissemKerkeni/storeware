import { useEffect, type ReactNode } from 'react'
import { contact } from '../content'
import { BrowserFrame } from '../components/Projects'
import { useInView } from '../components/useInView'
import { Icon, primaryButton, secondaryButton } from '../components/ui'
import { Fill, LandingFooter, LandingHeader } from './Layout'
import { whatsappLink, type LandingContent } from './types'

const eyebrow = 'block font-display text-xs font-bold uppercase tracking-[0.16em] text-cyan-soft'
const h2 = 'text-3xl font-bold text-ink sm:text-5xl sm:leading-[1.12]'
const sectionPad = 'px-4 py-20 sm:px-6 sm:py-24 lg:px-12'

function Heading({ kicker, title, children, center }: { kicker: string; title: string; children?: ReactNode; center?: boolean }) {
  return (
    <div className={`mb-12 space-y-3 ${center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      <span className={eyebrow}>{kicker}</span>
      <h2 className={h2}>{title}</h2>
      {children && <p className="text-lg text-muted">{children}</p>}
    </div>
  )
}

function WhatsAppButton({ c, label, className = '' }: { c: LandingContent; label: string; className?: string }) {
  return (
    <a href={whatsappLink(c.whatsappText)} target="_blank" rel="noopener noreferrer" className={`${primaryButton} group ${className}`}>
      <Icon name="chat" className="text-lg" />
      <span>{label}</span>
      <Icon name="arrow_forward" className="text-lg transition-transform group-hover:translate-x-1" />
    </a>
  )
}

function Hero({ c }: { c: LandingContent }) {
  const [before, after] = c.hero.title.split(c.hero.highlight)
  return (
    <section id="top" className="relative overflow-hidden border-b border-surface-high/40 px-4 pt-28 pb-20 sm:px-6 sm:pt-36 lg:px-12">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[400px] w-[800px] max-w-full -translate-x-1/2 rounded-full bg-cyan/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-violet-deep/20 blur-[100px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="flex animate-fade-up flex-col items-start gap-6">
          <span className="rounded-full bg-surface-high/80 px-3.5 py-1.5 text-xs font-semibold text-cyan-soft backdrop-blur-md sm:text-sm">
            {c.hero.badge}
          </span>
          <h1 className="text-[2.35rem] leading-[1.1] font-extrabold tracking-[-0.03em] text-ink sm:text-6xl">
            {before}
            <span className="bg-gradient-to-r from-cyan-soft via-cyan to-violet bg-clip-text text-transparent">{c.hero.highlight}</span>
            {after}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{c.hero.lead}</p>

          <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">
            <WhatsAppButton c={c} label={c.hero.primary} />
            <a href={`#${c.examples.id}`} className={secondaryButton}>
              <Icon name="photo_library" className="text-lg text-cyan-dim" />
              <span>{c.hero.secondary}</span>
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-1 text-sm text-muted">
            {c.hero.trust.map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Icon name="check_circle" className="text-lg text-cyan" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-[210px] sm:w-[250px]" style={{ animationDelay: '150ms' }}>
          <div className="phone-float overflow-hidden rounded-[30px] border-[6px] border-surface-highest bg-surface-lowest shadow-2xl shadow-black/60">
            <img src="/projects/chaari-auto-mobile.webp" alt={c.hero.phoneAlt} width={390} height={844} className="w-full" />
          </div>
          {c.hero.phoneChips.map((chip, i) => (
            <span
              key={chip.label}
              className={`absolute flex items-center gap-1.5 rounded-full border border-cyan/30 bg-surface-lowest/90 px-3 py-1.5 text-sm font-semibold text-ink shadow-lg backdrop-blur ${
                ['top-[18%] -left-12', 'top-[46%] -right-10', 'bottom-[14%] -left-8'][i]
              }`}
            >
              <Icon name={chip.icon} className="text-base text-cyan" />
              {chip.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Examples({ c }: { c: LandingContent }) {
  const [ref, inView] = useInView<HTMLElement>()
  const e = c.examples
  return (
    <section id={e.id} ref={ref} className={`relative overflow-hidden ${sectionPad}`}>
      <div className="pointer-events-none absolute top-40 -left-40 h-96 w-96 rounded-full bg-cyan/5 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <Heading kicker={e.eyebrow} title={e.title}>
          {e.body}
        </Heading>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {e.items.map((p, i) => (
            <article
              key={p.url}
              style={{ animationDelay: `${i * 90}ms` }}
              className={`project-card group flex flex-col gap-5 rounded-2xl border border-surface-high/60 bg-surface-low p-4 sm:p-5 ${
                inView ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              <div className={inView ? 'is-visible' : ''}>
                <BrowserFrame project={p} aspect="aspect-[16/11]" labels={e.frameLabels} />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded bg-surface px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-cyan">{p.chip}</span>
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <Icon name="location_on" className="text-sm" />
                    {p.location}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-ink transition-colors group-hover:text-cyan-soft">{p.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{p.body}</p>
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-surface-high/60 pt-4">
                  <span className="truncate text-xs text-outline">{new URL(p.url).hostname}</span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex shrink-0 items-center gap-1.5 text-sm font-semibold text-cyan transition-colors hover:text-cyan-soft"
                  >
                    {e.visit}
                    <span className="sr-only">
                      : {p.name} ({e.newTab})
                    </span>
                    <Icon name="arrow_outward" className="text-base transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Included({ c }: { c: LandingContent }) {
  const s = c.included
  return (
    <section id={s.id} className={`bg-surface-lowest ${sectionPad}`}>
      <div className="mx-auto max-w-7xl">
        <Heading kicker={s.eyebrow} title={s.title}>
          {s.body}
        </Heading>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item) => (
            <li key={item.title} className="flex gap-4 rounded-2xl border border-surface-high/50 bg-surface-low p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/10">
                <Icon name={item.icon} className="text-2xl text-cyan" />
              </span>
              <div>
                <h3 className="font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Steps({ c }: { c: LandingContent }) {
  const s = c.steps
  return (
    <section id={s.id} className={sectionPad}>
      <div className="mx-auto max-w-7xl">
        <Heading kicker={s.eyebrow} title={s.title} center />
        <div className="relative">
        <div className="pointer-events-none absolute top-7 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-cyan/50 via-cyan/30 to-violet/50 md:block" />
        <ol className="grid gap-12 pt-6 md:grid-cols-3 md:gap-6">
          {s.items.map((step, i) => (
            <li key={step.title} className="relative flex flex-col items-center rounded-2xl border border-surface-high/50 bg-surface-low p-6 text-center">
              <span className="relative -mt-12 mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-cyan/60 bg-surface-lowest font-display text-xl font-extrabold text-cyan shadow-[0_0_24px_rgba(0,240,255,0.25)]">
                {i + 1}
              </span>
              <span className="mb-2 rounded-full bg-surface-high px-3 py-1 text-xs font-semibold text-cyan-soft">{step.when}</span>
              <h3 className="text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  )
}

function Price({ c }: { c: LandingContent }) {
  const s = c.price
  return (
    <section id={s.id} className={`bg-surface-lowest ${sectionPad}`}>
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
        <div className="space-y-3">
          <span className={eyebrow}>{s.eyebrow}</span>
          <h2 className={h2}>{s.title}</h2>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-cyan/30 bg-gradient-to-br from-surface to-surface-low p-6 shadow-[0_0_60px_-20px_rgba(0,240,255,0.35)] sm:p-8">
          <p className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
            <Fill text={s.from} />
          </p>
          <p className="mt-2 text-sm text-muted">{s.sub}</p>
          <ul className="my-6 space-y-3">
            {s.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-ink">
                <Icon name="check_circle" className="mt-0.5 text-xl text-cyan" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <WhatsAppButton c={c} label={s.cta} className="w-full" />
        </div>
      </div>
    </section>
  )
}

function Why({ c }: { c: LandingContent }) {
  const s = c.why
  return (
    <section id={s.id} className={sectionPad}>
      <div className="mx-auto max-w-7xl">
        <Heading kicker={s.eyebrow} title={s.title} />
        <ul className="grid gap-5 md:grid-cols-2">
          {s.items.map((item) => (
            <li key={item.title} className="rounded-2xl border border-surface-high/50 bg-surface-low p-6">
              <Icon name={item.icon} className="text-3xl text-cyan" />
              <h3 className="mt-3 text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Faq({ c }: { c: LandingContent }) {
  const s = c.faq
  return (
    <section id={s.id} className={`bg-surface-lowest ${sectionPad}`}>
      <div className="mx-auto max-w-3xl">
        <Heading kicker={s.eyebrow} title={s.title} center />
        <div className="space-y-3">
          {s.items.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-surface-high/50 bg-surface-low open:border-cyan/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <Icon name="expand_more" className="text-2xl text-cyan transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-muted">
                <Fill text={item.a} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta({ c }: { c: LandingContent }) {
  const s = c.final
  return (
    <section id={s.id} className={sectionPad}>
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-surface-high/40 bg-gradient-to-br from-surface to-surface-low p-6 text-center shadow-2xl sm:p-14">
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-cyan/15 blur-[100px]" />
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-violet-deep/20 blur-[100px]" />
        <div className="relative space-y-6">
          <h2 className={h2}>{s.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">{s.body}</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppButton c={c} label={s.whatsapp} />
            <a href={`mailto:${contact.email}?subject=${encodeURIComponent(s.emailSubject)}`} className={secondaryButton}>
              <Icon name="mail" className="text-lg text-cyan-dim" />
              <span>{s.email}</span>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 pt-2 text-sm text-muted sm:flex-row sm:gap-6">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-cyan-soft">
              <Icon name="mail" className="text-base text-cyan-dim" />
              {contact.email}
            </a>
            <a href={whatsappLink(c.whatsappText)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-soft">
              <Icon name="chat" className="text-base text-cyan-dim" />
              WhatsApp {contact.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function LandingPage({ c }: { c: LandingContent }) {
  // The page renders after the browser's own jump to #hash, so do it once mounted.
  useEffect(() => {
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-cyan px-4 py-2 font-semibold text-on-cyan focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {c.skip}
      </a>
      <LandingHeader c={c} />
      <main id="main">
        <Hero c={c} />
        <Examples c={c} />
        <Included c={c} />
        <Steps c={c} />
        <Price c={c} />
        <Why c={c} />
        <Faq c={c} />
        <FinalCta c={c} />
      </main>
      <LandingFooter c={c} />
    </>
  )
}

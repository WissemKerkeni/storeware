import { accentText, contact, engagements, principles, services, stackColumns, steps, work } from '../content'
import { Icon, Monogram, primaryButton, SectionHeading } from './ui'

export function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-[86rem] px-4 py-24 sm:px-6 lg:px-12">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading eyebrow="What we build" title="Engineered for the systems your business depends on.">
          No throwaway prototypes. We build maintainable products your team can keep growing for years.
        </SectionHeading>
        <span className="shrink-0 font-mono text-xs font-semibold uppercase tracking-wider text-outline">
          End-to-end execution
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="group flex flex-col justify-between rounded-2xl bg-surface-low p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-surface sm:p-8"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl font-bold text-outline transition-colors group-hover:text-cyan-soft">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-surface-high ${accentText[s.accent]}`}>
                  <Icon name={s.icon} className="text-2xl" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-ink">{s.title}</h3>
              <p className="text-muted">{s.body}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-8">
              {s.tags.map((t, j) => (
                <span key={t} className={`chip ${j === s.tags.length - 1 ? accentText[s.accent] : ''}`}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden bg-surface-lowest px-4 py-24 sm:px-6 lg:px-12">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
        <div className="flex w-full shrink-0 flex-col items-center sm:items-start lg:w-5/12">
          <div className="group relative flex aspect-square w-full max-w-sm flex-col items-center justify-center overflow-hidden rounded-2xl border border-cyan/20 bg-gradient-to-br from-surface-high via-surface to-surface-lowest p-8 shadow-2xl">
            <div className="absolute inset-0 rounded-2xl bg-cyan/5 blur-xl transition-all duration-500 group-hover:bg-cyan/10" />
            <Monogram size="lg" />
            <div className="relative mt-8 space-y-1 text-center">
              <span className="block font-display text-xl font-bold text-ink">Wissem Kerkeni</span>
              <span className="block font-mono text-xs text-cyan-dim">Founder &amp; Lead Engineer</span>
            </div>
            <div className="relative mt-5 flex gap-3">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-surface-high px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:text-cyan-soft">
                LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-surface-high px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:text-cyan-soft">
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-6 flex w-full max-w-sm items-center gap-3 rounded-xl border border-surface-high bg-surface-low p-3.5">
            <Icon name="location_city" className="text-xl text-cyan" />
            <div>
              <div className="text-sm font-semibold text-ink">Studio HQ: {contact.location}</div>
              <div className="text-xs text-muted">UTC+1 · Remote collaboration with Europe &amp; MENA</div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-6 lg:w-7/12">
          <div className="inline-flex items-center gap-2 rounded bg-surface px-3 py-1 font-mono text-xs uppercase tracking-wider text-violet">
            <Icon name="verified_user" className="text-sm" />
            Principal-led craftsmanship
          </div>
          <h2 className="text-3xl font-bold text-ink sm:text-5xl sm:leading-[1.12]">“Vibe speed, engineering discipline.”</h2>
          <p className="leading-relaxed text-muted">
            Full-stack engineer since 2019, working across Angular, NestJS, Spring Boot, Ionic and AI agent systems,
            from security platforms and lab software to multi-channel AI assistants. At Storeware you work directly
            with the engineer behind your code: no junior hand-offs, no diluted briefs.
          </p>
          <p className="leading-relaxed text-muted">
            AI makes writing code faster, but you still need an architect. We combine AI-accelerated delivery with
            solid fundamentals (clean architecture, strict typing, automated tests, CI/CD and code reviews), so
            you get startup speed without piling up technical debt.
          </p>
          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5 rounded-xl border border-surface-high bg-surface-low p-4">
              <span className="font-display text-lg font-bold text-cyan-soft">Direct collaboration</span>
              <span className="text-sm text-muted">A shared channel, regular demos and full visibility on every pull request.</span>
            </div>
            <div className="flex flex-col gap-1.5 rounded-xl border border-surface-high bg-surface-low p-4">
              <span className="font-display text-lg font-bold text-cyan">Architectural rigor</span>
              <span className="text-sm text-muted">Clear module boundaries, automated tests and codebases that stay predictable.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Stack() {
  return (
    <section id="stack" className="mx-auto w-full max-w-[86rem] px-4 py-24 sm:px-6 lg:px-12">
      <div className="mb-16">
        <SectionHeading center eyebrow="Our core stack" title="Standardized on reliability, typed code and speed.">
          Proven technologies chosen for long-lived business software, not for hype.
        </SectionHeading>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {stackColumns.map((c) => (
          <div key={c.title} className="flex flex-col justify-between gap-6 rounded-2xl bg-surface-low p-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Icon name={c.icon} className={`text-2xl ${accentText[c.accent]}`} />
                <h3 className="text-xl font-bold text-ink">{c.title}</h3>
              </div>
              <p className="mb-6 text-sm text-muted">{c.body}</p>
              <ul className="space-y-3">
                {c.items.map(([name, detail]) => (
                  <li key={name} className="flex items-center justify-between gap-3 rounded-xl bg-surface p-3">
                    <span className="text-sm font-semibold text-ink">{name}</span>
                    <span className={`text-right font-mono text-xs ${accentText[c.accent]}`}>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`flex items-center gap-1.5 text-xs ${accentText[c.accent]}`}>
              <Icon name="check_circle" className="text-sm" /> {c.note}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-around gap-4 rounded-xl bg-surface-high/60 p-4 text-ink">
        {principles.map((p) => (
          <div key={p.label} className="flex items-center gap-2">
            <Icon name={p.icon} className="text-base text-cyan-soft" />
            <span className="font-mono text-xs">{p.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Work() {
  return (
    <section id="work" className="bg-surface-lowest px-4 py-24 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow mb-2 block">Track record</span>
            <h2 className="text-3xl font-bold text-ink sm:text-5xl">Selected engineering work</h2>
          </div>
          <p className="max-w-md text-muted">
            Real systems from the founder's engineering journey. No inflated case studies, just the work and the
            stack behind it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {work.map((w) => (
            <article
              key={w.title}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-high/50 bg-surface-low shadow-lg transition-all hover:border-cyan/40"
            >
              <div className="space-y-5 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-3">
                  <span className={`rounded bg-surface px-2.5 py-1 font-mono text-xs font-semibold uppercase ${accentText[w.accent]}`}>
                    {w.category}
                  </span>
                  <span className="text-right font-mono text-xs text-muted">{w.kind}</span>
                </div>
                <h3 className="text-2xl font-semibold text-ink transition-colors group-hover:text-cyan-soft">{w.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{w.body}</p>
                <div className="space-y-2 rounded-xl border border-surface-high bg-surface p-4">
                  <div className={`flex items-center gap-2 font-mono text-xs font-semibold ${accentText[w.accent]}`}>
                    <Icon name={w.highlightIcon} className="text-sm" /> {w.highlightTitle}
                  </div>
                  <p className="text-xs text-muted">{w.highlight}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 border-t border-surface-high/40 bg-surface/40 p-6">
                {w.tags.map((t) => (
                  <span key={t} className="rounded bg-surface-high px-2 py-0.5 font-mono text-xs text-ink">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section id="process" className="mx-auto w-full max-w-[86rem] px-4 py-24 sm:px-6 lg:px-12">
      <div className="mb-16">
        <SectionHeading eyebrow="Disciplined execution" title="A clear 4-stage process, from idea to launch.">
          Predictable timelines, visible progress and full transparency from wireframe to deployment. Typical
          timeline for an MVP shown below.
        </SectionHeading>
      </div>
      <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="flex flex-col justify-between gap-6 rounded-2xl bg-surface-low p-6 transition-all hover:bg-surface">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={`font-mono text-2xl font-bold ${accentText[s.accent]}`}>{s.n}</span>
                <span className="rounded bg-surface px-2 py-1 font-mono text-xs text-muted">{s.when}</span>
              </div>
              <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
              <p className="text-sm text-muted">{s.body}</p>
            </div>
            <div className="rounded-xl bg-surface p-3 font-mono text-xs text-muted">Output: {s.output}</div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function Engagements() {
  return (
    <section id="engagements" className="border-y border-surface-high/30 bg-surface-lowest px-4 py-24 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-16">
        <SectionHeading center eyebrow="Transparent engagements" title="Structured for velocity, not billable hours.">
          Whether you need a complete product or senior engineering capacity in your existing team, pick the model
          that fits. Every engagement starts with a free discovery call and a fixed written quote.
        </SectionHeading>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          {engagements.map((e) => (
            <div
              key={e.title}
              className={`relative flex flex-col justify-between gap-8 rounded-2xl p-6 sm:p-8 ${
                e.featured ? 'bg-surface shadow-2xl ring-1 ring-cyan/30' : 'bg-surface-low shadow-md'
              }`}
            >
              {e.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-on-cyan">
                  Recommended
                </div>
              )}
              <div className="space-y-4">
                <span className={`block font-mono text-xs uppercase tracking-wider ${e.featured ? 'text-cyan' : 'text-muted'}`}>
                  {e.eyebrow}
                </span>
                <h3 className="text-2xl font-semibold text-ink">{e.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{e.body}</p>
                <div className="pt-2">
                  <span className={`font-display text-3xl font-bold ${accentText[e.accent]}`}>{e.headline}</span>
                  <span className="mt-1 block text-xs text-muted">{e.sub}</span>
                </div>
              </div>
              <div className="space-y-5">
                <ul className="space-y-2.5 text-sm text-ink">
                  {e.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Icon name="check" className={`text-sm ${accentText[e.accent]}`} /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={
                    e.featured
                      ? `${primaryButton} w-full px-4 py-3`
                      : 'inline-flex w-full items-center justify-center rounded-xl bg-surface px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-high'
                  }
                >
                  {e.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

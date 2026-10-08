import { Icon, primaryButton, secondaryButton } from './ui'

const stats = [
  { value: '7+ years', label: 'Full-stack engineering', color: 'text-cyan-soft' },
  { value: 'Web, SaaS & AI', label: 'End-to-end delivery', color: 'text-cyan' },
  { value: 'Monastir, TN', label: 'Remote for MENA & Europe', color: 'text-violet' },
  { value: 'You own the code', label: 'Full handover', color: 'text-sky' },
]

const blueprintRows = [
  { title: 'Angular & React frontends', body: 'Signals, typed state, fast rendering.', icon: 'terminal', color: 'text-cyan-soft' },
  { title: 'NestJS & Spring Boot backends', body: 'Clean architecture, validated DTOs, migrations.', icon: 'dns', color: 'text-violet' },
  { title: 'Claude + n8n + MCP automations', body: 'Agents that act on real business data.', icon: 'smart_toy', color: 'text-cyan' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-surface-high/40 px-4 pb-24 pt-32 sm:px-6 lg:px-12">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[400px] w-[800px] max-w-full -translate-x-1/2 rounded-full bg-cyan/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/4 -right-20 h-72 w-72 rounded-full bg-violet-deep/20 blur-[100px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12">
        <div className="flex max-w-4xl animate-fade-up flex-col items-start gap-6">
          <div className="inline-flex flex-wrap items-center gap-2.5 rounded-full bg-surface-high/80 px-3.5 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-soft">
              Software studio · Monastir, Tunisia
            </span>
            <span className="rounded bg-surface-highest px-2 py-0.5 font-mono text-xs text-muted">CET / UTC+1</span>
          </div>

          <h1 className="text-[2.5rem] leading-[1.08] font-extrabold tracking-[-0.03em] text-ink sm:text-6xl lg:text-7xl">
            Engineering{' '}
            <span className="bg-gradient-to-r from-cyan-soft via-cyan to-violet bg-clip-text text-transparent">
              high-velocity
            </span>{' '}
            websites, SaaS &amp; platforms that scale.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            We partner with founders and businesses to build web products, business platforms and AI automations,
            from first idea to production. You work directly with the engineer who writes your code.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#contact" className={`${primaryButton} group`}>
              <span>Book a discovery call</span>
              <Icon name="arrow_forward" className="text-lg transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#work" className={secondaryButton}>
              <Icon name="layers" className="text-base text-cyan-dim" />
              <span>Explore selected work</span>
            </a>
            <a
              href="#stack"
              className="hidden items-center gap-2 px-2 py-3.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-cyan-soft sm:inline-flex"
            >
              <Icon name="code" className="text-base" />
              View our stack
            </a>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-2 rounded-2xl bg-surface-low/70 p-3 shadow-lg backdrop-blur-xl sm:p-5 md:grid-cols-4 md:gap-4">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col-reverse p-3">
              <dt className="mt-1 font-mono text-[0.7rem] font-semibold uppercase tracking-wider text-muted sm:text-xs">
                {s.label}
              </dt>
              <dd className={`font-display text-xl font-bold sm:text-3xl ${s.color}`}>{s.value}</dd>
            </div>
          ))}
        </dl>

        <div className="overflow-hidden rounded-2xl border border-surface-high/40 bg-surface-lowest shadow-2xl">
          <div className="flex items-center justify-between gap-3 border-b border-surface-highest/60 bg-surface-high/90 px-4 py-3.5 sm:px-5">
            <div className="flex min-w-0 items-center gap-2">
              <span className="h-3 w-3 shrink-0 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 shrink-0 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 shrink-0 rounded-full bg-[#27c93f]" />
              <span className="ml-3 truncate font-mono text-xs font-semibold text-muted">
                storeware // blueprint.ts
              </span>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 rounded bg-surface px-2.5 py-1 font-mono text-xs font-semibold text-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              PRODUCTION
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 bg-gradient-to-b from-surface-lowest to-surface-low/40 p-4 sm:p-6 lg:grid-cols-12">
            <div className="flex flex-col justify-between gap-4 lg:col-span-7">
              <pre className="overflow-x-auto font-mono text-[0.8rem] leading-relaxed text-muted sm:text-sm">
                <code>
                  <span className="text-cyan">export const</span> project = defineStack({'{'}
                  {'\n'}  frontend: <span className="text-sky">'Angular | React (TypeScript strict)'</span>,
                  {'\n'}  backend: [<span className="text-sky">'NestJS'</span>, <span className="text-sky">'Spring Boot'</span>],
                  {'\n'}  data: <span className="text-cyan-dim">'PostgreSQL + Redis'</span>,
                  {'\n'}  ai: {'{'}
                  {'\n'}    models: <span className="text-violet">'Claude + OpenAI'</span>,
                  {'\n'}    workflows: <span className="text-violet">'n8n + MCP'</span>,
                  {'\n'}    channels: [<span className="text-violet">'WhatsApp'</span>, <span className="text-violet">'Instagram'</span>, <span className="text-violet">'Messenger'</span>],
                  {'\n'}  {'}'},
                  {'\n'}  delivery: <span className="text-sky">'Docker + GitHub Actions CI/CD'</span>,
                  {'\n'}  handover: <span className="text-cyan-dim">'100% of the code is yours'</span>,
                  {'\n'}{'}'});
                </code>
              </pre>
              <div className="flex items-center gap-2 rounded-xl border border-surface-highest/50 bg-surface-high/60 p-3.5 text-xs">
                <Icon name="terminal" className="text-sm text-cyan-soft" />
                <span className="font-mono text-muted">
                  Handover standard: no black boxes, complete repository ownership.
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-3 rounded-xl border border-surface-high/50 bg-surface/60 p-5 lg:col-span-5">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-dim">How we build</span>
              <div className="space-y-2.5">
                {blueprintRows.map((r) => (
                  <div key={r.title} className="flex items-start gap-3 rounded-lg bg-surface-high p-3">
                    <Icon name={r.icon} className={`mt-0.5 text-lg ${r.color}`} />
                    <div>
                      <span className="block text-sm font-semibold text-ink">{r.title}</span>
                      <span className="text-xs text-muted">{r.body}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-surface-high pt-2 font-mono text-xs text-muted">
                <span>Quality gates</span>
                <span className="font-semibold text-cyan">Types · Lint · Tests</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

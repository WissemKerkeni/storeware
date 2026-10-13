import { useRef, useState, type CSSProperties, type PointerEvent } from 'react'
import { accentText, projectFilters, projects, type ProjectFilter } from '../content'
import { Icon } from './ui'
import { useInView } from './useInView'

type Project = (typeof projects)[number]

const FRAME_WIDTH = 1200

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function hostname(url: string) {
  return new URL(url).hostname
}

type FrameProject = Pick<Project, 'url' | 'image'>

const defaultFrameLabels = { hover: 'Hover to scroll', touch: 'Live preview', live: 'LIVE' }

export function BrowserFrame({
  project,
  aspect,
  labels = defaultFrameLabels,
}: {
  project: FrameProject
  aspect: string
  labels?: typeof defaultFrameLabels
}) {
  const scrolls = project.image.height > FRAME_WIDTH * 0.8
  // Longer pages pan for longer so the speed stays readable.
  const seconds = Math.min(10, Math.max(4, (project.image.height / FRAME_WIDTH) * 1.4))

  return (
    <div className="overflow-hidden rounded-xl border border-surface-high/80 bg-surface-lowest shadow-xl">
      <div className="flex items-center gap-3 border-b border-surface-high/70 bg-surface-high/70 px-3 py-2.5">
        <div className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-surface-lowest/80 px-2.5 py-1 font-mono text-[0.7rem] text-muted">
          <Icon name="lock" className="text-[0.8rem] text-cyan-dim" />
          <span className="truncate">{hostname(project.url)}</span>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 font-mono text-[0.65rem] font-semibold tracking-wider text-cyan">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
          </span>
          {labels.live}
        </span>
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className={`shot-frame relative block overflow-hidden bg-surface-lowest ${aspect}`}
      >
        <img
          src={project.image.src}
          alt=""
          width={FRAME_WIDTH}
          height={project.image.height}
          loading="lazy"
          decoding="async"
          className={scrolls ? 'scroll-shot absolute inset-x-0 top-0 w-full' : 'zoom-shot h-full w-full object-cover object-top'}
          style={{ '--shot-dur': `${seconds}s` } as CSSProperties}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface-lowest/80 to-transparent" />
        {scrolls && (
          <span className="shot-hint pointer-events-none absolute right-3 bottom-3 flex items-center gap-1 rounded-full bg-surface-lowest/85 px-2.5 py-1 font-mono text-[0.65rem] text-muted backdrop-blur">
            <Icon name="swipe_down" className="text-sm text-cyan-dim" />
            <span className="hover-only">{labels.hover}</span>
            <span className="touch-only">{labels.touch}</span>
          </span>
        )}
      </a>
    </div>
  )
}

function ProjectCard({ project, index, visible }: { project: Project; index: number; visible: boolean }) {
  const cardRef = useRef<HTMLElement>(null)
  const featured = project.layout === 'featured'
  const wide = project.layout === 'wide'

  function tilt(e: PointerEvent<HTMLElement>) {
    if (e.pointerType !== 'mouse' || prefersReducedMotion()) return
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--rx', `${(-y * 4).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(x * 5).toFixed(2)}deg`)
  }

  function resetTilt() {
    cardRef.current?.style.setProperty('--rx', '0deg')
    cardRef.current?.style.setProperty('--ry', '0deg')
  }

  return (
    <article
      ref={cardRef}
      onPointerMove={tilt}
      onPointerLeave={resetTilt}
      style={{ animationDelay: `${index * 90}ms` }}
      className={`project-card group relative flex flex-col gap-5 rounded-2xl border border-surface-high/60 bg-surface-low p-4 sm:p-5 ${
        visible ? 'animate-fade-up' : 'opacity-0'
      } ${featured ? 'md:col-span-2' : ''} ${wide ? 'md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-8' : ''}`}
    >
      <div className={`relative ${visible ? 'is-visible' : ''}`}>
        <BrowserFrame
          project={project}
          aspect={
            featured
              ? 'aspect-[16/9]'
              : wide
                ? 'aspect-[1200/602]'
                : project.layout === 'tall'
                  ? 'aspect-[16/11] lg:aspect-[5/6]'
                  : 'aspect-[16/11]'
          }
        />
        {project.mobile && (
          <div className="phone-float pointer-events-none absolute -right-2 -bottom-6 hidden w-[118px] overflow-hidden rounded-[22px] border-[5px] border-surface-highest bg-surface-lowest shadow-2xl shadow-black/60 sm:block lg:w-[138px]">
            <img src={project.mobile} alt="" width={390} height={844} loading="lazy" decoding="async" className="w-full" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 px-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            <span className={`rounded bg-surface px-2.5 py-1 font-mono text-[0.7rem] font-semibold uppercase tracking-wide ${accentText[project.accent]}`}>
              {project.chip}
            </span>
            <span className="rounded bg-surface-high px-2.5 py-1 font-mono text-[0.7rem] text-muted">{project.detail}</span>
          </div>
          <span className="flex items-center gap-1 font-mono text-xs text-muted">
            <Icon name="location_on" className="text-sm" />
            {project.location}
          </span>
        </div>
        <h3 className={`font-bold text-ink transition-colors group-hover:text-cyan-soft ${featured || wide ? 'text-2xl sm:text-3xl' : 'text-2xl'}`}>
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{project.body}</p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-surface-high/60 pt-4">
          <span className="truncate font-mono text-xs text-outline">{hostname(project.url)}</span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex shrink-0 items-center gap-1.5 font-mono text-sm font-semibold text-cyan transition-colors hover:text-cyan-soft"
          >
            Visit live site
            <span className="sr-only">: {project.name} (opens in a new tab)</span>
            <Icon name="arrow_outward" className="text-base transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('all')
  const [sectionRef, inView] = useInView<HTMLElement>()
  const shown = projects.filter((p) => filter === 'all' || p.categories.includes(filter))

  return (
    <section id="clients" ref={sectionRef} className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-12">
      <div className="pointer-events-none absolute top-40 -left-40 h-96 w-96 rounded-full bg-cyan/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-20 h-96 w-96 rounded-full bg-violet-deep/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className={`mb-10 max-w-3xl space-y-4 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-soft">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
            Shipped &amp; live
          </span>
          <h2 className="text-3xl font-bold text-ink sm:text-5xl sm:leading-[1.12]">
            Websites we've launched for{' '}
            <span className="bg-gradient-to-r from-cyan-soft via-cyan to-violet bg-clip-text text-transparent">real businesses.</span>
          </h2>
          <p className="text-muted">
            Sites and platforms designed, built and deployed for businesses in Tunisia and Germany. Each preview scrolls
            through the real page, and every one is live.
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter projects"
          className={`mb-10 flex flex-wrap gap-2 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '80ms' }}
        >
          {projectFilters.map((f) => {
            const count = projects.filter((p) => f.id === 'all' || p.categories.includes(f.id)).length
            const active = f.id === filter
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-4 py-2 font-mono text-xs font-semibold transition-all ${
                  active
                    ? 'bg-cyan text-on-cyan shadow-[0_0_20px_rgba(0,240,255,0.35)]'
                    : 'bg-surface-low text-muted hover:bg-surface hover:text-ink'
                }`}
              >
                {f.label} <span className={active ? 'opacity-70' : 'text-outline'}>({count})</span>
              </button>
            )
          })}
        </div>

        <div key={filter} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} visible={inView} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 rounded-xl border border-surface-high/60 bg-surface-low/70 px-4 py-3 font-mono text-xs text-muted sm:flex-row sm:items-center">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
            All {projects.length} projects are live. Open any of them to see the real thing.
          </span>
          <a href="#contact" className="text-cyan transition-colors hover:text-cyan-soft">
            Want yours next? →
          </a>
        </div>
      </div>
    </section>
  )
}

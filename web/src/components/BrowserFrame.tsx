import type { CSSProperties } from 'react'
import { Icon } from './ui'

const FRAME_WIDTH = 1200

function hostname(url: string) {
  return new URL(url).hostname
}

type FrameProject = { url: string; image: { src: string; height: number } }

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

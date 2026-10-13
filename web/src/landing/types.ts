import { contact, projects } from '../content'

export type Lang = 'fr' | 'de'

type Card = { icon: string; title: string; body: string }

export type Example = {
  name: string
  url: string
  image: { src: string; height: number }
  chip: string
  location: string
  body: string
}

export type LandingContent = {
  lang: Lang
  skip: string
  nav: { label: string; href: string }[]
  menu: { open: string; close: string; languages: string }
  headerCta: string
  /** Prefilled WhatsApp message for the free audit. */
  whatsappText: string

  hero: {
    badge: string
    title: string
    /** Part of the title shown with the gradient. */
    highlight: string
    lead: string
    primary: string
    secondary: string
    trust: string[]
    phoneChips: { icon: string; label: string }[]
    phoneAlt: string
  }
  examples: {
    id: string
    eyebrow: string
    title: string
    body: string
    visit: string
    newTab: string
    frameLabels: { hover: string; touch: string; live: string }
    items: Example[]
  }
  included: { id: string; eyebrow: string; title: string; body: string; items: Card[] }
  steps: { id: string; eyebrow: string; title: string; items: { when: string; title: string; body: string }[] }
  price: { id: string; eyebrow: string; title: string; from: string; sub: string; points: string[]; cta: string }
  why: { id: string; eyebrow: string; title: string; items: Card[] }
  faq: { id: string; eyebrow: string; title: string; items: { q: string; a: string }[] }
  final: { id: string; title: string; body: string; whatsapp: string; email: string; emailSubject: string }
  footer: { tagline: string; location: string; contactTitle: string; languagesTitle: string; legal?: { label: string; href: string }[] }
}

/** Screenshot and URL come from the shared project list so both sites stay in sync. */
export function example(slug: string, copy: Pick<Example, 'chip' | 'location' | 'body'>): Example {
  const p = projects.find((x) => x.slug === slug)
  if (!p) throw new Error(`Unknown project: ${slug}`)
  return { name: p.name, url: p.url, image: p.image, ...copy }
}

export const whatsappLink = (text: string) => `${contact.whatsappUrl}?text=${encodeURIComponent(text)}`

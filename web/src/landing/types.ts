import { contact, projects } from '../content'

export type Lang = 'en' | 'fr' | 'de'

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
  contact: {
    id: string
    badge: string
    title: string
    body: string
    whatsapp: string
    emailSubject: string
    facts: { icon: string; label: string }[]
    form: {
      title: string
      free: string
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      business: string
      businessPlaceholder: string
      type: string
      types: string[]
      message: string
      messagePlaceholder: string
      submit: string
      /** Subject line of the email the form prepares. */
      subject: string
      note: string
      /** Shown after submit, followed by the contact email. */
      sent: string
    }
  }
  footer: {
    tagline: string
    chips: string[]
    studioTitle: string
    location: string
    timezone: string
    indexTitle: string
    founderTitle: string
    founderRole: string
    languagesTitle: string
    rights: string
    legal?: { label: string; href: string }[]
  }
}

/** Screenshot and URL come from the shared project list so both sites stay in sync. */
export function example(slug: string, copy: Pick<Example, 'chip' | 'location' | 'body'>): Example {
  const p = projects.find((x) => x.slug === slug)
  if (!p) throw new Error(`Unknown project: ${slug}`)
  return { name: p.name, url: p.url, image: p.image, ...copy }
}

export const whatsappLink = (text: string) => `${contact.whatsappUrl}?text=${encodeURIComponent(text)}`

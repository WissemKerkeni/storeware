import { example, type LandingContent } from './types'

export const en: LandingContent = {
  lang: 'en',
  skip: 'Skip to content',
  nav: [
    { label: 'Our work', href: '#work' },
    { label: 'Included', href: '#included' },
    { label: 'Steps', href: '#steps' },
    { label: 'Price', href: '#price' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  menu: { open: 'Open menu', close: 'Close menu', languages: 'Language' },
  headerCta: 'Free check',
  whatsappText: 'Hi Storeware, I would like a free website check for my business. My business: ',

  hero: {
    badge: 'Garages · Tyres · Body shops · Restaurants · Cafés · Hair salons',
    title: 'Websites for garages, restaurants and local businesses',
    highlight: 'garages, restaurants and local businesses',
    lead: 'Customers find you on Google, see your services and opening hours, and call or book straight from their phone.',
    primary: 'Free website check',
    secondary: 'See our work',
    trust: ['Free mock-up', 'Fixed price', 'Online in about 2 weeks'],
    phoneChips: [
      { icon: 'call', label: 'Call' },
      { icon: 'schedule', label: 'Opening hours' },
      { icon: 'directions', label: 'Directions' },
    ],
    phoneAlt: 'The Chaari Auto website on a phone',
  },

  examples: {
    id: 'work',
    eyebrow: 'Our work',
    title: 'Websites already online, for real businesses',
    body: 'Each preview scrolls through the real page. Open them to see the site the way your customers would.',
    visit: 'Visit site',
    newTab: 'opens in a new tab',
    frameLabels: { hover: 'Hover to scroll', touch: 'Live preview', live: 'LIVE' },
    items: [
      example('chaari-auto', {
        chip: 'Car export',
        location: 'Stuttgart, Germany',
        body: 'Bilingual site for a car exporter shipping vehicles from Europe to Tunisia and worldwide, built around WhatsApp enquiries and Google reviews.',
      }),
      example('techno-pneu', {
        chip: 'Tyres & servicing',
        location: 'Teboulba, Tunisia',
        body: 'Site in three languages for a tyre, repair and wheel-alignment shop, with one-tap WhatsApp contact.',
      }),
      example('di-piu', {
        chip: 'Italian restaurant',
        location: 'Monastir, Tunisia',
        body: 'Restaurant site with signature dishes, the full menu, a photo gallery, reviews and directions.',
      }),
    ],
  },

  included: {
    id: 'included',
    eyebrow: 'What’s included',
    title: 'Everything you need to be found and contacted',
    body: 'A complete website, ready for your customers. There’s nothing technical for you to manage.',
    items: [
      { icon: 'smartphone', title: 'Works on phones', body: 'Fast and easy to read on mobile, where your customers are looking for you.' },
      { icon: 'home_repair_service', title: 'Your services', body: 'What you offer, clearly laid out, with prices if you want them.' },
      { icon: 'photo_library', title: 'Photos', body: 'Your workshop, your dining room or your work: people see right away who they’re dealing with.' },
      { icon: 'schedule', title: 'Opening hours', body: 'Easy to find, together with your address and a map.' },
      { icon: 'call', title: 'Call / WhatsApp button', body: 'One tap to call you or message you from a phone.' },
      { icon: 'request_quote', title: 'Contact or quote form', body: 'Customers can send you a request any time, even when you’re closed.' },
      { icon: 'storefront', title: 'Google listing set up', body: 'Your Google Business Profile created or completed: hours, photos, link to your site.' },
      { icon: 'gavel', title: 'Legal pages', body: 'Legal notice (Impressum / mentions légales) and privacy policy included.' },
      { icon: 'translate', title: 'English, French, German', body: 'Your site in your customers’ language, or in several languages.' },
    ],
  },

  steps: {
    id: 'steps',
    eyebrow: 'How it works',
    title: 'Your website in 3 steps',
    items: [
      {
        when: 'Free',
        title: 'Free mock-up',
        body: 'Tell us about your business, a WhatsApp message is enough. We prepare a mock-up of your new site, free and with no commitment.',
      },
      {
        when: 'No commitment',
        title: 'You choose',
        body: 'You look at the mock-up, ask for changes, then decide. If you don’t like it, you pay nothing.',
      },
      {
        when: '≈ 2 weeks',
        title: 'Online in about 2 weeks',
        body: 'We finish the texts and photos, put the site online and set up your Google listing.',
      },
    ],
  },

  price: {
    id: 'price',
    eyebrow: 'Price',
    title: 'A fixed price, clear from the start',
    from: 'from 590 €',
    sub: 'Fixed price for your complete website',
    points: [
      'Fixed price, agreed before we start',
      'No mandatory subscription',
      'Free mock-up, no commitment',
      'Optional monthly maintenance, if you want us to take care of everything',
    ],
    cta: 'Ask for my free check',
  },

  why: {
    id: 'why',
    eyebrow: 'Why Storeware',
    title: 'Someone who answers you, not a platform',
    items: [
      {
        icon: 'schedule',
        title: 'Same time zone',
        body: 'We work on UTC+1, like France and Germany in winter. In summer, it’s just one hour apart.',
      },
      {
        icon: 'person',
        title: 'You talk directly to the developer',
        body: 'No salespeople, no call centre: you deal with Wissem, who builds your site, by WhatsApp, email or phone.',
      },
      {
        icon: 'key',
        title: 'The site and domain are yours',
        body: 'Your website’s code and your domain name belong to you. You stay free, even if you change provider later.',
      },
      {
        icon: 'location_on',
        title: 'Based in Monastir, Tunisia',
        body: 'We say it openly: Storeware is based in Monastir, Tunisia. We work remotely for businesses in Tunisia and Germany.',
      },
    ],
  },

  faq: {
    id: 'faq',
    eyebrow: 'Questions',
    title: 'Your questions, answered',
    items: [
      {
        q: 'How much does a website cost?',
        a: 'From 590 €, at a fixed price. You know the exact amount before we start, after you’ve seen the free mock-up. There’s no mandatory subscription: monthly maintenance is optional.',
      },
      {
        q: 'How long does it take?',
        a: 'About 2 weeks from your go-ahead on the mock-up to the site going live. It also depends on how quickly you send us your photos and information.',
      },
      {
        q: 'I already have a Facebook page. Why do I need a website?',
        a: 'Keep it! But many customers search on Google, not Facebook, and not everyone has an account. Your website belongs to you, shows up on Google with your hours and phone number, and can link to your Facebook page.',
      },
      {
        q: 'Who updates the website?',
        a: 'With the optional monthly maintenance, we do: just send us the change by WhatsApp or email. Without it, you can ask us for one-off changes. And because the site belongs to you, another provider can take it over too.',
      },
      {
        q: 'How does payment work?',
        a: 'The mock-up is free. Once you’ve approved it, you pay 50 % to get started and the remaining 50 % when the site goes live. Payment by bank transfer or PayPal, with an invoice at each step.',
      },
    ],
  },

  contact: {
    id: 'contact',
    badge: 'Free check, no commitment',
    title: 'Need a website for your business? Let’s talk.',
    body: 'Message us on WhatsApp, by email or with the form. We take a free look at how you show up online today (website, Google listing) and suggest a mock-up, with no commitment.',
    whatsapp: 'Free check on WhatsApp',
    emailSubject: 'Free website check for my business',
    facts: [
      { icon: 'schedule', label: 'UTC+1 time zone' },
      { icon: 'draw', label: 'Free mock-up' },
      { icon: 'sell', label: 'Fixed price from 590 €' },
      { icon: 'key', label: 'The site and domain are yours' },
    ],
    form: {
      title: 'Tell us about your business',
      free: 'Free',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      business: 'Business name (optional)',
      businessPlaceholder: 'Your business',
      type: 'Type of business',
      types: ['Garage / workshop', 'Tyres', 'Body shop', 'Restaurant / café', 'Hair salon', 'Other business'],
      message: 'Message',
      messagePlaceholder: 'Your town, what you want from the site, your current site if you have one…',
      submit: 'Send message',
      subject: 'Website request',
      note: 'Opens your email app with the message ready to send.',
      sent: 'Your email app should open now. If it doesn’t, write to',
    },
  },

  footer: {
    tagline: 'Websites for garages, restaurants and local businesses.',
    chips: ['Garages', 'Restaurants', 'Cafés', 'Salons'],
    studioTitle: 'Studio',
    location: 'Monastir, Tunisia',
    timezone: 'UTC+1 (CET)',
    indexTitle: 'Index',
    founderTitle: 'Founder',
    founderRole: 'Founder & Lead Engineer',
    languagesTitle: 'Languages',
    rights: 'Monastir, Tunisia.',
  },
}

export const contact = {
  email: 'contact@storeware.tn',
  whatsappDisplay: '+216 21 546 038',
  whatsappUrl: 'https://wa.me/21621546038',
  github: 'https://github.com/WissemKerkeni',
  linkedin: 'https://www.linkedin.com/in/wissem-kerkeni',
  location: 'Monastir, Tunisia',
}

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Clients', href: '#clients' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Founder', href: '#founder' },
  { label: 'Process', href: '#process' },
  { label: 'Engagements', href: '#engagements' },
]

export type Accent = 'cyan' | 'violet' | 'sky'

export const accentText: Record<Accent, string> = {
  cyan: 'text-cyan',
  violet: 'text-violet',
  sky: 'text-sky',
}

export const services: {
  title: string
  icon: string
  accent: Accent
  body: string
  tags: string[]
}[] = [
  {
    title: 'Websites & E-commerce',
    icon: 'shopping_bag',
    accent: 'cyan',
    body: 'Fast, SEO-ready company sites and online stores that turn visitors into customers, with multilingual support for Arabic, French and English.',
    tags: ['React / Angular', 'SSR & SEO', 'Tailwind CSS', 'Shopify / Custom'],
  },
  {
    title: 'SaaS Products',
    icon: 'web',
    accent: 'violet',
    body: 'Multi-tenant subscription products taken from MVP to production: authentication, roles, billing, admin dashboards and clean state management.',
    tags: ['Angular Signals', 'NestJS', 'Spring Boot', 'PostgreSQL'],
  },
  {
    title: 'Business Platforms',
    icon: 'dashboard_customize',
    accent: 'cyan',
    body: 'ERP, CRM, inventory systems and B2B portals that replace scattered spreadsheets with one reliable platform your team actually enjoys using.',
    tags: ['Role-based access', 'Workflows', 'Excel / PDF exports', 'Integrations'],
  },
  {
    title: 'AI Automation & Chatbots',
    icon: 'smart_toy',
    accent: 'sky',
    body: 'Customer assistants on WhatsApp, Instagram and Messenger, n8n workflow automation and LLM agents connected to your real business systems.',
    tags: ['Claude & OpenAI', 'n8n', 'MCP', 'Human handoff'],
  },
]

export const stackColumns: {
  title: string
  icon: string
  accent: Accent
  body: string
  items: [string, string][]
  note: string
}[] = [
  {
    title: 'Frontend & UI',
    icon: 'devices',
    accent: 'cyan',
    body: 'Reactive interfaces built for dense data, quick rendering and smooth interaction.',
    items: [
      ['Angular', 'Signals / RxJS'],
      ['React + Vite', 'SPA / SSR'],
      ['TypeScript', 'strict mode'],
      ['Ionic / Capacitor', 'mobile'],
    ],
    note: 'Performance budgets checked before every release',
  },
  {
    title: 'Backend & Data',
    icon: 'database',
    accent: 'violet',
    body: 'Maintainable services with validated contracts, migrations and caching.',
    items: [
      ['NestJS', 'REST / GraphQL'],
      ['Spring Boot', 'Java'],
      ['PostgreSQL & Redis', 'TypeORM'],
      ['Keycloak / Azure AD', 'auth'],
    ],
    note: 'Dockerized, reproducible environments',
  },
  {
    title: 'AI & Automation',
    icon: 'memory',
    accent: 'sky',
    body: 'LLM features that take verified actions in your systems, not just chat.',
    items: [
      ['Claude & OpenAI', 'structured output'],
      ['n8n', 'workflows'],
      ['Model Context Protocol', 'tool access'],
      ['Langfuse', 'cost & tracing'],
    ],
    note: 'Validated outputs with human-in-the-loop',
  },
]

export const principles = [
  { icon: 'verified', label: 'Strict TypeScript' },
  { icon: 'hexagon', label: 'Clean architecture' },
  { icon: 'bolt', label: 'Automated tests & CI/CD' },
  { icon: 'rate_review', label: 'Code review on every change' },
]

export const work: {
  category: string
  kind: string
  title: string
  body: string
  highlightIcon: string
  highlightTitle: string
  highlight: string
  tags: string[]
  accent: Accent
}[] = [
  {
    category: 'Security · Tooling',
    kind: 'Operations hub',
    title: 'Cybersecurity Operations Platform',
    body: 'A platform that centralizes penetration-testing tools for customers: scan orchestration, data aggregation from external security APIs and secure storage of reports and artifacts.',
    highlightIcon: 'shield',
    highlightTitle: 'RBAC & secure artifact pipeline',
    highlight: 'Keycloak identity, MinIO object storage, Redis caching and Selenium automation for tools without stable APIs.',
    tags: ['Angular 19 Signals', 'Spring Boot', 'GraphQL', 'Redis', 'Keycloak', 'MinIO', 'Docker'],
    accent: 'cyan',
  },
  {
    category: 'Industrial R&D',
    kind: 'Lab software',
    title: 'Lab Formulation & R&D Software',
    body: 'An end-to-end formulation product for laboratories: recipes, experiments, ingredients, measurements and templates, with PHR, density and mixing calculations and Excel export.',
    highlightIcon: 'science',
    highlightTitle: 'Calculations you can trust',
    highlight: 'Consistent unit conversions and calculations across API, UI and exports, shipped through CI-checked releases.',
    tags: ['Angular', 'NestJS', 'TypeORM', 'Azure AD', 'GitHub Actions'],
    accent: 'violet',
  },
  {
    category: 'AI · Commerce',
    kind: 'Agent engine',
    title: 'Multi-Channel AI Commerce Assistant',
    body: 'A reusable chatbot engine for e-commerce brands across WhatsApp, Instagram, Messenger and TikTok, with a shared inbox for human handoff and live store data.',
    highlightIcon: 'hub',
    highlightTitle: 'Multi-client by design',
    highlight: 'Versioned core engine, webhook signature checks, idempotent order writes and per-client LLM cost tracking.',
    tags: ['Claude', 'n8n', 'Shopify MCP', 'Chatwoot', 'Langfuse'],
    accent: 'sky',
  },
]

export const steps = [
  {
    n: '01',
    when: 'Week 1',
    title: 'Discovery & Blueprint',
    body: 'We clarify goals, users and scope, then define the data model, API contracts and infrastructure.',
    output: 'Scope, specs & fixed quote',
    accent: 'cyan' as Accent,
  },
  {
    n: '02',
    when: 'Weeks 2 – 4',
    title: 'Design & Core Build',
    body: 'UI you can click through, then focused sprints with a live staging link updated by CI on every merge.',
    output: 'Live staging URL',
    accent: 'cyan' as Accent,
  },
  {
    n: '03',
    when: 'Weeks 5 – 6',
    title: 'Hardening & Launch',
    body: 'Testing, security review, performance tuning and production deployment with monitoring in place.',
    output: 'Production release',
    accent: 'violet' as Accent,
  },
  {
    n: '04',
    when: 'Ongoing',
    title: 'Handover & Support',
    body: 'Full code ownership, documentation and walkthroughs, or continued support as you grow.',
    output: 'Repo, docs & runbooks',
    accent: 'sky' as Accent,
  },
]

export const engagements: {
  eyebrow: string
  title: string
  body: string
  headline: string
  sub: string
  features: string[]
  cta: string
  featured?: boolean
  accent: Accent
}[] = [
  {
    eyebrow: 'Intensive boost',
    title: 'Architecture Audit & AI Implementation',
    body: 'For teams with an existing product that needs a performance fix, a code health check or a first AI workflow shipped quickly.',
    headline: '2-week sprint',
    sub: 'Fixed price · Senior engineer',
    features: [
      'Code, database & query review',
      'AI agent or automation build',
      'Prioritized remediation plan',
      '30 days of follow-up support',
    ],
    cta: 'Scope a sprint',
    accent: 'cyan',
  },
  {
    eyebrow: 'Turn-key build',
    title: 'Full MVP / SaaS Platform',
    body: 'We design, build and launch your product from zero to production, then hand over everything you need to run it.',
    headline: '6 – 8 weeks',
    sub: 'Milestone-based · No surprises',
    features: [
      'Angular or React + NestJS / Spring Boot',
      'PostgreSQL with migrations',
      'Auth, roles & payment integration',
      'Dockerized cloud deployment',
    ],
    cta: 'Book a discovery call',
    featured: true,
    accent: 'cyan',
  },
  {
    eyebrow: 'Team extension',
    title: 'Dedicated Engineer Retainer',
    body: 'Senior full-stack capacity embedded in your team for features, reviews and architecture decisions.',
    headline: 'Monthly',
    sub: 'Flexible commitment',
    features: [
      'Feature delivery & PR reviews',
      'Async architecture guidance',
      'CET-friendly availability',
      'No lock-in contracts',
    ],
    cta: 'Discuss availability',
    accent: 'violet',
  },
]

export type ProjectFilter = 'all' | 'websites' | 'restaurants' | 'automotive' | 'platforms'

export const projectFilters: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'websites', label: 'Websites' },
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'automotive', label: 'Automotive' },
  { id: 'platforms', label: 'Platforms' },
]

export const projects: {
  slug: string
  name: string
  url: string
  categories: ProjectFilter[]
  chip: string
  detail: string
  location: string
  body: string
  accent: Accent
  /** Full-page screenshot in /public/projects, 1200px wide. */
  image: { src: string; height: number }
  mobile?: string
  layout?: 'featured' | 'tall' | 'wide'
}[] = [
  {
    slug: 'chaari-auto',
    name: 'Chaari Auto',
    url: 'https://chaari-auto.com/',
    categories: ['websites', 'automotive'],
    chip: 'Automotive · Export',
    detail: 'FR / EN',
    location: 'Stuttgart, Germany',
    body: 'Bilingual site for a car exporter shipping vehicles from Europe to Tunisia and worldwide, built around WhatsApp enquiries and Google reviews.',
    accent: 'cyan',
    image: { src: '/projects/chaari-auto-full.webp', height: 6000 },
    mobile: '/projects/chaari-auto-mobile.webp',
    layout: 'featured',
  },
  {
    slug: 'techno-pneu',
    name: 'Techno Pneu',
    url: 'https://techno-pneu.tn/',
    categories: ['websites', 'automotive'],
    chip: 'Automotive · Tires',
    detail: 'EN / FR / AR',
    location: 'Teboulba, TN',
    body: 'Trilingual site for a tire, repair and wheel-alignment shop, with services, news and one-tap WhatsApp contact.',
    accent: 'violet',
    image: { src: '/projects/techno-pneu-full.webp', height: 4206 },
    layout: 'tall',
  },
  {
    slug: 'di-piu',
    name: 'Di Più',
    url: 'https://di-piu-monastir.vercel.app/',
    categories: ['websites', 'restaurants'],
    chip: 'Restaurant · Italian',
    detail: 'Menu & gallery',
    location: 'Monastir, TN',
    body: 'Italian restaurant site with signature dishes, the full menu, gallery, reviews and directions.',
    accent: 'sky',
    image: { src: '/projects/di-piu-full.webp', height: 6000 },
  },
  {
    slug: 'dar-zmen',
    name: 'Dar Zmen',
    url: 'https://dar-zmen-monastir.vercel.app/',
    categories: ['websites', 'restaurants'],
    chip: 'Restaurant · Tunisian',
    detail: 'Menu & gallery',
    location: 'Monastir medina, TN',
    body: 'Traditional Tunisian restaurant in the medina: the printed menu brought online, gallery, FAQ and directions.',
    accent: 'violet',
    image: { src: '/projects/dar-zmen-full.webp', height: 6000 },
  },
  {
    slug: 'ahmed-auto',
    name: 'Ahmed Auto',
    url: 'https://ahmed-auto.vercel.app/',
    categories: ['websites', 'automotive'],
    chip: 'Automotive · Showroom',
    detail: 'Vehicle stock',
    location: 'Ksibet El Mediouni, TN',
    body: 'Showroom site for new and used cars with the published vehicle stock and a simple WhatsApp buying flow.',
    accent: 'cyan',
    image: { src: '/projects/ahmed-auto-full.webp', height: 6000 },
  },
  {
    slug: 'pizza-phone-admin',
    name: 'Pizza Phone Admin',
    url: 'https://gohan-admin.vercel.app/',
    categories: ['platforms'],
    chip: 'Platform · Food ordering',
    detail: 'FR / EN',
    location: 'Web app',
    body: 'Back-office for a food-ordering app: live orders with accept and reject, driver dispatch, menu and promotions management, with a live server connection.',
    accent: 'sky',
    image: { src: '/projects/pizza-phone-admin-full.webp', height: 602 },
    layout: 'wide',
  },
]

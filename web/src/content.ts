export const contact = {
  email: 'contact@storeware.tn',
  whatsappDisplay: '+216 21 546 038',
  whatsappUrl: 'https://wa.me/21621546038',
  github: 'https://github.com/WissemKerkeni',
  linkedin: 'https://www.linkedin.com/in/wissem-kerkeni',
  location: 'Monastir, Tunisia',
}

export const projects: {
  slug: string
  name: string
  url: string
  /** Full-page screenshot in /public/projects, 1200px wide. */
  image: { src: string; height: number }
}[] = [
  { slug: 'chaari-auto', name: 'Chaari Auto', url: 'https://chaari-auto.com/', image: { src: '/projects/chaari-auto-full.webp', height: 6000 } },
  { slug: 'techno-pneu', name: 'Techno Pneu', url: 'https://techno-pneu.tn/', image: { src: '/projects/techno-pneu-full.webp', height: 4206 } },
  { slug: 'di-piu', name: 'Di Più', url: 'https://di-piu-monastir.vercel.app/', image: { src: '/projects/di-piu-full.webp', height: 6000 } },
  { slug: 'dar-zmen', name: 'Dar Zmen', url: 'https://dar-zmen-monastir.vercel.app/', image: { src: '/projects/dar-zmen-full.webp', height: 6000 } },
  { slug: 'ahmed-auto', name: 'Ahmed Auto', url: 'https://ahmed-auto.vercel.app/', image: { src: '/projects/ahmed-auto-full.webp', height: 6000 } },
  { slug: 'pizza-phone-admin', name: 'Pizza Phone Admin', url: 'https://gohan-admin.vercel.app/', image: { src: '/projects/pizza-phone-admin-full.webp', height: 602 } },
]

import { example, type LandingContent } from './types'

export const fr: LandingContent = {
  lang: 'fr',
  skip: 'Aller au contenu',
  nav: [
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Inclus', href: '#inclus' },
    { label: 'Étapes', href: '#etapes' },
    { label: 'Tarif', href: '#tarif' },
    { label: 'FAQ', href: '#faq' },
  ],
  menu: { open: 'Ouvrir le menu', close: 'Fermer le menu', languages: 'Langue' },
  headerCta: 'Audit gratuit',
  whatsappText: 'Bonjour Storeware, je souhaite un audit gratuit pour le site web de mon entreprise. Mon activité : ',

  hero: {
    badge: 'Garages · Pneus · Carrosseries · Restaurants · Cafés · Coiffeurs',
    title: 'Des sites web pour garages, restaurants et commerces',
    highlight: 'garages, restaurants et commerces',
    lead: 'Vos clients vous trouvent sur Google, voient vos services et vos horaires, puis vous appellent ou réservent directement depuis leur téléphone.',
    primary: 'Audit gratuit',
    secondary: 'Voir nos réalisations',
    trust: ['Maquette gratuite', 'Prix fixe', 'En ligne en 2 semaines environ'],
    phoneChips: [
      { icon: 'call', label: 'Appeler' },
      { icon: 'schedule', label: 'Horaires' },
      { icon: 'directions', label: 'Itinéraire' },
    ],
    phoneAlt: 'Le site Chaari Auto affiché sur un téléphone',
  },

  examples: {
    id: 'realisations',
    eyebrow: 'Nos réalisations',
    title: 'Des sites déjà en ligne, pour de vrais commerces',
    body: 'Chaque aperçu fait défiler la vraie page. Ouvrez-les pour voir le site tel que vos clients le verraient.',
    visit: 'Voir le site',
    newTab: "s'ouvre dans un nouvel onglet",
    frameLabels: { hover: 'Survolez pour faire défiler', touch: 'Aperçu en direct', live: 'EN LIGNE' },
    items: [
      example('techno-pneu', {
        chip: 'Pneus & entretien',
        location: 'Teboulba, Tunisie',
        body: 'Site en trois langues pour un spécialiste du pneu, de la réparation et de la géométrie, avec contact WhatsApp en un clic.',
      }),
      example('di-piu', {
        chip: 'Restaurant italien',
        location: 'Monastir, Tunisie',
        body: 'Site de restaurant avec les plats signature, la carte complète, une galerie photo, les avis et l’itinéraire.',
      }),
      example('chaari-auto', {
        chip: 'Export de voitures',
        location: 'Stuttgart, Allemagne',
        body: 'Site bilingue pour un exportateur de voitures d’Europe vers la Tunisie et le monde entier, pensé pour les demandes WhatsApp et les avis Google.',
      }),
    ],
  },

  included: {
    id: 'inclus',
    eyebrow: 'Ce qui est inclus',
    title: 'Tout ce qu’il faut pour être trouvé et contacté',
    body: 'Un site complet, prêt à recevoir vos clients. Vous n’avez rien de technique à gérer.',
    items: [
      { icon: 'smartphone', title: 'Adapté au téléphone', body: 'Rapide et lisible sur mobile, là où vos clients vous cherchent.' },
      { icon: 'home_repair_service', title: 'Vos services', body: 'Vos prestations présentées clairement, avec vos prix si vous le souhaitez.' },
      { icon: 'photo_library', title: 'Photos', body: 'Votre atelier, votre salle ou vos réalisations : on voit tout de suite à qui on a affaire.' },
      { icon: 'schedule', title: 'Horaires d’ouverture', body: 'Bien visibles, avec votre adresse et un plan pour venir.' },
      { icon: 'call', title: 'Bouton Appeler / WhatsApp', body: 'Un seul geste pour vous appeler ou vous écrire depuis le téléphone.' },
      { icon: 'request_quote', title: 'Formulaire de contact ou de devis', body: 'Vos clients vous envoient une demande à toute heure, même quand vous êtes fermé.' },
      { icon: 'storefront', title: 'Fiche Google configurée', body: 'Votre fiche Google créée ou complétée : horaires, photos, lien vers votre site.' },
      { icon: 'gavel', title: 'Pages légales', body: 'Mentions légales et politique de confidentialité incluses.' },
      { icon: 'translate', title: 'Français, allemand, anglais', body: 'Votre site dans la langue de vos clients, ou en plusieurs langues.' },
    ],
  },

  steps: {
    id: 'etapes',
    eyebrow: 'Comment ça marche',
    title: 'Votre site en 3 étapes',
    items: [
      {
        when: 'Gratuit',
        title: 'Maquette gratuite',
        body: 'Vous nous présentez votre commerce, un message WhatsApp suffit. Nous préparons une maquette de votre futur site, sans frais et sans engagement.',
      },
      {
        when: 'Sans engagement',
        title: 'Vous choisissez',
        body: 'Vous regardez la maquette, demandez des changements, puis vous décidez. Si elle ne vous plaît pas, vous ne payez rien.',
      },
      {
        when: '≈ 2 semaines',
        title: 'En ligne en 2 semaines environ',
        body: 'Nous finalisons les textes et les photos, mettons le site en ligne et configurons votre fiche Google.',
      },
    ],
  },

  price: {
    id: 'tarif',
    eyebrow: 'Tarif',
    title: 'Un prix fixe, connu dès le départ',
    from: 'à partir de 590 €',
    sub: 'Prix fixe pour votre site complet',
    points: [
      'Prix fixe, annoncé avant de commencer',
      'Aucun abonnement obligatoire',
      'Maquette gratuite et sans engagement',
      'Maintenance mensuelle en option, si vous voulez qu’on s’occupe de tout',
    ],
    cta: 'Demander mon audit gratuit',
  },

  why: {
    id: 'pourquoi',
    eyebrow: 'Pourquoi Storeware',
    title: 'Un interlocuteur qui vous répond, pas une plateforme',
    items: [
      {
        icon: 'schedule',
        title: 'Le même fuseau horaire',
        body: 'Nous sommes à l’heure UTC+1, comme la France en hiver. En été, il n’y a qu’une heure de décalage.',
      },
      {
        icon: 'person',
        title: 'Vous parlez directement au développeur',
        body: 'Ni commercial ni centre d’appels : vous échangez avec Wissem, celui qui construit votre site, par WhatsApp, e-mail ou téléphone.',
      },
      {
        icon: 'key',
        title: 'Le site et le domaine sont à vous',
        body: 'Le code du site et votre nom de domaine vous appartiennent. Vous restez libre, même si vous changez de prestataire plus tard.',
      },
      {
        icon: 'location_on',
        title: 'Basés à Monastir, en Tunisie',
        body: 'Nous le disons clairement : Storeware est basé à Monastir, en Tunisie. Nous travaillons à distance pour des commerces en Tunisie et en Allemagne.',
      },
    ],
  },

  faq: {
    id: 'faq',
    eyebrow: 'Questions fréquentes',
    title: 'Vos questions, nos réponses',
    items: [
      {
        q: 'Combien coûte un site ?',
        a: 'À partir de 590 €, à prix fixe. Vous connaissez le montant exact avant de commencer, après avoir vu la maquette gratuite. Il n’y a pas d’abonnement obligatoire : la maintenance mensuelle est en option.',
      },
      {
        q: 'Combien de temps faut-il ?',
        a: 'Environ 2 semaines entre votre accord sur la maquette et la mise en ligne. Le délai dépend aussi de la rapidité avec laquelle vous nous envoyez vos photos et informations.',
      },
      {
        q: 'J’ai déjà une page Facebook. Pourquoi un site ?',
        a: 'Gardez-la ! Mais beaucoup de clients cherchent sur Google, pas sur Facebook, et tout le monde n’a pas de compte. Votre site vous appartient, apparaît sur Google avec vos horaires et votre numéro, et peut renvoyer vers votre page Facebook.',
      },
      {
        q: 'Qui met à jour le site ?',
        a: 'Avec la maintenance mensuelle (en option), c’est nous : envoyez simplement le changement par WhatsApp ou e-mail. Sans maintenance, vous pouvez nous demander des modifications ponctuelles. Et comme le site vous appartient, un autre prestataire peut aussi s’en occuper.',
      },
      {
        q: 'Comment se passe le paiement ?',
        a: 'La maquette est gratuite. Une fois que vous l’avez validée, vous réglez 50 % pour démarrer, puis les 50 % restants à la mise en ligne. Paiement par virement bancaire ou PayPal, avec une facture à chaque étape.',
      },
    ],
  },

  final: {
    id: 'contact',
    title: 'Prêt à être trouvé sur Google ?',
    body: 'Envoyez-nous un message. Nous regardons gratuitement votre présence en ligne (site, fiche Google) et vous disons ce qui peut être amélioré, sans engagement.',
    whatsapp: 'Audit gratuit sur WhatsApp',
    email: 'Écrire un e-mail',
    emailSubject: 'Audit gratuit - site web pour mon entreprise',
  },

  footer: {
    tagline: 'Création de sites web pour garages, restaurants et commerces.',
    location: 'Monastir, Tunisie · UTC+1',
    contactTitle: 'Contact',
    languagesTitle: 'Langues',
  },
}

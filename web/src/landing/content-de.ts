import { example, type LandingContent } from './types'

export const de: LandingContent = {
  lang: 'de',
  skip: 'Zum Inhalt springen',
  nav: [
    { label: 'Referenzen', href: '#referenzen' },
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Ablauf', href: '#ablauf' },
    { label: 'Preis', href: '#preis' },
    { label: 'FAQ', href: '#faq' },
  ],
  menu: { open: 'Menü öffnen', close: 'Menü schließen', languages: 'Sprache' },
  headerCta: 'Kostenloser Check',
  whatsappText: 'Hallo Storeware, ich interessiere mich für den kostenlosen Website-Check für meinen Betrieb. Branche: ',

  hero: {
    badge: 'Werkstätten · Reifen · Karosserie · Restaurants · Cafés · Friseure',
    title: 'Websites für Werkstätten, Gastronomie und lokale Betriebe',
    highlight: 'Werkstätten, Gastronomie und lokale Betriebe',
    lead: 'Ihre Kunden finden Sie bei Google, sehen Ihre Leistungen und Öffnungszeiten und rufen direkt vom Handy an oder buchen einen Termin.',
    primary: 'Kostenloser Website-Check',
    secondary: 'Referenzen ansehen',
    trust: ['Kostenloser Entwurf', 'Festpreis', 'In etwa 2 Wochen online'],
    phoneChips: [
      { icon: 'call', label: 'Anrufen' },
      { icon: 'schedule', label: 'Öffnungszeiten' },
      { icon: 'directions', label: 'Route' },
    ],
    phoneAlt: 'Die Website von Chaari Auto auf einem Smartphone',
  },

  examples: {
    id: 'referenzen',
    eyebrow: 'Referenzen',
    title: 'Websites, die bereits online sind – für echte Betriebe',
    body: 'Jede Vorschau scrollt durch die echte Seite. Öffnen Sie sie, um die Website so zu sehen, wie Ihre Kunden sie sehen würden.',
    visit: 'Website ansehen',
    newTab: 'öffnet in neuem Tab',
    frameLabels: { hover: 'Zum Scrollen darüberfahren', touch: 'Live-Vorschau', live: 'ONLINE' },
    items: [
      example('chaari-auto', {
        chip: 'Autoexport',
        location: 'Stuttgart, Deutschland',
        body: 'Zweisprachige Website für einen Autoexporteur, der Fahrzeuge aus Europa nach Tunesien und weltweit verschickt – ausgelegt auf WhatsApp-Anfragen und Google-Bewertungen.',
      }),
      example('techno-pneu', {
        chip: 'Reifen & Service',
        location: 'Teboulba, Tunesien',
        body: 'Dreisprachige Website für einen Reifenservice mit Reparatur und Achsvermessung, mit WhatsApp-Kontakt per Fingertipp.',
      }),
      example('di-piu', {
        chip: 'Italienisches Restaurant',
        location: 'Monastir, Tunesien',
        body: 'Restaurant-Website mit Spezialitäten, kompletter Speisekarte, Fotogalerie, Bewertungen und Anfahrt.',
      }),
    ],
  },

  included: {
    id: 'leistungen',
    eyebrow: 'Das ist enthalten',
    title: 'Alles, damit Kunden Sie finden und erreichen',
    body: 'Eine komplette Website, bereit für Ihre Kunden. Um die Technik müssen Sie sich nicht kümmern.',
    items: [
      { icon: 'smartphone', title: 'Für das Handy optimiert', body: 'Schnell und gut lesbar auf dem Smartphone, wo Ihre Kunden Sie suchen.' },
      { icon: 'home_repair_service', title: 'Ihre Leistungen', body: 'Ihr Angebot übersichtlich dargestellt, auf Wunsch mit Preisen.' },
      { icon: 'photo_library', title: 'Fotos', body: 'Werkstatt, Gastraum oder Ihre Arbeit: Kunden sehen sofort, mit wem sie es zu tun haben.' },
      { icon: 'schedule', title: 'Öffnungszeiten', body: 'Gut sichtbar, zusammen mit Adresse und Anfahrtskarte.' },
      { icon: 'call', title: 'Anruf- und WhatsApp-Button', body: 'Ein Fingertipp genügt, um Sie vom Handy aus anzurufen oder Ihnen zu schreiben.' },
      { icon: 'request_quote', title: 'Kontakt- oder Angebotsformular', body: 'Kunden schicken Ihnen rund um die Uhr eine Anfrage, auch wenn Sie geschlossen haben.' },
      { icon: 'storefront', title: 'Google-Unternehmensprofil', body: 'Ihr Eintrag bei Google eingerichtet oder vervollständigt: Öffnungszeiten, Fotos, Link zur Website.' },
      { icon: 'gavel', title: 'Impressum & Datenschutz', body: 'Seiten für Impressum und Datenschutzerklärung sind dabei.' },
      { icon: 'translate', title: 'Deutsch, Französisch, Englisch', body: 'Ihre Website in der Sprache Ihrer Kunden, auf Wunsch mehrsprachig.' },
    ],
  },

  steps: {
    id: 'ablauf',
    eyebrow: 'So funktioniert’s',
    title: 'In 3 Schritten online',
    items: [
      {
        when: 'Kostenlos',
        title: 'Kostenloser Entwurf',
        body: 'Sie erzählen uns von Ihrem Betrieb, eine WhatsApp-Nachricht reicht. Wir erstellen einen Entwurf Ihrer neuen Website, kostenlos und unverbindlich.',
      },
      {
        when: 'Unverbindlich',
        title: 'Sie entscheiden',
        body: 'Sie sehen sich den Entwurf an, wünschen Änderungen und entscheiden dann. Gefällt er Ihnen nicht, zahlen Sie nichts.',
      },
      {
        when: '≈ 2 Wochen',
        title: 'In etwa 2 Wochen online',
        body: 'Wir stellen Texte und Fotos fertig, schalten die Website live und richten Ihr Google-Profil ein.',
      },
    ],
  },

  price: {
    id: 'preis',
    eyebrow: 'Preis',
    title: 'Festpreis – von Anfang an klar',
    from: 'ab 590 €',
    sub: 'Festpreis für Ihre komplette Website',
    points: [
      'Festpreis, vor Projektbeginn vereinbart',
      'Kein Pflicht-Abo',
      'Kostenloser, unverbindlicher Entwurf',
      'Optionale monatliche Betreuung, wenn wir uns um alles kümmern sollen',
    ],
    cta: 'Kostenlosen Check anfragen',
  },

  why: {
    id: 'warum',
    eyebrow: 'Warum Storeware',
    title: 'Ein Ansprechpartner, der antwortet – keine Plattform',
    items: [
      {
        icon: 'schedule',
        title: 'Gleiche Zeitzone',
        body: 'Wir arbeiten in UTC+1, wie Deutschland im Winter. Im Sommer beträgt der Unterschied nur eine Stunde.',
      },
      {
        icon: 'person',
        title: 'Direkter Draht zum Entwickler',
        body: 'Kein Callcenter, kein Vertrieb: Sie sprechen mit Wissem, der Ihre Website baut – per WhatsApp, E-Mail oder Telefon.',
      },
      {
        icon: 'key',
        title: 'Website und Domain gehören Ihnen',
        body: 'Der Code Ihrer Website und Ihr Domainname gehören Ihnen. Sie bleiben unabhängig, auch wenn Sie später den Anbieter wechseln.',
      },
      {
        icon: 'location_on',
        title: 'Sitz in Monastir, Tunesien',
        body: 'Ganz offen: Storeware sitzt in Monastir, Tunesien. Wir arbeiten aus der Ferne für Betriebe in Tunesien und Deutschland.',
      },
    ],
  },

  faq: {
    id: 'faq',
    eyebrow: 'Häufige Fragen',
    title: 'Ihre Fragen, unsere Antworten',
    items: [
      {
        q: 'Was kostet eine Website?',
        a: 'Ab 590 €, zum Festpreis. Den genauen Betrag kennen Sie, bevor es losgeht, nachdem Sie den kostenlosen Entwurf gesehen haben. Es gibt kein Pflicht-Abo: Die monatliche Betreuung ist optional.',
      },
      {
        q: 'Wie lange dauert es?',
        a: 'Etwa 2 Wochen von Ihrer Zusage zum Entwurf bis zum Livegang. Es hängt auch davon ab, wie schnell Sie uns Fotos und Informationen schicken.',
      },
      {
        q: 'Ich habe schon eine Facebook-Seite. Brauche ich trotzdem eine Website?',
        a: 'Behalten Sie sie! Aber viele Kunden suchen bei Google, nicht bei Facebook, und nicht jeder hat ein Konto. Ihre Website gehört Ihnen, erscheint bei Google mit Öffnungszeiten und Telefonnummer und kann auf Ihre Facebook-Seite verlinken.',
      },
      {
        q: 'Wer pflegt die Website?',
        a: 'Mit der optionalen monatlichen Betreuung übernehmen wir das: Schicken Sie uns die Änderung einfach per WhatsApp oder E-Mail. Ohne Betreuung können Sie einzelne Änderungen bei uns anfragen. Und weil die Website Ihnen gehört, kann sie auch ein anderer Anbieter übernehmen.',
      },
      {
        q: 'Wie läuft die Bezahlung?',
        a: 'Der Entwurf ist kostenlos. Nach Ihrer Zusage zahlen Sie 50 % zum Start und die restlichen 50 % beim Livegang. Bezahlung per Banküberweisung oder PayPal, mit Rechnung zu jedem Schritt.',
      },
    ],
  },

  final: {
    id: 'kontakt',
    title: 'Bereit, bei Google gefunden zu werden?',
    body: 'Schreiben Sie uns. Wir sehen uns Ihren aktuellen Auftritt im Netz (Website, Google-Profil) kostenlos an und sagen Ihnen, was sich verbessern lässt – unverbindlich.',
    whatsapp: 'Kostenloser Check per WhatsApp',
    email: 'E-Mail schreiben',
    emailSubject: 'Kostenloser Website-Check für meinen Betrieb',
  },

  footer: {
    tagline: 'Websites für Werkstätten, Gastronomie und lokale Betriebe.',
    location: 'Monastir, Tunesien · UTC+1',
    contactTitle: 'Kontakt',
    languagesTitle: 'Sprachen',
    legal: [{ label: 'Impressum', href: '/de/impressum' }],
  },
}

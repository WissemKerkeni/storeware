import type { ReactNode } from 'react'
import { contact } from '../content'
import { de } from './content-de'
import { LandingFooter, LandingHeader } from './Layout'

// No legal form, register entry or tax ID yet, so the provider is the founder as a natural person.
// Once Storeware is registered, add the legal form plus "Registereintrag" and "Steuernummer" blocks.
const company = {
  owner: 'Wissem Kerkeni',
  name: 'Storeware',
  street: 'Rue Abd Kader Nabli',
  city: '5080 Teboulba',
  country: 'Tunesien',
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-2 border-t border-surface-high/50 pt-6">
      <h2 className="font-display text-lg font-bold text-ink">{title}</h2>
      <div className="leading-relaxed text-muted">{children}</div>
    </section>
  )
}

export function Impressum() {
  return (
    <>
      <LandingHeader c={de} base="/de" />
      <main id="main" className="px-4 pt-28 pb-20 sm:px-6 sm:pt-36 lg:px-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold text-ink sm:text-5xl">Impressum</h1>
            <p className="text-muted">Angaben gemäß § 5 DDG</p>
          </div>

          <Block title="Anbieter">
            <p>
              {company.owner}
              <br />
              {company.name}
            </p>
          </Block>

          <Block title="Anschrift">
            <p>
              {company.street}
              <br />
              {company.city}
              <br />
              {company.country}
            </p>
          </Block>

          <Block title="Kontakt">
            <p>
              E-Mail:{' '}
              <a href={`mailto:${contact.email}`} className="text-cyan hover:text-cyan-soft">
                {contact.email}
              </a>
              <br />
              Telefon / WhatsApp:{' '}
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-cyan-soft">
                {contact.whatsappDisplay}
              </a>
            </p>
          </Block>

          <Block title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
            <p>{company.owner}, Anschrift wie oben</p>
          </Block>
        </div>
      </main>
      <LandingFooter c={de} base="/de" />
    </>
  )
}

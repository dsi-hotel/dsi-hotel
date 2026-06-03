import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — DSI Hotel',
  description: 'Politique de confidentialité et de protection des données personnelles de DSI Hotel.',
  robots: { index: false, follow: false },
}

const sections = [
  {
    title: '1. Identité du responsable de traitement',
    content: `DSI Hotel, société par actions simplifiée, dont le siège social est situé au 60 Rue François 1er, 75008 Paris, est responsable du traitement des données personnelles collectées via le site dsihotel.fr.

Contact : contact@dsihotel.fr — +33 1 84 18 02 23`,
  },
  {
    title: '2. Données collectées',
    content: `Nous collectons les données suivantes via le formulaire de contact :
— Nom et prénom
— Nom de l'établissement
— Adresse e-mail professionnelle
— Numéro de téléphone (optionnel)
— Nature de votre besoin et message libre

Aucune donnée sensible (santé, opinions politiques, etc.) n'est collectée.`,
  },
  {
    title: '3. Finalités et bases légales',
    content: `Vos données sont traitées pour les finalités suivantes :
— Traitement de votre demande de contact ou d'audit (base légale : intérêt légitime)
— Envoi de notre documentation technique sur demande (base légale : consentement)
— Amélioration de nos services (base légale : intérêt légitime)

Nous ne réalisons aucune prospection commerciale sans votre consentement préalable.`,
  },
  {
    title: '4. Durée de conservation',
    content: `Vos données sont conservées pendant une durée de 3 ans à compter du dernier contact, conformément aux recommandations de la CNIL. Passé ce délai, elles sont supprimées ou anonymisées.`,
  },
  {
    title: '5. Destinataires des données',
    content: `Vos données sont destinées exclusivement aux équipes de DSI Hotel. Elles ne sont ni vendues, ni louées, ni cédées à des tiers.

Nous faisons appel à des sous-traitants techniques (hébergement, envoi d'e-mails) qui traitent vos données uniquement sur nos instructions et dans le cadre d'un accord de confidentialité. Ces prestataires sont établis dans l'Union européenne ou soumis à des garanties appropriées (clauses contractuelles types de la Commission européenne).`,
  },
  {
    title: '6. Transferts hors UE',
    content: `Nous veillons à ce que vos données restent dans l'Union européenne. En cas de transfert exceptionnel vers un pays tiers, nous nous assurons qu'il bénéficie d'un niveau de protection adéquat reconnu par la Commission européenne.`,
  },
  {
    title: '7. Sécurité',
    content: `DSI Hotel met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation — chiffrement TLS, accès restreints, journalisation des accès.`,
  },
  {
    title: '8. Vos droits',
    content: `Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :
— Droit d'accès à vos données
— Droit de rectification
— Droit à l'effacement (« droit à l'oubli »)
— Droit à la limitation du traitement
— Droit à la portabilité
— Droit d'opposition

Pour exercer ces droits, adressez votre demande par e-mail à contact@dsihotel.fr en joignant une copie de votre pièce d'identité. Nous répondons dans un délai maximum d'un mois.

Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr).`,
  },
  {
    title: '9. Cookies',
    content: `Le site dsihotel.fr utilise des cookies strictement nécessaires au bon fonctionnement du site. Aucun cookie de tracking publicitaire ou de profilage n'est déposé sans votre consentement.

Vous pouvez configurer votre navigateur pour refuser les cookies ; cela n'affectera pas votre navigation sur ce site.`,
  },
  {
    title: '10. Modifications',
    content: `DSI Hotel se réserve le droit de mettre à jour cette politique à tout moment. La date de dernière mise à jour est indiquée en bas de page. En cas de modification substantielle, nous vous en informerons par e-mail si vous êtes en relation avec nous.`,
  },
]

export default function PolitiqueConfidentialite() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero */}
      <div className="bg-navy" style={{ paddingTop: 120, paddingBottom: 72 }}>
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-gold/50" />
            <span className="font-dm text-[11px] uppercase tracking-[0.2em] text-gold/70">
              Données personnelles
            </span>
          </div>
          <h1
            className="font-cormorant font-normal text-cream leading-[1.05]"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            Politique de{' '}
            <em className="text-gold not-italic">confidentialité</em>
          </h1>
          <p className="font-dm text-[14px] text-cream/50 mt-4">
            Dernière mise à jour : mai 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 md:px-12 py-20">
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2
                className="font-cormorant font-normal text-navy mb-4"
                style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}
              >
                {section.title}
              </h2>
              <div className="h-px bg-gold/20 mb-5" />
              <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85] whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-gold/20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-dm text-[13px] text-navy/60 hover:text-navy transition-colors duration-200"
          >
            <span aria-hidden="true">←</span>
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  )
}

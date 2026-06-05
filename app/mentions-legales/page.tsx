import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales — DSI Hotel',
  description: 'Mentions légales du site dsihotel.fr — DSI Hotel SAS.',
  robots: { index: false, follow: false },
}

export default function MentionsLegales() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero */}
      <div className="bg-navy" style={{ paddingTop: 120, paddingBottom: 72 }}>
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-gold/50" />
            <span className="font-dm text-[11px] uppercase tracking-[0.2em] text-gold/70">
              Informations légales
            </span>
          </div>
          <h1
            className="font-cormorant font-normal text-cream leading-[1.05]"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            Mentions <em className="text-gold not-italic">légales</em>
          </h1>
          <p className="font-dm text-[14px] text-cream/50 mt-4">
            Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique (LCEN)
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 md:px-12 py-20">
        <div className="space-y-12">

          {/* Éditeur */}
          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              1. Éditeur du site
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <table className="w-full font-dm text-[14px] text-charcoal/70 leading-[2]">
              <tbody>
                <tr><td className="pr-8 text-charcoal/40 whitespace-nowrap">Raison sociale</td><td>DSI Hotel</td></tr>
                <tr><td className="pr-8 text-charcoal/40 whitespace-nowrap">Forme juridique</td><td>SAS — Société par actions simplifiée</td></tr>
                <tr><td className="pr-8 text-charcoal/40 whitespace-nowrap">Capital social</td><td>4 000,00 €</td></tr>
                <tr><td className="pr-8 text-charcoal/40 whitespace-nowrap">Siège social</td><td>60 Rue François 1er, 75008 Paris</td></tr>
                <tr><td className="pr-8 text-charcoal/40 whitespace-nowrap">SIREN</td><td>519 557 854</td></tr>
                <tr><td className="pr-8 text-charcoal/40 whitespace-nowrap">SIRET (siège)</td><td>519 557 854 00030</td></tr>
                <tr><td className="pr-8 text-charcoal/40 whitespace-nowrap">RCS</td><td>519 557 854 R.C.S. Paris</td></tr>
                <tr><td className="pr-8 text-charcoal/40 whitespace-nowrap">N° TVA</td><td>FR71519557854</td></tr>
                <tr><td className="pr-8 text-charcoal/40 whitespace-nowrap">Code NAF</td><td>62.02B — Tierce maintenance de systèmes et d&apos;applications informatiques</td></tr>
              </tbody>
            </table>
          </div>

          {/* Directeur de publication */}
          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              2. Directeur de la publication
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              M. Marc Pratlong, en qualité de dirigeant de DSI Hotel SAS.<br />
              Contact : <a href="mailto:contact@dsihotel.fr" className="text-navy hover:text-gold transition-colors duration-200">contact@dsihotel.fr</a> — +33 1 84 18 02 23
            </p>
          </div>

          {/* Hébergement */}
          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              3. Hébergement
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              Le site dsihotel.fr est hébergé par :<br /><br />
              <strong className="text-charcoal/90">Vercel Inc.</strong><br />
              340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors duration-200">vercel.com</a>
            </p>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              4. Propriété intellectuelle
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              L&apos;ensemble du contenu de ce site (textes, graphismes, logotypes, images, sons, vidéos) est la propriété exclusive de DSI Hotel SAS ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.

              Toute reproduction, représentation, modification, publication ou transmission totale ou partielle du contenu de ce site, par quelque procédé que ce soit, sans autorisation préalable et écrite de DSI Hotel, est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </div>

          {/* Responsabilité */}
          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              5. Limitation de responsabilité
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              DSI Hotel s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, DSI Hotel ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition et décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.

              DSI Hotel ne saurait être tenu responsable des dommages directs ou indirects résultant de l&apos;accès à ce site ou de l&apos;utilisation des informations qui y sont publiées.
            </p>
          </div>

          {/* Liens hypertextes */}
          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              6. Liens hypertextes
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              Ce site peut contenir des liens vers d&apos;autres sites internet. DSI Hotel n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques en matière de données personnelles.

              Tout lien hypertexte pointant vers le site dsihotel.fr doit faire l&apos;objet d&apos;une autorisation préalable et écrite de DSI Hotel.
            </p>
          </div>

          {/* Données personnelles */}
          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              7. Données personnelles
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              Le traitement des données personnelles collectées sur ce site est régi par notre{' '}
              <Link href="/politique-de-confidentialite" className="text-navy hover:text-gold transition-colors duration-200 underline underline-offset-2">
                Politique de confidentialité
              </Link>
              , conforme au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </div>

          {/* Droit applicable */}
          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              8. Droit applicable et juridiction compétente
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux du ressort de Paris sont seuls compétents.
            </p>
          </div>

        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-gold/20 flex items-center gap-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-dm text-[13px] text-navy/60 hover:text-navy transition-colors duration-200"
          >
            <span aria-hidden="true">←</span>
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/politique-de-confidentialite"
            className="inline-flex items-center gap-2 font-dm text-[13px] text-navy/60 hover:text-navy transition-colors duration-200"
          >
            Politique de confidentialité
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  )
}

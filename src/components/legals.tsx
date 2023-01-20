import { LEGALS_PROPS } from '../lib/constants'

const LegalsModal = () => (
  <>
    <section>
      <p>Mentions Légales</p>
      <p>En vigueur au {new Date().toLocaleDateString('fr')}</p>
      <p>
        Conformément aux dispositions des Articles 6-III et 19 de la Loi
        n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique,
        dite L.C.E.N., il est porté à la connaissance des utilisateurs et
        visiteurs, ci-après l'<b>"Utilisateur"</b>, du site{' '}
        {LEGALS_PROPS.siteUrl} , ci-après le <b>"Site"</b>, les présentes
        mentions légales.
      </p>
      <p>
        La navigation sur le Site par l'Utilisateur implique acceptation
        intégrale et sans réserve des présentes mentions légales.
      </p>
      <p>
        Ces dernières sont accessibles sur le Site à la rubrique « Mentions
        légales ».
      </p>
      <p>Article 1 - l'Editeur</p>
      <p>
        L'édition et la direction de la publication du Site est assurée par{' '}
        {LEGALS_PROPS.editorName}, dont l'adresse e-mail est{' '}
        {LEGALS_PROPS.editorMail}.
      </p>
      <p>
        ci-après l'<b>"Editeur"</b>.
      </p>
      <p>Article 2 - l'Hebergeur</p>
      <p>
        L'hébergeur du Site est la société {LEGALS_PROPS.publisherName}, dont le
        siège social est situé au "{LEGALS_PROPS.publisherAddress}", et dont
        l'adresse mail est {LEGALS_PROPS.publisherMail}
      </p>
      <p>Article 3 - Accès au site</p>
      <p>
        Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force
        majeure, interruption programmée ou non et pouvant découlant d'une
        nécessité de maintenance.
      </p>
      <p>
        En cas de modification, interruption ou suspension du Site, l'Editeur ne
        saurait être tenu responsable.
      </p>
      <p>Article 4 - Collecte des données</p>
      <p>
        Le site est exempté de déclaration à la Commission Nationale
        Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune
        donnée concernant les utilisateurs.
      </p>
      <p>
        Toute utilisation, reproduction, diffusion, commercialisation,
        modification de toute ou partie du Site, sans autorisation de l'Editeur
        est prohibée et pourra entraînée des actions et poursuites judiciaires
        telles que notamment prévues par le Code de la propriété intellectuelle
        et le Code civil.
      </p>
    </section>
  </>
)

export default LegalsModal

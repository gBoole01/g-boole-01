import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import { LEGALS_PROPS, SITENAME } from '../lib/constants';

const Legals: NextPage = () => (
    <Layout>
      <Head>
        <title>Mentions Légales | {SITENAME}</title>
      </Head>

      <section className="text-gray-1 text-sm flex flex-col gap-2 mt-6 py-2 relative after:absolute after:z-[-1] after:content[''] after:bg-blue-2/20 after:rounded-r-lg after:right-0 after:left-[-2.25rem] after:top-0 after:bottom-[80%]">
        <h1 className="text-2xl text-blue-1 font-bold uppercase">Mentions Légales</h1>
        <p className="text-sm text-gray-3 italic uppercase">En vigueur au { new Date().toLocaleDateString('fr') }</p>
        <p>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l'<b>"Utilisateur"</b>, du site {LEGALS_PROPS.siteUrl} , ci-après le <b>"Site"</b>, les présentes mentions légales.</p>
        <p>La navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.</p>
        <p>Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».</p>
        <h2 className="text-lg text-blue-2 font-bold italic uppercase">Article 1 - l'Editeur</h2>
        <p>L’édition et la direction de la publication du Site est assurée par { LEGALS_PROPS.editorName }, dont l'adresse e-mail est { LEGALS_PROPS.editorMail }.</p>
        <p>ci-après l'<b>"Editeur"</b>.</p>
        <h2 className="text-lg text-blue-2 font-bold italic uppercase">Article 2 - l'Hebergeur</h2>
        <p>L'hébergeur du Site est la société { LEGALS_PROPS.publisherName }, dont le siège social est situé au "{ LEGALS_PROPS.publisherAddress}", et dont l'adresse mail est {LEGALS_PROPS.publisherMail}</p>
        <h2 className="text-lg text-blue-2 font-bold italic uppercase">Article 3 - Accès au site</h2>
        <p>Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.</p>
        <p>En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.</p>
        <h2 className="text-lg text-blue-2 font-bold italic uppercase">Article 4 - Collecte des données</h2>
        <p>Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les utilisateurs.</p>
        <p>Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.</p>
      </section>
    </Layout>
  )

export default Legals

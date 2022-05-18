import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/layout';

const About: NextPage = () => (
    <Layout>
      <h1>A propos</h1>
      <p>Je suis un développeur Full Stack avec une expérience dans l'industrie de la création de sites Web et d'applications Web. Je suis spécialisé en JavaScript et j'ai une expérience professionnelle avec PHP et Angular. J'ai également travaillé avec Next, React et Symfony.</p>
      <p>J'écris des articles sur plein de sujets différents, leur point commun ? L'interêt que je leur porte !</p>
      <p>Vous pouvez consulter mon CV en cliquant sur&nbsp;
        <Link href="/resume">
          <a>ce lien</a>
        </Link>
      </p>
      <p>Ou vous pouvez également me contacter en cliquant sur &nbsp;
        <Link href="/contact">
          <a>ce lien</a>
        </Link> 
      </p>
    </Layout>
  )

export default About

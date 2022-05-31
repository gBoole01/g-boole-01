import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

const About: NextPage = () => (
    <Layout>
      <Head>
        <title>A Propos | gBoole01</title>
      </Head>

      <h1>Qui suis-je ?</h1>
      <p>Mon nom gBoole01 s'inspire de George Boole, un logicien, mathématicien et philosophe britannique. Il est le créateur de la logique moderne, fondée en 1854 sur une structure algébrique et sémantique, prénommé algèbre de Boole. Il s'agit d'un algèbre binaire n'acceptant que 2 valeurs numériques : 0 et 1, l'informatique et la téléphonie se développeront ensuite sur ce concept.</p>
      <p>Sinon, je suis un développeur Full Stack avec une expérience dans l'industrie de la création de sites Web et d'applications Web. Je suis spécialisé en JavaScript et j'ai une expérience professionnelle avec PHP et Angular. J'ai également travaillé avec Next, React et Symfony.</p>
      <p>Vous pouvez en apprendre plus à ce sujet en cliquant sur le bouton ci-dessous.</p>
      <button>
        <Link href="/resume">
          <a>C.V.</a>
        </Link>
      </button>
    </Layout>
  )

export default About

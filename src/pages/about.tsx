import type { NextPage } from 'next';
import Button from '../components/button';
import Layout from '../components/layout';
import Meta from '../components/meta';

const About: NextPage = () => (
    <Layout>
      <Meta
        title="À Propos"
        description="À Propos de gBoole01"
      />

      <section className="flex flex-col mt-6 py-2 relative after:absolute after:z-[-1] after:content[''] after:bg-blue-2/20 after:rounded-r-lg after:right-0 after:left-[-2.25rem] after:top-0 after:bottom-[60%]">
        <h1 className="text-2xl text-blue-1 font-bold uppercase">Qui suis-je ?</h1>
        <p className="ml-3 mt-3">Mon nom, <b>"gBoole01"</b>, s'inspire de <a className="text-blue-1 underline" href="https://fr.wikipedia.org/wiki/George_Boole" target="_blank">George Boole</a>, un logicien, mathématicien et philosophe britannique.</p> 
        <p className="ml-3"> Il est le créateur de la logique moderne, fondée en 1854 sur une structure algébrique et sémantique, prénommé algèbre de Boole. Il s'agit d'un algèbre binaire n'acceptant que 2 valeurs numériques : 0 et 1, l'informatique et la téléphonie se développeront ensuite sur ce concept.</p>
        <p className="mt-3 ml-3">Sinon, je suis un développeur Full Stack avec une expérience dans l'industrie de la création de sites Web et d'applications Web. Je suis spécialisé en JavaScript et j'ai une expérience professionnelle avec PHP et Angular. J'ai également travaillé avec Next, React et Symfony.</p>
        <p className="ml-3">Vous pouvez en apprendre plus à ce sujet en cliquant sur le bouton ci-dessous.</p>
        <div className="self-end mb-2">
        <Button
            href="/resume"
            label="C.V."
          />
        </div>
      </section>
    </Layout>
  )

export default About

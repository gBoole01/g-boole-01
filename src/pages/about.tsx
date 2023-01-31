import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import SeoHelper from '../components/seo-helper'

const About: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <SeoHelper title="À Propos" description="À Propos de gBoole01" />

      <section>
        <h1>Qui suis-je ?</h1>
        <p>
          Mon nom, <b>"gBoole01"</b>, s'inspire de
          <a href="https://fr.wikipedia.org/wiki/George_Boole" target="_blank">
            George Boole
          </a>
          , un logicien, mathématicien et philosophe britannique.
        </p>
        <p>
          Il est le créateur de la logique moderne, fondée en 1854 sur une
          structure algébrique et sémantique, prénommé algèbre de Boole. Il
          s'agit d'un algèbre binaire n'acceptant que 2 valeurs numériques : 0
          et 1, l'informatique et la téléphonie se développeront ensuite sur ce
          concept.
        </p>
        <p>
          Sinon, je suis un développeur Full Stack avec une expérience dans
          l'industrie de la création de sites Web et d'applications Web. Je suis
          spécialisé en JavaScript et j'ai une expérience professionnelle avec
          PHP et Angular. J'ai également travaillé avec Next, React et Symfony.
        </p>
        <p>
          Vous pouvez en apprendre plus à ce sujet en cliquant sur le bouton
          ci-dessous.
        </p>
        <Button onPress={() => router.push('/resume')}>C.V.</Button>
      </section>
    </>
  )
}

export default About

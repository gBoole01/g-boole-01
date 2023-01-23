import { Button, Link as NextUiLink } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import SeoHelper from '../components/seo-helper'
import opquastLogo from '../../public/images/opquast-expert-badge.png'

const ResumeIntro = () => (
  <section>
    <h1>Curriculum Vitae</h1>
    <p>
      Pour des raisons de confidentialités, les noms des personnes, écoles, et
      entreprises ne sont pas communiqués.
    </p>
    <p>
      Si vous souhaitez en apprendre plus sur moi, n'hésitez pas à me contacter
      !
    </p>
    <div>
      <Button href="/contact">Contact</Button>
    </div>
  </section>
)

const ResumeSkills = () => (
  <section>
    <h2>Compétences</h2>
    <h3>Front-End</h3>
    <ul>
      <li>HTML 5 / CSS 3</li>
      <li>Bootstrap</li>
      <li>Tailwind</li>
      <li>JavaScript/TypeScript</li>
      <li>Angular</li>
      <li>React</li>
    </ul>
    <h3>Back-End</h3>
    <ul>
      <li>Node.js</li>
      <li>PHP</li>
      <li>Python/Django</li>
      <li>Base de Données MySQL et MongoDB</li>
      <li>Système de Cache Mémoire</li>
      <li>Websocket</li>
    </ul>
    <h3>CMS</h3>
    <ul>
      <li>WordPress</li>
      <li>PrestaShop</li>
    </ul>
    <h3>Outils de Développement</h3>
    <ul>
      <li>Linux</li>
      <li>Version Control</li>
      <li>Docker</li>
      <li>CI/CD</li>
      <li>Testing</li>
      <li>Package manager</li>
      <li>Design patterns</li>
    </ul>
  </section>
)

const ResumeExperiences = () => (
  <section>
    <h2>Expériences</h2>
    <h3>
      <span>2021-2022: </span>
      Full Stack Developer
    </h3>
    <p>Agence Web</p>
    <ul>
      <li>
        Maintenance de sites WordPress et PrestaShop des clients de l'Agence
      </li>
      <li>
        Développement d'un module PrestaShop dédié de vente de vins en primeur
      </li>
      <li>
        Mise à niveau et refonte visuelle d'un site PrestaShop (1.7) et de ses
        modules dédiés (parrainage, présentation de domaines viticoles, ventes
        privées, etc..)
      </li>
      <li>
        Maintenance et développement de nouvelles fonctionnalités d'une
        application de réservation de restaurant et de système CRM
      </li>
    </ul>
    <h3>
      <span>2020: </span>
      Full Stack Developer
    </h3>
    <p>Agence Web - Stage</p>
    <ul>
      <li>
        Développpement d'un module WordPress dédié de profils utilisateurs
      </li>
      <li>
        Développpement d'un module WordPress dédié d'adhésion à une association
      </li>
      <li>Intégration visuelle de contenus</li>
      <li>Développpement d'une application de suivi de compétition sportive</li>
    </ul>
    <h3>
      <span>2016-2018: </span>
      Manager
    </h3>
    <p>Etablissement de restauration rapide</p>
    <ul>
      <li>Former, motiver et superviser une équipe</li>
      <li>Assurer la qualité des produits et services</li>
      <li>Assurer l'ouverture et la fermeture de l'établissement</li>
    </ul>
  </section>
)

const ResumeDiplomas = () => (
  <section>
    <h2>Diplômes</h2>
    <h3>
      <span>2012: </span>
      Bac Technologique
    </h3>
    <p>Gestion spécialité "Marketing"</p>
    <h3>
      <span>2020: </span>
      Titre RNCP (BAC+2)
    </h3>
    <p>Développeur Web & Web Mobile</p>
    <h3>
      <span>2021: </span>
      Certification Qualité Web
    </h3>
    <div className="flex gap-2 items-center">
      <p>Opquast - Niveau Expert</p>
      <Image
        priority
        src={opquastLogo}
        height={76}
        width={100}
        alt="opquast expert badge"
      />
    </div>
  </section>
)

const ResumeInterests = () => (
  <section>
    <h2>Interêts</h2>
    <ul>
      <li>Open Source</li>
      <li>Web 3.0</li>
      <li>Langage Rust</li>
      <li>Next.js</li>
      <li>
        Pleins d'autres sujets que vous pourrez découvrir sur{' '}
        <Link href="/blog">
          <NextUiLink>mon blog</NextUiLink>
        </Link>
      </li>
    </ul>
  </section>
)

const ResumeOutro = () => (
  <section>
    <p>
      Si vous le souhaitez, vous pouvez téléchargez une copie de mon C.V. au
      format PDF
    </p>
    <div>
      <Button
        as="a"
        onPress={() => {
          window.open('Curriculum_Vitae_2022_gBoole01.pdf')
        }}
      >
        Télécharger
      </Button>
    </div>
  </section>
)

const Resume = () => (
  <>
    <SeoHelper title="Curriculum Vitae" description="Le CV de gBoole01" />

    <ResumeIntro />
    <ResumeSkills />
    <ResumeExperiences />
    <ResumeDiplomas />
    <ResumeInterests />
    <ResumeOutro />
  </>
)

export default Resume

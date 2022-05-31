import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/layout';

const Resume: NextPage = () => (
    <Layout>
      <h1>Curriculum Vitae</h1>
      <p>Pour des raisons de confidentialités, les noms des personnes, écoles, et entreprises ne sont pas communiqués.</p>
      <p>Si vous souhaitez en apprendre plus sur moi, n'hésitez pas à me contacter !</p>
      <button>
        <Link href="/contact">
          <a>Contact</a>
        </Link> 
      </button>
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
        <li>Système de Cache</li>
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
      <h2>Expériences</h2>
      <h3>2021 - 2022 : Full Stack Developer</h3>
      <p>Agence Web</p>
      <ul>
        <li>Maintenance de sites WordPress et PrestaShop des clients de l'Agence</li>
        <li>Développement d'un module PrestaShop dédié de vente de vinbs en primeur</li>
        <li>Mise à niveau et refonte visuelle d'un site PrestaShop (1.7) et de ses modules dédiés (parrainage, présentation de domaines viticoles, ventes privées, etc..)</li>
        <li>Maintenance et développement de nouvelles fonctionnalités d'une application de réservation de restaurant et de système CRM</li>
      </ul>
      <h3>2020 : Full Stack Developer</h3>
      <p>Agence Web - Stage</p>
      <ul>
        <li>Développpement d'un module WordPress dédié de profils utilisateurs</li>
        <li>Intégration visuelle de contenus</li>
        <li>Développpement d'une application de suivi de compétition sportive</li>
      </ul>
      <h3>2016-2018: Manager</h3>
      <p>Etablissement de restauration rapide</p>
      <ul>
        <li>Assurer l'ouverture et la fermeture de l'établissement</li>
        <li>Former, motiver et superviser une équipe</li>
        <li>Assurer la qualité des produits et services</li>
      </ul>
      <h2>Diplômes</h2>
      <h3>2012 : Bac Technologique</h3>
      <p>Gestion spécialité "Marketing"</p>
      <h3>2020 : Titre Professionnel (BAC+2)</h3>
      <p>Développeur Web & Web Mobile</p>
      <h3>2021 : Certification Qualité Web</h3>
      <p>Opquast - Niveau Expert</p>
      <p>OPQUAST BADGE GOES HERE !</p>
      <h2>Interêts</h2>
      <ul>
        <li>Open Source</li>
        <li>Web 3.0</li>
        <li>Langage Rust</li>
        <li>Next.js</li>
        <li>Pleins d'autres sujets que vous pourrez découvrir sur <Link href="/blog"><a>mon blog</a></Link></li>
      </ul>
      <p>Si Vous les souhaitez, vous pouvez téléchargez une copie de mon C.V. au format PDF</p>
      <button>Télécharger</button>
    </Layout>
  )

export default Resume

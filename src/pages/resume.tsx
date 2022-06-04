import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import { SITENAME } from '../lib/constants';
import Button from '../components/button';

const Resume: NextPage = () => (
    <Layout>
      <Head>
        <title>Curriculum Vitae | {SITENAME}</title>
      </Head>

      <section className="py-2 my-6 relative after:absolute after:z-[-1] after:content[''] after:bg-blue-2/20 after:rounded-r-lg after:right-0 after:left-[-2.25rem] after:top-0 after:bottom-0">
        <h1 className="text-2xl text-blue-1 font-bold uppercase">Curriculum Vitae</h1>
        <p className="text-gray-1 text-sm ml-3 mt-3">Pour des raisons de confidentialités, les noms des personnes, écoles, et entreprises ne sont pas communiqués.</p>
        <p className="text-gray-1 text-sm ml-3 mb-2">Si vous souhaitez en apprendre plus sur moi, n'hésitez pas à me contacter !</p>
        <div className="absolute right-3 bottom-[-0.75rem]">
          <Button href="/contact" label="Contact" />
        </div>
      </section>
      <section className="text-sm text-gray-1">
        <h2 className="text-lg text-blue-1 font-bold italic uppercase">Compétences</h2>
        <h3 className="text-lg text-blue-2 uppercase">Front-End</h3>
        <ul className="list-['-'] pl-1">
          <li>HTML 5 / CSS 3</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li>JavaScript/TypeScript</li>
          <li>Angular</li>
          <li>React</li>
        </ul>
        <h3 className="text-lg text-blue-2 uppercase">Back-End</h3>
        <ul>
          <li>Node.js</li>
          <li>PHP</li>
          <li>Python/Django</li>
          <li>Base de Données MySQL et MongoDB</li>
          <li>Système de Cache</li>
          <li>Websocket</li>
        </ul>
        <h3 className="text-lg text-blue-2 uppercase">CMS</h3>
        <ul>
          <li>WordPress</li>
          <li>PrestaShop</li>
        </ul>
        <h3 className="text-lg text-blue-2 uppercase">Outils de Développement</h3>
        <ul>
          <li>Linux</li>
          <li>Version Control</li>
          <li>Docker</li>
          <li>CI/CD</li>
          <li>Testing</li>
          <li>Package manager</li>
          <li>Design patterns</li>
        </ul>
        <h2 className="text-lg text-blue-1 font-bold italic uppercase">Expériences</h2>
        <h3 className="text-lg uppercase">2021 - 2022 : Full Stack Developer</h3>
        <p className="text-lg text-blue-2 italic">Agence Web</p>
        <ul>
          <li>Maintenance de sites WordPress et PrestaShop des clients de l'Agence</li>
          <li>Développement d'un module PrestaShop dédié de vente de vins en primeur</li>
          <li>Mise à niveau et refonte visuelle d'un site PrestaShop (1.7) et de ses modules dédiés (parrainage, présentation de domaines viticoles, ventes privées, etc..)</li>
          <li>Maintenance et développement de nouvelles fonctionnalités d'une application de réservation de restaurant et de système CRM</li>
        </ul>
        <h3 className="text-lg uppercase">2020 : Full Stack Developer</h3>
        <p className="text-lg text-blue-2 italic">Agence Web - Stage</p>
        <ul>
          <li>Développpement d'un module WordPress dédié de profils utilisateurs</li>
          <li>Développpement d'un module WordPress dédié d'adhésion à une association</li>
          <li>Intégration visuelle de contenus</li>
          <li>Développpement d'une application de suivi de compétition sportive</li>
        </ul>
        <h3 className="text-lg uppercase">2016-2018: Manager</h3>
        <p className="text-lg text-blue-2 italic">Etablissement de restauration rapide</p>
        <ul>
          <li>Assurer l'ouverture et la fermeture de l'établissement</li>
          <li>Former, motiver et superviser une équipe</li>
          <li>Assurer la qualité des produits et services</li>
        </ul>
        <h2 className="text-lg text-blue-1 font-bold italic uppercase">Diplômes</h2>
        <h3 className="text-lg uppercase">2012 : Bac Technologique</h3>
        <p className="text-lg text-blue-2 italic">Gestion spécialité "Marketing"</p>
        <h3 className="text-lg uppercase">2020 : Titre Professionnel (BAC+2)</h3>
        <p className="text-lg text-blue-2 italic">Développeur Web & Web Mobile</p>
        <h3 className="text-lg uppercase">2021 : Certification Qualité Web</h3>
        <p className="text-lg text-blue-2 italic">Opquast - Niveau Expert</p>
        <Image
          priority
          src="/images/opquast-expert-badge.png"
          height={38}
          width={50}
          alt="opquast expert badge"
        />
        <h2 className="text-lg text-blue-1 font-bold italic uppercase">Interêts</h2>
        <ul>
          <li>Open Source</li>
          <li>Web 3.0</li>
          <li>Langage Rust</li>
          <li>Next.js</li>
          <li>Pleins d'autres sujets que vous pourrez découvrir sur <Link href="/blog"><a className="text-blue-1 underline">mon blog</a></Link></li>
        </ul>
        <p>Si vous le souhaitez, vous pouvez téléchargez une copie de mon C.V. au format PDF</p>
        <Button href="/resume" label="Télécharger" />
      </section>
    </Layout>
  )

export default Resume

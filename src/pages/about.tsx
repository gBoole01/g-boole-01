import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/layout';

const About: NextPage = () => (
    <Layout>
      <h1>A propos</h1>
      <p>Vous pouvez consulter mon CV en cliquant sur&nbsp;
        <Link href="/resume">
          <a>ce lien</a>
        </Link>
      </p>
    </Layout>
  )

export default About

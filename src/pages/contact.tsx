import type { NextPage } from 'next';
import Head from 'next/head'; 
import Layout from '../components/layout';
import { SITENAME } from '../lib/constants';

const Contact: NextPage = () => (
    <Layout>
      <Head>
        <title>Contact | {SITENAME}</title>
      </Head>

      <h1 className="text-2xl text-blue-1 font-bold uppercase">Contact</h1>
    </Layout>
  )

export default Contact

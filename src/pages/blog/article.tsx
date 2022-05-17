import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../../components/layout';

const Article: NextPage = () => (
    <Layout>
        <h1>Article test</h1>
        <Link href="/blog">
            <a>Retour au blog</a>
        </Link>
    </Layout>
  )

export default Article

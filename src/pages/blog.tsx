import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/layout';

const Blog: NextPage = () => (
    <Layout>
      <h1>Blog test</h1>
      <Link href="/blog/article">
        <a>Article 1</a>
      </Link>
    </Layout>
  )

export default Blog

import Link from 'next/link';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/getPosts';
import PostType from '../types/Post'

type Props = {
  allPosts: PostType[];
}

export default function Blog({ allPosts }: Props) {
  return (
    <Layout>
      <h1>Articles les plus récents</h1>
      <ul>
        {allPosts.map(({ slug, date, title }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <a>{title}</a>
            </Link>
            &nbsp;-&nbsp;
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'content',
    'slug',
  ]);

  return {
    props: { allPosts }
  };
}
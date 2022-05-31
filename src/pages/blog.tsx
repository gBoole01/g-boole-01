import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/getPosts';
import PostType from '../types/Post'

type Props = {
  heroPost: PostType;
  allPosts: PostType[];
}

export default function Blog({ heroPost, allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>Blog | gBoole01</title>
      </Head>

      <h1>Blog</h1>
      <h2>{ heroPost.title }</h2>
      <p>Le { heroPost.date } - {heroPost.duration } min de lecture</p>
      <Image
        priority
        src={`/images/blog/${heroPost.image}`}
        width={213}
        height={120}
      />
      <p>{ heroPost.content }</p>
      <Link href={`/blog/${heroPost.slug}`}>
        <a>
          Lire la suite
          <Image
            src="/images/arrow-right.svg"
            height={20}
            width={20}
          />
        </a>
      </Link>
      <ul>
        {allPosts.map(({ slug, content, date, duration, image, title }) => (
          <li key={slug}>
            <h2>{ title }</h2>
            <p>Le { date } - { duration } min de lecture</p>
            <Image
              src={`/images/blog/${image}`}
              width={90}
              height={90}
            />
            <p>{ content }</p>
            <Link href={`/blog/${slug}`}>
              <a>
                Lire la suite
                <Image
                  src="/images/arrow-right.svg"
                  height={20}
                  width={20}
                />
              </a>
            </Link>
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
    'duration',
    'content',
    'slug',
    'image'
  ]);

  const heroPost = allPosts.shift();

  return {
    props: {
      heroPost,
      allPosts
    }
  };
}
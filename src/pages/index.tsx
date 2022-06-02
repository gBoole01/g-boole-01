import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import Container from '../components/container';
import { getLastNPosts } from '../lib/getPosts';
import PostType from '../types/Post';
import HeroPost from '../components/hero-post';
import { SITENAME } from '../lib/constants';

type Props = {
  allPosts: PostType[];
}


export default function Home({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const otherPosts = allPosts.slice(1);

  return (
    <Layout>
      <Head>
        <title>Accueil | { SITENAME }</title>
      </Head>

      <Container>
        <h1 className="text-white">Accueil</h1>
        {heroPost && (
          <HeroPost
          title={heroPost.title}
          date={heroPost.date}
          duration={heroPost.duration}
          image={heroPost.image}
          excerpt={heroPost.content}
          slug={heroPost.slug}
          />
          )}
        <ul>
          {otherPosts.map(({ slug, content, date, duration, image, title }) => (
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
        <h2>Qui suis-je ?</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p</p>
        <button>
          <Link href="/about">
              <a>En savoir plus</a>
            </Link>
        </button>
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getLastNPosts(3, [
    'title',
    'date',
    'content',
    'slug',
    'duration',
    'image'
  ]);

  return {
    props: {
      allPosts
    }
  };
}
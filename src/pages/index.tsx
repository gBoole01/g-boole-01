import Head from 'next/head';
import PostType from '../types/Post';
import { SITENAME } from '../lib/constants';
import { getLatestPosts } from '../lib/getPosts';
import Layout from '../components/layout';
import HeroPost from '../components/hero-post';
import PostListing from '../components/post-listing';
import Intro from '../components/intro'

type Props = {
  allPosts: PostType[];
}

const Home = ({ allPosts }: Props) =>{
  const heroPost = allPosts[0];
  const otherPosts = allPosts.slice(1);

  return (
    <Layout>
      <Head>
        <title>Accueil | { SITENAME }</title>
      </Head>

      <h1 className="text-white">Accueil</h1>

      {heroPost && (
        <HeroPost
          title={heroPost.title}
          date={heroPost.date}
          duration={heroPost.duration}
          image={heroPost.image}
          excerpt={heroPost.excerpt}
          slug={heroPost.slug}
        />
      )}

      {otherPosts.length > 0 && <PostListing posts={otherPosts} />}
      
      <Intro />
    </Layout>
  );
}

export default Home;

export const getStaticProps = () => {
  const allPosts = getLatestPosts(3, [
    'title',
    'date',
    'slug',
    'duration',
    'image',
    'excerpt',
  ]);

  return {
    props: {
      allPosts
    }
  };
}
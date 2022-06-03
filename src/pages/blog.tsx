import Head from 'next/head';
import Layout from '../components/layout';
import HeroPost from '../components/hero-post';
import { getAllPosts } from '../lib/getPosts';
import PostType from '../types/Post'
import { SITENAME } from '../lib/constants';
import PostListing from '../components/post-listing';

type Props = {
  allPosts: PostType[];
}

const Blog = ({ 
  allPosts
}: Props) => {
  const heroPost = allPosts[0];
  const otherPosts = allPosts.slice(1);

  return (
    <Layout>
      <Head>
        <title>Blog | {SITENAME}</title>
      </Head>

      <h1 className="text-white">Blog</h1>
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

      {otherPosts.length > 0 && (
        <div className="pb-4">
          <PostListing posts={otherPosts} />
        </div>
      )}
    </Layout>
  )
}

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
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
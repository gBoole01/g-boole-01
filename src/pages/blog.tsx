import PostType from '../types/Post'
import { getAllPosts } from '../lib/getPosts';
import Layout from '../components/layout';
import Meta from '../components/meta';
import HeroPost from '../components/hero-post';
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
      <Meta
        title="Blog"
        description="Blog de gBoole01"
      />

      <h1 className="invisible">Blog</h1>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          date={heroPost.publicationDate}
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
    'publicationDate',
    'modificationDate',
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
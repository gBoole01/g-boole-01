import PostType from '../types/Post';
import { getLatestPosts } from '../lib/getPosts';
import Layout from '../components/layout';
import HeroPost from '../components/hero-post';
import PostListing from '../components/post-listing';
import Intro from '../components/intro'
import Meta from '../components/meta';

type Props = {
    allPosts: PostType[];
}

const Home = ({ allPosts }: Props) => {
    const heroPost = allPosts[0];
    const otherPosts = allPosts.slice(1);

    return (
        <Layout>
            <Meta
                title="Accueil"
            />
            <h1 className="invisible">Accueil</h1>

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

            {otherPosts.length > 0 && <PostListing posts={otherPosts} />}

            <Intro />
        </Layout>
    );
}

export default Home;

export const getStaticProps = () => {
    const allPosts = getLatestPosts(4, [
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
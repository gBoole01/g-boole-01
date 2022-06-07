import Head from 'next/head';
import PostLayout from '../../components/post-layout';
import Layout from '../../components/layout';
import SuggestedPost from '../../components/suggested-post';
import { getAllPosts, getPostBySlug, getRandomPost } from '../../lib/getPosts';
import PostType from '../../types/Post';
import { SITENAME } from '../../lib/constants';

type Props = {
    post: PostType;
    randomPost: PostType;
}

export default function Post({ post, randomPost }: Props) {
    return (
        <Layout>
            <Head>
                <title>{post.title} | {SITENAME}</title>
            </Head>
            <PostLayout
                title={post.title}
                date={post.date}
                duration={post.duration}
                image={post.image}
                content={post.content}
            />
            <SuggestedPost
                title={randomPost.title}
                date={randomPost.date}
                duration={randomPost.duration}
                image={randomPost.image}
                excerpt={randomPost.excerpt}
                slug={randomPost.slug}
            />
        </Layout>
    )
};

type Params = {
    params: {
        slug: string;
    }
}

export const getStaticProps = async ({ params }: Params) => {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'post',
        'image',
        'slug',
        'content',
    ]);

    const randomPost = getRandomPost(params.slug, [
        'title',
        'date',
        'post',
        'image',
        'slug',
        'excerpt',
    ]);

    return {
        props: {
            post,
            randomPost
        },
    };
}

export const getStaticPaths = async () => {
    const posts = getAllPosts(['slug']);

    return {
        paths: posts.map(post => ({
            params: {
                slug: post.slug,
            },
        })),
        fallback: false,
    };
};
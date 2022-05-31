import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPosts, getPostBySlug } from '../../lib/getPosts';
import markdownToHtml from '../../lib/markdownToHtml';
import PostType from '../../types/Post';

type Props = {
    post: PostType;
}

export default function Post({ post }: Props) {
    return (
        <Layout>
            <Head>
                <title>{post.title} | gBoole01</title>
            </Head>
            <article>
                <h1>{post.title}</h1>
                <small>{post.date}</small>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            <Link href="/blog">
                <a>Retour au blog</a>
            </Link>
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
        'slug',
        'content',
    ]);
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
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
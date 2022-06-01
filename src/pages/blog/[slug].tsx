import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';
import { getAllPosts, getPostBySlug, getRandomPost } from '../../lib/getPosts';
import PostType from '../../types/Post';

type Props = {
    post: PostType;
    randomPost: PostType;
}

export default function Post({ post, randomPost }: Props) {
    return (
        <Layout>
            <Head>
                <title>{post.title} | gBoole01</title>
            </Head>
            <article>
                <h1>{post.title}</h1>
                <p>Le { post.date } - {post.duration } min de lecture</p>
                <Image
                    priority
                    src={`/images/blog/${post.image}`}
                    width={213}
                    height={120}
                />
                <div>{ post.content }</div>
            </article>
            <h2>Cet article pourrait vous plaire</h2>
            <h2>{ randomPost.title }</h2>
            <p>Le { randomPost.date } - { randomPost.duration } min de lecture</p>
            <Image
              src={`/images/blog/${randomPost.image}`}
              width={90}
              height={90}
            />
            <p>{ randomPost.content }</p>
            <Link href={`/blog/${randomPost.slug}`}>
              <a>
                Lire la suite
                <Image
                  src="/images/arrow-right.svg"
                  height={20}
                  width={20}
                />
              </a>
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
        'content',
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
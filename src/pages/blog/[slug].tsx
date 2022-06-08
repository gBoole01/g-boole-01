import PostLayout from '../../components/post-layout';
import Layout from '../../components/layout';
import SuggestedPost from '../../components/suggested-post';
import { getAllPosts, getPostBySlug, getRandomPost } from '../../lib/getPosts';
import PostType from '../../types/Post';
import Meta from '../../components/meta';
import markdownToHTML from '../../lib/markdownToHTML';

type Props = {
    post: PostType;
    randomPost: PostType;
}

export default function Post({ post, randomPost }: Props) {
    return (
        <Layout>
            <Meta
                title={post.title}
                description={post.excerpt}
                post={post}
            />

            <PostLayout
                title={post.title}
                date={post.publicationDate}
                duration={post.duration}
                image={post.image}
                content={post.content}
            />
            <SuggestedPost
                title={randomPost.title}
                date={randomPost.publicationDate}
                duration={randomPost.duration}
                image={randomPost.image}
                excerpt={randomPost.excerpt}
                slug={randomPost.slug}
            />
        </Layout >
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
        'publicationDate',
        'modificationDate',
        'post',
        'image',
        'slug',
        'content',
        'excerpt',
    ]);
    const content = await markdownToHTML(post.content || '');

    const randomPost = getRandomPost(params.slug, [
        'title',
        'publicationDate',
        'modificationDate',
        'post',
        'image',
        'slug',
        'excerpt',
    ]);

    return {
        props: {
            post: {
                ...post,
                content,
            },
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
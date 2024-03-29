import { Card, Container, Link, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import { RiArrowLeftFill, RiCalendar2Fill, RiTimeFill } from 'react-icons/ri'
import { useRouter } from 'next/router'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  oneDark,
  oneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'
import NextLink from 'next/link'
import { getAllPosts, getPostBySlug, getRandomPost } from '../../lib/getPosts'
import Post from '../../types/Post'
import SeoHelper from '../../components/seo-helper'
import FORMAT_DATE from '../../lib/formatDate'

type PostLayoutProps = {
  title: string
  date: string
  duration: string
  image: string
  content: string
}

const PostLayout = ({
  title,
  date,
  duration,
  image,
  content,
}: PostLayoutProps) => {
  const { isDark } = useTheme()
  return (
    <article>
      <Container>
        <Text h1 color="primary">
          {title}
        </Text>
        <Text css={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <RiCalendar2Fill />
          &nbsp;Le {FORMAT_DATE(date)} -&nbsp;
          <RiTimeFill />
          &nbsp;
          {duration} min de lecture
        </Text>
        <Card css={{ margin: '$sm 0' }}>
          <Image
            priority
            src={`/images/blog/${image}`}
            width={213}
            height={120}
            layout="responsive"
            alt={`Image of the article: ${title}`}
          />
        </Card>

        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={isDark ? oneDark : oneLight}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
            a({ href, children }) {
              if (href?.startsWith('https://')) {
                return (<Link href={href} isExternal target="_blank">{children}</Link>)
              }
              return (
                <NextLink href={href || ''}>
                  <Link>{children}</Link>
                </NextLink>
              )
            },
          }}
        />
      </Container>
    </article>
  )
}

type SuggestedPostProps = {
  title: string
  date: string
  duration: string
  image: string
  excerpt: string
  slug: string
}

const SuggestedPost = ({
  title,
  date,
  duration,
  image,
  excerpt,
  slug,
}: SuggestedPostProps) => {
  const router = useRouter()
  return (
    <Container css={{ padding: '0', marginBottom: '$sm' }}>
      <Text h2 size={50} color="primary" css={{ marginTop: '$xl' }}>
        Cet article pourrait également vous plaire
      </Text>
      <Card
        variant="bordered"
        css={{ padding: '$xl' }}
        isPressable
        isHoverable
        onPress={() => router.push(`/blog/${slug}`)}
      >
        <Text h3 size={40}>
          {title}
        </Text>
        <Text css={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <RiCalendar2Fill />
          &nbsp;Le {FORMAT_DATE(date)} -&nbsp;
          <RiTimeFill />
          &nbsp;
          {duration} min de lecture
        </Text>
        <Card css={{ margin: '$sm auto', width: '60%' }}>
          <Image
            priority
            src={`/images/blog/${image}`}
            width="100%"
            height="62.5%"
            layout="responsive"
            alt={`Image of the article: ${title}`}
          />
        </Card>
        <Text>{excerpt}...</Text>
      </Card>
    </Container>
  )
}

const BackLink = () => (
  <Container>
    <NextLink href="/blog">
      <Link>
        <RiArrowLeftFill />
        Retour à la liste des Articles
      </Link>
    </NextLink>
  </Container>
)

type PostPageProps = {
  post: Post
  randomPost: Post
}

export default function PostPage({ post, randomPost }: PostPageProps) {
  return (
    <Container gap={1} css={{ margin: '$xl auto' }}>
      <SeoHelper title={post.title} description={post.excerpt} post={post} />

      <BackLink />
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
      <BackLink />
    </Container>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug, [
    'title',
    'publicationDate',
    'modificationDate',
    'duration',
    'image',
    'slug',
    'excerpt',
    'content',
  ])

  const randomPost = getRandomPost(params.slug, [
    'title',
    'publicationDate',
    'modificationDate',
    'duration',
    'image',
    'slug',
    'excerpt',
  ])

  return {
    props: {
      post,
      randomPost,
    },
  }
}

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

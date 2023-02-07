import { Card, Container, Link, Text, useTheme } from '@nextui-org/react'
import { RiArrowLeftFill, RiCalendar2Fill } from 'react-icons/ri'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  oneDark,
  oneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'
import NextLink from 'next/link'
import SeoHelper from '../../components/seo-helper'
import FORMAT_DATE from '../../lib/formatDate'
import Kata from '../../types/Kata'
import { getAllKatas, getKataBySlug } from '../../lib/getKatas'

type KataLayoutProps = {
  title: string
  date: string
  content: string
}

const KataLayout = ({ title, date, content }: KataLayoutProps) => {
  const { isDark } = useTheme()
  return (
    <article>
      <Container css={{ padding: '0' }}>
        <Text h1 color="primary">
          {title}
        </Text>
        <Text>
          <RiCalendar2Fill />
          &nbsp;Le {FORMAT_DATE(date)}
        </Text>

        <Card
          css={{
            padding: '0 $sm',
            margin: '$sm auto',
            '@sm': { padding: '$xs $xl' },
          }}
          variant="flat"
        >
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
                return (
                  <NextLink href={href || ''}>
                    <Link>{children}</Link>
                  </NextLink>
                )
              },
              h2({ children }) {
                return (
                  <Text h2 css={{ marginTop: '$xs' }}>
                    {children}
                  </Text>
                )
              },
            }}
          />
        </Card>
      </Container>
    </article>
  )
}

const BackLink = () => (
  <Container>
    <NextLink href="/kata">
      <Link>
        <RiArrowLeftFill />
        Retour à la liste des Katas
      </Link>
    </NextLink>
  </Container>
)

type KataPageProps = {
  kata: Kata
}

export default function KataPage({ kata }: KataPageProps) {
  return (
    <Container gap={1} css={{ margin: '$xl auto' }}>
      <SeoHelper
        title={kata.title}
        description={`Explications du Kata: ${kata.title}`}
        kata={kata}
      />

      <BackLink />

      <KataLayout
        title={kata.title}
        date={kata.publicationDate}
        content={kata.content}
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
  const kata = getKataBySlug(params.slug, [
    'title',
    'publicationDate',
    'modificationDate',
    'slug',
    'language',
    'content',
  ])

  return {
    props: {
      kata,
    },
  }
}

export const getStaticPaths = async () => {
  const katas = getAllKatas(['slug'])

  return {
    paths: katas.map((kata) => ({
      params: {
        slug: kata.slug,
      },
    })),
    fallback: false,
  }
}

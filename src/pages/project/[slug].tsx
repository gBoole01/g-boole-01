import { Card, Container, Link, Text, useTheme } from '@nextui-org/react'
import { RiArrowLeftFill } from 'react-icons/ri'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  oneDark,
  oneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'
import NextLink from 'next/link'
import SeoHelper from '../../components/seo-helper'
import Project from '../../types/Project'
import { getAllProjects, getProjectBySlug } from '../../lib/getProjects'

type ProjectLayoutProps = {
  title: string
  date: string
  content: string
}

const ProjectLayout = ({ title, content }: ProjectLayoutProps) => {
  const { isDark } = useTheme()
  return (
    <article>
      <Container css={{ padding: '0' }}>
        <Card css={{ padding: '$sm', margin: '$xl 0', display: 'flex' }}>
          <Text h1 color="primary" css={{ alignSelf: 'center' }}>
            {title}
          </Text>

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
                  <Text h2 css={{ marginTop: '$sm' }}>
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
    <NextLink href="/project">
      <Link>
        <RiArrowLeftFill />
        Retour à la liste des Projets
      </Link>
    </NextLink>
  </Container>
)

type ProjectPageProps = {
  project: Project
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <Container gap={1} css={{ margin: '$xl auto' }}>
      <SeoHelper
        title={project.title}
        description={`Présentation du Projet: ${project.title}`}
        project={project}
      />

      <BackLink />

      <ProjectLayout
        title={project.title}
        date={project.publicationDate}
        content={project.content}
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
  const project = getProjectBySlug(params.slug, [
    'title',
    'publicationDate',
    'modificationDate',
    'slug',
    'language',
    'content',
  ])

  return {
    props: {
      project,
    },
  }
}

export const getStaticPaths = async () => {
  const Projects = getAllProjects(['slug'])

  return {
    paths: Projects.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: false,
  }
}

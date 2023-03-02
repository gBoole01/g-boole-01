import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  Row,
  Table,
  Text,
  Link as NextUILink,
  Tooltip,
  Badge,
} from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  RiArrowRightFill,
  RiCalendar2Fill,
  RiEyeFill,
  RiGithubFill,
  RiMailSendLine,
  RiTimeFill,
  RiToolsFill,
} from 'react-icons/ri'

import SeoHelper from '../components/seo-helper'
import { useContactModal } from '../contexts/ContactModalProvider'
import { BADGES_URL } from '../lib/constants'
import FORMAT_DATE from '../lib/formatDate'
import { getLatestKatas } from '../lib/getKatas'
import { getPostBySlug } from '../lib/getPosts'
import { getProjectBySlug } from '../lib/getProjects'
import Kata from '../types/Kata'
import Post from '../types/Post'
import Project from '../types/Project'

const Intro = () => {
  const router = useRouter()

  return (
    <>
      <Grid.Container alignItems="center">
        <Grid xs={12} sm={8}>
          <Text h1 size={30}>
            Bonjour ! Je m'appelle
            <Text b color="primary">
              &nbsp;gBoole01
            </Text>
          </Text>
        </Grid>
        <Grid xs={12} sm={4} justify="center">
          <Avatar src="/images/g-boole-01-avatar.png" css={{ size: '150px' }} />
        </Grid>
      </Grid.Container>
      <Row css={{ margin: '$md 0', flexDirection: 'column' }}>
        <Text>
          Je suis un <Text b>développeur Full Stack</Text>, passionné par la
          conception et la mise en œuvre de sites web et d'applications.
        </Text>
        <Text>
          Grâce à mes connaissances en <Text b>Javascript</Text>,{' '}
          <Text b>Typescript</Text> et en <Text b>PHP</Text>, je suis en train
          de développer mes compétences dans les dernières technologies du
          marché, comme <Text b>Next</Text>, <Text b>React</Text> et{' '}
          <Text b>Symfony</Text>.
        </Text>
        <Text>
          Je suis enthousiaste à l'idée de continuer à apprendre et de
          développer mes compétences pour offrir des solutions de qualité
          supérieure.
        </Text>
        <Text>
          Si vous êtes intéressé par mon parcours et mes projets en cours, je
          vous invite à consulter mon portfolio et à me contacter pour en
          discuter.
        </Text>
      </Row>
      <Row justify="flex-end">
        <Button shadow onPress={() => router.push('/about')}>
          En savoir plus
        </Button>
      </Row>
    </>
  )
}

type FeaturedPostsProps = {
  featuredPosts: Post[]
}

const FeaturedPosts = ({ featuredPosts }: FeaturedPostsProps) => {
  const router = useRouter()

  return (
    <Grid.Container gap={1} css={{ margin: '$3xl 0' }}>
      <Grid
        sm={4}
        xs={12}
        css={{ padding: '0', display: 'flex', flexDirection: 'column' }}
      >
        <Text h2 size={40}>
          Mes
          <Text b color="primary">
            &nbsp;Articles
          </Text>
        </Text>
        <Text css={{ paddingRight: '$sm', marginBottom: '$sm' }}>
          Je publie des articles sur le développement web, le clean code et
          l'expérience développeur. Lorsqu'un sujet m'intéresse, je tente d'en
          rédiger un article. N'hésitez pas à me contacter afin d'améliorer leur
          qualité !
        </Text>
      </Grid>
      {featuredPosts.map(({ title, slug, excerpt, duration, image }, index) => (
        <Grid sm={4} xs={12} key={index}>
          <Card
            isPressable
            isHoverable
            onPress={() => router.push(`/blog/${slug}`)}
          >
            <Card.Header>
              <Grid.Container>
                <Grid xs={12}>
                  <Text h3 size={25} css={{ minHeight: '80px' }}>
                    {title}
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Card.Image
                    src={`/images/blog/${image}`}
                    alt={title}
                    width="90%"
                    height="170px"
                  ></Card.Image>
                </Grid>
                <Grid
                  xs={12}
                  alignItems="center"
                  justify="flex-end"
                  css={{ marginRight: '5%' }}
                >
                  <RiTimeFill />
                  <Text>&nbsp;{duration} min</Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body>
              <Text>{excerpt}</Text>
            </Card.Body>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  )
}

type FeaturedProjectsProps = {
  featuredProjects: Project[]
}

const FeaturedProjects = ({ featuredProjects }: FeaturedProjectsProps) => {
  const router = useRouter()

  return (
    <Container css={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
      <Row>
        <Text h2 size={40}>
          Mes
          <Text b color="primary">
            &nbsp;Projets
          </Text>
        </Text>
      </Row>
      <Row>
        <Table
          bordered
          containerCss={{ width: '100%' }}
          css={{ textAlign: 'center' }}
          aria-label="gBoole01's Project Table"
        >
          <Table.Header>
            <Table.Column css={{ textAlign: 'center' }}>NOM</Table.Column>
            <Table.Column css={{ textAlign: 'center' }}>LANGAGE</Table.Column>
            <Table.Column>OUTILS</Table.Column>
            <Table.Column css={{ textAlign: 'center' }}>STATUT</Table.Column>
            <Table.Column css={{ textAlign: 'center', width: '5%' }}>
              &nbsp;
            </Table.Column>
            <Table.Column css={{ textAlign: 'center', width: '5%' }}>
              &nbsp;
            </Table.Column>
          </Table.Header>
          <Table.Body>
            {featuredProjects.map(
              (
                { title, language, slug, status, repositoryUrl, tools },
                index,
              ) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    <Text b>{title}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <img src={BADGES_URL[language]} />
                  </Table.Cell>
                  <Table.Cell css={{ paddingLeft: '$5' }}>
                    <Tooltip color="primary" content={tools.join(' / ')}>
                      <RiToolsFill size="30" />
                    </Tooltip>
                  </Table.Cell>
                  <Table.Cell>
                    {status === 'Actif' && <Badge color="success">Actif</Badge>}
                    {status === 'En pause' && (
                      <Badge color="warning">En pause</Badge>
                    )}
                    {status === 'Terminé' && <Badge>Terminé</Badge>}
                  </Table.Cell>
                  <Table.Cell css={{ width: '5%' }}>
                    <Tooltip content="Voir le Projet" placement="bottom">
                      <Button
                        auto
                        flat
                        onPress={() => router.push(`/project/${slug}`)}
                      >
                        <RiEyeFill size="20" />
                      </Button>
                    </Tooltip>
                  </Table.Cell>
                  <Table.Cell css={{ width: '5%' }}>
                    <Tooltip content="Voir le Code" placement="bottom">
                      <Button
                        color="secondary"
                        auto
                        flat
                        onPress={() => window.open(repositoryUrl, '_blank')}
                      >
                        <RiGithubFill size="20" />
                      </Button>
                    </Tooltip>
                  </Table.Cell>
                </Table.Row>
              ),
            )}
          </Table.Body>
        </Table>
      </Row>
      <Row justify="flex-end" css={{ marginTop: '$sm' }}>
        <Link href="/project">
          <NextUILink block>
            Voir tous les Projets <RiArrowRightFill />
          </NextUILink>
        </Link>
      </Row>
    </Container>
  )
}

type LatestKatasProps = {
  latestKatas: Kata[]
}

const LatestKatas = ({ latestKatas }: LatestKatasProps) => {
  const router = useRouter()

  return (
    <Container
      css={{
        padding: '0',
        margin: '$3xl 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Text h2 size={40}>
        Mes Derniers
        <Text b color="primary">
          &nbsp;Katas
        </Text>
      </Text>
      <Text css={{ paddingRight: '$sm' }}>
        Je pratique régulièrement des Katas de code. Ce sont des exercices de
        programmation visant à améliorer les compétences en développement en
        travaillant sur des problèmes précis.
      </Text>
      <Grid.Container gap={1} alignItems="stretch">
        {latestKatas.map(
          ({ title, slug, publicationDate, language }, index) => (
            <Grid sm={4} xs={12} key={index}>
              <Card
                isPressable
                isHoverable
                onPress={() => router.push(`/kata/${slug}`)}
              >
                <Card.Body>
                  <Card.Image
                    src={BADGES_URL[language]}
                    alt={`Language of Kata "${title}"`}
                  />
                </Card.Body>
                <Card.Footer>
                  <Grid.Container>
                    <Grid xs={12} justify="center">
                      <Text h3 size={25} css={{ textAlign: 'center' }}>
                        {title}
                      </Text>
                    </Grid>
                    <Grid
                      xs={12}
                      alignItems="center"
                      justify="flex-end"
                      css={{ marginRight: '5%' }}
                    >
                      <RiCalendar2Fill />
                      <Text> &nbsp;Le {FORMAT_DATE(publicationDate)}</Text>
                    </Grid>
                  </Grid.Container>
                </Card.Footer>
              </Card>
            </Grid>
          ),
        )}
      </Grid.Container>
    </Container>
  )
}

const Contact = () => {
  const { contactModalShowHandler } = useContactModal()

  return (
    <Card variant="bordered" css={{ padding: '$sm' }}>
      <Row justify="center">
        <Text h2 size={40} color="primary">
          Contactez-moi
        </Text>
      </Row>
      <Row css={{ marginTop: '$sm' }}>
        <Text css={{ textAlign: 'center' }}>
          En quête de défis et d'opportunités pour grandir professionnellement,
          je suis actuellement à la recherche d'un contrat en alternance à
          Bordeaux <Text i>(ou en télétravail)</Text>.
        </Text>
      </Row>
      <Row css={{ marginBottom: '$sm' }}>
        <Text css={{ textAlign: 'center' }}>
          Si vous souhaitez discuter de mes aspirations et de mes compétences ou
          de n'importe quel sujet,
          <Text b>&nbsp;n'hésitez pas à me contacter !</Text>
        </Text>
      </Row>
      <Row justify="center">
        <Button onPress={contactModalShowHandler}>
          <RiMailSendLine />
          &nbsp;Contact
        </Button>
      </Row>
    </Card>
  )
}

type HomeProps = {
  featuredPosts: Post[]
  featuredProjects: Project[]
  latestKatas: Kata[]
}

export default function Home({
  featuredPosts,
  featuredProjects,
  latestKatas,
}: HomeProps) {
  return (
    <Container gap={1} css={{ margin: '$xl auto' }}>
      <SeoHelper title="Accueil" description="Homepage of my Portfolio" />
      <Intro />
      <FeaturedPosts featuredPosts={featuredPosts} />
      <FeaturedProjects featuredProjects={featuredProjects} />
      <LatestKatas latestKatas={latestKatas} />
      <Contact />
    </Container>
  )
}

export const getStaticProps = () => {
  const featuredPostsSlug = [
    'l-etat-de-flow',
    'gerer-efficacement-sa-configuration',
  ]

  const featuredPosts = featuredPostsSlug.map((slug) =>
    getPostBySlug(slug, ['title', 'excerpt', 'slug', 'duration', 'image']),
  )

  const featuredProjectsSlug = [
    'node-puppeteer-job-scraper',
    'react-ts-tdd-restaurant-rating-app',
    'express-ts-blog-api',
  ]

  const featuredProjects = featuredProjectsSlug.map((slug) =>
    getProjectBySlug(slug, [
      'title',
      'slug',
      'language',
      'status',
      'repositoryUrl',
      'tools',
    ]),
  )

  const latestKatas = getLatestKatas(3, [
    'title',
    'slug',
    'publicationDate',
    'language',
  ])

  return {
    props: { featuredPosts, featuredProjects, latestKatas },
  }
}

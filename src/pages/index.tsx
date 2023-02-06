import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  Row,
  Text,
} from '@nextui-org/react'
import { useRouter } from 'next/router'
import { RiCalendar2Fill, RiMailSendLine, RiTimeFill } from 'react-icons/ri'

import SeoHelper from '../components/seo-helper'
import { useContactModal } from '../contexts/ContactModalProvider'
import { BADGES_URL } from '../lib/constants'
import FORMAT_DATE from '../lib/formatDate'
import { getLatestKatas } from '../lib/getKatas'
import { getPostBySlug } from '../lib/getPosts'
import Kata from '../types/Kata'
import Post from '../types/Post'

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
                  <Text h3 size={25}>
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
        Je pratique quotidiennement des Katas de code. Ce sont des exercices de
        programmation visant à améliorer les compétences en développement en
        travaillant sur des problèmes précis.
      </Text>
      <Grid.Container gap={1} alignItems="flex-start">
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
                    <Grid xs={12}>
                      <Text h3 size={25}>
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
  latestKatas: Kata[]
}

export default function Home({ featuredPosts, latestKatas }: HomeProps) {
  return (
    <Container gap={1} css={{ margin: '$xl auto' }}>
      <SeoHelper title="Accueil" description="Homepage of my Portfolio" />
      <Intro />
      <FeaturedPosts featuredPosts={featuredPosts} />
      <LatestKatas latestKatas={latestKatas} />
      <Contact />
    </Container>
  )
}

export const getStaticProps = () => {
  const featuredPostsSlug = [
    'gerer-efficacement-sa-configuration',
    'les-principes-de-gestalt-partie-1-3',
  ]

  const featuredPosts = featuredPostsSlug.map((slug) =>
    getPostBySlug(slug, ['title', 'excerpt', 'slug', 'duration', 'image']),
  )

  const latestKatas = getLatestKatas(3, [
    'title',
    'slug',
    'publicationDate',
    'language',
  ])

  return {
    props: { featuredPosts, latestKatas },
  }
}

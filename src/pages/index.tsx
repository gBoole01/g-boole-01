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
import { RiTimeFill } from 'react-icons/ri'

import SeoHelper from '../components/seo-helper'
import { useContactModal } from '../contexts/ContactModalProvider'
import { getPostBySlug } from '../lib/getPosts'
import PostType from '../types/Post'

const Intro = () => {
  const router = useRouter()

  return (
    <>
      <Row justify="space-between" align="center">
        <Text h1 size={30}>
          Bonjour ! Je m'appelle
          <Text b color="primary">
            &nbsp;gBoole01
          </Text>
        </Text>
        <Avatar src="/images/g-boole-01-avatar.png" css={{ size: '150px' }} />
      </Row>
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
  featuredPosts: PostType[]
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
        <Grid sm={4} xs={12}>
          <Card
            isPressable
            isHoverable
            onPress={() => router.push(`/blog/${slug}`)}
            key={index}
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
        <Button onPress={contactModalShowHandler}>Contact</Button>
      </Row>
    </Card>
  )
}

type HomeProps = {
  featuredPosts: PostType[]
}

export default function Home({ featuredPosts }: HomeProps) {
  return (
    <Container gap={1} css={{ margin: '$xl auto' }}>
      <SeoHelper title="Accueil" description="Homepage of my Portfolio" />
      <Intro />
      <FeaturedPosts featuredPosts={featuredPosts} />
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

  return {
    props: { featuredPosts },
  }
}

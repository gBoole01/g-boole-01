import {
  Avatar,
  Button,
  Card,
  Col,
  Container,
  Grid,
  Row,
  Text,
} from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RiTimeFill } from 'react-icons/ri'

import SeoHelper from '../components/seo-helper'
import { useContactModal } from '../contexts/ContactModalProvider'
import { getPostBySlug } from '../lib/getPosts'
import PostType from '../types/Post'

const Intro = () => (
  <>
    <Row justify="space-between">
      <Text h1 size={30}>
        Bonjour ! Je m'appelle
        <Text b color="primary">
          &nbsp;gBoole01
        </Text>
      </Text>
      <Avatar src="/images/g-boole-01-avatar.png" size="xl" />
    </Row>
    <Row css={{ margin: '$md 0' }}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid
        facilis praesentium, facere culpa doloremque sunt, odit nostrum
        recusandae eius ea architecto provident sit natus iure incidunt illo
        inventore in? Debitis accusantium quos nisi autem amet, aperiam animi
        odit minus perspiciatis, sequi quo magnam possimus magni eum nesciunt
        repellendus laborum!
      </Text>
    </Row>
    <Row justify="flex-end">
      <Link href="/about">
        <a>
          <Button>En savoir plus</Button>
        </a>
      </Link>
    </Row>
  </>
)

type FeaturedPostsProps = {
  featuredPosts: PostType[]
}

const FeaturedPosts = ({ featuredPosts }: FeaturedPostsProps) => {
  const router = useRouter()

  return (
    <Row gap={1} css={{ margin: '$3xl 0' }}>
      <Col css={{ padding: '0' }}>
        <Text h2 size={40}>
          Mes
          <Text b color="primary">
            &nbsp;Articles
          </Text>
        </Text>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ipsam
          voluptatibus id facilis, sit nisi ratione magni eos itaque ipsa eius
          autem veniam eaque quis sed, odio eligendi, tempora facere.
        </Text>
      </Col>
      {featuredPosts.map(({ title, slug, excerpt, duration, image }) => (
        <Col>
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
                <Grid xs={12} alignItems="center">
                  <RiTimeFill />
                  <Text>&nbsp;{duration} min</Text>
                </Grid>
                <Grid xs={12}>
                  <Card.Image
                    src={`/images/blog/${image}`}
                    alt={title}
                    width="90%"
                    height="170px"
                  ></Card.Image>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body>
              <Text>{excerpt}</Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

const Contact = () => {
  const { contactModalShowHandler } = useContactModal()

  return (
    <Container>
      <Row justify="center">
        <Text h2 size={40} color="primary">
          Contactez-moi
        </Text>
      </Row>
      <Row css={{ margin: '$sm auto' }}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          nesciunt accusamus quod neque nobis, autem distinctio, possimus et
          dicta sint aliquid! Beatae repellendus, magni in fuga placeat eius qui
          distinctio quaerat quibusdam magnam commodi repellat ipsam! Nesciunt
          rerum libero earum!
        </Text>
      </Row>
      <Row justify="center">
        <Button onPress={contactModalShowHandler}>Contact</Button>
      </Row>
    </Container>
  )
}

type HomeProps = {
  featuredPosts: PostType[]
}

export default function Home({ featuredPosts }: HomeProps) {
  return (
    <Container gap={1} css={{ margin: '$xl 0' }}>
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

import {
  Avatar,
  Button,
  Card,
  Col,
  Container,
  Row,
  Text,
} from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import SeoHelper from '../components/seo-helper'

const Intro = () => (
  <>
    <Row justify="space-between">
      <Text h1 size={30}>
        Bonjour ! Je m'appelle
        <Text b size="3xl" color="primary">
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

const FeaturedPosts = () => {
  const router = useRouter()
  return (
    <Row gap={2} css={{ margin: '$xl 0' }}>
      <Col css={{ padding: '0' }}>
        <Text h2 size={30}>
          Articles
        </Text>
      </Col>
      <Col>
        <Card isPressable isHoverable onPress={() => router.push('/blog')}>
          <Card.Header>
            <Text h3>Article 1</Text>
          </Card.Header>
          <Card.Body>
            <Text>Article excerpt</Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card isPressable isHoverable onPress={() => router.push('/blog')}>
          <Card.Header>
            <Text h3>Article 2</Text>
          </Card.Header>
          <Card.Body>
            <Text>Article excerpt</Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

const Contact = () => (
  <Container>
    <Row justify="center">
      <Text h2 size={30}>
        Contactez-moi
      </Text>
    </Row>
    <Row css={{ margin: '$sm $xl' }}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        nesciunt accusamus quod neque nobis, autem distinctio, possimus et dicta
        sint aliquid! Beatae repellendus, magni in fuga placeat eius qui
        distinctio quaerat quibusdam magnam commodi repellat ipsam! Nesciunt
        rerum libero earum!
      </Text>
    </Row>
    <Row justify="center">
      <Button>Contact</Button>
    </Row>
  </Container>
)

export default function Home() {
  return (
    <Container css={{ margin: '$xl 0' }}>
      <SeoHelper title="Accueil" description="Homepage of my Portfolio" />
      <Intro />
      <FeaturedPosts />
      <Contact />
    </Container>
  )
}

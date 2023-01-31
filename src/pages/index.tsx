import { Avatar, Button, Container, Row, Text } from '@nextui-org/react'
import Link from 'next/link'

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

export default function Home() {
  return (
    <Container css={{ margin: '$xl 0' }}>
      <SeoHelper title="Accueil" description="Homepage of my Portfolio" />
      <Intro />
    </Container>
  )
}

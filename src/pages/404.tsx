import { Container, Text, Link as NextUILink } from '@nextui-org/react'
import Link from 'next/link'
import { RiHome2Fill } from 'react-icons/ri'
import SeoHelper from '../components/seo-helper'

const Custom404 = () => (
  <Container css={{ margin: '$xl auto' }}>
    <SeoHelper
      title="Page non trouvée"
      description="Page non référencée du site web de gBoole01"
    />

    <section>
      <Text h2 color="primary">
        Oups, cette page semble ne plus exister !
      </Text>
      <Text h1>Erreur 404</Text>
      <Link href="/">
        <NextUILink block>
          <RiHome2Fill />
          &nbsp;Retour à l'accueil
        </NextUILink>
      </Link>
    </section>
  </Container>
)

export default Custom404

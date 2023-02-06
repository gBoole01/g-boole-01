import { Card, Container, Grid, Text } from '@nextui-org/react'
import { RiCalendar2Fill } from 'react-icons/ri'
import { useRouter } from 'next/router'
import SeoHelper from '../components/seo-helper'
import Kata from '../types/Kata'
import { BADGES_URL } from '../lib/constants'
import FORMAT_DATE from '../lib/formatDate'

type KataPageProps = {
  allKatas: Kata[]
}

const KataPage = ({ allKatas }: KataPageProps) => {
  const router = useRouter()
  return (
    <Container css={{ margin: '$xl auto', padding: '0' }}>
      <SeoHelper title="Mes Katas" description="Blog de gBoole01" />
      <Text h1 color="primary">
        Mes Katas
      </Text>
      <Grid.Container gap={3}>
        {allKatas.map(({ title, slug, language, publicationDate }, index) => (
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
        ))}
      </Grid.Container>
    </Container>
  )
}

export default KataPage

export const getStaticProps = async () => {
  // const allKatas = getAllKatas([
  //     'title',
  //     'slug',
  //     'publicationDate',
  //     'modificationDate',
  //     'content',
  //     'language',
  //   ])
  const allKatas: Kata[] = [
    {
      slug: 'test',
      title: 'Produit de Nombres consécutifs de Fibonacci',
      publicationDate: '2022-04-12',
      modificationDate: '2022-04-12',
      content: 'test',
      language: 'typescript',
    },
    {
      slug: 'test3',
      title: 'test2',
      publicationDate: '2022-04-13',
      modificationDate: '2022-04-13',
      content: 'test 2',
      language: 'typescript',
    },
    {
      slug: 'test3',
      title: 'test3',
      publicationDate: '2022-04-13',
      modificationDate: '2022-04-13',
      content: 'test 3',
      language: 'typescript',
    },
  ]

  return {
    props: {
      allKatas,
    },
  }
}

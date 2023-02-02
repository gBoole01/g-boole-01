import { Card, Container, Grid, Text } from '@nextui-org/react'
import { RiTimeFill } from 'react-icons/ri'
import { useRouter } from 'next/router'
import PostType from '../types/Post'
import { getAllPosts } from '../lib/getPosts'
import SeoHelper from '../components/seo-helper'

type BlogProps = {
  allPosts: PostType[]
}

const Blog = ({ allPosts }: BlogProps) => {
  const router = useRouter()
  return (
    <Container css={{ margin: '$xl auto' }}>
      <SeoHelper title="Blog" description="Blog de gBoole01" />
      <Text h1 color="primary">
        Blog
      </Text>
      <Grid.Container gap={3}>
        {allPosts.map(({ title, slug, excerpt, duration, image }, index) => (
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
                    <Text h2 size={25} css={{ minHeight: '70px' }}>
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
    </Container>
  )
}

export default Blog

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'slug',
    'duration',
    'image',
    'excerpt',
  ])

  return {
    props: {
      allPosts,
    },
  }
}

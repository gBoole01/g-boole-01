import PostThumbnail from './post-thumbnail'

type Props = {
  title: string
  date: string
  duration: string
  image: string
  excerpt: string
  slug: string
}

const SuggestedPost = ({
  title,
  date,
  duration,
  image,
  excerpt,
  slug,
}: Props) => (
  <section>
    <h2>Cet article pourrait vous plaire</h2>
    <PostThumbnail
      title={title}
      date={date}
      duration={duration}
      image={image}
      excerpt={excerpt}
      slug={slug}
    />
  </section>
)

export default SuggestedPost

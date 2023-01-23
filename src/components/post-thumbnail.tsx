import Image from 'next/image'
import ReadMore from './read-more'

type Props = {
  title: string
  date: string
  duration: string
  image: string
  excerpt: string
  slug: string
}

const PostThumbnail = ({
  title,
  date,
  duration,
  image,
  excerpt,
  slug,
}: Props) => (
  <section>
    <h2>{title}</h2>
    <p>
      Le {date} - {duration} min de lecture
    </p>
    <Image
      src={`/images/blog/${image}`}
      width={90}
      height={90}
      alt={`Imagitems-starte of the article: ${title}`}
      layout="responsive"
      objectFit="cover"
    />
    <p>{excerpt}...</p>
    <ReadMore slug={slug} />
  </section>
)

export default PostThumbnail

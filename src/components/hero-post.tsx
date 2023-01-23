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

const HeroPost = ({ title, date, duration, image, excerpt, slug }: Props) => (
  <section>
    <h2>{title}</h2>
    <p>
      Le {date} - {duration} min de lecture
    </p>
    <div>
      <Image
        priority
        src={`/images/blog/${image}`}
        width={213}
        height={120}
        layout="responsive"
        alt={`Image of the article: ${title}`}
      />
    </div>
    <p>{excerpt}...</p>
    <div>
      <ReadMore slug={slug} />
    </div>
  </section>
)

export default HeroPost

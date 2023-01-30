import Image from 'next/image'
import markdownStyles from '../styles/markdown.module.css'

type Props = {
  title: string
  date: string
  duration: string
  image: string
  content: string
}

const PostLayout = ({ title, date, duration, image, content }: Props) => (
  <article>
    <h1>{title}</h1>
    <p>
      Le {date} - {duration} min de lecture
    </p>
    <div className="self-center w-2/3 shadow-md">
      <Image
        priority
        src={`/images/blog/${image}`}
        width={213}
        height={120}
        layout="responsive"
        className="rounded-md"
        alt={`Image of the article: ${title}`}
      />
    </div>
    <div
      className={markdownStyles.markdown}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </article>
)

export default PostLayout

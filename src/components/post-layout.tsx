import Image from 'next/image'
// import tw from 'tailwind-styled-components';
import markdownStyles from '../styles/markdown.module.css'

const Article = tw.article`flex flex-col gap-2 py-2 relative after:absolute after:z-[-1] after:content[''] after:shadow-md after:bg-blue-2/20 after:rounded-r-lg after:right-[-0.25rem] after:left-[-2.25rem] after:top-0 after:h-[130px]`
const Title = tw.h1`text-2xl text-blue-1 font-bold uppercase`
const Caption = tw.p`text-gray-3 italic`

type Props = {
  title: string
  date: string
  duration: string
  image: string
  content: string
}

const PostLayout = ({ title, date, duration, image, content }: Props) => (
  <Article>
    <Title>{title}</Title>
    <Caption>
      Le {date} - {duration} min de lecture
    </Caption>
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
  </Article>
)

export default PostLayout

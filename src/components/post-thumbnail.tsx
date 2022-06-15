import Image from 'next/image';
import tw from 'tailwind-styled-components';
import ReadMore from './read-more';

const Title = tw.h2`text-lg text-blue-2 font-bold italic uppercase`
const Caption = tw.p`text-xs text-gray-3 italic`

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
        <Title>{title}</Title>
        <Caption>Le {date} - {duration} min de lecture</Caption>
        <div className="flex gap-2 items-center">
            <div className="min-w-[90px]">
                <Image
                    src={`/images/blog/${image}`}
                    width={90}
                    height={90}
                    alt={`Image of the article: ${title}`}
                />
            </div>
            <div className="flex flex-col">
                <p className="col-span-2">{excerpt}...</p>
                <div className="self-end">
                    <ReadMore slug={slug} />
                </div>
            </div>
        </div>
    </section>
)

export default PostThumbnail;
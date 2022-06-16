import Image from 'next/image';
import tw from 'tailwind-styled-components';
import ReadMore from './read-more';

const Title = tw.h2`text-lg text-blue-2 font-bold italic uppercase`
const Caption = tw.p`pb-2 text-xs text-gray-3 italic`

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
        <div className="flex gap-2">
            <div className="max-h-[90px] sm:max-h-full min-w-[90px] w-1/3 shadow-md">
                <Image
                    src={`/images/blog/${image}`}
                    width={90}
                    height={90}
                    alt={`Imagitems-starte of the article: ${title}`}
                    className="rounded-md"
                    layout='responsive'
                    objectFit='cover'
                />
            </div>
            <div className="flex flex-col">
                <p className="col-span-2 grow">{excerpt}...</p>
                <div className="self-end shrink-0">
                    <ReadMore slug={slug} />
                </div>
            </div>
        </div>
    </section>
)

export default PostThumbnail;
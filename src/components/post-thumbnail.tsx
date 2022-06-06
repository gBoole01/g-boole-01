import Image from 'next/image';
import ReadMore from './read-more';

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
        <h2 className="text-lg text-blue-2 font-bold italic uppercase">{title}</h2>
        <p className="text-xs text-gray-3 italic">Le {date} - {duration} min de lecture</p>
        <div className="flex gap-2 items-center">
            <div className="min-w-[90px]">
                <Image
                    src={`/images/blog/${image}`}
                    width={90}
                    height={90}
                />
            </div>
            <div className="flex flex-col">
                <p className="col-span-2">{excerpt.slice(0,90)}...</p>
                <div className="self-end">
                    <ReadMore slug={slug} />
                </div>
            </div>
        </div>
    </section>
)

export default PostThumbnail;
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

const HeroPost = ({
    title,
    date,
    duration,
    image,
    excerpt,
    slug,
}: Props) =>  (
    <section className="flex flex-col py-2 relative after:absolute after:z-[-1] after:content[''] after:bg-blue-2/20 after:rounded-r-lg after:right-0 after:left-[-2.25rem] after:top-0 after:bottom-1/2">
        <h2 className="text-2xl text-blue-1 font-bold uppercase">{ title }</h2>
        <p className="text-sm text-gray-3 italic">Le { date } - {duration } min de lecture</p>
        <div className="self-center">
            <Image
                priority
                src={`/images/blog/${image}`}
                width={213}
                height={120}
                />
        </div>
        <p className="pt-3 text-gray-1">{ excerpt }...</p>
        <div className="self-end">
            <ReadMore slug={slug} />
        </div>
    </section>
)

export default HeroPost

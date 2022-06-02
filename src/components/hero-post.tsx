import Image from 'next/image';
import Link from 'next/link';

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
}: Props) => (
        <section className="flex flex-col">
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
            <p className="pt-3">{ excerpt }...</p>
            <div className="self-end">
                <Link href={`/blog/${slug}`}>
                    <a className="text-blue-1 text-xs">
                        Lire la suite
                        <Image
                            src="/images/arrow-right.svg"
                            height={20}
                            width={20}
                        />
                    </a>
                </Link>
            </div>
        </section>
    )

export default HeroPost

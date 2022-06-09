import Image from 'next/image';
import Link from 'next/link';

type Props = {
    slug: string;
}

const ReadMore = ({
    slug
}: Props) => (
    <Link href={`/blog/${slug}`}>
        <a className="text-blue-1 visited:text-gray-3 text-xs flex gap-1 items-center border-b">
            Lire la suite
            <Image
                src="/images/arrow-right.svg"
                height={20}
                width={20}
                alt="arrow right logo"
            />
        </a>
    </Link>

)

export default ReadMore;
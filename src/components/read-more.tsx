import Image from 'next/image'
import Link from 'next/link'

type Props = {
  slug: string
}

const ReadMore = ({ slug }: Props) => (
  <Link href={`/blog/${slug}`}>
    <a>
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

export default ReadMore

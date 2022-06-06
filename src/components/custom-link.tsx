import Link from 'next/link';

type Props = {
    href: string;
    label: string;
}

const CustomLink = ({
    href,
    label,
}: Props) => (
    <Link href={href}>
        <a className="text-blue-1 visited:text-gray-3 underline">
            {label}
        </a>
    </Link>
)

export default CustomLink;
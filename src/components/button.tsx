import Link from 'next/link';

type Props = {
    label: string;
    href: string;
}

const Button = ({
    label,
    href,
}: Props) => (
        <Link href={href}>
            <button className="bg-blue-1 border border-blue-2 text-blue-2 text-xs font-bold rounded-xl w-[150px] py-1 px-4">{label}</button>
        </Link>
)


export default Button;
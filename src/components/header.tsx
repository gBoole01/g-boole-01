import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="flex border-b-4">
            <Link href="/">
                <a>
                    <Image
                        priority
                        src="/images/logo-512.png"
                        height={150}
                        width={150}
                        alt="Website Logo"
                    />
                </a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/blog">
                            <a>Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>A propos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
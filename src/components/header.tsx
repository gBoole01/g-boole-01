import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="
            relative
            after:content-['']
            after:absolute
            after:right-20
            after:top-5
            after:bg-blue-2
            after:w-px
            after:h-20
            before:content-['']
            before:absolute
            before:right-10
            before:bottom-0
            before:bg-blue-2
            before:w-20
            before:h-px
        ">
            <nav>
                <ul className="pt-5 px-9 text-blue-1 flex items-center justify-between after:content-[''] after:absolute after:left-1/2 after:bg-blue-2 after:w-0.5 after:h-12">
                    <li className="w-1/5">
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/logo-512.png"
                                    height={64}
                                    width={64}
                                    alt="Website Logo"
                                />
                            </a>
                        </Link>
                    </li>
                    <div className="w-3/5 grid grid-cols-2 gap-5">
                        <li className="text-right">
                            <Link href="/blog">
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>A Propos</a>
                            </Link>
                        </li>
                    </div>
                    <li className="w-1/5 text-right">
                        <Link href="/contact">
                            <a>Mail</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
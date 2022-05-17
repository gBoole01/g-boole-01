import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="border-t-4">
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Accueil</a>
                        </Link>
                    </li>
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
                    <li>
                        <Link href="/terms-and-conditions">
                            <a>CGU</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/legals">
                            <a>Mentions Légales</a>
                        </Link>
                    </li>

                </ul>
            </nav>
            <div className="text-center p-y-2 bg-gray-1">
                <small className="text-white">
                    &copy; Copyright 2022 gBoole01 
                </small>
                <a 
                    className="ml-2"
                    href="https://github.com/gBoole01"
                    target="_blank"
                    >
                    <Image
                        priority
                        src="/images/github.png"
                        height={15}
                        width={15}
                        alt="Github Logo"                  
                        />
                </a>
            </div>
        </footer>
    )
}
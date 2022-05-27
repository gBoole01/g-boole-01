import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer>
            <ul className="bg-gray-4 px-9 pt-2.5 grid grid-cols-3 grid-rows-3 items-center justify-items-center text-center text-xs text-blue-1 underline">
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
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>A propos</a>
                    </Link>
                </li>
                <li>
                    <Link href="/resume">
                        <a>Curriculum Vitae</a>
                    </Link>
                </li>
                <div>
                    <div className="flex bg-white">
                        <li>
                            <a
                                href="https://github.com/gBoole01"
                                target="_blank"                        
                                >GH</a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/gBoole01"
                                target="_blank"                        
                                >SO</a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/gBoole01"
                                target="_blank"                        
                                >BMAC</a>
                        </li>
                    </div>
                </div>
                <li className="text-xs col-start-2">
                    <Link href="/legals">
                        <a>Mentions Légales</a>
                    </Link>
                </li>

            </ul>
            <div className="py-2 bg-gray-3 text-white text-xs flex gap-1 items-center justify-center">
                <p>
                    Copyright &copy; { new Date().getFullYear()} gBoole01 
                </p>
                <Image
                    priority
                    src="/images/logo-512-small.png"
                    height={15}
                    width={15}
                    alt="gBoole01 Logo"
                />
                <p>
                    All Rights Reserved 
                </p>      
            </div>
        </footer>
    )
}
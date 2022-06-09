import Link from 'next/link';
import Image from 'next/image';
import { SOCIAL_LINKS } from '../lib/constants';

const Footer = () => (
    <footer className="shrink-0">
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
                    <a>À Propos</a>
                </Link>
            </li>
            <li>
                <Link href="/resume">
                    <a>Curriculum Vitae</a>
                </Link>
            </li>
            <div className="flex items-center gap-1 bg-white rounded-md px-2 py-px">
                <li>
                    <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        className="flex"
                    >
                        <Image
                            priority
                            src="/images/github.png"
                            height={20}
                            width={20}
                            alt="github logo"
                        />        
                    </a>
                </li>
                <li>
                    <a
                        href={SOCIAL_LINKS.stackoverflow}
                        target="_blank"
                        className="flex"
                    >
                        <Image
                            priority
                            src="/images/stack-overflow.svg"
                            height={20}
                            width={20}
                            alt="stack overflow logo"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href={SOCIAL_LINKS.buymeacoffee}
                        target="_blank"
                        className="flex"                        
                    >
                        <Image
                            priority
                            src="/images/buy-me-a-coffee.png"
                            height={20}
                            width={13}
                            alt="buy me a coffee logo"
                        />                
                    </a>
                </li>
            </div>
            <li className="text-[0.60rem] col-start-2">
                <Link href="/legals">
                    <a>Mentions Légales</a>
                </Link>
            </li>

        </ul>
        <div className="py-2 bg-gray-3 text-white text-[0.60rem] flex gap-1 items-center justify-center">
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

export default Footer;
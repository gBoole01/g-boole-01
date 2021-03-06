import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import siteLogo from '../../public/images/logo-64.png'
import contactLogo from '../../public/images/email.png'

const Header = () => {
    const router = useRouter();
    
    return (
        <header className="
            mb-6
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
                                <div className="w-16 h-16 shadow-md">
                                    <Image
                                        src={siteLogo}
                                        alt="Website Logo"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                            </a>
                        </Link>
                    </li>
                    <div className="w-3/5 grid grid-cols-2 gap-5">
                        <li className="text-right">
                            <Link href="/blog">
                                <a className={router.pathname === "/blog" ? "font-bold drop-shadow-xl shadow-blue-2" : ""}>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a className={router.pathname === "/about" ? "font-bold drop-shadow-xl shadow-blue-2" : ""}>?? Propos</a>
                            </Link>
                        </li>
                    </div>
                    <li className="w-1/5 text-right">
                        <Link href="/contact">
                            <a>
                                <Image
                                    priority
                                    src={contactLogo}
                                    height={35}
                                    width={35}
                                    alt="gBoole01 Logo"
                                />
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
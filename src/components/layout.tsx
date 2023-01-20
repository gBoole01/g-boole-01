import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image'
import siteLogo from '../../public/images/logo-64.png'
import smallSiteLogo from '../../public/favicon-16x16.png'
import contactLogo from '../../public/images/email.png'
import { SOCIAL_LINKS } from '../lib/constants'
import LegalsModal from './legals'

type Props = {
  children?: React.ReactNode
}

const Header = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()

  return (
    <header>
      <nav>
        <ul>
          <Link href="/">
            <Image src={siteLogo} alt="Website Logo" width={64} height={64} />
          </Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">À Propos</Link>
          <Link href="/contact">
            <Image
              src={contactLogo}
              height={35}
              width={35}
              alt="gBoole01 Logo"
            />
          </Link>
        </ul>
      </nav>
      <div>
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
        {type}
      </div>
    </header>
  )
}

const Footer = () => (
  <footer>
    <ul>
      <Link href="/">Accueil</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">À Propos</Link>
      <Link href="/resume">Curriculum Vitae</Link>
      <a href={SOCIAL_LINKS.github} target="_blank">
        Github
      </a>
      <a href={SOCIAL_LINKS.stackoverflow} target="_blank">
        StackOverflow
      </a>
      <a href={SOCIAL_LINKS.buymeacoffee} target="_blank">
        BuyMeACoffee
      </a>
      <Link href="#">Mentions Légales</Link>
    </ul>

    <div>
      <p>Copyright &copy; {new Date().getFullYear()} gBoole01</p>
      <Image
        priority
        src={smallSiteLogo}
        height={16}
        width={16}
        alt="gBoole01 Logo"
      />
      <p>All Rights Reserved</p>
    </div>
  </footer>
)

const Layout = ({ children }: Props) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
    <LegalsModal />
  </div>
)

export default Layout

import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { RiMailSendLine } from 'react-icons/ri'
import siteLogo from '../../public/images/logo-64.png'
import smallSiteLogo from '../../public/favicon-16x16.png'
import { SOCIAL_LINKS } from '../lib/constants'
import LegalsModal from './legals-modal'

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
            <a>
              <Image src={siteLogo} alt="Website Logo" width={64} height={64} />
            </a>
          </Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">À Propos</Link>
          <Link href="/contact">
            <a>
              <RiMailSendLine />
            </a>
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

type FooterProps = {
  legalsModalHandler: () => void
}

const Footer = ({ legalsModalHandler }: FooterProps) => (
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
      <p onClick={legalsModalHandler}> Mentions Légales</p>
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

const Layout = ({ children }: Props) => {
  const [legalsModalVisible, setLegalsModalVisible] = useState(false)
  const legalsModalHandler = () => setLegalsModalVisible(true)
  const legalsModalCloseHandler = () => {
    setLegalsModalVisible(false)
  }

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer legalsModalHandler={legalsModalHandler} />
      <LegalsModal
        visible={legalsModalVisible}
        closeHandler={legalsModalCloseHandler}
      />
    </div>
  )
}

export default Layout

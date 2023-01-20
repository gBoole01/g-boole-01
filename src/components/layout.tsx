import { useTheme as useNextTheme } from 'next-themes'
import { Button, Row, useTheme } from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { RiMailSendLine, RiMoonFill, RiSunFill } from 'react-icons/ri'
import siteLogo from '../../public/images/logo-64.png'
import smallSiteLogo from '../../public/favicon-16x16.png'
import { SOCIAL_LINKS } from '../lib/constants'
import LegalsModal from './legals-modal'
import ContactModal from './contact-modal'

type HeaderProps = {
  contactModalHandler: () => void
}

const ThemeSwitcher = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()

  const handleClick = () => {
    if (type === 'light') setTheme('dark')
    else if (type === 'dark') setTheme('light')
  }

  return (
    <>
      <Button size="sm" onPress={handleClick}>
        {isDark ? <RiMoonFill /> : <RiSunFill />}
      </Button>
    </>
  )
}

const Header = ({ contactModalHandler }: HeaderProps) => (
  <header>
    <nav>
      <ul>
        <Row justify="space-evenly" align="center" css={{ gap: '$6' }}>
          <Link href="/">
            <a>
              <Image src={siteLogo} alt="Website Logo" width={64} height={64} />
            </a>
          </Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">À Propos</Link>
          <a onClick={contactModalHandler}>
            <RiMailSendLine />
          </a>
          <ThemeSwitcher />
        </Row>
      </ul>
    </nav>
  </header>
)

type FooterProps = {
  contactModalHandler: () => void
  legalsModalHandler: () => void
}

const Footer = ({ contactModalHandler, legalsModalHandler }: FooterProps) => (
  <footer>
    <ul>
      <Link href="/">Accueil</Link>
      <Link href="/blog">Blog</Link>
      <a onClick={contactModalHandler}>Contact</a>
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
      <a onClick={legalsModalHandler}> Mentions Légales</a>
    </ul>

    <Row justify="center" align="center" css={{ gap: '$6' }}>
      <p>Copyright &copy; {new Date().getFullYear()} gBoole01</p>
      <Image
        priority
        src={smallSiteLogo}
        height={16}
        width={16}
        alt="gBoole01 Logo"
      />
      <p>All Rights Reserved</p>
    </Row>
  </footer>
)

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [legalsModalVisible, setLegalsModalVisible] = useState(false)
  const legalsModalHandler = () => setLegalsModalVisible(true)
  const legalsModalCloseHandler = () => {
    setLegalsModalVisible(false)
  }

  const [contactModalVisible, setContactModalVisible] = useState(false)
  const contactModalHandler = () => setContactModalVisible(true)
  const contactModalCloseHandler = () => {
    setContactModalVisible(false)
  }

  return (
    <div>
      <Header contactModalHandler={contactModalHandler} />
      <main>{children}</main>
      <Footer
        legalsModalHandler={legalsModalHandler}
        contactModalHandler={contactModalHandler}
      />
      <LegalsModal
        visible={legalsModalVisible}
        closeHandler={legalsModalCloseHandler}
      />
      <ContactModal
        visible={contactModalVisible}
        closeHandler={contactModalCloseHandler}
      />
    </div>
  )
}

export default Layout

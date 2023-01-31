import { useTheme as useNextTheme } from 'next-themes'
import {
  Button,
  Col,
  Container,
  Grid,
  Navbar,
  Row,
  useTheme,
  Link as NextUILink,
  Text,
} from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  RiCupFill,
  RiGithubFill,
  RiMailSendLine,
  RiMoonFill,
  RiStackOverflowFill,
  RiSunFill,
} from 'react-icons/ri'
import siteLogo from '../../public/images/logo-64.png'
import smallSiteLogo from '../../public/favicon-16x16.png'
import { SOCIAL_LINKS } from '../lib/constants'
import LegalsModal from './legals-modal'
import ContactModal from './contact-modal'
import { useContactModal } from '../contexts/ContactModalProvider'

const ThemeSwitcher = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()

  const handleClick = () => {
    if (type === 'light') setTheme('dark')
    else if (type === 'dark') setTheme('light')
  }

  return (
    <Button onPress={handleClick} bordered>
      {isDark ? <RiMoonFill /> : <RiSunFill />}
    </Button>
  )
}

const Header = () => {
  const router = useRouter()
  const { contactModalShowHandler } = useContactModal()

  return (
    <header>
      <Navbar variant="sticky" css={{ padding: '$4' }}>
        <Navbar.Brand>
          <Link href="/">
            <a>
              <Image src={siteLogo} alt="Website Logo" width={64} height={64} />
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          variant="highlight"
          hideIn="xs"
        >
          <Link href="/about">
            <Navbar.Link isActive={router.pathname === '/about'}>
              À Propos
            </Navbar.Link>
          </Link>
          <Link href="/blog">
            <Navbar.Link isActive={router.pathname === '/blog'}>
              Articles
            </Navbar.Link>
          </Link>
          <Link href="/resume">
            <Navbar.Link isActive={router.pathname === '/resume'}>
              C.V.
            </Navbar.Link>
          </Link>
        </Navbar.Content>
        <Navbar.Content>
          <Button.Group size="md">
            <ThemeSwitcher />
            <Button onPress={contactModalShowHandler}>
              <RiMailSendLine />
            </Button>
          </Button.Group>
        </Navbar.Content>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Collapse disableAnimation>
          <Navbar.CollapseItem isActive={router.pathname === '/about'}>
            <Link href="/about">À Propos</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem isActive={router.pathname === '/blog'}>
            <Link href="/blog">Articles</Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

const AbsoluteFooter = () => (
  <Row justify="center" align="center" css={{ gap: '$10' }}>
    <Text small b>
      Copyright &copy; {new Date().getFullYear()} gBoole01
    </Text>
    <Image
      priority
      src={smallSiteLogo}
      height={16}
      width={16}
      alt="gBoole01 Logo"
    />
    <Text small b>
      Tous droits réservés
    </Text>
  </Row>
)

type FooterProps = {
  legalsModalHandler: () => void
}

const Footer = ({ legalsModalHandler }: FooterProps) => {
  const { contactModalShowHandler } = useContactModal()

  return (
    <footer>
      <Grid.Container justify="center" gap={1}>
        <Grid xs={6} justify="space-around">
          <Link href="/">
            <NextUILink block>Accueil</NextUILink>
          </Link>
        </Grid>
        <Grid xs={6} justify="space-around">
          <NextUILink block onClick={contactModalShowHandler}>
            <RiMailSendLine />
            &nbsp;Contact
          </NextUILink>
        </Grid>
        <Grid xs={6} justify="space-around">
          <Link href="/blog">
            <NextUILink block>Articles</NextUILink>
          </Link>
        </Grid>
        <Grid xs={6} justify="space-around">
          <NextUILink
            block
            href={SOCIAL_LINKS.stackoverflow}
            target="_blank"
            isExternal
          >
            <RiStackOverflowFill />
            &nbsp;Stack Overflow
          </NextUILink>
        </Grid>
        <Grid xs={6} justify="space-around">
          <Link href="/about">
            <NextUILink block>À Propos</NextUILink>
          </Link>
        </Grid>
        <Grid xs={6} justify="space-around">
          <NextUILink
            block
            href={SOCIAL_LINKS.buymeacoffee}
            target="_blank"
            isExternal
          >
            <RiCupFill />
            &nbsp;Buy Me A Coffee
          </NextUILink>
        </Grid>
        <Grid xs={6} justify="space-around">
          <Link href="/resume">
            <NextUILink block>C.V .</NextUILink>
          </Link>
        </Grid>
        <Grid xs={6} justify="space-around">
          <NextUILink
            block
            href={SOCIAL_LINKS.github}
            target="_blank"
            isExternal
          >
            <RiGithubFill />
            &nbsp;Github
          </NextUILink>
        </Grid>
        <Grid xs={6} justify="space-around">
          <NextUILink block onClick={legalsModalHandler}>
            Mentions Légales
          </NextUILink>
        </Grid>
      </Grid.Container>
      <AbsoluteFooter />
    </footer>
  )
}

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { isDark } = useTheme()
  const backgroundColor = isDark ? 'black' : 'lightgray'

  const [legalsModalVisible, setLegalsModalVisible] = useState(false)
  const legalsModalHandler = () => setLegalsModalVisible(true)
  const legalsModalCloseHandler = () => {
    setLegalsModalVisible(false)
  }

  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        minHeight: '100vh',
        maxWidth: '100%',
      }}
    >
      <Row>
        <Col span={12}>
          <Header />
        </Col>
      </Row>
      <Row style={{ flexGrow: 1 }}>
        <Col span={12}>
          <Container sm>
            <main>{children}</main>
          </Container>
        </Col>
      </Row>
      <Row
        style={{
          flexShrink: 0,
          backgroundColor,
          borderTop: '1px solid lightgray',
          padding: '1rem 0',
        }}
      >
        <Col span={12}>
          <Container md>
            <Footer legalsModalHandler={legalsModalHandler} />
          </Container>
        </Col>
      </Row>
      <LegalsModal
        visible={legalsModalVisible}
        closeHandler={legalsModalCloseHandler}
      />
      <ContactModal />
    </Container>
  )
}

export default Layout

import {
  Button,
  Card,
  Collapse,
  Container,
  Divider,
  Grid,
  Link as NextUiLink,
  Row,
  Text,
} from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import {
  RiDownload2Fill,
  RiFocus2Line,
  RiMailSendLine,
  RiSeparator,
} from 'react-icons/ri'
import SeoHelper from '../components/seo-helper'
import opquastLogo from '../../public/images/opquast-expert-badge.png'
import { RESUME } from '../lib/constants'
import { useContactModal } from '../contexts/ContactModalProvider'

const ResumeIntro = () => {
  const { contactModalShowHandler } = useContactModal()
  return (
    <Card variant="flat">
      <Grid.Container gap={1} alignItems="center" css={{ padding: '$md' }}>
        <Grid xs={12} sm={8} css={{ display: 'flex', flexDirection: 'column' }}>
          <Text>
            Pour des raisons de confidentialité, les noms des personnes, écoles,
            et entreprises ne sont pas disponibles.
          </Text>
          <Text>
            Si vous souhaitez en apprendre plus sur moi,{' '}
            <Text b>n'hésitez pas à me contacter !</Text>
          </Text>
        </Grid>
        <Grid xs={12} sm={4} justify="center">
          <Button onPress={contactModalShowHandler} css={{ zIndex: '100' }}>
            <RiMailSendLine />
            &nbsp;Contact
          </Button>
        </Grid>
      </Grid.Container>
    </Card>
  )
}

const ResumeSkills = () => (
  <Container css={{ padding: '$md' }}>
    <Text h2>Compétences</Text>
    <Collapse.Group bordered accordion={false}>
      <Collapse title="Front-End">
        <Grid.Container>
          {RESUME.skills.frontEnd.map((skill, index) => (
            <Grid
              xs={12}
              sm={4}
              key={index}
              justify="center"
              css={{ textAlign: 'center' }}
            >
              {skill}
            </Grid>
          ))}
        </Grid.Container>
      </Collapse>
      <Collapse title="Back-End">
        <Grid.Container>
          {RESUME.skills.backEnd.map((skill, index) => (
            <Grid
              xs={12}
              sm={4}
              key={index}
              justify="center"
              css={{ textAlign: 'center' }}
            >
              {skill}
            </Grid>
          ))}
        </Grid.Container>
      </Collapse>
      <Collapse title="CMS">
        <Grid.Container>
          {RESUME.skills.CMS.map((skill, index) => (
            <Grid
              xs={12}
              sm={4}
              key={index}
              justify="center"
              css={{ textAlign: 'center' }}
            >
              {skill}
            </Grid>
          ))}
        </Grid.Container>
      </Collapse>
      <Collapse title="Outils de Développement">
        <Grid.Container>
          {RESUME.skills.devTools.map((skill, index) => (
            <Grid xs={12} sm={4} key={index} justify="center">
              {skill}
            </Grid>
          ))}
        </Grid.Container>
      </Collapse>
    </Collapse.Group>
  </Container>
)

const ResumeExperiences = () => (
  <Card variant="flat">
    <Container css={{ padding: '$md' }}>
      <Text h2>Expériences</Text>
      <Grid.Container>
        {RESUME.experiences.map(
          (
            { startDate, endDate, company, title, duration, missions, type },
            index,
          ) => (
            <Grid
              xs={12}
              key={index}
              css={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '$lg',
              }}
            >
              <Text h3 color="primary">
                {startDate}
                {endDate ? ` - ${endDate}` : ''}: {title}
              </Text>
              <Text b size={28}>
                {company} - {type} - {duration}
              </Text>
              <Collapse
                title="Mes Missions"
                expanded
                divider={false}
                contentLeft={<RiFocus2Line fill="#005FCC" size={40} />}
              >
                {missions.map((mission, missionIndex) => (
                  <Text size={18} key={missionIndex} css={{ margin: '$xs' }}>
                    {mission}
                  </Text>
                ))}
              </Collapse>
              {index !== RESUME.experiences.length - 1 && <Divider />}
            </Grid>
          ),
        )}
      </Grid.Container>
    </Container>
  </Card>
)

const ResumeDiplomas = () => (
  <Container css={{ padding: '0' }}>
    <Text h2 css={{ textAlign: 'center' }}>
      Diplômes
    </Text>
    {RESUME.diplomas.map(({ title, year, type }, index) => (
      <Container key={index}>
        <Row>
          <Text h3>
            {year}: {type}
          </Text>
        </Row>
        <Row justify="space-between">
          <Text>{title}</Text>
          {title === 'Opquast - Niveau Expert' && (
            <Image
              priority
              src={opquastLogo}
              height={76}
              width={100}
              alt="opquast expert badge"
            />
          )}
        </Row>
      </Container>
    ))}
  </Container>
)

const ResumeInterests = () => (
  <Container css={{ padding: '0' }}>
    <Text h2 css={{ textAlign: 'center' }}>
      Interêts
    </Text>
    <Container>
      {RESUME.interests.map((interest, index) => (
        <Row align="center">
          <RiSeparator fill="#005FCC" size={12} />
          <Text size={18} key={index}>
            &nbsp;{interest}
          </Text>
        </Row>
      ))}
      <Row css={{ marginTop: '$sm' }}>
        <Text size={18}>
          Pleins d'autres sujets que vous pourrez découvrir sur{' '}
          <Link href="/blog">
            <NextUiLink>mon blog</NextUiLink>
          </Link>
          .
        </Text>
      </Row>
    </Container>
  </Container>
)

const ResumeOutro = () => (
  <Card variant="flat">
    <Grid.Container gap={1} alignItems="center" css={{ padding: '$md' }}>
      <Grid xs={12} sm={8}>
        <Text b size={20}>
          Mon C.V. vous a interessé ?
        </Text>
      </Grid>
      <Grid xs={12} sm={4} justify="center">
        <Button
          onPress={() => {
            window.open('CV2023_gBoole01.pdf')
          }}
        >
          <RiDownload2Fill />
          &nbsp;Télécharger
        </Button>
      </Grid>
    </Grid.Container>
  </Card>
)

const Resume = () => (
  <Container css={{ margin: '$xl auto', display: 'flex', gap: '$md' }}>
    <SeoHelper title="Curriculum Vitae" description="Le CV de gBoole01" />
    <Text h1 color="primary">
      Curriculum Vitae
    </Text>

    <ResumeIntro />
    <ResumeSkills />
    <ResumeExperiences />
    <Grid.Container>
      <Grid xs={12} sm={6} css={{ margin: '$xs 0' }}>
        <ResumeDiplomas />
      </Grid>
      <Grid xs={12} sm={6} css={{ margin: '$xs 0' }}>
        <ResumeInterests />
      </Grid>
    </Grid.Container>
    <ResumeOutro />
  </Container>
)

export default Resume

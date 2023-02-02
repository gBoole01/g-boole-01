import {
  Avatar,
  Button,
  Card,
  Collapse,
  Container,
  Grid,
  Link,
  Row,
  Text,
} from '@nextui-org/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import SeoHelper from '../components/seo-helper'

const IntroSection = () => (
  <Grid.Container gap={4} css={{ padding: 0, '@sm': { padding: 'xs' } }}>
    <Grid xs={12} sm={5}>
      <Card>
        <Card.Header
          css={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingBottom: '0',
          }}
        >
          <Avatar
            src="/images/George_Boole_color.jpg"
            css={{ size: '150px' }}
          />
          <Text b size={'$xl'}>
            George Boole
          </Text>
        </Card.Header>
        <Card.Body>
          <dl>
            <Container css={{ padding: '0 $xs', gap: '$xs', display: 'flex' }}>
              <Row justify="space-between">
                <dt>
                  <Text b>Naissance :</Text>
                </dt>
              </Row>
              <Row justify="flex-end">
                <dd>2 Novembre 1815</dd>
              </Row>
              <Row justify="space-between">
                <dt>
                  <Text b>Décès :</Text>
                </dt>
              </Row>
              <Row justify="flex-end">
                <dd style={{ textAlign: 'end' }}>8 Décembre 1864 (49 ans)</dd>
              </Row>
              <Row justify="space-between">
                <dt>
                  <Text b>Nationalité :</Text>
                </dt>
              </Row>
              <Row justify="flex-end">
                <dd>🇬🇧 Britannique</dd>
              </Row>
              <Row>
                <dt>
                  <Text b>Activités :</Text>
                </dt>
              </Row>
              <Row justify="flex-end">
                <dd style={{ textAlign: 'end' }}>
                  Mathématicien, logicien, philosophe, informaticien
                </dd>
              </Row>
            </Container>
          </dl>
        </Card.Body>
      </Card>
    </Grid>
    <Grid xs={12} sm={6} css={{ paddingRight: '0' }}>
      <div>
        <Text>
          Mon nom, <Text b>"gBoole01"</Text>, s'inspire de{' '}
          <Link
            href="https://fr.wikipedia.org/wiki/George_Boole"
            target="_blank"
            isExternal
          >
            George Boole
          </Link>
          .
        </Text>
        <Text css={{ marginTop: '$md' }}>
          Il est considéré comme le père de l'algèbre booléenne, une forme de
          mathématiques qui utilise des opérateurs booléens{' '}
          <Text b>(true/false)</Text> pour représenter et manipuler des données.
          Cette méthode a été fondamentale lors du développement de
          l'informatique car elle a permis de traduire des problèmes complexes
          en opérations simples.
        </Text>
        <Text css={{ marginTop: '$md' }}>
          Son travail a influencé de nombreux mathématiciens et ingénieurs qui
          ont utilisé ses concepts pour développer les premiers ordinateurs et
          les premiers circuits logiques.
        </Text>
        <Text css={{ marginTop: '$md' }}>
          De nos jours, les opérateurs booléens existent dans tous les langages
          de programmation et on utilise souvent le symbole <Text b>"&"</Text>{' '}
          pour représenter l'opération <Text b>"ET"</Text>, et le symbole{' '}
          <Text b>"|"</Text> pour représenter l'opération <Text b>"OU"</Text>.
        </Text>
      </div>
    </Grid>
  </Grid.Container>
)

const ResumeSection = () => {
  const router = useRouter()
  return (
    <Card variant="bordered" css={{ padding: '$md', margin: '$xl 0' }}>
      <Row>
        <Text size={20} css={{ textAlign: 'center' }}>
          Sinon, je suis un développeur Full Stack, mes langages de prédilection
          sont Javascript, Typescript et PHP, je suis passionné par la création
          de sites web et d'applications performantes et fiables. Je suis
          toujours à la recherche d'opportunités pour apprendre et développer
          mes compétences. Je suis motivé à rejoindre une équipe de
          professionnels pour travailler ensemble sur des projets passionnants.
        </Text>
      </Row>
      <Row justify="center" css={{ margin: '$lg 0' }}>
        <Button onPress={() => router.push('/resume')}>C.V.</Button>
      </Row>
    </Card>
  )
}

const BioSection = () => (
  <Container css={{ margin: '$xl 0', padding: '0' }}>
    <Text h2>Pourquoi devenir Développeur ?</Text>
    <Text size={18} css={{ marginTop: '$md' }}>
      Le métier de dévelopeur s'est imposé comme un choix naturel pour moi en
      raison de plusieurs facteurs personnels. Tout d'abord, j'ai toujours été{' '}
      <Text b color="primary">
        passionné par la technologie
      </Text>{' '}
      et la façon dont elle peut être utilisée pour{' '}
      <Text b color="primary">
        résoudre des problèmes complexes
      </Text>
      . La programmation informatique me permet de concrétiser cette passion en
      me donnant les moyens de créer des solutions logicielles innovantes.
    </Text>
    <Text size={18} css={{ marginTop: '$md' }}>
      De plus, j'apprécie énormément le{' '}
      <Text b color="primary">
        défi intellectuel
      </Text>{' '}
      que représente la programmation. J'aime résoudre des problèmes logiques et
      trouver des moyens de rendre les processus plus efficaces. Cette activité
      me donne l'occasion de continuer à développer mon esprit critique et de
      tester mes capacités de résolution de problèmes.
    </Text>
    <Text size={18} css={{ marginTop: '$md' }}>
      Enfin, j'ai également été attiré par{' '}
      <Text b color="primary">
        la diversité
      </Text>{' '}
      des opportunités offertes par la programmation informatique. Aujourd'hui,
      le numérique et l'informatique sont au coeur de presque tous les secteurs,
      et je sais que ces compétences permettent d'explorer de nombreux métiers.
    </Text>
    <Text size={18} css={{ marginTop: '$md' }}>
      En résumé, mes passions, mon goût pour les défis intellectuels et ma quête
      de diversité dans ma carrière sont les raisons principales qui m'ont
      poussé à choisir la voie de la programmation informatique.
    </Text>
  </Container>
)

const SetupSection = () => (
  <Container css={{ padding: 0 }}>
    <Text h2>Comment j'exerce mon métier ?</Text>
    <Collapse.Group splitted accordion={false} css={{ padding: '0' }}>
      <Collapse
        title="Mon installation logicielle"
        subtitle="L'ensemble des outils utilisés pour développer"
      >
        <Grid.Container>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Système d'exploitation :&nbsp;</Text>
            <Text>Linux - Debian 11</Text>
          </Grid>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Environnement de bureau :&nbsp;</Text>
            <Text>Gnome</Text>
          </Grid>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Shell :&nbsp;</Text>
            <Text>Bash / Zsh</Text>
          </Grid>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Éditeur de code :&nbsp;</Text>
            <Text>Visual Studio Code</Text>
          </Grid>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Navigateurs Internet :&nbsp;</Text>
            <Text>Firefox / Chromium</Text>
          </Grid>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Outil de Design :&nbsp;</Text>
            <Text>Figma / Photoshop / GIMP</Text>
          </Grid>
        </Grid.Container>
      </Collapse>
      <Collapse
        title="Mon installation matérielle"
        subtitle="Les équipements à ma disposition pour développer"
      >
        <Grid.Container>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Ordinateur Portable :&nbsp;</Text>
            <Text>Dell - Inspiron G5</Text>
          </Grid>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Souris :&nbsp;</Text>
            <Text>Advance Vertical+</Text>
          </Grid>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Écouteurs :&nbsp;</Text>
            <Text>Sennheiser CX 300 S</Text>
          </Grid>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Smartphone :&nbsp;</Text>
            <Text>iPhone</Text>
          </Grid>
        </Grid.Container>
      </Collapse>
      <Collapse
        title="Ma liste de souhaits"
        subtitle="Ce dont j'aurai besoin pour m'équiper de manière optimale !"
      >
        <Grid.Container>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Ordinateur Portable :&nbsp;</Text>
            <Text>MacBook Pro 14"</Text>
          </Grid>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>(Choix 2) :&nbsp;</Text>
            <Text>Dell - Latitude 5420</Text>
          </Grid>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Souris :&nbsp;</Text>
            <Text>Logithech MX Vertical</Text>
          </Grid>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Clavier :&nbsp;</Text>
            <Text>Das Keyboard 6 Professional</Text>
          </Grid>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Écrans :&nbsp;</Text>
            <Text>Double écrans avec Bras ajustables</Text>
          </Grid>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Casque :&nbsp;</Text>
            <Text>Sennheiser Momentum 4 Wireless</Text>
          </Grid>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Bureau :&nbsp;</Text>
            <Text>Standing Desk motorisé</Text>
          </Grid>
          <Grid xs={12} css={{ flexWrap: 'wrap' }}>
            <Text b>Smartphone :&nbsp;</Text>
            <Text>iPhone 14</Text>
          </Grid>
        </Grid.Container>
      </Collapse>
    </Collapse.Group>
  </Container>
)

const About: NextPage = () => (
  <Container css={{ margin: '$xl auto' }}>
    <SeoHelper title="À Propos" description="À Propos de gBoole01" />

    <section>
      <Text h1 color="primary">
        Qui suis-je ?
      </Text>
      <IntroSection />
      <ResumeSection />
      <BioSection />
      <SetupSection />
    </section>
  </Container>
)

export default About

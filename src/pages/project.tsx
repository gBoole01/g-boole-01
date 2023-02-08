import {
  Badge,
  Button,
  Container,
  Table,
  Text,
  Tooltip,
} from '@nextui-org/react'
import { useRouter } from 'next/router'
import { RiEyeFill, RiGithubFill, RiToolsFill } from 'react-icons/ri'
import Project from '../types/Project'
import { getAllProjects } from '../lib/getProjects'
import SeoHelper from '../components/seo-helper'
import { BADGES_URL } from '../lib/constants'

type BlogProps = {
  allProjects: Project[]
}

const Blog = ({ allProjects }: BlogProps) => {
  const router = useRouter()
  return (
    <Container css={{ margin: '$xl auto', padding: '0' }}>
      <SeoHelper title="Projets" description="Projets de gBoole01" />
      <Text h1 color="primary">
        Projets
      </Text>
      <Table
        bordered
        containerCss={{ width: '100%' }}
        css={{ textAlign: 'center' }}
        aria-label="gBoole01's Project Table"
      >
        <Table.Header>
          <Table.Column css={{ textAlign: 'center' }}>NOM</Table.Column>
          <Table.Column css={{ textAlign: 'center' }}>LANGAGE</Table.Column>
          <Table.Column>OUTILS</Table.Column>
          <Table.Column css={{ textAlign: 'center' }}>STATUT</Table.Column>
          <Table.Column css={{ textAlign: 'center', width: '5%' }}>
            &nbsp;
          </Table.Column>
          <Table.Column css={{ textAlign: 'center', width: '5%' }}>
            &nbsp;
          </Table.Column>
        </Table.Header>
        <Table.Body>
          {allProjects.map(
            (
              { title, language, slug, status, repositoryUrl, tools },
              index,
            ) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <Text b>{title}</Text>
                </Table.Cell>
                <Table.Cell>
                  <img src={BADGES_URL[language]} />
                </Table.Cell>
                <Table.Cell css={{ paddingLeft: '$5' }}>
                  <Tooltip color="primary" content={tools.join(' / ')}>
                    <RiToolsFill size="30" />
                  </Tooltip>
                </Table.Cell>
                <Table.Cell>
                  {status === 'Actif' && <Badge color="success">Actif</Badge>}
                  {status === 'En pause' && (
                    <Badge color="warning">En pause</Badge>
                  )}
                  {status === 'Terminé' && <Badge>Terminé</Badge>}
                </Table.Cell>
                <Table.Cell css={{ width: '5%' }}>
                  <Tooltip content="Voir le Projet" placement="bottom">
                    <Button
                      auto
                      flat
                      onPress={() => router.push(`/project/${slug}`)}
                    >
                      <RiEyeFill size="20" />
                    </Button>
                  </Tooltip>
                </Table.Cell>
                <Table.Cell css={{ width: '5%' }}>
                  <Tooltip content="Voir le Code" placement="bottom">
                    <Button
                      color="secondary"
                      auto
                      flat
                      onPress={() => window.open(repositoryUrl, '_blank')}
                    >
                      <RiGithubFill size="20" />
                    </Button>
                  </Tooltip>
                </Table.Cell>
              </Table.Row>
            ),
          )}
        </Table.Body>
      </Table>
    </Container>
  )
}

export default Blog

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    'title',
    'slug',
    'language',
    'status',
    'repositoryUrl',
    'tools',
  ])

  return {
    props: {
      allProjects,
    },
  }
}

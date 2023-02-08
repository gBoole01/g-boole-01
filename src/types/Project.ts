type Project = {
  content: string
  publicationDate: string
  modificationDate: string
  slug: string
  title: string
  language: 'typescript'
  tools: string[]
  status: 'En pause' | 'Actif' | 'Terminé'
  repositoryUrl: 'string'
}

export default Project

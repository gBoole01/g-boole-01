import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const projectsDirectory = join(process.cwd(), '_projects')

export function getProjectSlugs() {
  return readdirSync(projectsDirectory)
}

export function getProjectBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const filePath = join(projectsDirectory, `${realSlug}.md`)
  const fileContents = readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }
  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllProjects(fields: string[] = []) {
  const slugs = getProjectSlugs()
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    .sort((project1, project2) =>
      project1.publicationDate > project2.publicationDate ? -1 : 1,
    )
  return projects
}

export function getLatestProjects(n: number, fields: string[] = []) {
  const slugs = getProjectSlugs()
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    .sort((project1, project2) =>
      project1.publicationDate > project2.publicationDate ? -1 : 1,
    )
    .slice(0, n)
  return projects
}

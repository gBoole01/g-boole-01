import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const katasDirectory = join(process.cwd(), '_katas')

export function getKataSlugs() {
  return readdirSync(katasDirectory)
}

export function getKataBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const filePath = join(katasDirectory, `${realSlug}.md`)
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

export function getAllKatas(fields: string[] = []) {
  const slugs = getKataSlugs()
  const katas = slugs
    .map((slug) => getKataBySlug(slug, fields))
    .sort((kata1, kata2) =>
      kata1.publicationDate > kata2.publicationDate ? 1 : -1,
    )
  return katas
}

export function getLatestKatas(n: number, fields: string[] = []) {
  const slugs = getKataSlugs()
  const katas = slugs
    .map((slug) => getKataBySlug(slug, fields))
    .sort((kata1, kata2) =>
      kata1.publicationDate > kata2.publicationDate ? 1 : -1,
    )
    .slice(0, n)
  return katas
}

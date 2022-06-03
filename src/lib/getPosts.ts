import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
    return readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '');
    const filePath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    type Items = {
        [key: string]: string;
    }
    const items: Items = {}

    fields.forEach(field => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }
        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    })

    return items;
}

export function getAllPosts(fields: string[] = []) {
    const slugs = getPostSlugs();
    const posts = slugs
        .map(slug => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    ;

    return posts;
}

export function getLatestPosts(n: number, fields: string[] = []) {
    const slugs = getPostSlugs();
    const posts = slugs
        .map(slug => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
        .slice(0, n)
    ;

    return posts;
}

export function getRandomPost(excludedSlug?: string, fields: string[] = []) {
    let slugs = getPostSlugs();
    if (excludedSlug) {
        slugs = slugs.filter(slug => slug !== `${excludedSlug}.md`);
    }

    const randomSlug = slugs[Math.floor(Math.random()*slugs.length)]
    const post = getPostBySlug(randomSlug, fields);

    return post;
}

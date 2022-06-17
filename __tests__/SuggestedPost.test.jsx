import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import SuggestedPost from '../src/components/suggested-post'

const dummyPost = {
    title: 'test',
    date: 'test',
    duration: 'test',
    image: 'test',
    excerpt: 'test',
    slug: 'test',
}

test('SuggestedPost', () => {
    render(<SuggestedPost 
        title={dummyPost.title}
        date={dummyPost.date}
        duration={dummyPost.duration}
        image={dummyPost.image}
        excerpt={dummyPost.excerpt}
        slug={dummyPost.slug}
    />)
    const postTitle = within(screen.getByRole('heading', { level:2, name: 'test' }))
    const postImage = within(screen.getByRole('img', { name: `Imagitems-starte of the article: ${dummyPost.title}` }))
    const arrowRightLogo = within(screen.getByRole('img', { name: 'arrow right logo' }))
    const readMorelink = within(screen.getByRole('link', { name: 'Lire la suite arrow right logo' }))
    expect(
        postTitle,
        postImage,
        arrowRightLogo,
        readMorelink,
    ).toBeDefined()
})
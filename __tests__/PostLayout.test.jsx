import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import PostLayout from '../src/components/post-layout'

const dummyPost = {
    title: 'test',
    date: 'test',
    duration: 'test',
    image: 'test',
    content: 'test',
}


test('PostLayout', () => {
    render(<PostLayout 
        title={dummyPost.title}
        date={dummyPost.date}
        duration={dummyPost.duration}
        image={dummyPost.image}
        content={dummyPost.content}
    />)
    const article = within(screen.getByRole('article'))
    const postTitle = within(screen.getByRole('heading', { level:1, name: 'test' }))
    const postImage = within(screen.getByRole('img', { name: `Image of the article: ${dummyPost.title}` }))
    expect(
        article,
        postTitle,
        postImage,
    ).toBeDefined()
})
import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import CustomLink from '../src/components/custom-link'

test('CustomLink', () => {
    render(<CustomLink label='test' href='/'/>)
    const link = within(screen.getByRole('link', { name: 'test' }))
    expect(
        link
    ).toBeDefined()
})
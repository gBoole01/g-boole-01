import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import ReadMore from '../src/components/read-more'

test('ReadMore', () => {
    render(<ReadMore 
        slug='test'
    />)
    const arrowRightLogo = within(screen.getByRole('img', { name: 'arrow right logo' }))
    const readMorelink = within(screen.getByRole('link', { name: 'Lire la suite arrow right logo' }))
    expect(
        arrowRightLogo,
        readMorelink,
    ).toBeDefined()
})
import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Intro from '../src/components/intro'

test('Intro', () => {
    render(<Intro />)
    const heading = within(screen.getByRole('heading')).getByText('Qui suis-je ?')
    expect(heading).toBeDefined()
})
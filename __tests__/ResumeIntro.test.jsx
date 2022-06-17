import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import ResumeIntro from '../src/components/resume-intro'

test('ResumeIntro', () => {
    render(<ResumeIntro />)
    const heading = within(screen.getByRole('heading', { level:1, name: 'Curriculum Vitae' }))
    const button = within(screen.getByRole('button', { name: 'Contact' }))
    expect(
        heading,
        button
    ).toBeDefined()
})
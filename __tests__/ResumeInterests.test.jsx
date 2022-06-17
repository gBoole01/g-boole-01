import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react' 
import ResumeInterests from '../src/components/resume-interests'

test('ResumeInterests', () => {
    render(<ResumeInterests />)
    const sectionHeading = within(screen.getByRole('heading', { level:2, name: 'Interêts' }))
    const linkHeading = within(screen.getByRole('link', { name: 'mon blog' }))
    expect(
        sectionHeading,
        linkHeading,
    ).toBeDefined()
})
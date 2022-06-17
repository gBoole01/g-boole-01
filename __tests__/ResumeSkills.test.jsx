import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import ResumeSkills from '../src/components/resume-skills'

test('ResumeSkills', () => {
    render(<ResumeSkills />)
    const sectionHeading = within(screen.getByRole('heading', { level:2, name: 'Compétences' }))
    const frontEndHeading = within(screen.getByRole('heading', { level:3, name: 'Front-End' }))
    const backEndHeading = within(screen.getByRole('heading', { level:3, name: 'Back-End' }))
    const CMSHeading = within(screen.getByRole('heading', { level:3, name: 'CMS' }))
    const devToolsHeading = within(screen.getByRole('heading', { level:3, name: 'Outils de Développement' }))
    expect(
        sectionHeading,
        frontEndHeading,
        backEndHeading,
        CMSHeading,
        devToolsHeading,
    ).toBeDefined()
})
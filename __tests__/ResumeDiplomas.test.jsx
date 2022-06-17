import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react' 
import ResumeDiplomas from '../src/components/resume-diplomas'

test('ResumeDiplomas', () => {
    render(<ResumeDiplomas />)
    const sectionHeading = within(screen.getByRole('heading', { level:2, name: 'Diplômes' }))
    const diploma1Heading = within(screen.getByRole('heading', { level:3, name: '2012: Bac Technologique' }))
    const diploma2Heading = within(screen.getByRole('heading', { level:3, name: '2020: Titre RNCP (BAC+2)' }))
    const diploma3Heading = within(screen.getByRole('heading', { level:3, name: '2021: Certification Qualité Web' }))
    const diploma3logoHeading = within(screen.getByRole('img', { name: 'opquast expert badge' }))

    expect(
        sectionHeading,
        diploma1Heading,
        diploma2Heading,
        diploma3Heading,
        diploma3logoHeading,
    ).toBeDefined()
})
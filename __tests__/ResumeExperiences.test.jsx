import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react' 
import ResumeExperiences from '../src/components/resume-experiences'

test('ResumeExperiences', () => {
    render(<ResumeExperiences />)
    const sectionHeading = within(screen.getByRole('heading', { level:2, name: 'Expériences' }))
    const job3Heading = within(screen.getByRole('heading', { level:3, name: '2021-2022: Full Stack Developer' }))
    const job2Heading = within(screen.getByRole('heading', { level:3, name: '2020: Full Stack Developer' }))
    const job1Heading = within(screen.getByRole('heading', { level:3, name: '2016-2018: Manager' }))
    expect(
        sectionHeading,
        job3Heading,
        job2Heading,
        job1Heading,
    ).toBeDefined()
})
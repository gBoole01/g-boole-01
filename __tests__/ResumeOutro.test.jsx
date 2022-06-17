import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import ResumeOutro from '../src/components/resume-outro'

test('ResumeOutro', () => {
    render(<ResumeOutro />)
    const link = within(screen.getByRole('link', { name: 'Télécharger' }))
    expect(
        link
    ).toBeDefined()
})
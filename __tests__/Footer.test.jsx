import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Footer from '../src/components/footer'

test('Footer', () => {
    render(<Footer />)
    const homeLink = within(screen.getByRole('link', { name: 'Accueil' }))
    const blogLink = within(screen.getByRole('link', { name: 'Blog' }))
    const contactLink = within(screen.getByRole('link', { name: 'Contact' }))
    const aboutLink = within(screen.getByRole('link', { name: 'À Propos' }))
    const resumeLink = within(screen.getByRole('link', { name: 'Curriculum Vitae' }))
    const githubLink = within(screen.getByRole('link', { name: 'github logo' }))
    const stackOverflowLink = within(screen.getByRole('link', { name: 'stack overflow logo' }))
    const buyMeACoffeLink = within(screen.getByRole('link', { name: 'buy me a coffee logo' }))
    const legalsLink = within(screen.getByRole('link', { name: 'Mentions Légales' }))
    const githubLogo = within(screen.getByRole('img', { name: 'github logo' }))
    const stackOverflowLogo = within(screen.getByRole('img', { name: 'stack overflow logo' }))
    const buyMeACoffeeLogo = within(screen.getByRole('img', { name: 'buy me a coffee logo' }))
    expect(
        homeLink,
        blogLink,
        contactLink,
        aboutLink,
        resumeLink,
        githubLink,
        stackOverflowLink,
        buyMeACoffeLink,
        legalsLink,
        githubLogo,
        stackOverflowLogo,
        buyMeACoffeeLogo
    ).toBeDefined()
})
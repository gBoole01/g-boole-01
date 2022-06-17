import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Button from '../src/components/button'

test('Button', () => {
    render(<Button label='test' href='/'/>)
    const button = within(screen.getByRole('button', { name: 'test' }))
    expect(
        button
    ).toBeDefined()
})
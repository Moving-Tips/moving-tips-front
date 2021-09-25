import React from 'react'
import { render, screen } from '@testing-library/react'
import AccountPage from "./AccountPage"

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

test('test AccountPage', () => {
  // const elem = render(<AccountPage/>)
  // const linkElement = elem.getByText(/Informações da conta/i)
  // expect(linkElement).toBeInTheDocument()
})

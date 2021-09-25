import React from 'react'
import { render, screen } from '@testing-library/react'
import Heading2 from "components/Heading/Heading2"

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

test('test Heading2', () => {
  const heading = "Experiências"
  render(<Heading2
    heading={heading}
  />)
  const linkElement = screen.getByText(/Experiências/i)
  expect(linkElement).toBeInTheDocument()
})

import React from 'react'
import { render } from '@testing-library/react'
import FormEmail from "shared/EmailInput/FormEmail"

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

test('test FormEmail', () => {
  const tree = render(<FormEmail/>)
  const label = tree.getByLabelText("Email address")
  expect(label).toBeInTheDocument()
})

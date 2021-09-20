import React from 'react'
import { render } from '@testing-library/react'
import PasswordInput from "shared/PasswordInput/PasswordInput"

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

test('test PasswordInput', () => {
  const tree = render(<PasswordInput/>)
  const label = tree.getByLabelText("Password")
  expect(label).toBeInTheDocument()
})

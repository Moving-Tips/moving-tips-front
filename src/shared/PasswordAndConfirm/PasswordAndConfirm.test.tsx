import React from 'react'
import { render } from '@testing-library/react'
import PasswordAndConfirm from "shared/PasswordAndConfirm/PasswordAndConfirm"

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

test('test PasswordAndConfirm', () => {
  const tree = render(<PasswordAndConfirm/>)
  const label = tree.getByLabelText("Password")
  expect(label).toBeInTheDocument()
  const label2 = tree.getByLabelText("Confirm Password")
  expect(label2).toBeInTheDocument()
})

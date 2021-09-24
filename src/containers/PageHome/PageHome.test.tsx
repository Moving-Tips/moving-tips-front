import React from 'react'
import { render, screen } from '@testing-library/react'
import HeaderFilter from "./HeaderFilter"

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

test('test HeaderFilter', () => {
  const heading = "Bairros destaque"
  const subHeading = "Lugares populares para se hospedar que a Moving tips recomenda para você"
  const tabs = ["São Paulo", "Santo André", "Rio de Janeiro", "Brasília"]
  render(<HeaderFilter
    tabActive={"São Paulo"}
    subHeading={subHeading}
    tabs={tabs}
    heading={heading}
    onClickTab={() => {
    }}
  />)
  const linkElement = screen.getByText(/Lugares populares para se hospedar que a Moving tips recomenda para você/i)
  expect(linkElement).toBeInTheDocument()
})

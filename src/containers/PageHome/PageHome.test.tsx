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
  const heading = "Featured places to stay"
  const subHeading = "Popular places to stay that Chisfis recommends for you"
  const tabs = ["New York", "Tokyo", "Paris", "London"]
  render(<HeaderFilter
    tabActive={"New York"}
    subHeading={subHeading}
    tabs={tabs}
    heading={heading}
    onClickTab={() => {
    }}
  />)
  const linkElement = screen.getByText(/Popular places to stay that Chisfis recommends for you/i)
  expect(linkElement).toBeInTheDocument()
})

import React from 'react'
import {render} from '@testing-library/react'
import {createRoot} from 'react-dom/client'

import App from './App'
import userEvent from '@testing-library/user-event'
// should be able to navigate to /search/:searchTerm and see the search results
test.skip('renders search results', () => {
  render(<App />)
  const searchTerm = 'mountain'
  const {getByText} = render(<App />)
  const searchInput = getByText(/Search.../)

  userEvent.click(searchInput)

  const searchResults = getByText(searchTerm)
  expect(searchResults).toBeInTheDocument()
})

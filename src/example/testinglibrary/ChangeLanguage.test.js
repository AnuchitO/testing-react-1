import ExampleChangeLanguage from './ChangeLanguage'
import {render, fireEvent, screen} from '@testing-library/react'

describe('ExampleChangeLanguage', () => {
  test('show show language by default', () => {
    render(<ExampleChangeLanguage />)

    expect(screen.getByText('Language: 🇹🇭 ไทย')).toBeInTheDocument()
  })

  test('change language', () => {
    render(<ExampleChangeLanguage />)
    expect(screen.getByText(/Change Language/i)).toBeInTheDocument()

    fireEvent.click(screen.getByText('Change Language'))

    expect(screen.getByText('Language: 🏴󠁧󠁢󠁥󠁮󠁧󠁿 English')).toBeInTheDocument()
  })

  test('have backgroud color red', () => {
    render(<ExampleChangeLanguage />)
    expect(screen.getByText(/Change Language/i)).toBeInTheDocument()

    fireEvent.click(screen.getByText('Change Language'))

    expect(screen.getByText('Language: 🏴󠁧󠁢󠁥󠁮󠁧󠁿 English')).toHaveAttribute(
      'style',
      'background-color: green;'
    )
  })
})

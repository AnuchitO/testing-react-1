import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExampleCounter from './CounterUpDown'

test('should show default value', () => {
  render(<ExampleCounter />)

  expect(screen.getByText('number: 0')).toBeInTheDocument()
})

test('should show 1 when Click Count UP', () => {
  render(<ExampleCounter />)

  const button = screen.getByText('Count UP')
  userEvent.click(button)

  expect(screen.getByText('number: 1')).toBeInTheDocument()
})

test('counter up and down', () => {
  render(<ExampleCounter />)
  const up = screen.getByText(/Count UP/i)
  userEvent.click(up)
  expect(screen.getByText('number: 1')).toBeInTheDocument()

  const down = screen.getByText(/Count DOWN/i)
  userEvent.click(down)

  expect(screen.getByText(/0/i)).toBeInTheDocument()
})

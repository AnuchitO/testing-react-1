import {fireEvent, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExampleCounter from './CounterUpDown'

test('should show default value', () => {
  const {getByText} = render(<ExampleCounter />)

  expect(getByText('number: 0')).toBeInTheDocument()
})

test('should show 1 when Click Count UP', () => {
  const {getByText} = render(<ExampleCounter />)

  const button = getByText('Count UP')
  userEvent.click(button)

  expect(getByText('number: 1')).toBeInTheDocument()
})

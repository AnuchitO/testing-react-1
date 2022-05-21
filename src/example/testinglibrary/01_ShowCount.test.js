import {fireEvent, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ShowCounter from './01_ShowCount'

test('show ShowCounter', () => {
  render(<ShowCounter />)

  expect(screen.getByText('Who count: 0 times')).toBeInTheDocument()
})

test('input user', () => {
  render(<ShowCounter />)

  const input = screen.getByPlaceholderText('Who count')
  fireEvent.input(input, {target: {value: 'AnuchitO@NOng'}})
  // userEvent.type(input, 'AnuchitO@NOng')

  expect(screen.getByText('AnuchitO@NOng: 0 times')).toBeInTheDocument()
})

test('get by role user', () => {
  render(<ShowCounter />)

  const input = screen.getByRole('textbox', {name: 'name'})
  fireEvent.input(input, {target: {value: 'AnuchitO@NOng'}})
  // userEvent.type(input, 'AnuchitO@NOng')

  const btn = screen.getByRole('button', {name: 'Click here'})
  userEvent.click(btn)

  expect(screen.getByText('AnuchitO@NOng: 1 times')).toBeInTheDocument()
})

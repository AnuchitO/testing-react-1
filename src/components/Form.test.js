import React from 'react'
import {render, act, screen} from '@testing-library/react'
import Form from './Form'
import userEvent from '@testing-library/user-event'

describe('Form Search', () => {
  test('renders the form', async () => {
    const fn = jest.fn()
    const {getByRole} = render(<Form handleSubmit={fn} />)

    const search = await getByRole('textbox', {name: 'search'})
    const btn = getByRole('button')

    userEvent.type(search, 'mountain')
    userEvent.click(btn)

    expect(fn).toHaveBeenCalledWith('mountain')
  })
})
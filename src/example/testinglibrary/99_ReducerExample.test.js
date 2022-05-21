import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import ReducerExample from './99_ReducerExample'

describe('test ReducerExample', () => {
  it('shows success message after confirm button is clicked', () => {
    render(<ReducerExample />)

    expect(screen.getByText(/waiting/i)).toBeInTheDocument()

    fireEvent.click(screen.getByText('Confirm'))

    expect(screen.getByText('Confirmed!')).toBeInTheDocument()
  })
})

import React from 'react'
import {render, screen} from '@testing-library/react'
import Gallery from './Gallery'

describe('Gallery', () => {
  test('Mountain image should have been shown', () => {
    const data = [
      {
        farm: 66,
        server: '65535',
        id: '161518098',
        secret: 'c9f9f9f9f9',
        title: 'Mountain',
      },
    ]
    const {getByAltText} = render(<Gallery data={data} />)

    const imgs = getByAltText('Mountain')

    expect(imgs).toHaveAttribute(
      'src',
      'https://farm66.staticflickr.com/65535/161518098_c9f9f9f9f9_m.jpg'
    )
  })

  test('No images should be shown', () => {
    const data = []
    const {getByText} = render(<Gallery data={data} />)

    const noImgs = getByText(/No images found/i)

    expect(noImgs).toBeInTheDocument()
  })
})

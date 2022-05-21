import {renderHook, render, waitFor} from '@testing-library/react'
import {useHero} from './useHero'

jest.mock('./http', () => ({
  get: (url) =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            superhero: 'fake',
          },
        ]),
    }),
}))

afterEach(() => {
  jest.clearAllMocks()
})

describe('test useHero hooks', () => {
  it('useHero example', async () => {
    const {result} = renderHook(() => useHero())
		
    await waitFor(() => {
      expect(result.current[0]).toEqual({
        superhero: '',
        power: '',
        optionPower: '',
        loading: true,
        heroes: [{superhero: 'fake'}],
      })
    })
    expect(result.current[1]).toBeInstanceOf(Function)
  })
})

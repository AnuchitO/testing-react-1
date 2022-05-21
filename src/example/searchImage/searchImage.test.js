import {runSearch} from './searchImage'
import axios from 'axios'

jest.mock('axios', () => {
  const originalAxios = jest.requireActual('axios')
  return {
    ...originalAxios,
    get: () => {
      return Promise.resolve({
        data: {
          photos: [
            {
              id: '52087678033',
              owner: 'AnuchitO@N05',
            },
          ],
        },
      })
    },
  }
})

afterEach(() => {
  jest.clearAllMocks()
})

test('search image', async () => {
  const result = await runSearch('fake_api_key', 'beach')
  expect(result).toEqual([
    {
      id: '52087678033',
      owner: 'AnuchitO@N05',
    },
  ])
})

test('should call api flicker with correct url', async () => {
  const spy = jest.spyOn(axios, 'get')
  spy.mockImplementation(() => {
    return Promise.resolve({
      data: {
        photos: [
          {
            id: '5555',
            owner: 'NOng@NOng',
          },
        ],
      },
    })
  })

  const result = await runSearch('fake_api_key', 'beach')

  expect(result).toEqual([
    {
      id: '5555',
      owner: 'NOng@NOng',
    },
  ])

  expect(spy).toHaveBeenCalledTimes(1)
  expect(spy).toHaveBeenCalledWith(
    'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=fake_api_key&tags=beach&per_page=24&format=json&nojsoncallback=1'
  )
})

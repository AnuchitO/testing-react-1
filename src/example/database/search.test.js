import {searchPerson} from './search'

jest.mock('./db', () => {
  return {
    Query: (firstName, lastName) => {
      return {
        phone: 'fake phone number!!',
      }
    },
  }
})

test.only('search person should return AnuchitO number', async () => {
  const result = await searchPerson('AnuchitO', 'O')

  expect(result).toEqual({
    phone: 'fake phone number!!',
  })
})

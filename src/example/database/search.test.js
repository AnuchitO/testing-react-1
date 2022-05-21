import {_searchPerson} from './search'

test.only('search person should return AnuchitO number', async () => {
  const conn = {
    Query: (firstName, lastName) => {
      return {
        phone: 'fake phone number!!',
      }
    },
  }
  const result = await _searchPerson(conn, 'AnuchitO', 'O')

  expect(result).toEqual({
    phone: 'fake phone number!!',
  })
})

function queryContact(conn, firstName, lastName) {
  if (firstName === '' || lastName === '') {
    return 'ErrMissingArgs'
  }

  let person = conn.Search(firstName, lastName)

  return person.phone
}

describe('jest mock', () => {
  test('spy', () => {
    const conn = {
      Search: () => ({}),
    }

    const searchSpy = jest.spyOn(conn, 'Search')

    queryContact(conn, 'John', 'Strange')

    expect(searchSpy).toHaveBeenCalled()
    expect(searchSpy).toHaveBeenCalledWith('John', 'Strange')
  })

  test('fake', () => {
    const mock = jest.fn((firstName, lastName) => {
      if (firstName === 'John') {
        return {phone: '123-456-7890'}
      }

      return {}
    })

    const conn = {
      Search: mock,
    }

    const result = queryContact(conn, 'John', 'Strange')

    expect(result).toBe('123-456-7890')
    expect(mock).toHaveBeenCalledWith('John', 'Strange')
    expect(mock.mock.calls.length).toBe(1)
  })
})

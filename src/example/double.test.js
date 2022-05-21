function queryContact(conn, firstName, lastName) {
  if (firstName === '' || lastName === '') {
    return 'ErrMissingArgs'
  }

  const person = conn.Search(firstName, lastName)

  return person.phone
}

describe('test double', () => {
  test('dummy: should to return ErrMissingArgs when firstName or lastName empty', () => {
    const result = queryContact({}, '', '')

    expect(result).toBe('ErrMissingArgs')
  })

  test('stub: should return a phone of some person', () => {
    const stub = {
      Search: (firstName, lastName) => {
        return {
          phone: '123-456-7890',
        }
      },
    }

    const result = queryContact(stub, 'xxx', 'ss')

    expect(result).toBe('123-456-7890')
  })

  test('fake', () => {
    const fake = {
      Search: (firstName, lastName) => {
        if (firstName === 'John') {
          return {phone: '123-456-7890'}
        }

        return {}
      },
    }

    const result = queryContact(fake, 'John', 'ss')

    expect(result).toBe('123-456-7890')
  })

  test('spy', () => {
    let spyCalled = false
    let spyCheckParams = {}
    const conn = {
      Search: (first, second) => {
        spyCalled = true
        spyCheckParams = {
          first: first,
          second: second,
        }
        return {}
      },
    }

    queryContact(conn, 'John', 'Strange')

    expect(spyCalled).toBe(true)
    expect(spyCheckParams.first).toBe('John')
    expect(spyCheckParams.second).toBe('Strange')
  })

  test('mock', () => {
    let mock = {
      spyCalled: false,
      spyCheckParams: {},

      Search: (firstName, lastName) => {
        mock.spyCalled = true
        mock.spyCheckParams = {firstName, lastName}
        if (firstName === 'John') {
          return {phone: '123-456-7890'}
        }

        return {phone: '123-456-7890'}
      },
      Verify: () => {
        expect(mock.spyCalled).toBe(true)
        expect(mock.spyCheckParams.firstName).toBe('John')
        expect(mock.spyCheckParams.lastName).toBe('Strange')
      },
    }

    const result = queryContact(mock, 'John', 'Strange')

    expect(result).toBe('123-456-7890')
    mock.Verify()
  })
})

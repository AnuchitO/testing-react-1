import * as conn from './db'

export function searchPerson(firstName, lastName) {
  if (firstName === '' || lastName === '') {
    return 'ErrMissingArgs'
  }

  return conn.Query(firstName, lastName)
}

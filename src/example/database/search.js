import * as conn from './db'

export function searchPerson(firstName, lastName) {
  return _searchPerson(conn, firstName, lastName)
}

export function _searchPerson(_conn, firstName, lastName) {
  if (firstName === '' || lastName === '') {
    return 'ErrMissingArgs'
  }

  return _conn.Query(firstName, lastName)
}

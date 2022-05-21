import {queryDBReject} from './queryDB'

// test('queryDBReject', async () => {
//   await expect(queryDBReject()).rejects.toEqual({
//     message: 'connect ECONNREFUSED',
//   })
// })

test('queryDBReject2', async () => {
  try {
    await queryDBReject()
  } catch (e) {
    expect(e).toEqual({message: 'connect ECONNREFUSED'})
  }

  expect.assertions(1)
})

class NoErrorThrownError extends Error {}
const getError = async (fn) => {
  try {
    await fn()

    throw new NoErrorThrownError()
  } catch (e) {
    return e
  }
}

test('use get error to handle error', async () => {
  const err = await getError(() => queryDBReject())

  expect(err).toEqual({
    message: 'connect ECONNREFUSED',
  })
})

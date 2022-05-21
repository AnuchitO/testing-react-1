import {queryDBReject} from './queryDB'

test('queryDBReject', async () => {
  await expect(queryDBReject()).rejects.toEqual({
    message: 'connect ECONNREFUSED',
  })
})

test('queryDBReject2', async () => {
  try {
    await queryDBReject()
  } catch (e) {
    expect(e.message).toBe('connect ECONNREFUSED')
  }

  expect.assertions(1)
})

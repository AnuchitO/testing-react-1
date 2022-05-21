import {average} from './average_all'

test('should compute average of all numbers', () => {
  const r = average([1, 2, 3, 4, 5])

  expect(r).toBe(3)
  expect(r).toBeGreaterThan(0)
})

test('should compute average of nagative numbers', () => {
  const r = average([-1, -2, -3, -4, -5])

  expect(r).toBe(-3)
  expect(r).toBeLessThan(0)
})

test('average div by 0', () => {
  const r = average([])

  expect(r).toBeNaN()
  expect(r).toBeFalsy()
  expect(0).toBeFalsy()
  expect(undefined).toBeFalsy()
  expect(null).toBeFalsy()
  expect(null).not.toBeTruthy()
  expect(1).toBeTruthy()
  expect('a').toBeTruthy()
})

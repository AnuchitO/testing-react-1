function sum() {
  return 1 + 1
}

function queryDB() {
  return null
}

function someCallingDB() {
  throw new Error('connect ECONNREFUSED 127.0.0.1:2727')
}

describe('common matcher', () => {
  test('should be return null', () => {
    expect(queryDB()).toBe(null)

    expect(queryDB()).toBeNull()
  })

  test('should return error', () => {
    expect(() => someCallingDB()).toThrow()

    expect(() => someCallingDB()).toThrow(Error)
    expect(() => someCallingDB()).toThrow('connect ECONNREFUSED 127.0.0.1:2727')
    expect(() => someCallingDB()).toThrow(/ECONNREFUSED/)
  })

  test('2 not equal 3', () => {
    const result = sum()

    expect(result).not.toBe(3)
    expect(result).toBeGreaterThan(0)
    expect(result).toBeLessThan(3)
  })

  test("string should contain 'hello'", () => {
    const str = 'hello world'
    expect(str).toContain('hello')

    const team = 'team'

    expect(team).not.toMatch(/i/)
  })

  test('the array should contain somthing', () => {
    const arr = [1, 2, 3]

    expect(arr).toContain(1)
  })

  test('contains', () => {
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'beer',
    ]

    expect(shoppingList).toContain('beer')
    expect(new Set(shoppingList)).toContain('beer')
  })

  test('example test', () => {
    const result = 1 + 3
    expect(result).toBe(4)

    expect(2 + 2).toBe(4)
  })

  test('example test 2', () => {
    const result = 1 + 3

    expect(result).toBe(4)
  })

  test('toEqual', () => {
    const want = {one: 1, two: 2}
    const got = {one: 1, two: 2}

    expect(got).toEqual(want)
  })
})

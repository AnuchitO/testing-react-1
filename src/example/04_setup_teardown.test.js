beforeAll(() => {
  console.log('beforeAll')
})

beforeEach(() => {
  console.log('beforeEach')
})

afterEach(() => {
  console.log('afterEach')
})

afterAll(() => {
  console.log('afterAll')
})

describe('setup teardown', () => {
  test('case one', () => {
    console.log('case one')
    expect(1 + 1).toBe(2)
  })

  test('case two', () => {
    console.log('case two')
    expect(1 + 1).toBe(2)
  })
})

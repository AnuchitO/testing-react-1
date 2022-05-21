const queryDBResolve = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('query success')
    }, 300)
  })
}

describe('Async/Await', () => {
  test('async/await', async () => {
    const data = await queryDBResolve()

    expect(data).toBe('query success')
  })

  test('the data is query success', async () => {
    await expect(queryDBResolve()).resolves.toBe('query success')
  })
})

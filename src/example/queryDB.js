export const queryDBReject = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('connect ECONNREFUSED')
    }, 300)
  })
}

export const queryDBReject = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ message: 'connect ECONNREFUSED'})
    }, 300)
  })
}

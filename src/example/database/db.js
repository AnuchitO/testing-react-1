export function Query(firstName, lastName) {
  // Data in database alwasy change
  return Promise.resolve({
    phone: 'real phone number ' + Math.random(),
  })
}

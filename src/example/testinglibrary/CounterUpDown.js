import React, {useState} from 'react'

const ExampleCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>number: {count}</div>
      <button onClick={() => setCount(count + 1)}>Count UP</button>
      <button onClick={() => setCount(count - 1)}>Count DOWN</button>
    </>
  )
}

export default ExampleCounter

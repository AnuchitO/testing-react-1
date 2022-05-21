import React, {useState} from 'react'

export function ShowCounter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Who count')

  return (
    <div>
      <p>
        {name}: {count} times
      </p>
      <input
        type="text"
        value={name}
        placeholder="Who count"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>Click here</button>
    </div>
  )
}

export default ShowCounter

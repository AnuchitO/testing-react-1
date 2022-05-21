import React, {useState} from 'react'

export default function PreventDefault() {
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    console.log(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

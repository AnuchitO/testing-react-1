import {useState} from 'react'

export function HiFunc(props) {
  const [superhero, setSuperhero] = useState('')

  return (
    <div>
      <div>Hi {props.name}</div>
      <label htmlFor="superhero"> Superhero Name: </label>
      <input
        id="superhero"
        type="text"
        value={superhero}
        onChange={(e) => {
          setSuperhero(e.target.value)
        }}
      />
      <br />
      <button onClick={() => alert(superhero)}>Click Me</button>
    </div>
  )
}

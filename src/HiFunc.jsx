import {useState, useEffect, Fragment, useMemo} from 'react'

export function HiFunc(props) {
  const [hero, setHero] = useState({
    superhero: '',
    power: '',
    optionPower: '',
    loading: true,
    heroes: [],
  })
  // const [superhero, setSuperhero] = useState('')
  // const [power, setPower] = useState('')
  // const [optionPower, setOptionPower] = useState('')
  // const [heroes, setHeroes] = useState([])

  const [click, setClick] = useState(0)
  const [loading, setLoading] = useState(true)
  const person = useMemo(() => ({name: 'AnuchitO'}), [])

  useEffect(() => {
    console.log('HiFunc useEffect')
    // setTimeout(() => {
    setLoading(true)
    fetch(`http://localhost:2727/heroes`)
      .then((res) => res.json())
      .then((data) => {
        setHero((current) => ({
          ...current,
          heroes: data,
        }))
        setLoading(false)
      })
    // }, 3000)
  }, [person])

  useEffect(() => {})

  return (
    <Fragment>
      <div>Hi Func {props.name} </div>
      <label htmlFor="superhero"> Superhero Name: </label>
      <input
        id="superhero"
        type="text"
        value={hero.superhero}
        onChange={(e) => {
          setHero((current) => ({
            ...current,
            superhero: e.target.value,
          }))
        }}
      />
      <br />
      <label htmlFor="power"> Superhero Power: </label>
      <input
        id="power"
        type="text"
        value={hero.power}
        onChange={(e) => {
          setHero((current) => ({...current, power: e.target.value}))
        }}
      />

      <br />
      <select
        value={hero.optionPower}
        onChange={(e) => {
          setHero((current) => ({...current, optionPower: e.target.value}))
        }}
      >
        <option value="">Select Power</option>
        <option value="Flying">Flying</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
        <option value="Ice">Ice</option>
        <option value="Lightning">Lightning</option>
        <option value="Earth">Earth</option>
        <option value="Wind">Wind</option>
      </select>
      <br />
      <button
        className="myButton"
        onClick={() => {
          setHero((current) => ({
            ...current,
            heroes: [
              ...current.heroes,
              {
                name: hero.superhero,
                power: hero.power,
                optionPower: hero.optionPower,
              },
            ],
          }))
          setClick(click + 1)
        }}
      >
        Add Hero
      </button>
      <p>{click}</p>
      {loading && <p>loading...</p>}
      {hero.heroes.length > 0 && (
        <ul>
          {hero.heroes.map((hero, index) => (
            <li key={index}>
              {hero.name} : {hero.power} : {hero.optionPower}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  )
}

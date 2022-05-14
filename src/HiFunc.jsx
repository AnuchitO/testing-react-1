import {useState, useEffect, Fragment, useMemo, useReducer} from 'react'

const initialHero = {
  superhero: '',
  power: '',
  optionPower: '',
  loading: true,
  heroes: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SUPER_HERO':
      return {...state, superhero: action.payload}
    case 'UPDATE_POWER':
      return {...state, power: action.payload}
    case 'UPDATE_OPTION_POWER':
      return {...state, optionPower: action.payload}
    case 'UPDATE_HEROES':
      return {...state, heroes: [...state.heroes, ...action.payload]}
    case 'LOAD_HERORES':
      return {...state, heroes: action.payload}
    default:
      return state
  }
}

const actionLoadHeroes = (data) => ({type: 'LOAD_HERORES', payload: data})

export function HiFunc(props) {
  const [herox, dispatch] = useReducer(reducer, initialHero)

  const [loading, setLoading] = useState(true)
  const person = useMemo(() => ({name: 'AnuchitO'}), [])

  useEffect(() => {
    console.log('HiFunc useEffect')
    // setTimeout(() => {
    setLoading(true)
    fetch(`http://localhost:2727/heroes`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(actionLoadHeroes(data))
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
        value={herox.superhero}
        onChange={(e) => {
          dispatch({type: 'UPDATE_SUPER_HERO', payload: e.target.value})
        }}
      />
      <br />
      <label htmlFor="power"> Superhero Power: </label>
      <input
        id="power"
        type="text"
        value={herox.power}
        onChange={(e) => {
          dispatch({type: 'UPDATE_POWER', payload: e.target.value})
        }}
      />

      <br />
      <select
        value={herox.optionPower}
        onChange={(e) => {
          dispatch({type: 'UPDATE_OPTION_POWER', payload: e.target.value})
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
          dispatch({
            type: 'UPDATE_HEROES',
            payload: [
              {
                name: herox.superhero,
                power: herox.power,
                optionPower: herox.optionPower,
              },
            ],
          })
        }}
      >
        Add Hero
      </button>
      {loading && <p>loading...</p>}
      {herox.heroes.length > 0 && (
        <ul>
          {herox.heroes.map((hero, index) => (
            <li key={index}>
              {hero.name} : {hero.power} : {hero.optionPower}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  )
}

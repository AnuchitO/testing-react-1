import {useState, useEffect} from 'react'

export function useHero() {
  const [hero, setHero] = useState({
    superhero: '',
    power: '',
    optionPower: '',
    loading: true,
    heroes: [],
  })

  useEffect(() => {
    console.log('HiFunc useEffect')
    // setTimeout(() => {
    fetch(`http://localhost:2727/heroes`)
      .then((res) => res.json())
      .then((data) => {
        setHero((current) => ({
          ...current,
          heroes: data,
        }))
      })
    // }, 3000)
  }, [])

  return [hero, setHero]
}

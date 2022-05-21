import {useState, useEffect} from 'react'
import http from './http'

export function useHero() {
  const [hero, setHero] = useState({
    superhero: '',
    power: '',
    optionPower: '',
    loading: true,
    heroes: [],
  })

  useEffect(() => {
    http
      .get(`http://localhost:2727/heroes`)
      .then((res) => res.json())
      .then((data) => {
        setHero((current) => ({
          ...current,
          heroes: data,
        }))
      })
      .catch((err) => {
        console.log('error' + err)
      })
  }, [])

  return [hero, setHero]
}

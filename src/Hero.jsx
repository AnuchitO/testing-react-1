import React from 'react'

export class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heros: [],
    }
  }

  componentDidMount() {
    this.getHero()
  }

  getHero() {
    fetch(`http://localhost:2727/heroes`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          heros: data,
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Hero</h1>
        <ul>
          {this.state.heros.map((hero) => (
            <li key={hero.name}>
              <p>{hero.name + ' : ' + hero.power + ' : ' + hero.powerName}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

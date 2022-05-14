import React from 'react'

class Hi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      superhero: '',
      power: '',
      optionPower: '',
      loading: true,
      heroes: [],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: true})
      Promise.resolve([
        {
          name: 'Thor',
          power: 5000,
          powerName: 'Lightning',
        },
        {
          name: 'IronMan',
          power: 300,
          powerName: 'Arc reactor',
        },
        {
          name: 'DoctorStrange',
          power: 4500,
          powerName: 'Magic',
        },
      ]).then((data) => {
        this.setState({
          heroes: data,
          loading: false,
        })
      })
    }, 3000)
  }

  render() {
    return (
      <div>
        <div>Hi {this.props.name}</div>
        <label htmlFor="superhero"> Superhero Name: </label>
        <input
          id="superhero"
          type="text"
          value={this.state.superhero}
          onChange={(e) => {
            this.setState({superhero: e.target.value})
          }}
        />
        <br />
        <label htmlFor="power"> Superhero Power: </label>
        <input
          id="power"
          type="text"
          value={this.state.power}
          onChange={(e) => {
            this.setState({power: e.target.value})
          }}
        />

        <br />
        <select
          value={this.state.optionPower}
          onChange={(e) => {
            this.setState({optionPower: e.target.value})
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
          onClick={() =>
            this.setState({
              heroes: [
                ...this.state.heroes,
                {
                  name: this.state.superhero,
                  power: this.state.power,
                  optionPower: this.state.optionPower,
                },
              ],
            })
          }
        >
          Add Hero
        </button>
        {this.state.loading && <p>loading...</p>}
        {this.state.heroes.length > 0 && (
          <ul>
            {this.state.heroes.map((hero, index) => (
              <li key={index}>
                {hero.name} : {hero.power} : {hero.optionPower}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Hi

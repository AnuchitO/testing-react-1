import React from 'react'

class Hi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      superhero: '',
      power: '',
      optionPower: '',
    }
  }

  render() {
    return (
      <div>
        <div>Hi {this.props.name}</div>
        <label htmlFor="superhero"> Superhero Namex: </label>
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
            alert(
              'Hello ' +
                this.state.superhero +
                ' power:' +
                this.state.power +
                ' ' +
                this.state.optionPower
            )
          }
        >
          Click me
        </button>
      </div>
    )
  }
}

export default Hi

import React from 'react'

class Hi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      superhero: '',
    }
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
        <button onClick={() => alert('Hello ' + this.state.superhero)}>
          Click me
        </button>
      </div>
    )
  }
}

export default Hi

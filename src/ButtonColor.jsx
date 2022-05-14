import React, {Fragment} from 'react'

class ButtonColor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red',
      checked: false,
    }
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update')
    console.log(prevProps)
    console.log(prevState)
  }

  handleClick = () => {
    this.setState((current) => ({
      color: current.color === 'red' ? 'blue' : 'red',
    }))
  }

  render() {
    return (
      <Fragment>
        <button
          className="myButton"
          style={{color: this.state.color}}
          disabled={this.state.checked}
          onClick={this.handleClick}
        >
          Change Me
        </button>
        <input
          type="checkbox"
          id="chb-coloring"
          aria-checked="true"
          checked={this.state.checked}
          onChange={() => this.setState({checked: !this.state.checked})}
        />
        <label htmlFor={'chb-coloring'}>Disable Button</label>
      </Fragment>
    )
  }
}

export default ButtonColor

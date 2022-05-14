import React, {useState} from 'react'

export function ShowCounter() {
  const [count, setCount] = useState(0)

  function onClick() {
    setTimeout(() => {
      console.log(count)
    }, 2000)
  }

  return (
    <div>
      <p>count {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click here</button>
      <button onClick={onClick}>Show My Count</button>
    </div>
  )
}

// export class ShowCounter extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0,
//     }
//   }

//   onClick() {
//     setTimeout(() => {
//       console.log(this.state.count)
//     }, 2000)
//   }

//   render() {
//     return (
//       <div>
//         <p>count {this.state.count} times</p>
//         <button
//           onClick={() =>
//             this.setState((current) => ({
//               count: current.count + 1,
//             }))
//           }
//         >
//           Click here
//         </button>
//         <button onClick={this.onClick.bind(this)}>Show My Count</button>
//       </div>
//     )
//   }
// }

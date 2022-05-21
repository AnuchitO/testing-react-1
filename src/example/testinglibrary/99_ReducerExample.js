import React, {useReducer} from 'react'

const initialState = {
  isConfirmed: false,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        isConfirmed: true,
      }
    default:
      throw Error('unknown action')
  }
}

const Example = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div>
        {state.isConfirmed ? (
          <p>Confirmed!</p>
        ) : (
          <p>Waiting for confirmation...</p>
        )}
      </div>
      <button onClick={() => dispatch({type: 'SUCCESS'})}>Confirm</button>
    </div>
  )
}

export default Example

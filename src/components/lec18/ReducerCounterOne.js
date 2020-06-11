import React,{useReducer} from 'react'

const initialState = 0
const reducer = (state, action) =>{

    switch(action){
        case 'increment':
            return state + 1
        case 'descrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
     
}

function ReducerCounterOne() {

    const [count, dispatch] = useReducer(reducer, initialState)
    useReducer(reducer, initialState)
  return (
    <div>
        <div>Count- {count}</div>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('descrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>

    </div>
  )
}

export default ReducerCounterOne
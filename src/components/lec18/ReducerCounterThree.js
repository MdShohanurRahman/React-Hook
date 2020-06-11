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

function ReducerCounterThree() {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    useReducer(reducer, initialState)
  return (
    <div>
        <div>Count- {count}</div>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('descrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>

             <div>CountTwo- {countTwo}</div>
      <button onClick={()=>dispatchTwo('increment')}>Increment</button>
      <button onClick={()=>dispatchTwo('descrement')}>Decrement</button>
      <button onClick={()=>dispatchTwo('reset')}>Reset</button>

    </div>
  )
}

export default ReducerCounterThree

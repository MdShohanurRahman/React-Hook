import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {

    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'descrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'descrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }

}

function ReducerCounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)
    useReducer(reducer, initialState)
    return (
        <div>
            <div>Counter One->  {count.firstCounter}</div>
            <div>Counter Two->  {count.secondCounter}</div>

            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'descrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>IncrementFive</button>
            <button onClick={() => dispatch({ type: 'descrement', value: 5 })}>DecrementFive</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment2</button>
                <button onClick={() => dispatch({ type: 'descrement2', value: 1 })}>Decrement2</button>
            </div>

        </div>
    )
}

export default ReducerCounterTwo

import React, { useState, useEffect } from 'react'

function HookCounterOneUseeffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')


    // executed after every render of component
    useEffect(() => {
        console.log("Useeffect updating document title")
        document.title = `You clicked ${count} times`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}> Click {count}</button>
        </div>
    )
}

export default HookCounterOneUseeffect

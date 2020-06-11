import React, {useState, useEffect} from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e)=>{
        console.log("mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("Use Effect Called")
        window.addEventListener('mousemove',logMousePosition)

        // coumponent cleanup code or
        return () =>{
            console.log("Component Unmounting Code")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    // empty array only call initial and forget about it's update 

  return (
    <div>
      X - {x} Y- {y}
    </div>
  )
}

export default HookMouse

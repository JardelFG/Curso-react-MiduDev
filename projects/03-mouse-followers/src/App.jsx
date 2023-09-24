import { useState, useEffect } from 'react'
import './App.css'
import VictoryTable from '../../02-tic-tac-toe/src/components/VictoryTable'

const FollowMouse = () =>{
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})
  

  useEffect(()=>{
    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosition({x:clientX, y:clientY})
    }

    if(enabled){
      window.addEventListener("pointermove", handleMove)
    }
    return ()=>{
      window.removeEventListener("pointermove", handleMove)
    }

  },[enabled])


  return (
    <>
    <main>
    <div style={
      {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }
    }
    />
    <button onClick={()=>setEnabled(!enabled)}>
      { enabled ? "Activar" : "Desactivar" } seguimiento de mouse
    </button>
    </main>
    </>
  )
}


function App() {
  const [mounted, setMounted] = useState(false)

  return (
    <>
      {
        mounted && <FollowMouse />
      }
      <button onClick={()=>setMounted(!mounted)}>Toggle mouse FollowMouse component</button>
    </>
  )
}

export default App

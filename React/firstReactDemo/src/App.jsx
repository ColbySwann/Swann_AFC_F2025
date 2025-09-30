import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    const theStyles = {
        color: "green",
        fontSize: "72px"
    }


  return (
    <>
        <h1 style={theStyles}>My First App</h1>
        <h2 className="second">Second Line</h2>
    </>
  )
}

export default App

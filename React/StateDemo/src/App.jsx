import { useState } from 'react'
import './App.css'

function App() {
  const [days, setDays] = useState();
  const [firstName, setFirstName] = useState("")

  const handleClick = () => {
      setDays(days + 1)
  }

  return (
    <>
      <h1>App in State Demo</h1>
    </>
  )
}

export default App

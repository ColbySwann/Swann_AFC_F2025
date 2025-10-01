import { useState } from 'react'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
      if (showPassword === false){
          setShowPassword(true);
      }else
          setShowPassword(false);
  }

  return (
    <>
        <h1>App in Password Reveal</h1>
        <input type={showPassword ? "text": "password"} placeholder="Enter Password" name={"pw"}/>
        <button onClick={handleClick}>Reveal</button>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Parent from "./Components/Parent.jsx";
import Child from "./Components/Child.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
        <Parent mother={"Judith"} father={"Carl"} />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import {monsters} from "./Util/database.js";

function App() {
  const [count, setCount] = useState(0);

  const monsterCard = monsters.map((el,index) => {
      return (
          <div style={{border: '5px ridge blue'}} key={index}>
              <h2>First Name:{el.firstName}</h2>
              <h3>Last Name: {el.lastName}</h3>
              <p>Age: {el.age}</p>
              <p>More Info: {el.moreInfo}</p>
          </div>
      )
  })

  return (
    <>
        <h1>Fake Database</h1>
        {monsterCard}
    </>
  )
}

export default App

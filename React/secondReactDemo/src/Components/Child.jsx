import { useState } from 'react'

function Child(props) {
    const [count, setCount] = useState(0)

    let result = props.myChildren.map((el, i) => {
        return <li key={i}>Hello {el}</li>
    })




    return (
        <>
            <h1>Say Hi</h1>
            {result}
        </>
    )
}

export default Child;

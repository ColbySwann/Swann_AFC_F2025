import { useState } from 'react'
import Child from "./Child.jsx";

function Parent(props) {
    const [count, setCount] = useState(0)
    let children = ["Jack", "John", "James", "Jim"]

    return (
        <>
            <h1>Hello {props.mother} & {props.father}</h1>
            <Child myChildren = {children} />
        </>
    )
}

export default Parent

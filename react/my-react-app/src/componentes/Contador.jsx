import React from "react";
import { useState } from "react";

export default function Contador({count,onClick}) {

    // const [count, setCount] = useState(0)

    // function contar() {
    //     setCount(count +1)
    // }
    return (
        <button onClick={onClick}>
            Clicado {count} vezes
        </button>
    )
}
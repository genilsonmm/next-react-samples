import { useState } from "react"

export default function mouse(props) {
    const [x, setX] = useState(0)

    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }

    function quandoMover(event){
        setX(event.clientX)
        alterarY(event.clientY)
        console.log(event.clientX, event.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
           <span>Eixo X: {x}</span>
           <span>Eixo Y: {y}</span>
        </div>
    )
}
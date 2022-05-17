import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contator(){
    const [valor, setValor] = useState(0)

    function atualiza(param){
        setValor(valor + param)
    }

    //const inc = () => { setValor(valor + 1) }

    return (
        <div style={{
            display:"flex",
            flexDirection: "column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <h1>Contador</h1>
            <div>Valor: {valor}</div>
            <ContadorDisplay numero={valor} />
            <button onClick={() => atualiza(-1)}>-</button>
            <button onClick={() => atualiza(1)}>+</button>
        </div>
    )
}
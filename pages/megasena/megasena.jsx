import { useState } from "react";
import DisplayMegaSena from "../../components/MegaSena";
import { getJogo } from "../../functions/gerador_numeros";

export default function megasena(){

    const [jogo, setJogo] = useState("00-00-00-00-00-00")
    const [qntNumeros, setNumeros] = useState("6")

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:"center",
            flexWrap: "wrap",
            gap: "5px"
        }}>
            
            <DisplayMegaSena numeros={jogo}/>
            <input type="number" value={qntNumeros} placeholder="Quantidade de números"
                min={6} max={20} onChange={e => setNumeros(e.target.value)} />

            <button onClick={()=> setJogo(getJogo(qntNumeros))}>Gerar Números</button>
        </div>
    )
}
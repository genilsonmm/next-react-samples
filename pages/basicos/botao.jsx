function acao1(){
    console.log("ação 1")
}

export default function botao() {

    function acao2(){
        console.log("acão 2")
    }

    return (
        <div>
            <button onClick={acao1}>Click #01</button>
            <button onClick={acao2}>Click #02</button>
            <button onClick={function() {
                console.log("ação 3")
            }}>
                Click #03
            </button>
            <button onClick={()=> console.log("ação 4") }>Click #04</button>

            <div>
                <input type="text" onChange={e => console.log(e.target.value)}></input>
            </div>
        </div>
    )
}
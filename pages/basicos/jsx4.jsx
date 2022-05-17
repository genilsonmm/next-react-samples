export default function jsx(){
    const subtitulo = "Estou no JavaScript"

    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{ subtitulo }</h2>
            <h2>Soma: {soma(3,2)}</h2>
        </div>
    )
}

function soma(valor1, valor2) {
    return valor1 + valor2
}
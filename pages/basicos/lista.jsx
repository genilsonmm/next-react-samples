function gerarLista(final = 10) {
    const lista = []
    for(let i = 1; i <= final; i++){
        lista.push(<spa>{ i },</spa>)
    }

    return lista
}

export default function lista(){
    return (
        <div>
            {gerarLista()}
            <hr/>
            {gerarLista(15)}
        </div>
 )
}
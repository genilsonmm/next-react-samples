import Titulo from "../../components/Titulo"

export default function usandoTitulo() {
    return (
        /* Usa o fragment sem precisar importar o react */
        <>
            <h1>Títilo</h1>
            <h2>Subtítulo</h2>

            <Titulo 
                principal="página de cadastro" 
                secundario="incluir, alterar e excluir coisas!"
                test={true} />
        </>
    )
}
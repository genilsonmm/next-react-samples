export default function repeticao1() {
    const lista = [
        "Maria",
        "João",
        "Genilson"
    ]

    function renderizar() {
        return lista.map((item, index) => <li key={index}>{item}</li>)
    }

    return (
        <ul>
            {renderizar()}
        </ul>
    )
}
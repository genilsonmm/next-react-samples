import Filho from "./Filho"

export default function Pai(props) {

    function falarComigo(parms){
        console.log('Alguém falou comigo')
        console.log(parms)
    }

    return (
        <div>
            <Filho funcao={falarComigo} />
        </div>)
}
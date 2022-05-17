import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <Filho nome="Maria" familia={props.familia} />
            <Filho nome="Genilson" familia={props.familia} />
            
            <Filho nome="Elson" {...props} />
            <Filho {...props}  nome="Elson"/>
        </div>
    )
}
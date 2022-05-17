export default function Lista(props){
    return (
        <ul>
            <li>Item fixo</li>
            {props.children}
        </ul>
    )
}
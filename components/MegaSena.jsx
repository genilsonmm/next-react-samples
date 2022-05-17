export default function DisplayMegaSena(props) {
    return (
        <div style={{
            backgroundColor: "#000",
            color:"#fff",
            fontSize: "4rem",
            borderRadius: "20px",
            padding:"5px",
            marginTop:"5%"
        }}>
            {props.numeros}
        </div>
    )
}
import Pessoa from "../../components/Pessoa";

export default function exemploTs(){
    return(
        <div>
            <Pessoa nome="João" idade={30}/>
            <Pessoa nome="Maria"/>
        </div>
    )
}
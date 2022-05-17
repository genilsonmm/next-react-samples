/* o css é aplicado apenas para este componente*/
import styles from "./integracao2.module.css"

export default function integracao(){
    return(
        <div id={styles.itegracao2}>
            <div className={styles.vermelha}>Texto #01</div>
            <div className={styles.azul}>Texto #02</div>
        </div>
    )
}
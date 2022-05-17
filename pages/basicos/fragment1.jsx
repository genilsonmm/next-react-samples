import React from "react";

export default function fragment() {
    return (
        /* Com react fragment é possível trabalhar com componentes adjacentes, ou seja,
         no mesmo nível. Caso contrário será preciso adicionar uma div */
        <React.Fragment>
            <h1>Títilo</h1>
            <h2>Subtítulo</h2>
        </React.Fragment>
    )
}
import React from "react";

//Esse botao recebrar como parametro uma funcao
function AnotherButton({funcao}) {
    return(
        //passando a funcao para a chamada de onClick
        <button onClick={funcao}>Outro Botao</button>
    )
}
export default AnotherButton
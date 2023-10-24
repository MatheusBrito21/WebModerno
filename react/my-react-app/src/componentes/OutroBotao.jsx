import React from "react";

//Esse botao recebrar como parametro uma funcao
function AnotherButton({onClick,...props}) {
    return(
        //passando a  para a chamada de onClick
        <button className= {props.className} onClick={onClick}>{props.nome}</button>
    )
}   
export default AnotherButton
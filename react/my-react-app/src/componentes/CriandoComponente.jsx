import React from "react";
import Titulo from "./AlterandoTexto";
import AnotherButton from "./OutroBotao";

function MyButton(props) {
    
    function clicado(){
      alert(`${props.nomeBotao}. Olha!!! Funcionou!`)  
    }

    return(
        <button onClick={clicado}>{props.nomeBotao}</button>
    )
}

export default function MyApp(props){
    function outroBotao(){
        alert('Clicado pelo outro botao!')
    }
    return(
        <div>
            <h1>{props.titulo}</h1>
            <MyButton nomeBotao={props.nome}/>
            <Titulo texto="Ola texto"/>
            {/* funcao passada como props para a chamada do componente */}
            <AnotherButton onClick={outroBotao}/>
        </div>

    )
}
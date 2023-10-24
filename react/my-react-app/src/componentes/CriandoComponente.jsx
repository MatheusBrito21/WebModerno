import React from "react";
import Titulo from "./AlterandoTexto";
import AnotherButton from "./OutroBotao";
import NavBar from "./navBar/NavBar";
import Pagina from "./Pagina/Pagina";

function MyButton(props) {

    
    function clicado(){
      alert(`${props.nomeBotao}. Olha!!! Funcionou!`)  
    }

    return(
        <button onClick={clicado}>{props.nomeBotao}</button>
    )
}

export default function MyApp(props){

    const nomeApp = "Meu app React"
    let algo = ''

    function outroBotao(){
        alert('Clicado pelo outro botao!')
    }

    function setalgo(texto){
        algo = texto
        alert(algo)
    }

    return(
        <div>
            <h1>{props.titulo}</h1>
            <MyButton nomeBotao={props.nome}/>
            <Titulo texto="Ola texto"/>
            {/* funcao passada como props para a chamada do componente */}
            <AnotherButton onClick={outroBotao} nome="Outro Botao"/>
            <AnotherButton onClick={e=> setalgo("Welcome Home")} nome="Faz algo"/>
            <NavBar className="nav-container"/>
            <Pagina nome={nomeApp}/>
            
        </div>

    )
}
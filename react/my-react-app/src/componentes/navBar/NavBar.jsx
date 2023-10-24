import React from "react";
import './NavBar.css';
import AnotherButton from ".././OutroBotao";
import Pagina from "../Pagina/Pagina";


function NavBar() {
    
    function funciona(texto){
        alert(texto)
    }
    return(
        <div className="nav-container">
                <div className="nav-logo">
                    <h1>
                        Logo
                    </h1>
                </div>
              <div className="nav-buttons">
                <AnotherButton nome = "Home" className="buttons" onClick={() => funciona("Ola")}/>
                <AnotherButton nome = "Sobre" className="buttons"/>
                <AnotherButton nome = "Contato" className="buttons"/>
                <AnotherButton nome = "Servico" className="buttons"/>
                <AnotherButton nome = "Trabalhe Conosco" className="buttons"/>
              </div>
        </div>
    )
}

export default NavBar
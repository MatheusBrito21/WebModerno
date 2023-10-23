import React from "react";
import './Button.css';

export default props =>{
        //definindo a classe padrao do componente
        let classes = 'button '

        //adicionando classes conforme o parametro passado na chamada do componente
        //se nao for passado a propriedade adicionara uma string vazia
        classes += props.operation? 'operation':''
        classes += props.double?'double':''
        classes += props.triple?'triple':''
    
        return(
            <button 
            onClick ={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
        )
}
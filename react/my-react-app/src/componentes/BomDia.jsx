import React from "react";
//props  =propriedades passadas pro componente

export default (props) =>
<React.Fragment>
            <h1>Bom dia {props.nome}!!!</h1>
            <h2>Ate a proxima</h2> 
    </React.Fragment>

//retornando elelementos em um array - necessita da atributo key

// export default (props) =>[
//     <h1 key ='qualquer1'>Bom dia {props.name}!!!</h1>,
//     <h2 key ='qualquer2'>Ate a proxima</h2> ,

// ]

//Retonando elementos com uma div

// export default (props) =>
//  <div>
//     <h1>Bom dia {props.name}!!!</h1>
//     <h2>Ate a proxima</h2> 
//  </div>
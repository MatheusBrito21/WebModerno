import React from 'react'
import  ReactDOM  from 'react-dom'

// import BomDia from './componentes/BomDia'
// import { BoaTarde, BoaNoite } from './componentes/Multiplos'
// import { Saudacao } from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passar os Filhos aqui */}
            <Filho nome="Pedro"/>
            <Filho nome="Karen"/>
            <Filho nome="Lucas"/>
          

        </Pai>
    </div>, document.getElementById('root'))
import React from 'react'
import  ReactDOM  from 'react-dom'

// import BomDia from './componentes/BomDia'
// import { BoaTarde, BoaNoite } from './componentes/Multiplos'
// import { Saudacao } from './componentes/Saudacao'
// import Pai from './componentes/Pai'
// import Filho from './componentes/Filho'

import MyApp from './componentes/CriandoComponente'
import Titulo from './componentes/AlterandoTexto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
     <MyApp titulo="Hello again React" nome="Botãozinho"/>
  </div>
  
);

const fabricantes = ['Mercedes','Ferrai','McLaren']

function imprimir(nome,indice){
    console.log(`${indice+1}.${nome}`)
}

fabricantes.forEach(imprimir)

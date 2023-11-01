function objetoParaArray(obj){
    const arrayObj = Object.entries(obj)
    return arrayObj
}
const meuObjeto = {
    nome: "Matheus",
    idade: 25
}

console.log(objetoParaArray(meuObjeto))
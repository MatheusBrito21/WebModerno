function buscarPalavras(strBusca, arrayPalavras){
    let resultado = arrayPalavras.filter(value => value.includes(strBusca))
    return resultado
}

let palavras = ['programação','professor','mobile','programa','Java','preferido']
console.log(buscarPalavras('pr',palavras))
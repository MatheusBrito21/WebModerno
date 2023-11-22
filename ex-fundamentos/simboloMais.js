function simboloMais(repeticoes){
    let stringMais = ''
    for(let i = 0; i<repeticoes; i++) stringMais+='+'
    return stringMais
}

console.log(simboloMais(5))
console.log(simboloMais(1))
console.log(simboloMais(0))
console.log(simboloMais(100))
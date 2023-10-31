const { isNumber } = require("lodash")

function inverterValor(valor){
    if(valor === true || valor === false) return !valor
    else if(isNumber(valor)){ return valor* -1}
    else return "boolean ou número esperados, mas o parâmetro é do tipo "+ typeof(valor)

}

console.log(inverterValor(true))
console.log(inverterValor(5))
console.log(inverterValor({}))
console.log(inverterValor([]))
console.log(inverterValor(""))
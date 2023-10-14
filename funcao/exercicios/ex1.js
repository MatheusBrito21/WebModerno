// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

console.log(soma(5,6))
function soma(a,b){
    return a+b
}

const soma2 = function(a,b){
    return a+b
}
console.log(soma2(10,60))

const soma3 = (a,b)=> a+b
console.log(soma3(5,7))
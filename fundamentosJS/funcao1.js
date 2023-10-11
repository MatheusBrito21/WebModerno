//funcao sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(10,3)
imprimirSoma(3)
imprimirSoma(3,10,15,6,7)
imprimirSoma()

//funcao com retorno

function soma(a,b = 0){
    return a+b
}

console.log(soma(2,6))

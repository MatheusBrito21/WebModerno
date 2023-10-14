//funcao sem nome
const soma = function(x,y){
    return x+y
}

const imprimirResult = function(a,b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResult(5,4)
imprimirResult(5,4, (a,b)=> a*b)

const pessoa={
    falar: ()=> console.log('Fala ai')
}

pessoa.falar()

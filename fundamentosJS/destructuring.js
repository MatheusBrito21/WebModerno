//novo recurso do ECMA Script 2015

const pessoa ={
    nome: "Ana",
    idade: 5,
    endereco: {
        log: "Rua Legal",
        numero: 40
        
    }
}
//operador dectructuring
const{nome, idade} = pessoa
console.log(nome,idade)

//atrbuindo a variaveis
const{nome:n, idade: i} = pessoa
console.log(n,i)

const{sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome,bemHumorada)

const{endereco:{log,numero}} = pessoa
console.log(log,numero)
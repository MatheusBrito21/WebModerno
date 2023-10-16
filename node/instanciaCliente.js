const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')//importa o modulo
const contadorC = require('./instanciaNova')()// importa a funcao factory
const contadorD = require('./instanciaNova')()

//aqui as variaveis apontam para o mesmo objeto criado no modulo instanciaUnica
//de forma que contadorA interfere em contadorB
contadorA.contador()
contadorB.contador()
console.log(contadorA.valor)
console.log(contadorB.valor)

//aqui a variavel aponta para o objeto criado no modulo instanciaNova
//de forma que contadorC nao interfere em contadorD
contadorC.contador()
contadorC.contador()

console.log('Contador D'+contadorD.valor)
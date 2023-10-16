//Desafio -> retornar uma mulher chinesa com o menor salario
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const http = require('axios')

const chineses = f => f.pais ==='China'
const mulheres = f => f.genero ==='F'
const menorSalario = (func, funcAtual) =>{
    return func.salario < funcAtual.salario ? func:funcAtual
}

http.get(url).then(response =>{
    let arrFunc = []
        arrFunc = response.data
        // console.log(arrFunc)
        const funcChina = arrFunc.filter(chineses).filter(mulheres).reduce(menorSalario)
        console.log(funcChina)
    })




//com promisse
const http = require('http')
const { reject } = require('lodash')
const { resolve } = require('path')

const getTurma = (letra, callback) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,reject)=>{
        http.get (url,response =>{
            let resultado =''

            response.on('data',dados =>{
                resultado += dados
            })
            response.on('end',()=>{
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

let nomes = []
getTurma('A').then(alunos =>{
    nomes = nomes.concat(alunos.map(a=> `A: ${a.nome}`))
    console.log(nomes)
})
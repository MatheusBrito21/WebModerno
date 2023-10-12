//par/valor
const saudacao = 'Olá' //contexto lexico 1 - definido no nivel do arquivo

function exec(){
    const saudacao = 'Faaaala'// contexto lexico2 - dentro da funcao 
    return saudacao
}

//objetos sao grupos aninhados de de pares nome/valor

const cliente ={
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua tal',
        numero: 33
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
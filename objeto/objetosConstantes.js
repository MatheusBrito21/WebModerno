//pessoa -> enderecoMemoria123 -> objt{}
const pessoa = {
    nome:'Joao'
}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)// impede que o objeto seja alterado
pessoa.nome = 'Maria'
pessoa.idade = 35
console.log(pessoa)

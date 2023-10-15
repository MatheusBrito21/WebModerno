//colecao dinamica de chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Generica'//variaca da notacao produto - nao recomendado
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca']
console.log(produto)

const carro = {
    modelo: 'A4',
    preco: 89000,
    propietario:{
        nome: 'Raul',
        idade: 25,
        endereco:{
            logradouro: 'Rua Legal',
            numero:'50'
        }
    },

    calcularValorSeguro: function(){
        console.log(`R$ ${(this.preco * 0.01).toFixed(2)}`)
    }
}
console.log('Carro = ',carro)
console.log('Proprietario = '+carro.propietario.nome)
carro.calcularValorSeguro()
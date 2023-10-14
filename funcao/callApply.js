function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1- this.desconto) * (1+imposto)} `
}

const produ = {
    nome:'NoteBook',
    preco:4898,
    desconto: 0.15,
    getPreco
}
console.log(produ.getPreco())

const carro = {preco:120000, desconto: 0.1}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//call(contexto, parametros do metodo)
console.log(getPreco.call(carro, 0.17, "$"))

//apply (contexto,[parametros]-array)
console.log(getPreco.apply(carro,[0.17,"$"]))
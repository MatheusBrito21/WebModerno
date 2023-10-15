//Sintaxe Classe
class Produto{
    constructor(nome,preco,desc=0.1){
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }

    precoComDesconto(){
        console.log(`${this.nome} \n de R$ ${this.preco}\n por R$ ${(this.preco *(1-this.desc).toFixed(2))}`)
    }
}
//funcao construtora
function ListaCompras(codigo){
        this.codigo =codigo
        this.itens = []
    
        this.addItens = function(...prods){
        prods.forEach( p => this.itens.push(p))
    }
}

const prod1 = new Produto('Celular',1900)
const prod2 = new Produto('Tv',2000)
const prod3 = new Produto('PS4',1700)

const lista = new ListaCompras(1)
lista.addItens(prod1,prod2,prod3)
console.log(lista.codigo, lista.itens)
prod3.precoComDesconto()
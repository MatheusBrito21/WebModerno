Array.prototype.map2 = function(callback){
    const newArray= []
    for(let i = 0 ; i<this.length; i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}

const produtos = [
    '{"nome": "Celular","preco": 1900}',
    '{"nome": "PS5","preco": 3900}',
    '{"nome": "TV","preco": 800}',
]

const convJSON = e => JSON.parse(e)
const getPreco = e => `R$ ${(e.preco).toFixed(2)}`

let prodMap = produtos.map2(convJSON).map2(getPreco)
console.log(prodMap)
const produtos = [
    '{"nome": "Celular","preco": 1900}',
    '{"nome": "PS5","preco": 3900}',
    '{"nome": "TV","preco": 800}',
]

const convJSON = e => JSON.parse(e)
const getPreco = e => `R$ ${(e.preco).toFixed(2)}`

let prodMap = produtos.map(convJSON).map(getPreco)
console.log(prodMap)
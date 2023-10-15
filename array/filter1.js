const produtos = [
    '{"nome": "Celular","preco": 1900}',
    '{"nome": "PS5","preco": 3900}',
    '{"nome": "TV","preco": 800}',
]
const convJSON = e => JSON.parse(e)
const filtrado = produtos.map(convJSON).filter(x => x.preco >2000)
console.log(filtrado)
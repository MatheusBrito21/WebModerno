const sequence = {
    _id:1,
    get id(){return this._id++}
}

const produtos = {}

function salvarProduto(produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getAllProduto(){
    return Object.values(produtos)
}

function deleteProduto(id){
    delete produtos[id]
}

module.exports = {salvarProduto,getProduto,getAllProduto,deleteProduto}
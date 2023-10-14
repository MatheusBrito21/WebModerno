//funcacao factory criando um produto

function criarProduto(nome,preco, desconto = 0.1) {
    return{
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('Celular',1200))
console.log(criarProduto('PS5',3999))
console.log(criarProduto('TV',2000))
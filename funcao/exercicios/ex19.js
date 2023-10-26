const produtos = [
    '{"codigo":100, "nome":"Cachorro Quente" ,"preco":3}',
    '{"codigo":200, "nome":"Hambúrguer Simples" ,"preco":4}',
    '{"codigo":300, "nome":"Cheeseburguer" ,"preco":5.5}',
    '{"codigo":400, "nome":"Bauru" ,"preco":7.5}',
    '{"codigo":500, "nome":"Refrigerante " ,"preco":3.5}',
    '{"codigo":600, "nome":"Suco","preco":2.8}'
]

const arrProd = e => JSON.parse(e)
const lanches  = produtos.map(arrProd)

function escolherLanche(codigo,qtd){
    let lanche = ''
    switch(codigo){
        case 100:lanche = getLanche(codigo)
        break
        case 200:lanche = getLanche(codigo)
        break
        case 300:lanche = getLanche(codigo)
        break
        case 400:lanche = getLanche(codigo)
        break
        case 500:lanche = getLanche(codigo)
        break
        case 600:lanche = getLanche(codigo)
        break
        default:
            console.log('Codigo invalido')
    }

    let valorTotal = lanche.preco * qtd
    return `${qtd}x ${lanche.nome} - Total = R$ ${valorTotal.toFixed(2)} - Cod ${codigo} `
}

function getLanche(codigo){ 
    let lanche = lanches.filter(l => l.codigo === codigo)[0]
    return lanche
}

const total = escolherLanche(200,3)
console.log(total)
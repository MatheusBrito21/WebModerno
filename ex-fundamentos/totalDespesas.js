//criando objeto
function produto(nome,preco){
    return{
        nome,
        preco
    }
}
//produtos
const p1 = produto('iPad',3000)
const p2 = produto('Notebook',2000)
const p3 = produto('PS5',4000)
const p4 = produto('Guitarra',800)

//array de produtos
const arryProd = [p1,p2,p3,p4]

const despesasTotais = arryProd.map(value => value.preco).reduce((prev,atual)=> prev+atual)

console.log(`Total - R$ ${despesasTotais.toFixed(2)}`)
//let e const

{
    var a = 5//var possui escopo global fora de função
    let b =6// possui escopo de bloco
    console.log(b)
}
console.log(a)

//Template String
const produto ='iPad'
console.log(`${produto} é caro!`)

//Destructuring - extraindo dados de estruturas
const [l,e,...tras] = 'Cod3r'
console.log(l,e,tras)

const [x,,y] = [1,2,3]
console.log(x,y)

const {nome,idade} = {nome: 'Ana',idade:9}
console.log(nome)
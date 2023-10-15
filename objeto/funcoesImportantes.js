const pessoa = {
    nome:'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))//array de chaves
console.log(Object.values(pessoa))//array de valores
console.log(Object.entries(pessoa))//array de chave e valor -> Map

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave} ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{//cria e permite definir caracteristicas para uma propriedade
    enumerable:true,
    writable: false,//atua como metodo freeze, congelando a alteracao do atributo
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/1970'
console.log(pessoa)
console.log(Object.keys(pessoa))

//Object.assing - ECS2015
const destino = {a:1}
const obj1 = {b:2}
const obj2 = {c:3, a: 4}
const objf = Object.assign(destino,obj1,obj2)
console.log(objf)

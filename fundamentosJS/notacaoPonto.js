console.log(Math.ceil(6.2))
const obj = {}

obj.nome = 'Bola'
console.log(obj.nome)

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
console.log(obj2.nome)
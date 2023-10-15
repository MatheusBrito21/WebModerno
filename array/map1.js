const nums = [1,2,3,4,5]

let result = nums.map(x => x*2) //gera um novo array
console.log(result)

const soma10 = e=> e+10
let result2 = nums.map(soma10) //gera um novo array
console.log(result2)

let mapEncadeado = nums.map(x => x*2).map(soma10)
console.log(mapEncadeado)
const arr1 = new Array // nao é a forma recomendada de criar array
const arr2 = []
console.log(arr1)
console.log(arr2)

let aprovados = ['Bia','Carlos','Pedro','Ana']
console.log(aprovados[0])

aprovados.push('Nat') //adiciona um elemento no fim do array 
console.log(aprovados[3])

// aprovados[9] = 'Matt'
// console.log(aprovados)
// aprovados.sort()  
// console.log(aprovados)

aprovados = ['Bia','Carlos','Pedro','Ana']
aprovados.splice(1,1)
console.log(aprovados)
aprovados.splice(1,2,'E1','E2')//remove e adiciona elementos a partir de um index
console.log(aprovados)
console.log('01)', '1' ==1)// == compara o valor - true
console.log('02)', '1' ===1)// === compara os tipos - false
console.log('03)', '3' !=3)
console.log('04)', '3' !==3)

console.log('05)', 3 <2)
console.log('06)', 3 >2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)',d1 ===d2) //compara a referencia de meoria em ambos os casos
console.log('10)',d1 ==d2)
console.log('11)',d1.getTime() ==d2.getTime())
console.log('12)',undefined == null) // == valor
console.log('13)',undefined === null)//=== tipo

//de preferencia ao ===(estritamente igual) pois ele considera tanto o tipo quanto o valor das variaveis


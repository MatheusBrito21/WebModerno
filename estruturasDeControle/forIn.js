const arr = ['Tony','Steve','Bruce','Clint','Nat']

//recebe o indice
for (let i in arr) console.log(arr[i])

const pessoa = {
    nome: 'Matheus',
    idade: 25,
    peso: 90
}
// for(let i = 0; i< arr.length: i++)
for (let key in pessoa){
    console.log(`${key}: ${pessoa[key]}`)
}
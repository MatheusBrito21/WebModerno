// FOR In - itera em cima dos indices
const myString= 'Cod3r'
for(let letra in myString){
    console.log(myString[letra])
}
//FOR OF - itera em cima dos valores
for(let letra of myString){
    console.log(letra)
}

const assuntosMap = new Map([
    ['Map',{abordado: true}],
    ['Set',{abordado:true}],
    ['Promise',{abordado:false}],
])
for(let assunto of assuntosMap){
    console.log(assunto)
}
for(let chave of assuntosMap.keys()){
    console.log(chave)
}
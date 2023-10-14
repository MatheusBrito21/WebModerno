const notas = [6.5,7.6,8.1,9,5.5,3,2]

//sem callback
let notasBaixas = []

for(i in notas){
    if(notas[i]<7) notasBaixas.push(notas[i])
}
console.log(notasBaixas)

//com callback
const notasMenores7 = n => n<7 //arrow function ~ lambdas
const notasBaixas2 = notas.filter(notasMenores7)
console.log(notasBaixas2)
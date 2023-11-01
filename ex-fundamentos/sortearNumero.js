function sortearNumero(num){

    let random = Math.floor(Math.random() *11)
    random = random ==0? random+1:random
    return num === random? `Parabéns! O número sorteado foi o ${random}`:`Que pena! O número sorteado foi o ${random}`

}
console.log(sortearNumero(10))
console.log(sortearNumero(1))
console.log(sortearNumero(7))
console.log(sortearNumero(5))
function menorNumero(arrayNums){
    let menor = arrayNums.reduce((previousValue, currentValue) => previousValue<currentValue? previousValue:currentValue )
    return menor
}

console.log(menorNumero([-20,2,20,1,-5,-10]))
console.log(menorNumero([0,0,0,-1]))
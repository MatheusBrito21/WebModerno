function somarArray(array){
    const soma = array.reduce((previousValue, currentValue) => currentValue+ previousValue )
    return soma
}

console.log(somarArray([15,20,5]))
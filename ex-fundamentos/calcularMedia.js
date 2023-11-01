function calcularMedia(arrayNums) {

    let total = arrayNums.reduce((previousValue, currentValue) => previousValue + currentValue)
    let media = total / arrayNums.length
    return media.toFixed(1)
}

console.log(calcularMedia([5,5,10]))
console.log(calcularMedia([5,5,5]))
console.log(calcularMedia([5,6,10,50]))
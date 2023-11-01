function receberParesEIndicesPares(arrayNums){
    const arrayPares = arrayNums.filter((value, index) => index%2==0 && value%2==0)
    return arrayPares
}

console.log(receberParesEIndicesPares([1,0,12,24,10,50,54,60]))
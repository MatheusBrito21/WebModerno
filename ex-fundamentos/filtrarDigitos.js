function filtrarPorQtdDigitos(arrayNums, digitos){
        let filtrado = arrayNums
                                .map(value => value.toString())
                                .filter(value => value.length === digitos)
                                .map(value => Number.parseInt(value))

        return filtrado
        
}

const nums =[55,6,85,999,12345,0,12]

console.log(filtrarPorQtdDigitos(nums,5))
console.log(filtrarPorQtdDigitos(nums,1))
console.log(filtrarPorQtdDigitos(nums,3))
console.log(filtrarPorQtdDigitos(nums,2))
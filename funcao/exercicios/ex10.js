// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

function isDivisivelPor3(numero = '0'){

    let arrNum = numero.split('')
    let div = 0
    for(i in arrNum) div +=arrNum[i]

    let isDivisivel = div%3 == 0 ? true:false

    return isDivisivel
}

console.log(isDivisivelPor3('30'))
console.log(isDivisivelPor3('45'))
console.log(isDivisivelPor3('23'))
console.log(isDivisivelPor3('18'))
console.log(isDivisivelPor3('120'))
console.log(isDivisivelPor3('74'))


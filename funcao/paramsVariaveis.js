function soma(){
    let soma = 0
    for(i in arguments){
        soma+=arguments[i]
    }
    return soma
}

console.log(soma(5,6,3,8))
console.log(soma(5))
console.log(soma())
console.log(soma(0))
console.log(soma(2, 1,'q'))
function multiplicacao(a,b){
    let total = 0
    for(let i = 0; i<b ; i++){
        total+=a
    }
    return total
}

console.log(multiplicacao(5,5))
console.log(multiplicacao(0,5))
console.log(multiplicacao(0,7))
console.log(multiplicacao(7,5))
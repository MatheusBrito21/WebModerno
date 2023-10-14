// 12) Faça um algoritmo que calcule o fatorial de um número.

function fatorial(num){
    let total = 1
    for(let i = 1;i<=num;i++){
        total*=i
    }
    return total
}

console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(6))
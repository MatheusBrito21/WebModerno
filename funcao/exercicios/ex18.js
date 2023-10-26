const lerValor = n =>{
    let valor = ''
    switch(n){
        case 0: valor ="ZERO" 
        break;
        case 1: valor = "ONE" 
        break;
        case 2: valor = "TWO" 
        break;
        case 3: valor = "THREE" 
        break;
        case 4: valor = "FOUR" 
        break;
        default: console.log("Fora do intervalo") 
    }
    return valor
}
console.log(lerValor(0))
console.log(lerValor(1))
console.log(lerValor(5))


function compras(tab1,tab2){
    //operadores de circuito logico
    const comprarSorvete = tab1 || tab2 //se o primeiro for true, nao avalia o segundo
    const comprarTv50 = tab1 && tab2 //se o primeiro for false nao avalia o segundo

    //XOR - ou eclusivo
    //const comprarTV32 = !!(tab1 ^ tab2)
    const comprarTV32 = tab1 != tab2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete,comprarTv50, comprarTV32,manterSaudavel}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))
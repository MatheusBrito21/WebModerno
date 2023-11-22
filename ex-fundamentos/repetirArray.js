function repetirCodigo(cod,repeticoes){
    let arr = []
    for(let i = 0; i< repeticoes; i++){
        arr.push(cod)
    }
    return arr
}

console.log(repetirCodigo("Ola", 5))
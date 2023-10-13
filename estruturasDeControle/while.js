function gerarNumeroAleatorio(min,max){
    const num = Math.random() * (max -min) + min
    return Math.floor(num)
}

let op = 0

while(op != -1){
    op = gerarNumeroAleatorio(-1,10)
    console.log(op)
}
const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
            console.log('Excelente')
            break
        case 9:
            console.log('Bom')
            break
        case 8: case 7:
            console.log('Aprovado')
        case 6:
            console.log('Pode melhorar')
        default: 
        console.log('Reprovado')
    }
}

imprimirResultado(9)
imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(6.55)
imprimirResultado(5)
imprimirResultado('Teste')
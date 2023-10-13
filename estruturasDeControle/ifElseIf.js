Number.prototype.entre = function (inicio,fim){
    return this >=inicio && this<=fim
}

const imprimirNota = function(nota){
    if(nota.entre(9,10))console.log('Quadro de Honra')
    else if(nota.entre(7,8))console.log('Passou')
    else if(nota.entre(6,6.99))console.log('Pode melhorar')
    else console.log('Estude mais')
}

imprimirNota(10)
imprimirNota(7)
imprimirNota(6)
imprimirNota(5)
function soBoaNoticia(nota){
    if(nota >= 7) console.log('Aprovado :D')
    else console.log('Estude mais :(')
}

soBoaNoticia(8.1)
soBoaNoticia(6.9)

function testandoValores(valor){
    if(valor) console.log('É verdadeiro... '+valor )
}

testandoValores()
testandoValores(null)
testandoValores(undefined)
testandoValores('')
testandoValores(0)
testandoValores(-1)
testandoValores({})
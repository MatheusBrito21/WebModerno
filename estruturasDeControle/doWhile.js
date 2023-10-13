function contarAte(numero){
    let num = 1

    do{
        console.log('Contagem:',num++)
    }while(num <= numero)
}

function contagemRegressiva(numero){
    let num = numero
    console.log('Contagem :')
    do{
        console.log(num--)
        if(num == 5)console.log('Ignição...')
    }while(num >= 0)
    
    console.log('Houston, Lançar!')
}

// contarAte(10)
contagemRegressiva(10)
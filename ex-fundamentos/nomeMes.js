function nomeDoMes(num){
   let mes = ''
    switch(num){
    case 1:mes = 'janeiro'
        break;
    case 2:mes = 'fevereiro'
        break;
    case 3:mes = 'março'
        break;
    case 4:mes = 'abril'
        break;
    case 5:mes = 'maio'
        break;
    default: console.log('mes inválido')
   }
    return mes

}

console.log(nomeDoMes(1))
console.log(nomeDoMes(5))
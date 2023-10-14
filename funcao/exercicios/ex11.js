// 11) As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.

// Caso 1) É um número divisível por 4, mas não é divisível por 100.
// Caso 2) É um número divisível por 4, por 100 e por 400.

function isBissexto(ano){
    let bissexto=  ((ano %4 == 0 && ano%100 !=0 )||(ano %100 == 0 && ano%400 == 0 ))?true:false
    return bissexto
}

console.log(isBissexto(2004))
console.log(isBissexto(2008))
console.log(isBissexto(2020))
console.log(isBissexto(2018))
console.log(isBissexto(2000))
console.log(isBissexto(1964))
console.log(isBissexto(1970))
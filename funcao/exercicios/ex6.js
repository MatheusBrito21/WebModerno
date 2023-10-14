// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.


function jurosSimples(capital = 0,taxa = 0,meses){
    let montante= capital
    for(let i = 1;i<=meses;i++){
        montante+= (capital*taxa)
    }
    return montante
}
console.log(jurosSimples(10000,0.01,6))

function jurosComposto(capital = 0,taxa = 0,meses){
    let montante= capital
    for(let i = 1;i<=meses;i++){
        montante+= (montante*taxa)
    }
    return montante
}
console.log(jurosComposto(10000,0.01,6).toFixed(2))
function calcularSalario(valorHora, horas){
    let salario = valorHora* horas

    return `Salário igual a R$ ${salario.toFixed(2)}`
}

console.log(calcularSalario(10,40))
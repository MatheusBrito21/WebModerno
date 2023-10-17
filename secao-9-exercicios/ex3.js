function calcularSalario(valorHora, horas){
    const salario = valorHora* horas
    return `Salário igual a R$ ${(salario).toFixed(2)}`
}

const salario = calcularSalario(5,40)
console.log(salario)
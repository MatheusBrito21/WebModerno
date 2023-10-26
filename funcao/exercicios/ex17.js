function Funcionario(nome,salario,plano){
    this.nome = nome
    this.salario = salario
    this.plano = plano

    this.setSalario = function(){
    
        switch(plano){
            case "A":
                this.salario = salario + (salario*0.1)
                break;
            case "B":
                this.salario = salario + (salario*0.15)
                break;
            case "C":
                this.salario = salario + (salario*0.2)
                break;
            default:
                console.log('Plano Invalido')
        }
    }
}

const func1 = new Funcionario('Pedro',1500,'D')
console.log(func1.salario)
func1.setSalario()
console.log(func1.salario)

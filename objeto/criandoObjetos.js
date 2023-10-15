// usando notacao literal - nao confundir com JSON
const obj1 = {
    nome: 'Objeto 1'
}
console.log(obj1)

//obj em JS
const obj2 = new Object
console.log(obj2)

//funcoes contrutoras
function Produto(nome,preco,desc){
    this.nome = nome
    this.preco = preco
    this.getPrecoComDesconto = () =>{
        return this.preco * (1-desc)
    }
}
const prod1 = new Produto('Celular',1900,0.01)
const prod2 = new Produto('PS5',9900,0.01)
console.log(prod1.getPrecoComDesconto())
console.log(prod2.getPrecoComDesconto())

//funcao factory
function criarFuncionario(nome,salario,faltas){
    return {
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario/30) * (30-faltas)
        }
    }
}

const func1 = criarFuncionario('Joao',7980,4)
const func2 = criarFuncionario('Maria',11000,1)
console.log(func1, func2)
console.log(func1.getSalario(),func2.getSalario())

//Object create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//criando a partir de um JSON
const fromJSON = JSON.parse('{ "nome":"Matheus", "idade":"25","info":"Sou um JSON" }')
console.log(fromJSON)
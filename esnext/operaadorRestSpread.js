//operador...rest(juntar)/spread(espalhar)
//usar rest como parametro de funcao

//usar spread com objeto
const funcionario = {nome:'Joao',salario:1200}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['Ana','Pedro','Gloria']
const grupoFinal = ['Lucas','Peter','Alex',...grupoA]
console.log(grupoFinal)
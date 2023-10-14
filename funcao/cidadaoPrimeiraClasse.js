//funcao pode ser tratada como dado

//criar de forma literal - o bloco é obrigatorio
function func1(){}

//armazenar em uma variavel
const fun2 = function(){}

//armazenar em um array
const arr = [function(a,b){return a+b}, fun2, func1()]

console.log(arr[0](5,2))

//armazenar em um atributo de um objeto
const obj = {}
obj.falar = function(){console.log("Ola")}
obj.falar()

//passar funcao como parametro
function run(fun){
    fun()
}
run(function(){console.log("Executando....")})

//uma funcao pode retornar/ conter uma outra funca
function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(5,8)(6)

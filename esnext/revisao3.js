//ES 08:Object.values/Object.entries
const obj = {a:1,b:2,c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))//chave e valor - matriz

//melhorias notcao objeto
const nome= 'Carla'
const pessoa = {
    nome,
    // ola: function(){

    // }
    ola(){
        return 'Oi gente'
    }
}
console.log(pessoa.nome, pessoa.ola())

//class
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'Au au'
    }
}
console.log(new Cachorro().falar())

let dobro = function(a){
    return 2* a
}

dobro = a => 2*a //retorno implicito
console.log(dobro(20))

let ola = function (){
    return 'Olá'
}
ola = ()=> 'Olá'
console.log(ola())
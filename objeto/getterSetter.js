const sequencia ={
    _valor1: 1, //convencao
    get valor(){return this._valor1++},
    set valor(valor){
        if(valor >this._valor1){
            this._valor1 = valor
        }    
    }
}
console.log(sequencia.valor, sequencia.valor)
console.log(sequencia.valor = 1000, sequencia.valor= 1001)
console.log(sequencia.valor)
console.log(sequencia.valor)
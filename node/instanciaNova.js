// uma factory retorna um novo objeto

module.exports = () =>{
    return {
        valor: 1,
        contador(){
            this.valor++
        }
    }
}
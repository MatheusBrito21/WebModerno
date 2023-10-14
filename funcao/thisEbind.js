const pessoa = {
    saudacao: 'Ola',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()//conflito entre paradigmas OO e Funcional

const falarDePessoa = pessoa.falar.bind(pessoa)//amarra um objeto
falarDePessoa()
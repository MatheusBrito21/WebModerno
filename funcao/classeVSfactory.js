class Pessoa{
    constructor(nome){
        this.nome=nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoaessoa = nome =>{
    return {
        falar: () =>console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoaessoa("Maria")
p2.falar()
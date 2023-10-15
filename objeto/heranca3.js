const pai = {nome: 'Pedro',corDoCabelo: 'Preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Bia'
console.log(filha1)

for(key in filha1){
    console.log(key)
}
const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: false})
console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas= new Map([
    [function(){}, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero']
])
//não aceita repetição de chave
console.log(chavesVariadas)
chavesVariadas.set(123,'a')
chavesVariadas.set(123,'b')//sobrescreveu 'a'
chavesVariadas.forEach((valor,chave)=> {
    console.log(chave , valor)
})

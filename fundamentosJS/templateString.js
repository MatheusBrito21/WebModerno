const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome +'!'

const template = `
    Olá ${nome}
`
const template1 = `Olá de novo ${nome}! Sabia que 2 + 2 ${2+2} não é peixe?`

const up = texto => texto.toUppercase()

console.log(concatenacao)
console.log(template)
console.log(template1)

console.log(`Ei...${up(template1)}`)
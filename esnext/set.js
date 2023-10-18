//conjunto nao indexado que não aceita repetição
const equipes= new Set()
equipes.add('Ferrari')
equipes.add('Mercedes')
equipes.add('McLaren')
equipes.add('RedBull')
equipes.add('McLaren')//ignora pois ja existe 

console.log(equipes)

const nomes =["Raquel","Lucas","Raquel","Pedro"]
const nomesSet = new Set(nomes)

console.log(nomesSet)
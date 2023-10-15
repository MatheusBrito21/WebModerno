const pilotos = ['Vettel','Alonso','Sainz','Hamilton']
pilotos.pop()//remove o ultimo elemento do Array
console.log(pilotos)

pilotos.push('Peixoto') //adiciona um elemento
console.log(pilotos)

pilotos.shift()//remove o elemento no index 0
console.log(pilotos)

pilotos.unshift('Leclerc')//adiciona um elemento no index 0
console.log(pilotos)

//splice adiciona e/ou remove
pilotos.splice(3,1)
console.log(pilotos)
pilotos.splice(3,0,'Perez')
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(1,3)
console.log(algunsPilotos1)


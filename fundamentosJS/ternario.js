const resultado = nota => nota>=7 ? "Aprovado": "Reprovado"

console.log(resultado(6.5))
console.log(resultado(7))
console.log(resultado(10))
console.log(resultado(6.999))

let st = resultado(7.5)
console.log(st)
st = resultado(7)
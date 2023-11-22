let nome = 'Matheus'

function removerVogais(palavra){
  let semVogais  = palavra.replace(/[aeiouà-ú]/gi,'')
  return semVogais
}

console.log(removerVogais('Ola'))
console.log(removerVogais('Otorrinolaringologista'))
console.log(removerVogais('Lâmpada'))


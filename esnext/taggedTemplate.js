//tagged template -processa o template dentro de uma funcao 
function tag(partes,...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno= 'Gui'
const situacao= 'aprovado'
console.log(tag `${aluno} está ${situacao}`)
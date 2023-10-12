function casoDeMerda(error){
    throw 'Deu ruim aqui!!!'
}

function gritarNome(obj){
    try {
        console.log(obj.nome.toUpperCase()+'!!!')
    } catch (error) {
        console.log(obj)
        casoDeMerda(error)
    }
}

const obj = {
    name:'Matheus'
}

gritarNome(obj)
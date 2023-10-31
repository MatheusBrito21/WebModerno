function removerPropriedade(obj,prop){
    const novoObj =  {...obj}
    delete novoObj[prop]

    return novoObj
}

const obj = {nome: "Matheus", idade:25}
const novoObj =removerPropriedade(obj, "idade")
console.log()
console.log(Object.is(novoObj,obj))
console.log(novoObj,obj)
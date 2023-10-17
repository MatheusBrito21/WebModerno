const retornaMes = (numero)=>{
    let mes = new Date()
    mes.setMonth(numero-1,1)
    let data = mes.toDateString().split(' ')
    return data[1]
}
 console.log(retornaMes(2))
 console.log(retornaMes(4))
 console.log(retornaMes(12))
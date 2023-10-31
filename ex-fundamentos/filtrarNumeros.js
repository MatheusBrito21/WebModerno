const { isNumber } = require("lodash")

const filtrarArray =  function(array){
    const arrayNums = array.filter(valor => isNumber(valor))
    return arrayNums
}
console.log(filtrarArray([1,"Ola",25,{},true,"69"]))
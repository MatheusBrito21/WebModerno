//Arrow function
const soma = (a,b)=>a+b

console.log(5,6)

//Arrow function(this )
const lexico =()=> console.log(this ===exports)
const lexico2 =()=> lexico.bind({})
lexico()
lexico2()

//parametro default
function valorPadrao(padrao =0){
    console.log(padrao)
}
valorPadrao()
valorPadrao(5)

//operador rest
function total(...nums){
    let total = 0
    nums.forEach(n=> total+=n)
    return total
}

console.log(total(12,3,4,5))
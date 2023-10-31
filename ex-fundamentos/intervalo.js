function estaEntre(min,num,max){
    return num>min && num<max    
}

console.log(estaEntre(10,50,100))
console.log(estaEntre(100,50,10))
console.log(estaEntre(10,10,100))
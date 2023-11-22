function isBissexto(ano){

    let bissexto = false

    if(ano%4==0){
        if(ano%100==0){
            if(ano%400==0)bissexto = true
        }else{bissexto = true}

    }else{bissexto = true}

    return bissexto
}   

console.log(isBissexto(2006))
console.log(isBissexto(1992))
console.log(isBissexto(1900))
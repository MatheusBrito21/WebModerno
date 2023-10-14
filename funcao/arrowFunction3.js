let compararComThis = function (param){
    console.log(this === param)
}

compararComThis(global)
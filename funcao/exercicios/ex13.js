// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function isDiaUtil(dia){
    switch(dia){
        case 1:
            console.log(false)
            break
        case 2:case 3:case 4:case 5:case 6:
            console.log(true)
            break
        case 7:
            console.log(false)
            break
        default:
            console.log('Dia inválido')
            break
    }
}

isDiaUtil(1)
isDiaUtil(2)
isDiaUtil(3)
isDiaUtil(4)
isDiaUtil(7)
isDiaUtil(8)
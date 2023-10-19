// estrutura que respensenta uma operacao assincrona
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        console.log('Aguardando promisse...')
      setTimeout(()=>{
        if(frase) resolve(frase)
        else reject('Erro')

      },segundos*1000)
    })
}
falarDepoisDe(2).then(frase => console.log(frase)).catch(e => console.log(e))
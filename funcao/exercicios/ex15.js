// 5) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
// possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
// comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
// que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
// “Não trabalhamos com este tipo de automóvel aqui”.

function modeloDeCarro(tipo){
    switch(tipo){
        case 'hatch':
            console.log('Vendido!!!')
            break
        case 'sedan':case 'moto':case 'caminhonete':
            console.log('Tem certeza que não prefere o hacth?')
            break
        default:
            console.log('Não temos esse tipo')
          
    }
}

modeloDeCarro('hatch')
modeloDeCarro('moto')
modeloDeCarro('caminhao')
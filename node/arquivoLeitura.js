const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrona...
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//assincrona
fs.readFile(caminho,'utf-8',(err,conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//lendo diretamente de JSON 
const config = require('./arquivo.json')
console.log(config.db)

//lendo pasta
//__dirname representa o diretorio atual
fs.readdir(__dirname, (err,aquivos)=>{
    console.log('Conteudo das pastas')
    console.log(aquivos)
})
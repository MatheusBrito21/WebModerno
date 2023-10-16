const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')//client http

//GET all funcionarios
axios.get(url).then(response=>{
    const funcionarios = response.data
    // console.log(funcionarios)
})


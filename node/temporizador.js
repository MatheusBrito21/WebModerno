const schedule = require('node-schedule')
const { setTimeout } = require('timers/promises')

const tarefa = schedule.scheduleJob('*/5 * * * * *',function (){
    console.log('Executando tarefa', new Date().getSeconds())
})

setTimeout(function (){
    tarefa.cancel()
    console.log('Cancelando tarefa')
},2000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 17
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Socorrooooo!!!!')
})
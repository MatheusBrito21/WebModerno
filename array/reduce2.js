const alunos =[
    {nome: 'Joao', nota:7.5, bolsista: true},
    {nome: 'Maria', nota:8.5, bolsista: false},
    {nome: 'Pedro', nota:10, bolsista: false},
    {nome: 'Lucas', nota:6.9, bolsista: true},
]

const notas = alunos.map(e => e.nota).reduce((x,y) => x+y)
console.log(notas)


// const funcoes = require('./funcoes-auxiliares')
const {gets, print, qtdEntrada} = require('./funcoes-auxiliares')

// console.log(funcoes.print('Ivan Alex de Oliveira'))


let maiorValor = 0
let r = parseInt(qtdEntrada())
console.log(`Tem uma lista de ${r} números`)

for (let i = 0; i < r; i++) {
    const numeroSorteado = gets()
        
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado
    }
}

print(`${maiorValor} é o maior valor!`)

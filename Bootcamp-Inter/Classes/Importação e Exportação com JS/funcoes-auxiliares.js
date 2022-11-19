

const entradas = [7, 90, 10, 81, 15, 48, 93, 74, 29, 19, 72]
let i = 0

function qtdEntrada (){
    return entradas.length
}

function gets() {
    const valor = entradas[i]
    i++
    return valor
}

function print(texto) {
    console.log(texto)
}

module.exports = { gets, print, qtdEntrada }





















































































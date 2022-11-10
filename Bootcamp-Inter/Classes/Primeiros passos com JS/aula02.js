
// const numero = 125421187
// const numeroPar = (numero % 2 ) === 0

// if (numeroPar) {
//     console.log('É PAR')
// }

// if (!numeroPar) {
//     console.log('É ÍMPAR')
// }



const precoEtanol = 3.79
const precoGasolina = 4.85
const isEtanol = false

const kmPorLitro = 10
const distKm = 1357

const litrosViagem = distKm / kmPorLitro

if (isEtanol) {
    precoCombustivel = litrosViagem * precoEtanol
    console.log('Carro Etanol!')
} else {
    precoCombustivel = litrosViagem * precoGasolina
    console.log('Carro Gasolina!')
}

console.log('Valor do Combustível: R$ ' + precoCombustivel.toFixed(2))




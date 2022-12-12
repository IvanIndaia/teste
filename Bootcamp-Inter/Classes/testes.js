
let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = -16
let localizador = false

for (let i = 0; i < elementos.length; i++) {
  // console.log(elementos[i])
  if (elementos[i] === valor){
    console.log(`Achei ${valor} na posicao ${i}`)
    localizador = true
  }
}

if (!localizador){
  console.log(`Numero ${valor} nao encontrado!`)
}
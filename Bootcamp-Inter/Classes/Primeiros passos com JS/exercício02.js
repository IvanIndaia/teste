

const peso = 66.9
const altura = 1.635

imc = peso / (altura * altura) 

result = ''
console.log(imc.toFixed(2))

if (imc < 18.5){
    result = 'Abaixo do Peso'
} else if (imc < 25){
    result = 'no Peso Normal'
} else if (imc < 30){
    result = 'Acima do Peso'
} else if (result < 40){
    result = 'Obeso'
}else {
    result = 'em Obesidade Grave'
}

console.log('Você está '+ result)


function main() {
    console.log('Programa Principal')
}

function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

function classificarIMC(imc) {
    if (imc < 18.5){
        return 'Abaixo do Peso'
    } else if (imc < 25){
        return 'Peso Normal'
    } else if (imc < 30){
        return 'Acima do Peso'
    } else if (result < 40){
        return 'Obeso'
    }else {
        return 'Obesidade Grave'
    }
}

function main() {
    const peso = 75.0
    const altura = 1.75
    const imc = calcularIMC(peso, altura)
    
    console.log(imc.toFixed(2))
    console.log(classificarIMC(imc))
}

main()



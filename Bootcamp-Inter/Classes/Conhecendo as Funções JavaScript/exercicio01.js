class carro {
    marca;
    cor;
    kmPorLitro;
    constructor (marca, cor, kmPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro
    }

    calcularGastoPercurso (distanciaKm, vlrCombustivel) {
        return (distanciaKm / this.kmPorLitro * vlrCombustivel).toFixed(2)
    }
}
const uno = new carro('Fiat', 'Branco', 12)
console.log('De uno vai gastar R$_'+uno.calcularGastoPercurso(70, 5))

const prisma = new carro('GM', 'Preto', 10)
console.log('De prisma vai gastar R$_'+prisma.calcularGastoPercurso(70, 5))
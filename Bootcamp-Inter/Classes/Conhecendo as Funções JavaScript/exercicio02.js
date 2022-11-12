
class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura)
    }

    classificarIMCPessoa() {
        const imc = this.calcularIMC()

        if (imc < 18.5) {
            return 'Abaixo do Peso'
        } else if (imc < 25) {
            return 'no Peso Normal'
        } else if (imc < 30) {
            return 'Acima do Peso'
        } else if (imc < 40) {
            return 'Obeso'
        } else {
            return 'em Obesidade Grave'
        }
    }
}

const jose = new pessoa('José Maria', 80, 1.75)
const maria = new pessoa('Maria José', 46, 1.62)
const ivan = new pessoa('Ivan Alex', 99, 1.67)
console.log('Nome: ' + jose.nome + '\nIMC: ' + jose.calcularIMC() + '\nResultado: ' + jose.classificarIMCPessoa())
console.log('\n\nNome: ' + maria.nome + '\nIMC: ' + maria.calcularIMC() + '\nResultado: ' + maria.classificarIMCPessoa())
console.log('\n\nNome: ' + ivan.nome + '\nIMC: ' + ivan.calcularIMC() + '\nResultado: ' + ivan.classificarIMCPessoa())



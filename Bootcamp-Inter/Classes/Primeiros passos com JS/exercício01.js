

const n1 = 7
const n2 = 7
const n3 = 8

media = (n1 + n2 + n3) / 3 
classif = ''
console.log(media.toFixed(2))

if (media < 5){
    classif = 'REPROVADO'
} else if (media < 7){
    classif = 'de RECUPERAÇÃO'
} else {
    classif = 'APROVADO'
}

console.log('Aluno: '+ classif)

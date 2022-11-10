

const vlrProduto = 100.00
const formaPGTO = 7

let vlrFinal = 0

// Débito = 1 | 10% Desconto
// À vista Dinheiro/PIX = 2 | 15% Desconto
// Em 2x = 3 | Preço Normal do Produto
// 3x ou mais = 4 | Juros de 10%

if (formaPGTO == 1){
    vlrFinal = vlrProduto * 0.9
} else if (formaPGTO == 2){
    vlrFinal = vlrProduto * 0.85
} else if (formaPGTO == 3){
    vlrFinal = vlrProduto
} else if (formaPGTO == 4){
    vlrFinal = vlrProduto * 1.1
}else {
    
}

console.log('Valor final do Produto é: R$ '+ vlrFinal.toFixed(2))

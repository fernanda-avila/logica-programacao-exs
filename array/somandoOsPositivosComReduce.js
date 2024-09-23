// Vetor de vetores com números inteiros
const matriz = [
    [1, -2, 3],
    [4, -5, 6],
    [-7, 8, 9]
];

// Achata a matriz e soma apenas os valores positivos
const somaPositivos = matriz.flat().reduce((soma, valor) => {
    return valor > 0 ? soma + valor : soma;
}, 0);

// Exibe o resultado
console.log('Soma dos valores positivos:', somaPositivos);
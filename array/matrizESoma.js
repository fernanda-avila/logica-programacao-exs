const prompt = require('prompt-sync')();

// Criando uma matriz 3x3 com números fixos
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Calculando a soma de todos os elementos da matriz
let soma = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j];
    }
}

// Exibindo a soma
console.log(`A soma de todos os elementos da matriz é: ${soma}`);

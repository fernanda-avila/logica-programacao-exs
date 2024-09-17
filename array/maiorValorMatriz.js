

// Criando uma matriz 2x3 com valores fixos

const prompt = require('prompt-sync')();

let matriz = [
    [1, 5, 3],
    [7, 2, 6]
];

// Encontrando o maior valor na matriz
let maiorValor = matriz[0][0]; // Inicializa com o primeiro elemento

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] > maiorValor) {
            maiorValor = matriz[i][j];
        }
    }
}

// Exibindo o maior valor
console.log(`O maior valor na matriz é: ${maiorValor}`);

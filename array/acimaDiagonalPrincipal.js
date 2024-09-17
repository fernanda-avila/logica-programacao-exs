// Criando uma matriz 3x3 onde os elementos acima da diagonal principal são 0

const prompt = require('prompt-sync')();
let matriz = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];

// Exibindo a matriz
console.log("Matriz com elementos acima da diagonal principal definidos como 0:");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
}

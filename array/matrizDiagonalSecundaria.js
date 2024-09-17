const prompt = require("prompt-sync")();

// Criando uma matriz 3x3 com a diagonal secundária preenchida com 1
let matriz = [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0]
];

// Exibindo a matriz
console.log("Matriz com a diagonal secundária preenchida com 1:");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
}

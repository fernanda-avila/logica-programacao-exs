
// Criando uma matriz identidade 3x3

const prompt = require('prompt-sync')();
let matrizIdentidade = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];

// Exibindo a matriz identidade
console.log("Matriz Identidade 3x3:");
for (let i = 0; i < matrizIdentidade.length; i++) {
    console.log(matrizIdentidade[i].join(" "));
}

const prompt = require("prompt-sync")();

let linhas = parseInt(prompt("Digite o número de linhas do triângulo:"));

for (let i = 1; i <= linhas; i++) {
    let linha = '';

    for (let j = 1; j <= (linhas - i); j++) {
        linha += ' ';
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        linha += '*';
    }

    console.log(linha);
}

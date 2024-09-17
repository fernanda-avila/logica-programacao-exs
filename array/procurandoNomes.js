const prompt = require('prompt-sync')();

// Criando um vetor de 10 nomes
let nomes = [];
for (let i = 0; i < 10; i++) {
    nomes.push(prompt(`Digite o nome ${i + 1}:`));
}

// Recebendo o nome a ser verificado
let nomeParaBuscar = prompt("Digite o nome da pessoa para buscar:");

// Verificando se o nome está no vetor
let achei = nomes.includes(nomeParaBuscar);

// Exibindo a mensagem correspondente
if (achei) {
    console.log("ACHEI");
} else {
    console.log("NÃO ACHEI");
}

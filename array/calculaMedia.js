const prompt = require('prompt-sync')();

// Recebendo a quantidade de números no vetor
let tamanho = parseInt(prompt("Quantos números você deseja inserir?"), 10);

// Criando um vetor e recebendo os números
let numeros = [];
for (let i = 0; i < tamanho; i++) {
    numeros.push(parseFloat(prompt(`Digite o número ${i + 1}:`)));
}

// Calculando a média dos números
let soma = numeros.reduce((acc, curr) => acc + curr, 0);
let media = soma / numeros.length;

// Exibindo a média
console.log(`A média dos números inseridos é: ${media}`);

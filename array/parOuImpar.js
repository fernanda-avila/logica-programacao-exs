const prompt = require("prompt-sync")();

// Recebendo o número de elementos do vetor
let n = parseInt(prompt("Quantos elementos você deseja no vetor?"), 10);

// Criando o vetor e preenchendo com "Ímpar" ou "Par"
let vetor = [];
for (let i = 0; i < n; i++) {
    vetor[i] = (i % 2 === 0) ? "Par" : "Ímpar";
}

// Exibindo o vetor preenchido
console.log(`O vetor preenchido é: ${vetor.join(", ")}`);

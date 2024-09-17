// Crie um vetor de cinco números inteiros. Calcule e exiba a soma 
// de todos os números

const prompt = require('prompt-sync')();

let numeros = [10, 20, 30, 40, 50];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(`A soma dos números é ${soma}`);


// Saída esperada para o vetor [10, 20, 30, 40, 50]:
// A soma dos números é 150
// Crie um vetor de cinco números aleatórios. Ordene o vetor em 
// ordem crescente e exiba o resultado.

const prompt = require('prompt-sync')();

// Criando um vetor de cinco números aleatórios
let numeros = [42, 17, 8, 93, 56];

// Ordenando o vetor em ordem crescente
numeros.sort((a, b) => a - b);

// Exibindo o vetor ordenado
console.log(numeros);

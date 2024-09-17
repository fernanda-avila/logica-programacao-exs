// Crie um vetor de números, crie um novo vetor com os elementos 
// na ordem inversa

const prompt = require('prompt-sync')();

// Criando um vetor de números
let numeros = [5, 12, 8, 21, 7];

// Criando um novo vetor com os elementos na ordem inversa
let numerosInvertidos = [...numeros].reverse();

// Exibindo o vetor invertido
console.log(numerosInvertidos);

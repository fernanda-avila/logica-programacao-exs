const prompt = require('prompt-sync')();


// Criando um vetor vazio
let numeros = [];

// Recebendo 5 números do usuário via prompt
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`), 10);
    numeros.push(numero);
}

// Determinando o maior número no vetor
let maiorNumero = Math.max(...numeros);

// Exibindo o maior número
console.log(`O maior número do vetor é: ${maiorNumero}`);


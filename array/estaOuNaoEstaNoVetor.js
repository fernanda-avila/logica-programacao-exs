const prompt = require('prompt-sync')();

// Recebendo a quantidade de números no vetor
let tamanho = parseInt(prompt("Quantos números você deseja inserir no vetor?"), 10);

// Criando o vetor e recebendo os números
let vetor = [];
for (let i = 0; i < tamanho; i++) {
    vetor.push(parseFloat(prompt(`Digite o número ${i + 1}:`)));
}

// Recebendo o elemento a ser verificado
let elemento = parseFloat(prompt("Digite o número a ser verificado:"));

// Verificando se o elemento está presente no vetor
let estaPresente = vetor.includes(elemento);

// Exibindo o resultado
console.log(`O elemento ${elemento} ${estaPresente ? 'está' : 'não está'} presente no vetor.`);

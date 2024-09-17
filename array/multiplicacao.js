// Crie um vetor de três números inteiros. Multiplique cada elemento 
// por 2 e exiba o vetor resultante

const prompt = require('prompt-sync')();

let numeros = [10, 20, 30];

for (let i = 0; i < numeros.length; i++) {
    numeros[i] *= 2;
}

console.log(numeros);
// Saída esperada para o vetor [10, 20, 30]:
// [20, 40, 60] 
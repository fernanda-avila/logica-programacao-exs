// Crie um vetor de números inteiros. Crie um novo vetor contendo 
// apenas os números pares.


// Criando um vetor de números inteiros
let numeros = [10, 25, 32, 47, 54, 61, 72];

// Criando um novo vetor contendo apenas os números pares
let numerosPares = numeros.filter(numero => numero % 2 === 0);

// Exibindo o vetor com os números pares
console.log(numerosPares);

const prompt = require('prompt-sync')();

// Função para filtrar números pares e multiplicá-los por 3
const filtrarETransformar = (matriz) => {
    return matriz
        .filter(num => num % 2 === 0)  // Filtra os números pares
        .map(num => num * 3);           // Multiplica os números pares por 3
};

// Exemplo de matriz
const matriz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Aplicando a função
const resultado = filtrarETransformar(matriz);

// Exibindo o resultado
console.log(resultado);  // Saída: [6, 12, 18, 24, 30]

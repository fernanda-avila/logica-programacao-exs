// Vetor de vetores com números inteiros
const matriz = [
    [1, -2, 3],
    [4, -5, 6],
    [-7, 8, 9]
];

// Função para somar apenas valores positivos
function somarValoresPositivos(matriz) {
    return matriz.reduce((somaTotal, vetor) => {
        // Soma os valores positivos de cada vetor
        const somaPositivos = vetor.reduce((soma, valor) => {
            return valor > 0 ? soma + valor : soma;
        }, 0);
        
        // Adiciona a soma dos positivos ao total geral
        return somaTotal + somaPositivos;
    }, 0);
}

// Calcula a soma dos valores positivos
const somaPositivos = somarValoresPositivos(matriz);

// Exibe o resultado
console.log('Soma dos valores positivos:', somaPositivos);

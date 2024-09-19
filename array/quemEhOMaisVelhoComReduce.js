// Este código encontra a pessoa mais velha em um vetor de objetos 
// onde cada objeto representa uma pessoa com um nome e uma idade. 
// Usamos o método `reduce` para iterar sobre o vetor e comparar as idades,
// mantendo a pessoa com a maior idade.

const pessoas = [
    { nome: 'Ana', idade: 28 },
    { nome: 'João', idade: 35 },
    { nome: 'Maria', idade: 42 },
    { nome: 'Pedro', idade: 30 }
];

// Função para encontrar a pessoa mais velha
const pessoaMaisVelha = pessoas.reduce((maisVelha, pessoaAtual) => {
    // Compara a idade da pessoa atual com a idade da pessoa mais velha encontrada até agora
    return pessoaAtual.idade > maisVelha.idade ? pessoaAtual : maisVelha;
});

// Exibe o resultado
console.log('Pessoa mais velha:', pessoaMaisVelha);

const prompt = require('prompt-sync')();

// Lista de objetos com nome e idade
const pessoas = [
    { nome: 'Ana', idade: 28 },
    { nome: 'João', idade: 34 },
    { nome: 'Maria', idade: 22 }
];

// Função que transforma a lista de objetos em strings formatadas
const formatarPessoas = (lista) => {
    return lista.map(pessoa => `${pessoa.nome} tem ${pessoa.idade} anos`);
};

// Transformando a lista de pessoas em strings formatadas
const pessoasFormatadas = formatarPessoas(pessoas);

// Exibindo o resultado
console.log(pessoasFormatadas);

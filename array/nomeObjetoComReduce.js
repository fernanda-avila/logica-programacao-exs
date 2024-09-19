const prompt = require('prompt-sync')();

const nomes = ['Ana', 'João', 'Pedro'];

const nomesObj = nomes.reduce((acc, nome) => {
    acc[nome] = nome.length;
    return acc;
}, {});

console.log(nomesObj);

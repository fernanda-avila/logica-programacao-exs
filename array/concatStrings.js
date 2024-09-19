const prompt = require('prompt-sync')();

const listasDeStrings = [
    ['Olá', 'mundo'],
    ['Como', 'vai'],
    ['Você', 'hoje']
];

const listaConcatenada = listasDeStrings.reduce((acc, lista) => acc.concat(lista), []);

console.log('Lista concatenada:', listaConcatenada);

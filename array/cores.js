// Crie um vetor de cores. Pergunte ao usuário para inserir uma cor. 
// Exiba a posição da cor no vetor ou uma mensagem dizendo que a 
// cor não foi encontrada

const prompt = require('prompt-sync')();

const cores = ['azul', 'vermelho', 'amarelo', 'verde', 'roxo'];

let cor = prompt('Digite uma cor: ');

let posicao = cores.indexOf(cor);

if (posicao == -1) {
    console.log('Cor não encontrada');
} else {
    console.log(`A cor ${cor} está na posição ${posicao}`);
}
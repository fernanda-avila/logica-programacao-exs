const prompt = require('prompt-sync')();

const produtos = [
    { nome: 'Mouse', preco: 50 },
    { nome: 'Teclado', preco: 150 },
    { nome: 'Fone de Ouvido', preco: 200 }
];

const totalPreco = produtos.reduce((acc, produto) => acc + produto.preco, 0);

console.log(`O total dos preços é: R$${totalPreco}`);

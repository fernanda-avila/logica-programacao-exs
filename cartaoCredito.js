const prompt = require('prompt-sync')();

const numeroCartao = prompt("Digite o número do cartão de crédito com 16 dígitos:");

// Verifica se o número de cartão tem 16 dígitos e identifica a bandeira
const tamanhoValido = numeroCartao.length === 16;
const primeiroDigito = numeroCartao[0];

let bandeira;

if (tamanhoValido) {
    if (primeiroDigito === '4') {
        bandeira = 'Visa';
    } else if (primeiroDigito === '5') {
        bandeira = 'Mastercard';
    } else if (primeiroDigito === '6') {
        bandeira = 'Discover';
    } else {
        bandeira = 'Inválido';
    }
} else {
    bandeira = 'Inválido';
}

if (bandeira === 'Inválido') {
    console.log("O número do cartão de crédito é inválido.");
} else {
    console.log(`O número do cartão de crédito é válido e a bandeira é: ${bandeira}.`);
}

//Este programa solicita ao usuário que insira o valor da compra e o valor pago pelo cliente,
//calcula o troco e exibe o resultado em uma mensagem de alerta.
const valorCompra = Number(prompt("Digite o valor da compra:"));
const valorPago = Number(prompt("Digite o valor pado pelo cliente"));
const troco = valorPago - valorCompra;
alert(`O troco é de R$ ${troco.toFixed(2)}`);
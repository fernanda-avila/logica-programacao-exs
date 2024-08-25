//Este programa solicita ao usuário que insira o valor em reais que ele possui,
//converte esse valor para dólares e exibe o resultado em uma mensagem de alerta.
const valorInicial = Number(prompt("Quanto dinheiro você tem em reais?"))
const convertendo = valorInicial / 5.48 
const valorConvertido = convertendo.toFixed(2)
alert(`Você tem ${valorConvertido} dólares.`)

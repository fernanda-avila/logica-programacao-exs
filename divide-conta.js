//Este programa solicita ao usuário que insira o valor da conta e o número de pessoas que vão pagá-la,
//calcula o valor que cada pessoa deve pagar e exibe o resultado em uma mensagem de alerta.
const valorConta = (prompt("Digite o valor da conta"))
const numeroDePagantes = (prompt("Quantas pessoas vão pagar?"))
const valorPorCliente = valorConta / numeroDePagantes 
alert(`Cada pessoa deve pagar R$ ${valorPorCliente}`)
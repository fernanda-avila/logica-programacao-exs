//Este programa solicita ao usuário que insira um número, 
//calcula o dobro e a terça parte desse número e exibe os resultados em uma mensagem de alerta.
const valorInicial = Number(prompt("Digite um número:"))
const dobro = valorInicial * 2
const tercaParte = valorInicial / 3
alert(`O dobro de ${valorInicial} é ${dobro.toFixed(2)} e a sua terça parte é ${tercaParte.toFixed(2)}`)
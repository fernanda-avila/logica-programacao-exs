//Este programa solicita ao usuário que insira a quantidade de quilômetros rodados 
//e a quantidade de dias que o carro foi alugado,
const kmPercorridos = Number(prompt("Quantos quilômetros você rodou com o carro?"))
const diasDeUso = Number(prompt("Por quantos dias você ficou com o carro?"))
const valorPorDias = diasDeUso * 90
const valorPorKm = kmPercorridos * 0.20
const valorAPagar = valorPorDias + valorPorKm
alert(`O valor a ser pago é de R$ ${valorAPagar}`)
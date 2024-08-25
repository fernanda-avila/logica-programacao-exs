//Este programa solicita ao usuário que insira o número de horas trabalhadas e o valor da hora de trabalho,
//calcula o salário bruto e o salário líquido, exibindo o resultado em uma mensagem de alerta.
const ht = Number(prompt("Quantas horas você trabalhou?"))
const vh = Number(prompt("Quanto você recebe por hora?"))
const salarioBruto = ht * vh
const pd = salarioBruto * 10 / 100

const salarioLiquido = salarioBruto - pd
alert(`Seu salário bruto é de R$ ${salarioBruto.toFixed(2)} e o seu salário líquido é de R$ ${salarioLiquido}`)
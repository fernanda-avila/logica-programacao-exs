//Este programa solicita ao usuário que insira o número de dias trabalhados no mês,
//calcula o salário do mês e exibe o resultado em uma mensagem de alerta.
const diasTrabalhados = Number(prompt("Quantos dias você trabalhou esse mês?"))
const salarioPorDia = 25 * 8
const salarioDoMes = diasTrabalhados * salarioPorDia
alert(`Tendo trabalhado ${diasTrabalhados} dias esse mês, seu salário é de R$${salarioDoMes.toFixed(2)}`)
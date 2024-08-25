//Este programa solicita ao usuário que insira o número de dias e horas,
//calcula o total em minutos e exibe o resultado em uma mensagem de alerta.
const  dias =(prompt("Digite o número de dias: "))
const horas = (prompt("Digite o número de horas: "))

total_em_minutos = (dias * 1440) + (horas * 60)

alert(`Total em Minutos: ${total_em_minutos}`) 
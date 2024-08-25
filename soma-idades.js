//Este programa solicita ao usuário que insira as idades de duas pessoas, 
//calcula a média dessas idades e exibe o resultado em uma mensagem de alerta.
const idade1 = Number(prompt("Digite a idade da primeira pessoa"))
const idade2 = Number(prompt("Digite a idade da segunda pessoa"))
const media = (idade1 + idade2) / 2
alert(`A média entre as idades é ${media}`)
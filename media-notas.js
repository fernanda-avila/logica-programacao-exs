//Este programa solicita ao usuário que insira as notas de três alunos,
//calcula a média das notas e exibe o resultado em uma mensagem de alerta.
const nota1 = Number(prompt("Qual é a nota do primeiro aluno?"))
const nota2 = Number(prompt("Qual é a nota do segundo aluno?"))
const nota3 = Number(prompt("Qual é a nota do terceiro aluno?"))
const media = (nota1 + nota2 + nota3) / 3
alert(`A média das notas é ${media}`)
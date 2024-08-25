//Este programa solicita ao usuário que insira o valor inicial de um produto,
//calcula o valor do produto à vista com desconto de 15% e o valor de cada parcela em 3x,
//e exibe os resultados em mensagens de alerta.
const valorInicial = (prompt("Qual é o valor inicial do seu produto?"))
const desconto = valorInicial * 15 / 100 
const valorAVista = valorInicial - desconto
alert(`O valor do produto à vista com desconto de 15% é de R$ ${valorAVista}`)
const parcela3x = valorInicial / 3 
alert(`Parcelando em 3x, cada parcela sai por R$ ${parcela3x}`)
//Este programa solicita ao usuário que insira dois valores, A e B, e troca os valores de A e B entre si.
let A = prompt("Digite o valor de A:");
let B = prompt("Digite o valor de B:");

[A, B] = [B, A];

alert(`A = ${A} e B = ${B}`);
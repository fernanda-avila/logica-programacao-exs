// ifElse.js
const prompt = require('prompt-sync')(); 
const nota = Number(prompt("Entre com uma nota: "));
if (nota > 9) {
    console.log("Você é um aluno sensacional e está aprovado!!!!");
} else if (nota > 6) {
    console.log("Parabéns, passou de ano!!!");
} else {
    console.log("Que triste, você reprovou...");
}

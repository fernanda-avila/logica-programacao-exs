const prompt = require('prompt-sync')(); 
let continuar = 1;

while (continuar === 1) {

    let nota1 = parseFloat(prompt("Digite a primeira nota: "));
    let nota2 = parseFloat(prompt("Digite a segunda nota: "));


    let media = (nota1 + nota2) / 2;


    console.log(`A média final do aluno é: ${media.toFixed(2)}`);


    continuar = parseInt(prompt("Calcular a média de outro aluno? 1. Sim 2. Não: "));
    
    if (continuar !== 1) {
        console.log("Encerrando o programa.");
    }
}

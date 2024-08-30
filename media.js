// //Calcule a média de três notas de um aluno, aplique uma bonificação
// conforme a faixa de notas, e determine se ele está aprovado ou reprovado.
// Bonificações: notas acima de 85 recebem +5,
// Entre 70 e 85 recebem +3
// abaixo de 70 não recebem bonificação.//


let prompt = require('prompt-sync')()

const nota1 = Number(prompt("Digite a primeira nota:"))
const nota2 = Number(prompt("Digite a segunda nota:"))
const nota3 = Number(prompt("Digite a terceira nota:"))


function calcularMedia(nota1, nota2, nota3) {
    /**
     * Calcula a média de três notas.
     */
    return (nota1 + nota2 + nota3) / 3;
}

function aplicarBonificacao(media) {
    /**
     * Aplica bonificação baseada na média.
     */
    if (media > 85) {
        return media + 5;
    } else if (media >= 70 && media <= 85) {
        return media + 3;
    } else {
        return media;
    }
}

function determinarStatus(mediaFinal) {
    /**
     * Determina se o aluno está aprovado ou reprovado com base na média final.
     */
    if (mediaFinal >= 70) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

// Exemplo de uso


let media = calcularMedia(nota1, nota2, nota3);
let mediaFinal = aplicarBonificacao(media);
let status = determinarStatus(mediaFinal);

console.log(`Média: ${media.toFixed(2)}`);
console.log(`Média final após bonificação: ${mediaFinal.toFixed(2)}`);
console.log(`Status: ${status}`);
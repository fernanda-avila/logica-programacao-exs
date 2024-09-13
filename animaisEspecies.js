const prompt = require('prompt-sync')();

const animal = prompt("Digite o nome de um animal:");

let classificacao;

switch (animal.toLowerCase()) {
    // Mamíferos
    case 'cachorro':
    case 'gato':
    case 'elefante':
    case 'tigre':
    case 'urso':
        classificacao = 'Mamífero';
        break;
    
    // Aves
    case 'pássaro':
    case 'aguia':
    case 'peru':
    case 'pinguim':
    case 'corvo':
        classificacao = 'Ave';
        break;

    // Répteis
    case 'cobra':
    case 'jacaré':
    case 'lagarto':
    case 'tartaruga':
    case 'iguana':
        classificacao = 'Réptil';
        break;

    // Anfíbios
    case 'sapo':
    case 'rã':
    case 'salamandra':
    case 'perereca':
        classificacao = 'Anfíbio';
        break;

    // Peixes
    case 'salmão':
    case 'tubarão':
    case 'truta':
    case 'betta':
        classificacao = 'Peixe';
        break;

    default:
        classificacao = 'Classificação não encontrada';
        break;
}

console.log(`O animal ${animal} é classificado como: ${classificacao}`);

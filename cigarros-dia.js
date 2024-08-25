//Este programa solicita ao usuário que insira o número de cigarros fumados por dia 
//e há quantos anos fuma, calcula o total de dias de vida perdidos 
//e exibe o resultado em uma mensagem de alerta.

const porDia = Number(prompt("Quantos cigarros você fuma por dia?"));
const anos = Number(prompt("Quantos anos faz que você fuma?"));

const MINUTOS_POR_CIGARRO = 10;
const MINUTOS_POR_DIA = 24 * 60;

const cigarrosPorAno = porDia * 365;
const cigarrosTotais = cigarrosPorAno * anos;
const minutosPerdidos = cigarrosTotais * MINUTOS_POR_CIGARRO;
const diasPerdidos = minutosPerdidos / MINUTOS_POR_DIA;

alert(`Como fumante você perdeu ${diasPerdidos.toFixed(0)} dias de vida!`);
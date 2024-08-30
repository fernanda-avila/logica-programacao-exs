
// Um vendedor ganha comissão baseada no total de vendas: abaixo de
// 5000, nenhuma comissão; entre 5000 e 10000, 5%; acima de 10000, 10%.
// Calcule a comissão com base nas vendas de 3 meses.


const prompt = require('prompt-sync')();


const vendasJunho = parseFloat(prompt("Quantas vendas você realizou no mês de junho?"));
const vendasJulho = parseFloat(prompt("Quantas vendas você realizou no mês de julho?"));
const vendasAgosto = parseFloat(prompt("Quantas vendas você realizou no mês de agosto?"));

function calcularComissao(vendas) {
  let comissao;
  if (vendas < 5000) {
    comissao = vendas; 
  } else if (vendas >= 5000 && vendas <= 10000) {
    comissao = vendas + vendas * 0.05; 
  } else if (vendas > 10000) {
    comissao = vendas + vendas * 0.10; 
  }
  return comissao;
}


const comissaoJunho = calcularComissao(vendasJunho);
const comissaoJulho = calcularComissao(vendasJulho);
const comissaoAgosto = calcularComissao(vendasAgosto);


const totalComissao = comissaoJunho + comissaoJulho + comissaoAgosto;


console.log(`Comissão total: ${totalComissao.toFixed(2)}`);

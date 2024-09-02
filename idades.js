const prompt = require("prompt-sync")();

const idade = Number(prompt("Digite a sua idade:"));
let faseDaVida;

switch (true) {
  case (idade >= 0 && idade <= 12):
    faseDaVida = "Pegue o seu cobertor e vá assistir uns desenhos animados no sofá, você é uma criança!";
    break;
  case (idade >= 13 && idade <= 19):
    faseDaVida = "Se prepare para uma montanha russa de emoções, você é um adolescente!";
    break;
  case (idade >= 20 && idade <= 64):
    faseDaVida = "Aí vem os boletos! Respira fundo porque agora você é um adulto!";
    break;
  case (idade >= 65):
    faseDaVida = "Hora de descansar e aproveitar a vida, você é um idoso!";
    break;
  default:
    faseDaVida = "Idade inválida";
}

console.log(`${faseDaVida}.`);

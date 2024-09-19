// Esta função recebe dois parâmetros: total, que é o acumulador que mantém a soma das idades até o momento, e pessoa, que representa o objeto atual do array pessoas sendo processado. A função retorna a soma do acumulador atual (total) com a idade da pessoa atual (pessoa.idade).

// O segundo argumento passado para o método reduce é 0, que é o valor inicial do acumulador total. Isso significa que a soma começa em zero e, a cada iteração, a idade da pessoa atual é adicionada ao acumulador.

// Ao final da execução do reduce, a variável somaIdades conterá a soma total das idades de todas as pessoas no array pessoas. Este é um exemplo comum de como o reduce pode ser usado para agregar dados em um array de objetos.


const pessoas = [
    { nome: 'Ana', idade: 25, profissao: 'Engenheira' },
    { nome: 'Carlos', idade: 30, profissao: 'Médico' },
    { nome: 'Maria', idade: 22, profissao: 'Designer' },
    { nome: 'João', idade: 28, profissao: 'Professor' },
    { nome: 'Fernanda', idade: 35, profissao: 'Advogada' }
];


const somaIdades = pessoas.reduce((total, pessoa) => total + pessoa.idade, 0);

// Calcula a média dividindo a soma pelo número de pessoas
const mediaIdade = somaIdades / pessoas.length;

console.log(`A média de idade é: ${mediaIdade.toFixed(2)} anos`);

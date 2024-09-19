const prompt = require('prompt-sync')();

const alunos = [
    { nome: 'Ana', nota: 8.5 },
    { nome: 'João', nota: 6.0 },
    { nome: 'Maria', nota: 7.5 },
    { nome: 'Pedro', nota: 5.5 },
    { nome: 'Laura', nota: 9.0 }
];

const alunosAprovados = alunos.filter(aluno => aluno.nota > 7);

console.log('Alunos aprovados:', alunosAprovados);

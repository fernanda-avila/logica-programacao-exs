const prompt = require('prompt-sync')();

// Vetor de produtos
const produtos = [
    { nome: 'Camiseta', preco: 50, categoria: 'Roupas' },
    { nome: 'Calça', preco: 100, categoria: 'Roupas' },
    { nome: 'Tênis', preco: 150, categoria: 'Calçados' },
    { nome: 'Jaqueta', preco: 200, categoria: 'Roupas' },
    { nome: 'Chapéu', preco: 30, categoria: 'Acessórios' }
];

// Função para filtrar produtos por categoria
function filtrarPorCategoria(produtos, categoriaDesejada) {
    return produtos.filter(produto => produto.categoria === categoriaDesejada);
}

// Solicita ao usuário a categoria desejada
const categoria = prompt('Digite a categoria desejada: ');

// Filtra os produtos pela categoria fornecida
const produtosFiltrados = filtrarPorCategoria(produtos, categoria);

// Exibe o resultado
console.log(`Produtos na categoria "${categoria}":`, produtosFiltrados);

const produtos = [
    { nome: 'Celular', preco: 899, categoria: 'Eletrônicos' },
    { nome: 'Fone de Ouvido', preco: 49, categoria: 'Acessórios' },
    { nome: 'Monitor', preco: 799, categoria: 'Informática' },
    { nome: 'Teclado', preco: 150, categoria: 'Informática' },
    { nome: 'Caneca', preco: 25, categoria: 'Utilidades' },
    { nome: 'Notebook', preco: 2500, categoria: 'Eletrônicos' }
];

const produtosCaros = produtos.filter(produto => produto.preco > 100);

console.log(produtosCaros);

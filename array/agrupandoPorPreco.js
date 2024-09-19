const prompt = require('prompt-sync')();

// Função para ler um produto
const lerProduto = () => {
    const nome = prompt('Digite o nome do produto: ');
    const preco = parseFloat(prompt('Digite o preço do produto: '), 10);
    return { nome, preco };
};

// Função para ler vários produtos
const lerProdutos = () => {
    const produtos = [];
    let continuar = true;

    while (continuar) {
        produtos.push(lerProduto());
        continuar = prompt('Deseja adicionar outro produto? (sim/não): ').toLowerCase() === 'sim';
    }

    return produtos;
};

// Função para agrupar produtos por preço
const agruparPorPreco = (produtos) => {
    return produtos.reduce((acc, produto) => {
        if (produto.preco > 50) {
            acc.acimaDe50.push(produto);
        } else {
            acc.ate50.push(produto);
        }
        return acc;
    }, { acimaDe50: [], ate50: [] });
};

// Lendo a lista de produtos do usuário
const produtos = lerProdutos();

// Agrupando os produtos por preço
const produtosAgrupados = agruparPorPreco(produtos);

// Exibindo o resultado
console.log('\nProdutos agrupados por preço:');
console.log('Produtos com preço acima de R$50:', produtosAgrupados.acimaDe50);
console.log('Produtos com preço até R$50:', produtosAgrupados.ate50);

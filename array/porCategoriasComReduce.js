
//array de objetos chamado produtos, onde cada objeto representa um produto com propriedades nome, preco e categoria. Este array contém uma variedade de produtos, cada um pertencente a uma categoria específica, como "Eletrônicos", "Roupas" e "Calçados".

// Em seguida, o código utiliza o método reduce para contar quantos produtos existem em cada categoria. O método reduce aplica uma função acumuladora a cada elemento do array, resultando em um único valor final. Neste caso, a função acumuladora é uma função de seta (acc, produto) => { ... }, onde acc é o acumulador que mantém a contagem de produtos por categoria, e produto é o objeto atual do array produtos sendo processado.

// Dentro da função acumuladora, a contagem de produtos para a categoria do produto atual é incrementada. A expressão acc[produto.categoria] = (acc[produto.categoria] || 0) + 1 verifica se a categoria já existe no acumulador acc. Se existir, incrementa a contagem em 1; se não existir, inicializa a contagem com 0 e depois incrementa em 1. A função retorna o acumulador atualizado acc.

// O segundo argumento passado para o método reduce é um objeto vazio {}, que serve como valor inicial do acumulador acc. Isso significa que a contagem começa com um objeto vazio e, a cada iteração, as contagens de produtos por categoria são adicionadas a este objeto.

// Finalmente, o código imprime o resultado da contagem de categorias no console usando console.log(contagemCategorias). O resultado será um objeto onde as chaves são os nomes das categorias e os valores são as contagens de produtos em cada categoria. Por exemplo, o resultado pode ser { Eletrônicos: 2, Roupas: 2, Calçados: 1
const produtos = [
    { nome: 'Notebook', preco: 3000, categoria: 'Eletrônicos' },
    { nome: 'Smartphone', preco: 1500, categoria: 'Eletrônicos' },
    { nome: 'Camisa', preco: 100, categoria: 'Roupas' },
    { nome: 'Calça', preco: 150, categoria: 'Roupas' },
    { nome: 'Tênis', preco: 200, categoria: 'Calçados' }
];

// Conta quantos produtos existem em cada categoria
const contagemCategorias = produtos.reduce((acc, produto) => {
    acc[produto.categoria] = (acc[produto.categoria] || 0) + 1;
    return acc;
}, {});

console.log(contagemCategorias);

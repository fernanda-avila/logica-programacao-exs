// O método map é uma função de alta ordem em JavaScript que cria um novo array ao aplicar uma função a cada elemento do array original, neste caso, o array produtos.

// A função passada para o método map é uma função de seta que recebe um parâmetro produto, que representa o objeto atual do array produtos sendo processado. A função de seta é usada para transformar cada objeto produto de alguma forma, como por exemplo, aplicando um desconto ao preço do produto.

// O resultado do método map será um novo array produtosComDesconto, onde cada elemento é o resultado da transformação aplicada a cada produto do array original.


const produtos = [
    { nome: 'Notebook', preco: 3000 },
    { nome: 'Smartphone', preco: 1500 },
    { nome: 'Tablet', preco: 1000 },
    { nome: 'Smartwatch', preco: 500 }
];

// Aplica um desconto de 10% e cria um novo array de produtos descontados
const produtosComDesconto = produtos.map(produto => {
    const desconto = produto.preco * 0.10; // Calcula 10% do preço
    const precoComDesconto = produto.preco - desconto; // Aplica o desconto
    return { ...produto, preco: precoComDesconto }; // Retorna o produto com o novo preço
});

console.log(produtosComDesconto);

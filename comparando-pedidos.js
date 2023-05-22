//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// JSON do Cliente 1
const cliente1 = {
    /* nome: gets(),
    item: gets(),
    preco: parseFloat(gets()) */
    nome: 'Rafael',
    item: 'Pizza de Calabresa',
    preco: parseFloat(25)
};

// JSON do Cliente 2
const cliente2 = {
    nome: 'Rafael',
    item: 'Pizza de Calabresa',
    preco: parseFloat(25)
};

//TODO: Comparar os JSONs dos Clientes, verificando se todas as propriedades são iguais.
let json1 = JSON.stringify(cliente1)
let json2 = JSON.stringify(cliente2)

//TODO: Imprimir a saída conforme o enunciado deste desafio.


if (json1 === json2) {
    console.log("Os pedidos são iguais")
} else {
    console.log("Os pedidos são diferentes")
}

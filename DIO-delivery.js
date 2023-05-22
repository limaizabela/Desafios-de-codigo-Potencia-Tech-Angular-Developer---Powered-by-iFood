//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Aqui cria-se o objeto pedido com as informações do cliente, endereço, itens do pedido e taxa:
const pedido = {
    cliente: 'Joao',
    endereco: 'Rua B, 456',
    itens: [],
    taxaEntrega: 5.0
  };
  
  // Para popular o array de itens, criamos a seguinte estrutura de repetição:
  const quantidadeItens = parseInt(2);
  while (pedido.itens.length < quantidadeItens) {
    const nomeItem = 'Hamburguer';
    const precoItem = parseFloat(15);
    pedido.itens.push({ nome: nomeItem, preco: precoItem });
  }
  
  //TODO: Percorra o array de itens do pedido e calcule o seu valor total.
  
  let totalPrecoItem = pedido.itens.reduce((prev,curr) => prev + curr.preco, 0)
  let valorTotal = pedido.taxaEntrega + totalPrecoItem;
   
   //TODO: Imprima a saída no padrão descrito neste desafio.
  
  console.log(`Pedido: ${pedido.cliente} \nEndereco de entrega: ${pedido.endereco} \nTotal: R$ ${valorTotal.toFixed(2)}`);
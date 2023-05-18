//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorHamburguer = parseFloat(10.00);
const quantidadeHamburguer = parseInt(2);
const valorBebida = parseFloat(5.00);
const quantidadeBebida = parseInt(1);
const valorPago = parseFloat(30.00);

//TODO: Calcular o preço final do pedido (total dos hambúrgueres + total das bebidas).
const precoFinal = (valorHamburguer * quantidadeHamburguer) + (valorBebida * quantidadeBebida);

//TODO: Calcular o troco do pedido, considerando o preço final e o valor pago pelo usuário.
const troco = valorPago - precoFinal;
//TODO: Imprimir a saída no formato especificado neste desafio.
console.log("O preço final do pedido é R$" + precoFinal.toFixed(2) + ". Seu troco é R$" + troco.toFixed(2) +".");
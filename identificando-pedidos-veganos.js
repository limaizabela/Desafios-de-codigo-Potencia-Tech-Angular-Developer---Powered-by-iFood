const numPedidos = parseInt(2);

for (let i = 1; i <= numPedidos; i++) {
  const prato = 'Hamburguer de lentilha';
  const calorias = 300;
  //Explicação: atribui "true" se o valor lido via gets() for estritamente igual a 's'.
  //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
  const ehVegano = 's'

  const vegano = ehVegano ? 'Vegano' : 'Nao-vegano';

  console.log(`Pedido ${i}: ${prato} (${vegano}) - ${calorias} calorias`);
}
  //TODO: Tendo em vista a variável booleana "ehVegano", imprima a saída deste desafio.

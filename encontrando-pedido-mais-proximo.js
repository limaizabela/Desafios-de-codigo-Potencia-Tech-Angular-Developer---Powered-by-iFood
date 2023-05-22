const pedidos = [
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    },
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    },
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    }
  ];
  
  //TODO: Usando o array acima identifique o pedido mais próximo (menor distância).
  //Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
  //Referência: https://stackoverflow.com/a/34087850/3072570
  const pedidoMaisProximo = pedidos.reduce((pedidoAtual, pedidoComMenorDistancia) => {
    if (pedidoAtual.distancia < pedidoComMenorDistancia.distancia) {
    return pedidoAtual;
    } else {
    return pedidoComMenorDistancia;
    }
    });
    
  
  //TODO: Imprima a saída de acordo com o enunciado deste desafio.
  
    console.log(`O pedido mais próximo é o de ${pedidoMaisProximo.nome}, do tipo ${pedidoMaisProximo.tipo}`);
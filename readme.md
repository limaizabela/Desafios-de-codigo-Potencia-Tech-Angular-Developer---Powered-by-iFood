#Desafios de código 

Aqui estão registrados os enunciados dos desafios de código do bootcamp Potência Tech Angular Developer - Powered by iFood

# Desafio 1
Imagine que você está criando um aplicativo de entrega de comida e 
precisa informar ao usuário o tempo estimado de entrega de um restaurante. 
A mensagem deve conter o nome do restaurante e o tempo estimado de entrega em minutos.

## Entrada
A entrada deverá receber os valores abaixo:

nomeRestaurante (string): o nome do restaurante desejado.
tempoEstimadoEntrega (number): o tempo estimado de entrega em minutos.

## Saída
Deverá retornar uma mensagem (string) informando ao usuário o tempo estimado 
de entrega do restaurante. Por exemplo, para o restaurante Bar do Zinho com o 
tempo estimado de entrega sendo 20, imprima:

O restaurante Bar do Zinho entrega em 20 minutos.

Desafio Bônus: Utilize interpolação de strings para formatar sua saída ao invés 
da concatenação de strings tradicional.

# Desafio 2

Você está criando um aplicativo de entrega de comida e precisa calcular o preço final do pedido do usuário. O usuário escolheu alguns itens do cardápio e é preciso calcular o preço total do pedido.

## Entrada:
A entrada deve receber os valores abaixo:

valorHamburguer: o valor unitário de um hambúrguer.
quantidadeHamburguer: a quantidade de hambúrgueres que o usuário deseja.
valorBebida: o valor unitário de uma bebida.
quantidadeBebida: a quantidade de bebidas que o usuário deseja.
valorPago: o valor pago pelo usuário.

## Saída:
A saída deve retornar um texto informando o valor total do pedido e a quantidade de troco que será necessário. Por exemplo, se tivermos os seguintes valores de entrada:

valorHamburguer = 10.00;
quantidadeHamburguer = 2;
valorBebida = 5.00;
quantidadeBebida = 1;
valorPago = 30.00;
De acordo com esses valores de entrada, o cálculo do preço final do pedido ficaria assim:

Valor total dos hambúrgueres: 10.00 * 2 = 20.00
Valor total da bebida: 5.00 * 1 = 5.00
Preço total do pedido: 20.00 + 5.00 = 25.00
Troco necessário: 30.00 - 25.00 = 5.00
Como o usuário pagou R$ 30.00 e o preço total do pedido ficou em R$ 25.00, o troco necessário é de R$ 5.00. Portanto, a saída esperada para esse exemplo seria:

O preço final do pedido é R$ 25.00. Seu troco é R$ 5.00.

# Desafio 3
Crie um programa que informe ao usuário se ele pode receber um brinde especial de acordo com o valor total do pedido. Se o valor total do pedido for maior ou igual a R$ 50.00, o usuário receberá uma sobremesa grátis. Caso contrário, o usuário não receberá nenhum brinde.

## Entrada
A entrada deverá receber o valor total do pedido em uma variável numérica:

valorPedido: o valor do pedido.

## Saída
Deverá retornar uma mensagem (string) que informa se o usuário ganhou uma sobremesa ou não:

Se valorPedido >= 50, a mensagem deve ser:
Parabens, você ganhou uma sobremesa gratis!
Caso contrário, a mensagem deve ser:
Que pena, você nao ganhou nenhum brinde especial.


# Desafio 4
O objetivo deste programa é ajudar a equipe do Restaurante Veggieworld a identificar rapidamente os pedidos veganos e não veganos e informar as calorias de cada prato definido pelo cliente. O programa deve solicitar ao usuário o número de pedidos que serão feitos e, em seguida, pedir informações sobre cada pedido, incluindo se o prato é vegano ou não (usando as opções "s" para sim e "n" para não) e a quantidade de calorias. Ao final, o programa deve exibir uma lista de todos os pedidos com suas informações correspondentes.

## Entrada
Um inteiro n, que representa o número de pedidos que o usuário deseja fazer.
Para cada pedido, o usuário deve inserir:
O nome do prato;
A quantidade de calorias do prato;
Se o prato é vegano ou não (usando as opções "s" para sim e "n" para não).

## Saída
O programa deve exibir uma lista de todos os pedidos com suas informações correspondentes, incluindo o nome do prato, se é vegano ou não, e a quantidade de calorias, no seguinte formato:

Pedido X: NOME_DO_PRATO (EH_VEGANO?) - YYY calorias, onde "X" é o número do pedido, "NOME_DO_PRATO" é o nome do prato, "EH_VEGADO?" indica se o prato é vegano (escrever "Vegano" ou "Nao-vegano"), e "YYY" é a quantidade de calorias do prato.

# Desafio 5
Você foi contratado para desenvolver um sistema que armazena informações dos pedidos de comida online realizados por um cliente. O sistema deve permitir ao cliente inserir novos pedidos, escolher um cupom de desconto (10% ou 20%) e exibir o valor total de todos os pedidos realizados até o momento, com o desconto aplicado.

## Entrada
A entrada é composta por:

Uma linha com um número inteiro n representando a quantidade de pedidos que o usuário deseja inserir;
n linhas, cada uma contendo uma string com o nome do pedido e um valor em ponto flutuante separados por espaço. O nome do pedido não contém espaços em branco;
Uma linha contendo o cupom de desconto escolhido (10% ou 20%).

## Saída
O programa deve exibir uma única linha contendo o valor total de todos os pedidos com o desconto aplicado, no seguinte formato:

Valor total: XX.YY, onde "XX.YY" é a soma de todos os pedidos com desconto em formato de duas casas decimais após a vírgula.

# Desafio 6
A empresa DIO Delivery precisa calcular o valor total de um pedido e imprimir na tela as seguintes informações: o nome do cliente, o endereço de entrega e o total do pedido, incluindo a taxa de entrega, fixa de R$ 5.00.

## Entrada
Entrada deverá receber os valores que preencherão o objeto JSON , ele deverá conter as seguintes propriedades:

cliente: uma string com o nome do cliente.
endereco: uma string com o endereço de entrega.
quantidade de itens: indica a quantidade de itens que devem ser lidos no array a seguir.
itens: um array de objetos que representam um item do pedido, com as seguintes propriedades:
nome (string)
preço (number)
Importante: a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.

## Saída
Deverá retornar uma mensagem (string) que informa o nome do cliente, o endereço de entrega e o total do pedido, da seguinte maneira: 

Pedido: ${pedido.cliente}
Endereço de entrega: ${pedido.endereco}
Total: R$ ${totalCalculado}

# Desafio 7
Imagine que você é um desenvolvedor de uma plataforma de entregas de comida que está trabalhando em um novo recurso que permitirá que os entregadores vejam informações sobre os clientes dos pedidos que devem entregar, incluindo o nome, endereço, ID e número de telefone da pessoa.

Sua tarefa é criar um programa em JavaScript que leia os dados de um pedido, que incluem (principalmente) as informações do Cliente. Com os dados de entrada em mãos, seu programa deve apresentá-los em uma tela (Saída) para os entregadores orquestrarem as entregas dos pedidos.

## Entrada
A entrada do programa será feita pelo usuário e terá as seguintes informações (propriedades):

nome: o nome do cliente, representado por uma string;
endereco: endereço do cliente, representado por uma string;
id: identificador do pedido do cliente, representado por um valor numérico;
telefone: telefone do cliente, representado por uma string;
Importante: a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.

## Saída
Deverá retornar uma mensagem (string) que mostre as informações do cliente e do pedido na tela, veja exemplo abaixo:

Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}
ID: ${pedido.id}
Tel: ${pedido.cliente.telefone}

# Desafio 8
O objetivo desse desafio é criar um programa em JavaScript que compare dois objetos JSON de pedidos de entrega e determine se eles possuem ou não as mesmas informações. O programa deve criar dois objetos JSON contendo o nome do cliente, além do nome e preço de um item selecionado.

## Entrada
O programa receberá os dados necessários para criar dois Clientes com seu respectivo Item de Pedido para comparação:

Cliente 1:
Nome (string): nome do primeiro cliente.
Nome do Item (string): nome do item de pedido selecionado para o primeiro cliente.
Preço do Item (number): preço do item de pedido selecionado para o primeiro cliente.
Cliente 2:
Nome (string): nome do segundo cliente.
Nome do Item (string): nome do item de pedido selecionado para o segundo cliente.
Preço do Item (number): preço do item de pedido selecionado para o segundo cliente.
Importante: a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.

## Saída
Se todos os dados dos clientes forem estritamente iguais, o programa deverá retornar a mensagem:
Os pedidos são iguais

Caso contrário, o programa deverá retornar a mensagem:
Os pedidos são diferentes

# Desafio 9
Você é um desenvolvedor de um aplicativo de delivery de comida muito popular na sua cidade. O aplicativo permite que os usuários encontrem e peçam comida de seus restaurantes favoritos diretamente do conforto de suas casas.

Um dos seus colegas de trabalho, que é responsável pela integração de novos restaurantes ao aplicativo, pediu sua ajuda para criar um código que exiba o restaurante com a melhor avaliação em uma página web. Para isso, ele forneceu um array de objetos JSON contendo informações sobre dois restaurantes.

Você, como um excelente desenvolvedor, decide ajudar seu colega de trabalho com este desafio e começa a escrever o código necessário para exibir as informações na tela. Seu desafio é criar um código em JavaScript que percorra uma array de dois objetos JSON contendo informações sobre os restaurantes, exibindo o nome e a avaliação do restaurante com a melhor avaliação.

## Entrada
A entrada do seu código será os valores (nome e avaliação) dos seus objetos JSON, contendo informações necessárias sobre cada restaurante. Cada objeto terá as seguintes propriedades:

nome: o nome do restaurante, representado por uma string;
avaliacao: a avaliação média do restaurante, representado por um número de 0 a 5.
## Saída
A saída do seu código será o nome e a avaliação do restaurante melhor avaliado. Lembre-se de formatar a avaliação com 1 casa decimal após a virgula, conform o exemplo a seguir:
Restaurante: ${restaurante.nome}, Avaliação: ${restaurante.avaliacao}

Caso eles tenham a mesma avaliação, imprima o primeiro a ser lido na Entrada.

# Desafio 10
Um restaurante está buscando otimizar a entrega dos pedidos, e para isso precisa de um programa que encontre o pedido mais próximo a partir de uma lista de pedidos. O programa deve exibir o nome e o tipo de comida do pedido mais próximo.

Seu desafio é criar um código em JavaScript que manipule um array com três objetos JSON, contendo as informações de cada pedido (nome, tipo e distância).

## Entrada
 A entrada consiste em uma lista com 3 pedidos, os quais terão as seguintes propriedades:

nome: o nome do cliente, representado por uma string;
tipo: o tipo de comida do restaurante, representado por uma string.
distancia: a distância em quilometros do pedido até o restaurante, representado por um valor de 0 a 15.

## Saída
O programa deve exibir no console um texto contendo o nome do cliente e o tipo do pedido mais próximo encontrado na lista de pedidos. Conforme o exemplo abaixo:

O pedido mais próximo é o de ${pedido.nome}, do tipo ${pedido.tipo}
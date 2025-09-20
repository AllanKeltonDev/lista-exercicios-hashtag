/* Exercício 1: Crie um objeto chamado Venda com as propriedades produto, quantidade,
precoUnitario e desconto. Adicione um método chamado calcularTotal que calcule o
valor total da venda, considerando o desconto. Adicione também um método chamado
detalharVenda que retorne uma string detalhando a venda. */

let Vendas = {
  produto: 'Notebook', // Define o produto
  estoque: 10, // Define o estoque disponível
  quantidade: 3, // Define a quantidade
  precoUnitario: 2000.0, // Define o preço unitário
  desconto: 0.0, // Define o desconto (0 a 1, onde 0.1 representa 10%)

  calcularTotal: function () {
    let total = this.quantidade * this.precoUnitario;
    let totalComDesconto = total - total * this.desconto;
    return totalComDesconto; //calcula o valor total da venda, considerando o desconto
  },

  detalharVenda: function () {
    return `Produto: ${this.produto}, Quantidade: ${this.quantidade}, Preço Unitário: R$${this.precoUnitario.toFixed(2)}, Desconto: ${(this.desconto * 100).toFixed(2)}%, Valor de Desconto Aplicado: R$${(this.quantidade * this.precoUnitario - this.quantidade * this.precoUnitario * (1 - this.desconto)).toFixed(2)}, Total com Desconto: R$${this.calcularTotal().toFixed(2)}`; //detalha a venda com o desconto aplicado
  },

  /*Exercício 2: Adicione um método ao objeto Venda chamado aplicarDesconto que recebe
um valor percentual e atualiza o desconto da venda. Aplique um desconto de 10% e verifique o
valor total com o método calcularTotal.*/
  aplicarDesconto: function (novoDesconto) {
    if (novoDesconto < 0 || novoDesconto > 1) {
      return 'Desconto inválido. Deve ser entre 0 e 1.';
    }
    this.desconto = novoDesconto;
    return `Novo desconto aplicado: ${(this.desconto * 100).toFixed(2)}%`;
  },

  /*Exercício 3: Adicione um método ao objeto Venda chamado atualizarQuantidade que
recebe um número e altera a quantidade do produto na venda. Atualize a quantidade e
verifique o total da venda após a atualização.*/
  atualizarQuantidade: function (novaQuantidade) {
    if (novaQuantidade < 0) {
      return 'Quantidade inválida. Deve ser um número positivo.';
    }
    this.quantidade = novaQuantidade;
    return `Nova quantidade atualizada: ${this.quantidade}`;
  },

  /*Exercício 4: Adicione um método chamado verificarEstoque que recebe a quantidade
disponível em estoque e retorna uma mensagem fixa indicando se a venda pode ser realizada
ou se é necessário ajustar a quantidade.*/
  verificarEstoque: function (estoqueDisponivel = this.estoque) {
    if (this.quantidade > estoqueDisponivel) {
      return `Estoque insuficiente. Disponível: ${estoqueDisponivel}, Necessário: ${this.quantidade}`;
    }
    return 'Estoque suficiente para realizar a venda.';
  },
};
Vendas.atualizarQuantidade(5); // Atualiza a quantidade para 5
Vendas.aplicarDesconto(0.1); // Aplica um desconto de 10%
console.log(Vendas.verificarEstoque()); // Verifica o estoque disponível
console.log(Vendas.detalharVenda()); // Detalha a venda com o desconto aplicado

/*Exercício 5: Retorne um array com todas as suas propriedades e valores do objeto Venda.
Exiba as propriedades e valores em um formato legível.*/
console.log(Object.assign({}, Vendas)); // Retorna um array com todas as propriedades e valores do objeto Venda

/*Exercício 6: Obtenha um array com os nomes de todas as propriedades do objeto Venda.
Exiba as propriedades do objeto.*/
console.log(Object.keys(Vendas)); // Retorna um array com os nomes de todas as propriedades do objeto Venda

/*Exercício 7: Obtenha um array com os valores de todas as propriedades do objeto Venda.
Exiba os valores das propriedades do objeto.*/
console.log(Object.values(Vendas)); // Retorna um array com os valores de todas as propriedades do objeto Venda

/*Exercício 8: Verifique se o objeto Venda possui a propriedade desconto. Retorne a
verificação diretamente em uma mensagem fixa*/
console.log(
  Vendas.hasOwnProperty('desconto')
    ? 'O objeto Venda possui a propriedade desconto.'
    : 'O objeto Venda não possui a propriedade desconto.',
); // Verifica se o objeto Venda possui a propriedade desconto

/*Exercício 9: Crie um novo objeto NovaVenda que contenha as mesmas propriedades e
valores de Venda, mas com um produto e quantidade diferentes. Exiba o novo objeto
NovaVenda.*/
let NovaVenda = Object.assign({}, Vendas); // Cria um novo objeto NovaVenda com as mesmas propriedades e valores de Venda
NovaVenda.produto = 'Smartphone'; // Altera o produto
NovaVenda.quantidade = 4; // Altera a quantidade
console.log(NovaVenda); // Exibe o novo objeto NovaVenda

/*Exercício 10: Adicione uma nova propriedade data ao objeto Venda, definindo-a como não
enumerável. Exiba todas as propriedades do objeto Venda e, em seguida, exiba o valor da
nova propriedade data separadamente.*/
Object.defineProperty(Vendas, 'data', {
  value: new Date().toLocaleDateString(),
  enumerable: false, // Define a propriedade como não enumerável
});
console.log(Object.keys(Vendas)); // Exibe todas as propriedades do objeto Venda (data não será exibida)
console.log(`Data da Venda: ${Vendas.data}`); // Exibe o valor da nova propriedade data separadamente

/*Exercício 11: Crie um novo objeto DescontoEspecial que herde as propriedades do objeto
Venda, mas com um desconto fixo de 20%. Exiba as propriedades do novo objeto e verifique
se o desconto foi aplicado corretamente.*/
let DescontoEspecial = Object.create(Vendas); // Cria um novo objeto DescontoEspecial que herda as propriedades do objeto Venda
DescontoEspecial.aplicarDesconto(0.2); // Aplica um desconto fixo de 20%
console.log(DescontoEspecial.detalharVenda()); // Exibe as propriedades do novo objeto e verifica se o desconto foi aplicado corretamente

/*Exercício 12: Remova a propriedade desconto do objeto Venda. Verifique se a propriedade
foi removida com sucesso e exiba as propriedades restantes do objeto.*/
delete Vendas.desconto; // Remove a propriedade desconto do objeto Venda
console.log(
  Vendas.hasOwnProperty('desconto')
    ? 'A propriedade desconto não foi removida.'
    : 'A propriedade desconto foi removida com sucesso.',
); // Verifica se a propriedade foi removida com sucesso
console.log(Object.keys(Vendas)); // Exibe as propriedades restantes do objeto

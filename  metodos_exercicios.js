let Vendas = {

  produto : "",
  quantidade : 0,
  precoUnitario : 0.0,
  desconto : 0.0,

  calcularTotal: function () {
    let total = this.quantidade * this.precoUnitario;
    let valorDesconto = total * this.desconto;
    return total - valorDesconto;
  },

  detalharVenda: function () {
    return `Produto: ${this.produto}, Quantidade: ${this.quantidade}, Preço Unitário: R$${this.precoUnitario.toFixed(2)}, Desconto: ${(this.desconto * 100).toFixed(2)}%, Total com Desconto: R$${this.calcularTotal().toFixed(2)}`
  },

  aplicarDesconto: function (novoDesconto) {
    if (novoDesconto < 0 || novoDesconto > 1) {
      return "Desconto inválido. Deve ser entre 0 e 1.";
    }
    this.desconto = novoDesconto;
    return `Novo desconto aplicado: ${(this.desconto * 100).toFixed(2)}%`
  },
}

console.log(Vendas.aplicarDesconto(0.1)); // Aplica um desconto de 10%
console.log(Vendas.detalharVenda()); // Detalha a venda com o desconto aplicado
console.log(`Total da Venda: R$${Vendas.calcularTotal().toFixed(2)}`); // Mostra o total da venda com desconto

Vendas.produto = "Notebook"
Vendas.quantidade = 2;
Vendas.precoUnitario = 2500.00;
Vendas.desconto = 0.1; // 10% de desconto
/*Requisito 4: Crie uma função que receba um valor investido e uma taxa de juros e retorne o
rendimento obtido com esse investimento.
Função: calcularRendimento
Exemplo Entrada: //calcularRendimento(1000, 5);
Exemplo Saída: // 50
*/


function calcularRendimento(valorInvestido, taxaJuros) {

  const rendimento = (valorInvestido * taxaJuros) / 100;
  return console.log(`Seu Rendimento sobre o valor de R$${valorInvestido.toFixed(2)}, a uma taxa de juros de ${taxaJuros}% é R$${rendimento.toFixed(2)}`);

}

calcularRendimento(1000, 5);
calcularRendimento(1500, 10);
calcularRendimento(2000, 7.5);
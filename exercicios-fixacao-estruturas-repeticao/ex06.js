/*Requisito 6: Crie uma função que receba o número de vitórias e empates de um time e
retorne a quantidade total de pontos, sabendo que cada vitória vale 3 pontos e cada empate
vale 1 ponto.
Função: calcularPontos
Exemplo Entrada: // calcularPontos(5, 2);
Exemplo Saída: // 17
*/
function calcularPontos(vitorias, empates) {
  const pontos = (vitorias * 3) + (empates * 1);
  const pontosVitoria = vitorias * 3;
  const pontosEmpate = empates * 1;
  return console.log(`O time teve ${vitorias} vitórias e ${empates} empates, totalizando ${pontos} pontos. Sendo ${pontosVitoria} pontos de vitórias e ${pontosEmpate} pontos de empate. `);
}

calcularPontos(5, 2);
calcularPontos(3, 4);
calcularPontos(10, 0);
/*Requisito 8: Crie uma função que receba um array de gastos e retorne a quantidade de vezes
que o maior gasto aparece nesse array.
Função: maiorGasto
Exemplo Entrada: // maiorGasto([10, 5, 20, 15]);
Exemplo Saída: // 20 */

let gastos = [10, 5, 20, 15, 20, 20]; // Array de gastos fornecido
function maiorGasto(gastos) {
  let maiorValor = Math.max(...gastos); // Encontrando o maior valor no array de gastos
  let incremento = 0; // Inicializando o contador de ocorrências do maior valor

  for (let i = 0; i < gastos.length; i++) { // Percorrendo cada gasto no array
    if (gastos[i] === maiorValor)// Verificando se o gasto atual é igual ao maior valor
      incremento++; // Incrementando o contador se for igual ao maior valor e conta quantas vezes aparece
  } // Fim do loop
return console.log(`O maior gasto é ${maiorValor} e aparece ${incremento} vezes no array.`); // Retornando o maior valor e a quantidade de vezes que aparece
}

maiorGasto(gastos); // Testando a função com o array de gastos fornecido
maiorGasto([30, 10, 30, 20, 30]);
maiorGasto([5, 5, 5, 5, 5]);
maiorGasto([1, 2, 3, 4, 5]);
maiorGasto([100, 200, 100, 300, 200, 300, 300]);
maiorGasto([0, 0, 0, 0]);

/*Requisito 8: Crie uma função que receba um array de gastos e retorne a quantidade de vezes
que o maior gasto aparece nesse array.
Função: maiorGasto
Exemplo Entrada: // maiorGasto([10, 5, 20, 15]);
Exemplo Saída: // 20 */

let gastos = [10, 5, 20, 15, 20, 20]; // Array de gastos fornecido
function contarMaiorGasto(gastosArray) {
  if (!gastosArray || gastosArray.length === 0) {
    return { maiorValor: 0, ocorrencias: 0 };
  }

  const maiorValor = Math.max(...gastosArray); // Encontrando o maior valor no array de gastos
  let incremento = 0; // Inicializando o contador de ocorrências do maior valor

  for (let i = 0; i < gastosArray.length; i++) {
    // Percorrendo cada gasto no array
    if (gastosArray[i] === maiorValor)
      // Verificando se o gasto atual é igual ao maior valor
      incremento++; // Incrementando o contador se for igual ao maior valor e conta quantas vezes aparece
  } // Fim do loop
  return { maiorValor, ocorrencias: incremento }; // Retorna um objeto com os resultados
}

// --- Testando a função ---
const resultado1 = contarMaiorGasto(gastos);
console.log(
  `O maior gasto é ${resultado1.maiorValor} e aparece ${resultado1.ocorrencias} vezes no array.`,
);

const resultado2 = contarMaiorGasto([30, 10, 30, 20, 30]);
console.log(
  `O maior gasto é ${resultado2.maiorValor} e aparece ${resultado2.ocorrencias} vezes no array.`,
);

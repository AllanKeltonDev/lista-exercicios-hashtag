/*Requisito 9: Crie uma função que receba um array de números e retorne a média desses
números.
Função: calcularMedia
Exemplo Entrada: // calcularMedia([10, 20, 30, 40]);
Exemplo Saída: // 25 */

function calcularMedia(numeros) {
  let soma = 0; // Inicializando a soma dos números

  for (let i = 0; i < numeros.length; i++) { // Percorrendo cada número no array
    soma += numeros[i]; // Somando o número atual à soma total
  } // Fim do loop
  let media = soma / numeros.length; // Calculando a média dividindo a soma pelo número de elementos
  return console.log(`A média dos números [${numeros}] é ${media}.`); // Retornando a média calculada
}

// Testando a função com diferentes arrays de números
calcularMedia([5, 15, 25, 35, 45]);
calcularMedia([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
calcularMedia([100, 200, 300]);
calcularMedia([0, 0, 0, 0]);
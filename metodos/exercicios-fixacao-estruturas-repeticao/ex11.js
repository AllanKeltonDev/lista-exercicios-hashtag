/*Crie uma função que receba um número inteiro e retorne um booleano
indicando se o número é primo */

function ehPrimo(numero) {
  if (numero === 1) {
    return console.log(`O número ${numero} não é primo.`); // 1 não é primo
  } else if (
    typeof numero !== 'number' ||
    numero < 2 ||
    !Number.isInteger(numero)
  ) {
    return console.log(
      `O valor "${numero}" não é um número inteiro válido para verificação de primalidade.`,
    );
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    // Verifica divisores até a raiz quadrada do número
    if (numero % i === 0) {
      return console.log(`O número ${numero} não é primo.`); // Retorna false se encontrar um divisor
    }
  }
  console.log(`O número ${numero} é primo.`); // Retorna true se não encontrar divisores
}

// Testando a função com diferentes números
ehPrimo(7); // true
ehPrimo(10); // false
ehPrimo(13); // true
ehPrimo(1); // false
ehPrimo(-5); // false
ehPrimo(4.5); // false
ehPrimo('texto'); // false
ehPrimo(29); // true

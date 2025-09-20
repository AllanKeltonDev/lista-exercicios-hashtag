// Exercício 10: Crie uma função que receba uma palavra e retorne um booleano indicando se a
// palavra é um palíndromo.
// Função: ehPalindromo
// Exemplo Entrada: // ehPalindromo("arara");
// // ehPalindromo("cachorro");
// Exemplo Saída: // true
// // false

// vamos excluir pontuacoes, espacos e acentuos para fazer a verificacao

function ehPalindromo(palavra) {
  if (typeof palavra !== 'string' || !palavra) {
    return false;
  }
  // Limpa a string: remove acentos, pontuação, espaços e converte para minúsculas.
  const palavraLimpa = palavra
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\W_]/g, '');

  // Uma forma mais concisa de verificar o palíndromo
  const palavraInvertida = palavraLimpa.split('').reverse().join('');

  return palavraLimpa === palavraInvertida;
}

// --- Testando a função ---
// Agora, a lógica de exibir o resultado fica fora da função.
function testarPalindromo(palavra) {
  const resultado = ehPalindromo(palavra);
  if (resultado) {
    console.log(`A palavra "${palavra}" é um palíndromo.`);
  } else {
    console.log(`A palavra "${palavra}" não é um palíndromo.`);
  }
}

testarPalindromo('arara'); // true
testarPalindromo('cachorro'); // false
testarPalindromo('Socorram-me, subi no ônibus em Marrocos'); // true
testarPalindromo('Anotaram a data da maratona'); // true

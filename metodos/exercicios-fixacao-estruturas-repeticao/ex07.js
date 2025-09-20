/*Exercício 7: Crie uma função que receba uma frase e retorne a quantidade de vogais contidas
nela.
Função: contarVogais.
Exemplo Entrada: // contarVogais("Olá, tudo bem?");
Exemplo Saída: // 5*/

function contarVogais(frase) {
  const vogais = 'aeiouAEIOUáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙãõÃÕâêîôûÂÊÎÔÛ'; // Definindo as vogais, incluindo acentuadas
  let incremento = 0; // Inicializando o contador de vogais

  for (let i = 0; i < frase.length; i++) {
    // Percorrendo cada caractere da frase
    if (vogais.includes(frase[i])) {
      // Verificando se o caractere atual é uma vogal
      incremento++; // Incrementando o contador se for uma vogal
    }
  }
  return console.log(`A frase "${frase}" contém ${incremento} vogais.`); // Retornando a quantidade de vogais encontradas
}
contarVogais('Olá, tudo bem?'); // Testando a função com uma frase de exemplo
contarVogais('Esta é uma frase de exemplo.'); // Testando a função com uma frase de exemplo
contarVogais('JavaScript é uma linguagem de programação.'); // Testando a função com uma frase de exemplo

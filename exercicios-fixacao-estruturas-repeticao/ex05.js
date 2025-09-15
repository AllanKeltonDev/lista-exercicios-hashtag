/*Requisito 5: Crie uma função que receba uma frase como parâmetro e retorne um array
contendo as palavras que compõem essa frase, separadas por espaços.
Função: dividirFrase
Exemplo Entrada: // dividirFrase("Esta é uma frase de exemplo.");
Exemplo Saída: // ["Esta", "é", "uma", "frase", "de", "exemplo."]
*/

function dividirFrase(frase) {
  const arrayPalavras = frase.split(" "); // Usando o método split para dividir a frase em palavras, separadas por espaços
  return console.log(arrayPalavras);// Retornando o array de palavras
}

dividirFrase("Esta é uma frase de exemplo."); // Testando a função com uma frase de exemplo
dividirFrase("JavaScript é uma linguagem de programação."); // Testando a função com uma frase de exemplo
dividirFrase("Estou aprendendo a usar métodos de string."); // Testando a função com uma frase de exemplo


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
  // Removendo pontuações, espaços e convertendo para minúsculas
  const palavraLimpa = palavra.toLowerCase().replace(/[\W_]/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
// Expressão regular para remover pontuações e espaços, e normalizar acentuação
//Este trecho de código realiza uma limpeza avançada em uma string chamada palavra. O objetivo é transformar a palavra em uma versão padronizada, sem caracteres especiais, acentos ou diferenças de maiúsculas/minúsculas, facilitando comparações ou validações.
// Primeiro, palavra.toLowerCase() converte todos os caracteres para minúsculo, tornando a comparação insensível a maiúsculas. Em seguida, .replace(/[\W_]/g, '') remove todos os caracteres que não são letras ou números (incluindo espaços, pontuação e sublinhados), usando uma expressão regular. O método .normalize('NFD') transforma caracteres acentuados em sua forma de composição, separando o caractere base dos acentos. Por fim, .replace(/[\u0300-\u036f]/g, '') remove os diacríticos (acentos) que foram separados, eliminando qualquer marca de acentuação.
// Esse processo é útil, por exemplo, para verificar se duas palavras são iguais independentemente de acentos, pontuação ou capitalização. Um ponto de atenção é que, ao remover todos os caracteres não alfanuméricos, palavras compostas ou com símbolos podem perder informações relevantes dependendo do contexto.


// Expressões regulares (regex) são padrões usados para buscar, validar ou manipular textos em strings. Elas permitem identificar sequências específicas de caracteres, como números, letras, símbolos ou formatos (ex: e-mails, datas, CEPs).

// No JavaScript, são escritas entre barras (/padrão/) e podem incluir modificadores, como g (global) ou i (case-insensitive). Exemplos de uso:

// Validar se um texto contém apenas números: /^\d+$/
// Encontrar todos os e-mails em um texto: /[\w.-]+@[\w.-]+\.\w+/g
// Remover espaços extras: str.replace(/\s+/g, ' ')
// No seu código, a expressão /[\W_]/g remove tudo que não é letra ou número, facilitando comparações como palíndromos. Elas são muito úteis para filtragem, busca e limpeza de dados em strings.
  
  console.log(palavraLimpa); // Verificando a palavra limpa
  // Verificando se a palavra é um palíndromo
  const tamanho = palavraLimpa.length; // Obtendo o tamanho da palavra limpa  
  for (let i = 0; i < tamanho / 2; i++) { // Percorrendo até a metade da palavra
    if (palavraLimpa[i] !== palavraLimpa[tamanho - 1 - i]) { // Comparando caracteres simétricos
      return console.log(`A palavra "${palavra}" não é um palíndromo.`); // Retornando false se os caracteres não forem iguais
    } 
  } // Fim do loop
  return console.log(`A palavra "${palavra}" é um palíndromo.`); // Retornando true se todos os caracteres forem iguais
}   

// Testando a função com diferentes palavras    

ehPalindromo("arara"); // true
ehPalindromo("cachorro"); // false
ehPalindromo("Socorram-me, subi no ônibus em Marrocos"); // true

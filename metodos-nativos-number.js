/*Exercício 1: Converta valores de texto em números
Imagine que você tem valores em formato de texto, como "150.50" ou "200px". Seu objetivo é
convertê-los para números reais.
Exemplo de Entrada: // "150.50";
// "200px";
// "abc";
Exemplo de Saída: // 150.50
// 200
// NaN */

console.log("Ex.1:")
let stringNum = "150.50";
let pixelNum = "200px";
let alphaNum = "abc";

console.log((Number.parseFloat(stringNum)).toFixed(2))
console.log(Number.parseInt(pixelNum))
console.log(Number.parseFloat(alphaNum))

/*Exercício 2: Somar valores numéricos de uma entrada de formulário
Você recebe dois valores numéricos como string. Converta-os e some-os corretamente.
Exemplo de Entrada: // "10" e "20.5";
Exemplo de Saída: // 30.5*/

let entrada1 = "123.5";
let entrada2 = "56";

converte1 = Number.parseFloat(entrada1);
converte2 = Number.parseFloat(entrada2);

console.log("")
console.log("Ex.2:")
console.log("A soma das string convertidas em números é : " + (converte1 + converte2).toFixed(2));

/*Exercício 3: Arredonde valores financeiros
Você tem um valor financeiro com várias casas decimais e deseja exibi-lo com apenas duas
casas decimais.
Exemplo de Entrada: // 1234.56789;
Exemplo de Saída: // Valor formatado: 1234.57*/

let valorDecimal = 1234.98765

console.log("")
console.log("Ex.3:")
console.log( (valorDecimal.toFixed(2)))

/*Exercício 4: Ajustar a precisão de um número
Você tem um número muito grande e precisa exibi-lo com uma precisão específica.
Exemplo de Entrada: // 12345.6789;
Exemplo de Saída: // Valor com precisão: 1.235e+4*/

let numeroGrande = 1351344545.9994325

console.log("")
console.log("Ex.4:")
console.log( numeroGrande.toPrecision(4))

/*Exercício 5: Verificar se a entrada é um número válido
Você recebe uma entrada do usuário e precisa garantir que seja um número válido antes de
realizar qualquer operação.
Exemplo de Entrada: // "123abc";
Exemplo de Saída: // "A entrada não é um número válido."
*/

const entrada = "123abc";
const entradaValida = "123";

//NaN - isNaN (true/false)
const entradaConvertida = Number(entrada);
const entradaValidaConvertida = Number(entradaValida);
//console.log(entradaConvertida);
//console.log(entradaValidaConvertida);
console.log("")
console.log("Ex.5:")
console.log(
  Number.isNaN(entradaConvertida) + " Entrada inválida, valor não é um número"
); //NaN - entrada inválida = true;
console.log(
  Number.isNaN(entradaValidaConvertida) + " Entrada válida. Número correto"
); // 123 - entrada válida = false

//Segunda forma
console.log(
  Number.isNaN(entradaConvertida) ===
    false + " Entrada inválida, valor não é um número"
); //false (entrada inválida);
console.log(
  Number.isNaN(entradaValidaConvertida) ===
    false + " Entrada válida. Número correto."
); // true (entrada válida);

//  Exercício 6: Verificar se o número é finito
//  Você quer garantir que um número não seja Infinity ou NaN antes de usá-lo em cálculos.
const numero = 1 / 0;
const notNumber = NaN;
const string = "abc";

const valorValido = 123;


console.log("")
console.log("Ex.6:")
console.log(numero);
console.log(notNumber);
console.log(string);

console.log(Number.isFinite(numero)); // false
console.log(Number.isFinite(notNumber));
console.log(Number.isFinite(string));
console.log(isFinite(valorValido)); // true

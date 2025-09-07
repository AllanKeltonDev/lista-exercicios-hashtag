/*Exercício 1: Você precisa criar uma função que receba um número decimal e o arredonde de
três formas diferentes: para baixo, para cima e para o valor inteiro mais próximo. Mostre o
resultado de cada arredondamento no console.
Exemplo Entrada: // 7.89
Exemplo Saída: // Arredondado para baixo: 7
Arredondado para cima: 8
Arredondado para o valor mais próximo: 8*/

console.log("Exercício 1:");

let numeroDecimal = 7.89;

let arredondarParaBaixo = Math.floor(numeroDecimal);
let arredondarParaCima = Math.ceil(numeroDecimal);
let arredondarParaMaisProximo = Math.round(numeroDecimal);

console.log(`Arredondado para baixo: ${arredondarParaBaixo}`);
console.log(`Arredondado para cima: ${arredondarParaCima}`);
console.log(`Arredondado para o inteiro mais próximo: ${arredondarParaMaisProximo}`);

/*Exercício 2: Crie uma função que receba uma lista de números e retorne o valor máximo e o
valor mínimo dessa lista.
Exemplo Entrada: // 10, 5, 20, 40, 1, 7
Exemplo Saída: // Valor mínimo: 1
Valor máximo: 40*/

console.log("")
console.log("\nExercício 2:");

let listaNumeros = [10, 5, 20, 40, 1, 7];

let valorMinimo = Math.min(...listaNumeros);
let valorMaximo = Math.max(...listaNumeros);

console.log(`Valor mínimo: ${valorMinimo}`);
console.log(`Valor máximo: ${valorMaximo}`);

/*Exercício 3: Você deve criar uma função que gere três tipos de números aleatórios: um entre 0
e 1, outro entre 0 e 100, e um número inteiro aleatório entre dois valores específicos. Exiba os
resultados no console.
Exemplo Entrada: // 50, 100
Exemplo Saída: // Aleatório entre 0 e 1: 0.8629821531529918
Aleatório entre 0 e 100: 42.48780566605361
Aleatório entre 50 e 100: 63.70589822740784*/

console.log("")
console.log("\nExercício 3:");

let aleatorioEntre0e1 = Math.random();
let aleatorioEntre0e100 = Math.random() * 100;

function numeroInteiroAleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let min = 50;
let max = 100;
let numeroInteiroAleatorio = numeroInteiroAleatorioEntre(min, max);

console.log(`Aleatório entre 0 e 1: ${aleatorioEntre0e1}`);
console.log(`Aleatório entre 0 e 100: ${aleatorioEntre0e100}`);
console.log(`Aleatório entre ${min} e ${max}: ${numeroInteiroAleatorio}`);

/*Exercício 4: Crie uma função que receba duas datas e calcule a diferença entre elas em dias.
Exiba o resultado no console.
Exemplo Entrada: // 2024-01-01, 2024-10-07
Exemplo Saída: // Diferença em dias entre 2024-01-01 e 2024-10-07: 280 dias*/

console.log("")
console.log("\nExercício 4:");  

function diferencaEmDias(data1, data2) {
  const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
  const diferencaEmMilissegundos = Math.abs(data2 - data1);
  return Math.floor(diferencaEmMilissegundos / umDiaEmMilissegundos);
}

let dataInicio = new Date("2024-01-01");
let dataFim = new Date("2024-10-07");

let diasDeDiferenca = diferencaEmDias(dataInicio, dataFim);

console.log(`Diferença em dias entre ${dataInicio.toISOString().split('T')[0]} e ${dataFim.toISOString().split('T')[0]}: ${diasDeDiferenca} dias`);

/*Exercício 5: Crie uma função que receba uma data e extraia o ano, mês e dia dessa data.
Exiba as informações no console.
Exemplo Entrada: // 2024-10-07
Exemplo Saída: // Ano: 2024, Mês: 10, Dia: 6*/

console.log("")
console.log("\nExercício 5:");

function extrairData(data) {
  const ano = data.getFullYear();
  const mes = data.getMonth() + 1; // Os meses são indexados a partir de 0
  const dia = data.getDate();
  return { ano, mes, dia };
}

let dataExemplo = new Date("2024-10-07T00:00:00");
let { ano, mes, dia } = extrairData(dataExemplo);

console.log(`Ano: ${ano}, Mês: ${mes}, Dia: ${dia}`);

/*Exercício 6: Crie uma função que receba a data de nascimento de uma pessoa e calcule sua
idade com base na data atual. Exiba a idade no console.
Exemplo Entrada: // 1990-05-15
Exemplo Saída: // Idade: 34 anos*/

console.log("")
console.log("\nExercício 6:");

function calcularIdade(dataNascimento) {
  const dataAtual = new Date();
  let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
  const mesAtual = dataAtual.getMonth();
  const diaAtual = dataAtual.getDate();
  const mesNascimento = dataNascimento.getMonth();
  const diaNascimento = dataNascimento.getDate();

  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
    idade--;
  }
  return idade;
}

let dataNascimentoExemplo = new Date("1990-11-15");
let idade = calcularIdade(dataNascimentoExemplo);

console.log(`Idade: ${idade} anos`);

/*Desafio: Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano).
Exiba o resultado no console.
Exemplo Entrada: // 2024-10-07
Exemplo Saída: // Data formatada no padrão brasileiro: 07/10/2024*/

console.log("")
console.log("\nDesafio:");

function formatarDataParaPadraoBrasileiro(data) {
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // Os meses são indexados a partir de 0
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

let dataParaFormatar = new Date();
let dataFormatada = formatarDataParaPadraoBrasileiro(dataParaFormatar);

console.log(`Data formatada no padrão brasileiro: ${dataFormatada}`);






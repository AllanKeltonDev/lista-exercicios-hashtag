/*xercício 1: Cálculo do Faturamento Semanal
Você é o gerente de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres em uma
semana. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia da
semana. Crie um programa que calcule o valor total das vendas em uma semana. E separe as vendas de cada dia*/

const interacaoUsuario = require('readline'); // Importa o módulo readline para interagir com o usuário via terminal

const precoHamburguer = 10; // Preço fixo de cada hambúrguer
const vendasDiarias = []; // Array para armazenar o número de hambúrgueres vendidos a cada dia

// Cria uma interface para comunicação com o usuário via terminal
const caixaComunicacao = interacaoUsuario.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calcularVendas = (dia = 1) => {
  // Função recursiva para calcular as vendas diárias
  if (dia > 7) {
    const vendasSemana = vendasDiarias.reduce(
      (total, vendas) => total + vendas * precoHamburguer,
      0,
    ); // Calcula o total das vendas na semana
    console.log('Vendas diárias: ', vendasDiarias);
    console.log('Valor total das vendas na semana: R$', vendasSemana);
    caixaComunicacao.close(); // Encerra a comunicação com o usuário
    return;
  } // Se já foram registrados 7 dias, calcula o total e encerra a comunicação

  caixaComunicacao.question(
    `Digite o número de hambúrgueres vendidos no dia ${dia}: `,
    (input) => {
      vendasDiarias.push(parseInt(input) || 0);
      calcularVendas(dia + 1);
    },
  ); // Pergunta ao usuário o número de hambúrgueres vendidos no dia atual e chama a função novamente para o próximo dia
};

calcularVendas(); // Inicia o processo de cálculo das vendas diárias

//Outra solução:

let totalVendas = 0;
let diasSemana = [
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
  'Domingo',
];
let vendasPorDia = [40, 55, 30, 25, 60, 80, 20]; // Exemplo de vendas por dia

for (let dia of diasSemana) {
  totalVendasDia = precoHamburguer * vendasPorDia[diasSemana.indexOf(dia)];
  totalVendas += totalVendasDia;
  console.log(`Vendas em ${dia}: R$${totalVendasDia}`);
}

console.log(`Total de vendas na semana: R$${totalVendas}`);

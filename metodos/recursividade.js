/*Exercício 2: Cálculo do Valor Total das Vendas (Recursividade)
Você é o caixa de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres ao longo de
um mês. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia do
mês. Crie uma função recursiva em JavaScript que calcule o valor total das vendas de hambúrgueres no mês.*/

const precoHamburguer = 10; // Preço fixo de cada hambúrguer
//Trazer dias dos mes de maneira dinamica
const diasDoMes = 30; // Número de dias no mês (pode variar dependendo do mês)
let vendasDiarias = []; // Array para armazenar o número de hambúrgueres vendidos a cada dia

function calcularVendas(dia = 1) {
  // Função recursiva para calcular as vendas diárias
  if (dia > diasDoMes) {
    const vendasMes = vendasDiarias.reduce(
      (total, vendas) => total + vendas * precoHamburguer,
      0,
    ); // Calcula o total das vendas no mês

    console.log(`Valor total das vendas no mês: R$${vendasMes.toFixed(2)}`);
    return;
  } // Se já foram registrados todos os dias do mês, calcula o total e encerra a função

  const vendasHoje = Math.floor(Math.random() * 1000); // Simula o número de hambúrgueres vendidos hoje (0 a 99)
  vendasDiarias.push(vendasHoje); // Adiciona o número de hambúrgueres vendidos hoje ao array
  calcularVendas(dia + 1); // Chama a função novamente para o próximo dia
  console.log(
    `Vendas do dia ${dia}: R$${(vendasHoje * precoHamburguer).toFixed(2)}`,
  );
}

calcularVendas(); // Inicia o processo de cálculo das vendas diárias

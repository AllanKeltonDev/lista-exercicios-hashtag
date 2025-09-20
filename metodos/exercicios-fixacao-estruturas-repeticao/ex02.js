// Requisito 2: Crie uma função que receba um array de nomes e retorne esse array ordenado
// em ordem alfabética. Função: ordenarNomes

let nomes = ['Ana', 'Elias', 'Carlos', 'Beatriz'];

function ordenarNomes() {
  // Função para ordenar e imprimir os nomes em ordem alfabética
  let ordemAlfabetica = nomes.sort(); // Ordena o array em ordem alfabética

  for (let nome of ordemAlfabetica) { // Percorre o array ordenado
    console.log(nome);
  } // Imprime cada nome em ordem alfabética
}
ordenarNomes(); // Chama a função para ordenar e imprimir os nomes

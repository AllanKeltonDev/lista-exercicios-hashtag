function addTask() {
  // Função para adicionar tarefa
  const ul = document.getElementById('taskList'); // Seleciona a lista não ordenada
  const li = document.createElement('li'); // Cria um item de lista
  li.className = 'taskText'; // Adiciona uma classe ao item da lista
  const input = document.getElementById('taskInput'); // Seleciona o input
  const paragraph = document.createElement('p'); // Cria um parágrafo
  paragraph.className = 'taskText'; // Adiciona uma classe ao parágrafo

  const removeButton = document.createElement('button'); // Cria um botão
  removeButton.textContent = 'Remover Item'; // Adiciona texto ao botão
  removeButton.className = 'removeButton'; // Adiciona uma classe ao botão
  removeButton.onclick = function () {
    // Adiciona um evento de clique ao botão
    removeTask(this); // Chama a função removeTask e passa o botão como parâmetro
  };

  const checkbox = document.createElement('input'); // Cria um checkbox
  checkbox.type = 'checkbox'; // Define o tipo do input como checkbox
  checkbox.className = 'checkboxTask'; // Adiciona uma classe ao checkbox

  if (input.value === '') {
    // Verifica se o input está vazio
    alert('Por favor, insira uma tarefa!'); // Exibe um alerta
    return; // Sai da função
  } else {
    // Se o input não estiver vazio
    ul.appendChild(li); // Adiciona o item da lista à lista não ordenada
    li.appendChild(paragraph); // Adiciona o parágrafo ao item da lista
    li.appendChild(removeButton); // Adiciona o botão ao item da lista
    paragraph.textContent = input.value; // Define o texto do parágrafo como o valor do input
    li.prepend(checkbox); // Adiciona o checkbox no início do item da lista
    input.value = ''; // Limpa o valor do input
  }
}

function removeTask(button) {
  // Função para remover tarefa
  const li = button.parentNode; // Seleciona o item da lista pai do botão
  const ul = li.parentNode; // Seleciona a lista não ordenada pai do item da lista
  ul.removeChild(li); // Remove o item da lista da lista não ordenada
}

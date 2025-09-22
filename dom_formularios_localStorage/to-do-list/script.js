function addTask() {
  const ul = document.getElementById('taskList');
  const li = document.createElement('li');
  const input = document.getElementById('taskInput');

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remover Item';
  removeButton.id = 'removeButton';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkboxTask';

  ul.appendChild(li);
  li.appendChild(removeButton);
  li.textContent = input.value;
  li.prepend(checkbox);
}

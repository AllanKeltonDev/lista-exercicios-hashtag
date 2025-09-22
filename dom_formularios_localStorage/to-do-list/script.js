function addTask() {
  const ul = document.getElementById("taskList");
  const li = document.createElement("li");
  li.className = "taskText";
  const input = document.getElementById("taskInput");
  const paragraph = document.createElement("p");
  paragraph.className = "taskText";

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remover Item";
  removeButton.className = "removeButton";
  removeButton.onclick = function () {
    removeTask(this);
  };

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkboxTask";

  ul.appendChild(li);
  li.appendChild(paragraph);
  li.appendChild(removeButton);
  paragraph.textContent = input.value;
  li.prepend(checkbox);
  input.value = "";
}

function removeTask(button) {
  const li = button.parentNode;
  const ul = li.parentNode;
  ul.removeChild(li);
}

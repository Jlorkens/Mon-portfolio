const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Charger les tâches depuis localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTaskToDOM(task));
}

// Ajouter une tâche
function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText) {
    addTaskToDOM(taskText);
    saveTasks();
    todoInput.value = '';
  }
}

function addTaskToDOM(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    ${taskText}
    <button class="delete-btn">×</button>
  `;
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
    saveTasks();
  });
  todoList.appendChild(li);
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('#todo-list li').forEach(li => {
    tasks.push(li.childNodes[0].textContent.trim());
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

addTodoBtn.addEventListener('click', addTask);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

// Initialisation
loadTasks();
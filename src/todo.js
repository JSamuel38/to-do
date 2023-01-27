import { createHeader, createFooter } from "./init";

let todoList = [];

const main = document.createElement('main');
const form = document.createElement('form');
const descLabel = document.createElement('label');
const dueDateLabel = document.createElement('label');
const priorityLabel = document.createElement('label');
const desc = document.createElement('input');
const dueDate = document.createElement('input');
const priority = document.createElement('select');
const high = document.createElement('option');
const medium = document.createElement('option');
const low = document.createElement('option');
const formSubmit = document.createElement('button');

const todo = (title, dueDate, priority) => {
  return { title, dueDate, priority };
}

function createTodoCard(todo) {
  const card = document.createElement('div');
  const title = document.createElement('h1');
  const dueDate = document.createElement('p');
  const priority = document.createElement('p');

  card.classList.add('bg-blue-600', 'rounded-lg', 'p-2', 'text-white', 'text-center', 'break-words', 'flex', 'justify-center', 'flex-col', 'items-center');
  title.classList.add('font-bold', 'text-2xl');
  dueDate.classList.add('text-xl');
  priority.classList.add('text-xl');
  
  title.innerText = todo.title;
  dueDate.innerText = `Due: ${todo.dueDate}`;
  priority.innerText = `Priority: ${todo.priority}`;

  card.appendChild(title);
  card.appendChild(dueDate);
  card.appendChild(priority);

  return card;
}

function toDoForm() {
  descLabel.innerText = 'Desc:';
  dueDateLabel.innerText = 'Due Date:';
  priorityLabel.innerText = 'Priority:';
  high.innerText = 'High';
  medium.innerText = 'Medium';
  low.innerText = 'Low';
  formSubmit.innerText = 'Add todo item';

  descLabel.htmlFor = 'descIn';
  dueDateLabel.htmlFor = 'dueDateIn';
  priorityLabel.htmlFor = 'priorityIn';

  desc.id = 'descIn';
  dueDate.id = 'dueDateIn';
  priority.id = 'priorityIn';

  desc.type = 'text';
  dueDate.type = 'date';

  form.classList.add('text-white', 'absolute', 'bg-blue-600', 'm-auto', 'p-2', 'flex', 'flex-col', 'items-center', 'justify-center', 'gap-4', 'rounded-lg', 'w-64', 'center-form', 'pt-4', 'pb-6', 'shadow-lg');
  desc.classList.add('text-black');
  dueDate.classList.add('text-black');
  priority.classList.add('text-black');
  formSubmit.classList.add('text-black', 'rounded', 'bg-gray-200', 'px-4', 'py-2', 'hover:bg-gray-300', 'active:bg-gray-400');

  form.appendChild(descLabel);
  form.appendChild(desc);
  form.appendChild(dueDateLabel);
  form.appendChild(dueDate);
  form.appendChild(priorityLabel);
  form.appendChild(priority);
  form.appendChild(formSubmit);
  priority.appendChild(high);
  priority.appendChild(medium);
  priority.appendChild(low);

  document.body.appendChild(form);
}

function addToDoItem(item) {
  main.appendChild(item);
}

function loadButton() {
  const btn = document.createElement('button');
  const btnContainer = document.createElement('div');

  btnContainer.classList.add('grid', 'grid-cols-1', 'min-w-screen', 'mt-6', 'gap-4');
  btn.classList.add('text-xl', 'rounded', 'bg-gray-200', 'p-4', 'hover:bg-gray-300', 'active:bg-gray-400', 'justify-self-center');
  btn.textContent = 'Add todo item';
  btn.addEventListener('click', toDoForm);

  btnContainer.appendChild(btn);

  content.appendChild(btnContainer);
}

function loadMain() {
  main.classList.add('grid', 'w-2/3', 'm-auto', 'my-8', 'gap-8', 'auto-fit');
  content.appendChild(main);
}

function loadToDo() {
  const content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }

  loadButton();
  loadMain();
  createHeader();
  createFooter();
}

formSubmit.addEventListener('click', (e) => {
  if (!(desc.value === '' || dueDate.value === '' || priority.value === '')) {
    let todoObj = todo(desc.value , dueDate.value , priority.value);
    todoList.push(todoObj);
    let card = createTodoCard(todoObj);
    main.appendChild(card);
    document.body.removeChild(form);
  } else {
    alert('Please fill in all fields');
  }
  e.preventDefault();
});

export { loadToDo };
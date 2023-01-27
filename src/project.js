import { projectForm } from './projectForm.js';
import { loadToDo } from './todo.js';

let projectsList = [];

const formPrompt = projectForm();

const project = (title, dueDate, priority) => {
  return { title, dueDate, priority };
}

function newProject() {
  document.body.appendChild(formPrompt);
}

function createProjectCard(project) {
  const container = document.getElementById('container');
  const cardList = container.childNodes;
  const card = document.createElement('div');
  const title = document.createElement('h1');
  const dueDate = document.createElement('p');
  const priority = document.createElement('p');
  const openBtn = document.createElement('button');
  const removeBtn = document.createElement('button');

  card.classList.add('bg-blue-600', 'rounded-lg', 'p-2', 'text-white', 'text-center', 'break-words', 'flex', 'justify-center', 'flex-col', 'items-center');
  title.classList.add('font-bold', 'text-2xl');
  dueDate.classList.add('text-xl');
  priority.classList.add('text-xl');
  openBtn.classList.add('border-2', 'border-white', 'text-white', 'rounded', 'px-6', 'py-1', 'm-2', 'hover:bg-blue-700', 'active:bg-blue-800');
  removeBtn.classList.add('border-2', 'border-white', 'text-white', 'rounded', 'px-4', 'py-1', 'm-2', 'hover:bg-blue-700', 'active:bg-blue-800');


  title.innerText = project.title;
  dueDate.innerText = `Due: ${project.dueDate}`;
  priority.innerText = `Priority: ${project.priority}`;
  openBtn.innerText = 'Open';
  removeBtn.innerText = 'Remove';

  removeBtn.addEventListener('click', (e) => {
    card.remove();
    e.preventDefault();
  });

  openBtn.addEventListener('click', (e) => {
    let i = Array.prototype.indexOf.call(cardList, card);
    let title = cardList[i].childNodes[0].textContent
    let date = cardList[i].childNodes[1].textContent;
    let priority = cardList[i].childNodes[2].textContent;

    loadToDo(title, date, priority);

    e.preventDefault();
  });

  card.appendChild(title);
  card.appendChild(dueDate);
  card.appendChild(priority);
  card.appendChild(openBtn);
  card.appendChild(removeBtn);

  return card;
}

function loadProjects() {
  const projectContainer = document.createElement('div');
  projectContainer.id = 'container';
  projectContainer.classList.add('grid', 'w-2/3', 'm-auto', 'my-8', 'gap-8', 'auto-fit');

  for (let project of projectsList) {
    projectContainer.appendChild(project);
  }

  return projectContainer;
};

export { loadProjects, newProject, project, projectsList, createProjectCard };
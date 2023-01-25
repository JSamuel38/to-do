import { projectForm } from './projectForm.js';

let projectsList = [];

const formPrompt = projectForm();

const project = (title, dueDate, priority) => {
  return { title, dueDate, priority };
}

function newProject() {
  document.body.appendChild(formPrompt);
}

function createProjectCard(project) {
  const card = document.createElement('div');
  const title = document.createElement('h1');
  const dueDate = document.createElement('p');
  const priority = document.createElement('p');
  const removeBtn = document.createElement('button');

  card.classList.add('bg-blue-600', 'rounded-lg', 'p-2', 'text-white', 'text-center', 'break-words', 'flex', 'justify-center', 'flex-col', 'items-center');
  title.classList.add('font-bold', 'text-2xl');
  dueDate.classList.add('text-xl');
  priority.classList.add('text-xl');
  removeBtn.classList.add('bg-red-600', 'text-white', 'rounded', 'px-4', 'py-2', 'm-4', 'hover:bg-red-700', 'active:bg-red-800');


  title.innerText = project.title;
  dueDate.innerText = `Due: ${project.dueDate}`;
  priority.innerText = `Priority: ${project.priority}`;
  removeBtn.innerText = 'Remove';

  card.appendChild(title);
  card.appendChild(dueDate);
  card.appendChild(priority);
  card.appendChild(removeBtn);

  return card;
}

function loadProjects() {
  const projectContainer = document.createElement('div');
  projectContainer.id = 'container';
  projectContainer.classList.add('grid', 'w-2/3', 'm-auto', 'my-8', 'gap-8', 'auto-fit');

  for (let project of projectsList) {
    projectContainer.appendChild(createProjectCard(project));
  }

  return projectContainer;
};

export { loadProjects, newProject, project, projectsList, createProjectCard };
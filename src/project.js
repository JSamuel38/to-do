let projectsList = [];

const project = (title, dueDate, priority) => {
  return { title, dueDate, priority };
}

function newProject() {
  const container = document.getElementById('container');

  let title = prompt('Title');
  let dueDate = prompt('Due Date');
  let priority = prompt('Priority');
  let projectObj = project(title, dueDate, priority);

  projectsList.push(projectObj);
  let card = createProjectCard(projectObj);
  container.appendChild(card);
}

function createProjectCard(project) {
  const card = document.createElement('div');
  const title = document.createElement('h1');
  const dueDate = document.createElement('p');
  const priority = document.createElement('p');

  card.classList.add('bg-blue-600', 'rounded-lg', 'p-2', 'text-white', 'text-center', 'break-words', 'flex', 'justify-center', 'flex-col', 'items-center');
  title.classList.add('font-bold', 'text-2xl');
  dueDate.classList.add('text-xl');
  priority.classList.add('text-xl');

  title.innerText = project.title;
  dueDate.innerText = `Due: ${project.dueDate}`;
  priority.innerText = `Priority: ${project.priority}`;

  card.appendChild(title);
  card.appendChild(dueDate);
  card.appendChild(priority);

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

export { loadProjects, newProject }
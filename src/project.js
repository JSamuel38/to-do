

const project = (title, dueDate, priority) => {
  return { title, dueDate, priority };
}

let projectsList = [project("Hello", "1907", "High"), project("Hello", "1907", "High"), project("Hello", "1907", "High"), project("Hello", "1907", "High")];

function createProjectCard(project) {
  const card = document.createElement('div');
  const title = document.createElement('h1');
  const dueDate = document.createElement('p');
  const priority = document.createElement('p');

  card.classList.add('bg-emerald-500', 'rounded-lg', 'p-2');

  title.innerText = project.title;
  dueDate.innerText = project.dueDate;
  priority.innerText = project.priority;

  card.appendChild(title);
  card.appendChild(dueDate);
  card.appendChild(priority);

  return card;
}

function loadProjects() {
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('grid', 'w-2/3', 'm-auto', 'mt-8', 'gap-8', 'auto-fit');

  for (let project of projectsList) {
    projectContainer.appendChild(createProjectCard(project));
  }

  return projectContainer;
};

export { loadProjects }
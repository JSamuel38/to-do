function projectForm() {
  const form = document.createElement('form');
  const titleLabel = document.createElement('label');
  const dueDateLabel = document.createElement('label');
  const priorityLabel = document.createElement('label');
  const title = document.createElement('input');
  const dueDate = document.createElement('input');
  const priority = document.createElement('select');
  const high = document.createElement('option');
  const medium = document.createElement('option');
  const low = document.createElement('option');
  const formSubmit = document.createElement('button');

  titleLabel.innerText = 'Title:';
  dueDateLabel.innerText = 'Due Date:';
  priorityLabel.innerText = 'Priority:';
  high.innerText = 'High';
  medium.innerText = 'Medium';
  low.innerText = 'Low';
  formSubmit.innerText = 'Add Project';

  titleLabel.htmlFor = 'titleIn';
  dueDateLabel.htmlFor = 'dueDateIn';
  priorityLabel.htmlFor = 'priorityIn';

  title.id = 'titleIn';
  dueDate.id = 'dueDateIn';
  priority.id = 'priorityIn';

  title.type = 'text';
  dueDate.type = 'date';

  form.classList.add('text-white', 'absolute', 'bg-blue-600', 'm-auto', 'p-2', 'flex', 'flex-col', 'items-center', 'justify-center', 'gap-4', 'rounded-lg', 'w-64', 'center-form', 'pt-4', 'pb-6', 'shadow-lg');
  title.classList.add('text-black');
  dueDate.classList.add('text-black');
  priority.classList.add('text-black');
  formSubmit.classList.add('text-black', 'rounded', 'bg-gray-200', 'px-4', 'py-2', 'hover:bg-gray-300', 'active:bg-gray-400');

  form.appendChild(titleLabel);
  form.appendChild(title);
  form.appendChild(dueDateLabel);
  form.appendChild(dueDate);
  form.appendChild(priorityLabel);
  form.appendChild(priority);
  form.appendChild(formSubmit);
  priority.appendChild(high);
  priority.appendChild(medium);
  priority.appendChild(low);

  return form;
}

export { projectForm };
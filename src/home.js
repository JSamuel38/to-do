const content = document.createElement('div');

function loadSortBy() {
  const content = document.createElement('div');
  const sortLabel = document.createElement('label');
  const sortBr = document.createElement('br');
  const sortSelect = document.createElement('select');
  const sortByDue = document.createElement('option');
  const sortByPriority = document.createElement('option');
  
  sortLabel.textContent = 'Sort by: ';
  sortLabel.htmlFor = 'sort';
  sortSelect.id = 'sort';
  
  sortByDue.textContent = 'Due date';
  sortByDue.value = 'due';
  sortByPriority.textContent = 'Priority';
  sortByPriority.value = 'priority';

  sortLabel.classList.add('text-xl');
  sortSelect.classList.add('p-2', 'rounded');

  content.appendChild(sortLabel);
  sortLabel.appendChild(sortBr);
  sortLabel.appendChild(sortSelect);
  sortSelect.appendChild(sortByDue);
  sortSelect.appendChild(sortByPriority);
  
  return content
}
 
function loadButtons() {
  const projectBtn = document.createElement('button');
  const btnContainer = document.createElement('div');
  const sort = loadSortBy();
  
  btnContainer.classList.add('grid',  'grid-cols-3', 'min-w-screen', 'mt-8');
  projectBtn.classList.add('text-xl', 'border-solid', 'rounded', 'bg-gray-200', 'p-2', 'hover:bg-gray-300', 'active:bg-gray-400', 'justify-self-center');
  projectBtn.textContent = 'Add Project';
  
  sort.classList.add('ml-8');
  
  btnContainer.appendChild(sort);
  btnContainer.appendChild(projectBtn);

  return btnContainer;
}

function loadHome() {
  content.appendChild(loadButtons());
    
  return content;
};

export { loadHome };
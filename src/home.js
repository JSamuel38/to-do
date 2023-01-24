const content = document.createElement('div');

function loadProjectButton() {
  const button = document.createElement('button');
  const btnContainer = document.createElement('div');

  btnContainer.classList.add('grid', 'place-content-center', 'min-w-screen', 'mt-8');
  button.classList.add('border-solid', 'rounded', 'bg-gray-200', 'p-3', 'hover:bg-gray-300', 'active:bg-gray-400');
  button.textContent = 'Add Project';
  
  btnContainer.appendChild(button);

  return btnContainer;
}


function loadHome() {
  content.appendChild(loadProjectButton());

  return content;
};

export { loadHome };
import { createHeader, createFooter } from "./init";

function loadMain() {
  const main = document.createElement('main');
  main.classList.add('grid', 'w-2/3', 'm-auto', 'my-8', 'gap-8', 'auto-fit', 'bg-blue-500');
  content.appendChild(main);
}

function loadToDo(title, date, priority) {
  const content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }

  loadMain();
  createHeader();
  createFooter();  
}

export { loadToDo };
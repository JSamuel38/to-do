import { loadHome } from './home.js'

const content = document.createElement('div');
content.id = 'content';

function createHeader() {
  const header = document.createElement('header');
  const title = document.createElement('h1');

  header.classList.add('grid', 'bg-blue-600', 'p-4', 'shadow-lg');
  title.classList.add('text-6xl', 'title-padding', 'text-white');

  title.innerText = 'Do It';

  header.appendChild(title);
  return header;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('bg-black', 'opacity-60', 'min-w-screen', 'h-6', 'mt-auto');

  return footer;
}

function init() {
  document.body.classList.add('flex', 'flex-col', 'min-h-screen');
  document.body.appendChild(createHeader());
  document.body.appendChild(loadHome());
  document.body.appendChild(createFooter());
}

export { init };
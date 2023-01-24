const content = document.createElement('div');
content.id = 'content';

function createHeader() {
  const header = document.createElement('header');
  const title = document.createElement('h1');

  header.classList.add('grid', 'bg-emerald-500', 'p-4');
  title.classList.add('text-6xl', 'title-padding', 'text-white');

  title.innerText = 'Do It';

  header.appendChild(title);
  document.body.appendChild(header);
}

function init() {
  createHeader();
  document.body.appendChild(content);
}

export { init };
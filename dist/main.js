/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\r\n\r\nconst content = document.createElement('div');\r\ncontent.id = 'content';\r\n\r\nfunction loadSortBy() {\r\n  const content = document.createElement('div');\r\n  const sortLabel = document.createElement('label');\r\n  const sortBr = document.createElement('br');\r\n  const sortSelect = document.createElement('select');\r\n  const sortByDue = document.createElement('option');\r\n  const sortByPriority = document.createElement('option');\r\n  \r\n  sortLabel.textContent = 'Sort by: ';\r\n  sortLabel.htmlFor = 'sort';\r\n  sortSelect.id = 'sort';\r\n  \r\n  sortByDue.textContent = 'Due date';\r\n  sortByDue.value = 'due';\r\n  sortByPriority.textContent = 'Priority';\r\n  sortByPriority.value = 'priority';\r\n\r\n  sortLabel.classList.add('text-xl');\r\n  sortSelect.classList.add('p-2', 'rounded');\r\n\r\n  content.appendChild(sortLabel);\r\n  sortLabel.appendChild(sortBr);\r\n  sortLabel.appendChild(sortSelect);\r\n  sortSelect.appendChild(sortByDue);\r\n  sortSelect.appendChild(sortByPriority);\r\n  \r\n  return content\r\n}\r\n \r\nfunction loadButtons() {\r\n  const projectBtn = document.createElement('button');\r\n  const btnContainer = document.createElement('div');\r\n  const sort = loadSortBy();\r\n  \r\n  btnContainer.classList.add('grid',  'grid-cols-1', 'min-w-screen', 'mt-6', 'gap-4');\r\n  projectBtn.classList.add('text-xl', 'rounded', 'bg-gray-200', 'p-4', 'hover:bg-gray-300', 'active:bg-gray-400', 'justify-self-center');\r\n  projectBtn.textContent = 'Add Project';\r\n  projectBtn.addEventListener('click', _project_js__WEBPACK_IMPORTED_MODULE_0__.newProject);\r\n  \r\n  sort.classList.add('ml-8');\r\n  \r\n  btnContainer.appendChild(sort);\r\n  btnContainer.appendChild(projectBtn);\r\n\r\n  return btnContainer;\r\n}\r\n\r\nfunction loadHome() {\r\n  content.appendChild(loadButtons());\r\n  content.appendChild((0,_project_js__WEBPACK_IMPORTED_MODULE_0__.loadProjects)());\r\n\r\n  return content;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/init.js\");\n\r\n\r\n(0,_init__WEBPACK_IMPORTED_MODULE_0__.init)();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\r\n\r\nconst content = document.createElement('div');\r\ncontent.id = 'content';\r\n\r\nfunction createHeader() {\r\n  const header = document.createElement('header');\r\n  const title = document.createElement('h1');\r\n\r\n  header.classList.add('grid', 'bg-blue-600', 'p-4', 'shadow-lg');\r\n  title.classList.add('text-6xl', 'title-padding', 'text-white');\r\n\r\n  title.innerText = 'Do It';\r\n\r\n  header.appendChild(title);\r\n  return header;\r\n}\r\n\r\nfunction createFooter() {\r\n  const footer = document.createElement('footer');\r\n  footer.classList.add('bg-black', 'opacity-60', 'min-w-screen', 'h-6', 'mt-auto');\r\n\r\n  return footer;\r\n}\r\n\r\nfunction init() {\r\n  document.body.classList.add('flex', 'flex-col', 'min-h-screen');\r\n  document.body.appendChild(createHeader());\r\n  document.body.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)());\r\n  document.body.appendChild(createFooter());\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/init.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProjectCard\": () => (/* binding */ createProjectCard),\n/* harmony export */   \"loadProjects\": () => (/* binding */ loadProjects),\n/* harmony export */   \"newProject\": () => (/* binding */ newProject),\n/* harmony export */   \"project\": () => (/* binding */ project),\n/* harmony export */   \"projectsList\": () => (/* binding */ projectsList)\n/* harmony export */ });\n/* harmony import */ var _projectForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectForm.js */ \"./src/projectForm.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\r\n\r\n\r\nlet projectsList = [];\r\n\r\nconst formPrompt = (0,_projectForm_js__WEBPACK_IMPORTED_MODULE_0__.projectForm)();\r\n\r\nconst project = (title, dueDate, priority) => {\r\n  return { title, dueDate, priority };\r\n}\r\n\r\nfunction newProject() {\r\n  document.body.appendChild(formPrompt);\r\n}\r\n\r\nfunction createProjectCard(project) {\r\n  const container = document.getElementById('container');\r\n  const cardList = container.childNodes;\r\n  const card = document.createElement('div');\r\n  const title = document.createElement('h1');\r\n  const dueDate = document.createElement('p');\r\n  const priority = document.createElement('p');\r\n  const openBtn = document.createElement('button');\r\n  const removeBtn = document.createElement('button');\r\n\r\n  card.classList.add('bg-blue-600', 'rounded-lg', 'p-2', 'text-white', 'text-center', 'break-words', 'flex', 'justify-center', 'flex-col', 'items-center');\r\n  title.classList.add('font-bold', 'text-2xl');\r\n  dueDate.classList.add('text-xl');\r\n  priority.classList.add('text-xl');\r\n  openBtn.classList.add('border-2', 'border-white', 'text-white', 'rounded', 'px-6', 'py-1', 'm-2', 'hover:bg-blue-700', 'active:bg-blue-800');\r\n  removeBtn.classList.add('border-2', 'border-white', 'text-white', 'rounded', 'px-4', 'py-1', 'm-2', 'hover:bg-blue-700', 'active:bg-blue-800');\r\n\r\n\r\n  title.innerText = project.title;\r\n  dueDate.innerText = `Due: ${project.dueDate}`;\r\n  priority.innerText = `Priority: ${project.priority}`;\r\n  openBtn.innerText = 'Open';\r\n  removeBtn.innerText = 'Remove';\r\n\r\n  removeBtn.addEventListener('click', (e) => {\r\n    card.remove();\r\n    e.preventDefault();\r\n  });\r\n\r\n  openBtn.addEventListener('click', (e) => {\r\n    let i = Array.prototype.indexOf.call(cardList, card);\r\n    let title = cardList[i].childNodes[0].textContent\r\n    let date = cardList[i].childNodes[1].textContent;\r\n    let priority = cardList[i].childNodes[2].textContent;\r\n\r\n    (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.loadToDo)(title, date, priority);\r\n\r\n    e.preventDefault();\r\n  });\r\n\r\n  card.appendChild(title);\r\n  card.appendChild(dueDate);\r\n  card.appendChild(priority);\r\n  card.appendChild(openBtn);\r\n  card.appendChild(removeBtn);\r\n\r\n  return card;\r\n}\r\n\r\nfunction loadProjects() {\r\n  const projectContainer = document.createElement('div');\r\n  projectContainer.id = 'container';\r\n  projectContainer.classList.add('grid', 'w-2/3', 'm-auto', 'my-8', 'gap-8', 'auto-fit');\r\n\r\n  for (let project of projectsList) {\r\n    projectContainer.appendChild(project);\r\n  }\r\n\r\n  return projectContainer;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/projectForm.js":
/*!****************************!*\
  !*** ./src/projectForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectForm\": () => (/* binding */ projectForm)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\r\n\r\nconst form = document.createElement('form');\r\nconst titleLabel = document.createElement('label');\r\nconst dueDateLabel = document.createElement('label');\r\nconst priorityLabel = document.createElement('label');\r\nconst title = document.createElement('input');\r\nconst dueDate = document.createElement('input');\r\nconst priority = document.createElement('select');\r\nconst high = document.createElement('option');\r\nconst medium = document.createElement('option');\r\nconst low = document.createElement('option');\r\nconst formSubmit = document.createElement('button');\r\n\r\nfunction projectForm() {\r\n  titleLabel.innerText = 'Title:';\r\n  dueDateLabel.innerText = 'Due Date:';\r\n  priorityLabel.innerText = 'Priority:';\r\n  high.innerText = 'High';\r\n  medium.innerText = 'Medium';\r\n  low.innerText = 'Low';\r\n  formSubmit.innerText = 'Add Project';\r\n\r\n  titleLabel.htmlFor = 'titleIn';\r\n  dueDateLabel.htmlFor = 'dueDateIn';\r\n  priorityLabel.htmlFor = 'priorityIn';\r\n\r\n  title.id = 'titleIn';\r\n  dueDate.id = 'dueDateIn';\r\n  priority.id = 'priorityIn';\r\n\r\n  title.type = 'text';\r\n  dueDate.type = 'date';\r\n\r\n  form.classList.add('text-white', 'absolute', 'bg-blue-600', 'm-auto', 'p-2', 'flex', 'flex-col', 'items-center', 'justify-center', 'gap-4', 'rounded-lg', 'w-64', 'center-form', 'pt-4', 'pb-6', 'shadow-lg');\r\n  title.classList.add('text-black');\r\n  dueDate.classList.add('text-black');\r\n  priority.classList.add('text-black');\r\n  formSubmit.classList.add('text-black', 'rounded', 'bg-gray-200', 'px-4', 'py-2', 'hover:bg-gray-300', 'active:bg-gray-400');\r\n\r\n  form.appendChild(titleLabel);\r\n  form.appendChild(title);\r\n  form.appendChild(dueDateLabel);\r\n  form.appendChild(dueDate);\r\n  form.appendChild(priorityLabel);\r\n  form.appendChild(priority);\r\n  form.appendChild(formSubmit);\r\n  priority.appendChild(high);\r\n  priority.appendChild(medium);\r\n  priority.appendChild(low);\r\n\r\n  return form;\r\n}\r\n\r\nformSubmit.addEventListener('click', (e) => {\r\n  if (!(title.value === '' || dueDate.value === '' || priority.value === '')) {\r\n    let projectObj = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.project)(title.value , dueDate.value , priority.value);\r\n    _project_js__WEBPACK_IMPORTED_MODULE_0__.projectsList.push(projectObj);\r\n    let card = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createProjectCard)(projectObj);\r\n    container.appendChild(card);\r\n    document.body.removeChild(form);\r\n  } else {\r\n    alert('Please fill in all fields');\r\n  }\r\n  e.preventDefault();\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/projectForm.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadToDo\": () => (/* binding */ loadToDo)\n/* harmony export */ });\nfunction loadToDo() {}\r\n\r\n\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
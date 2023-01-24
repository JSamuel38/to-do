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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\r\n\r\nconst content = document.createElement('div');\r\n\r\nfunction loadSortBy() {\r\n  const content = document.createElement('div');\r\n  const sortLabel = document.createElement('label');\r\n  const sortBr = document.createElement('br');\r\n  const sortSelect = document.createElement('select');\r\n  const sortByDue = document.createElement('option');\r\n  const sortByPriority = document.createElement('option');\r\n  \r\n  sortLabel.textContent = 'Sort by: ';\r\n  sortLabel.htmlFor = 'sort';\r\n  sortSelect.id = 'sort';\r\n  \r\n  sortByDue.textContent = 'Due date';\r\n  sortByDue.value = 'due';\r\n  sortByPriority.textContent = 'Priority';\r\n  sortByPriority.value = 'priority';\r\n\r\n  sortLabel.classList.add('text-xl');\r\n  sortSelect.classList.add('p-2', 'rounded');\r\n\r\n  content.appendChild(sortLabel);\r\n  sortLabel.appendChild(sortBr);\r\n  sortLabel.appendChild(sortSelect);\r\n  sortSelect.appendChild(sortByDue);\r\n  sortSelect.appendChild(sortByPriority);\r\n  \r\n  return content\r\n}\r\n \r\nfunction loadButtons() {\r\n  const projectBtn = document.createElement('button');\r\n  const btnContainer = document.createElement('div');\r\n  const sort = loadSortBy();\r\n  \r\n  btnContainer.classList.add('grid',  'grid-cols-3', 'min-w-screen', 'mt-8');\r\n  projectBtn.classList.add('text-xl', 'border-solid', 'rounded', 'bg-gray-200', 'p-2', 'hover:bg-gray-300', 'active:bg-gray-400', 'justify-self-center');\r\n  projectBtn.textContent = 'Add Project';\r\n  \r\n  sort.classList.add('ml-8');\r\n  \r\n  btnContainer.appendChild(sort);\r\n  btnContainer.appendChild(projectBtn);\r\n\r\n  return btnContainer;\r\n}\r\n\r\nfunction loadHome() {\r\n  content.appendChild(loadButtons());\r\n  content.appendChild((0,_project_js__WEBPACK_IMPORTED_MODULE_0__.loadProjects)());\r\n\r\n  return content;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/home.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadProjects\": () => (/* binding */ loadProjects)\n/* harmony export */ });\n\r\n\r\nconst project = (title, dueDate, priority) => {\r\n  return { title, dueDate, priority };\r\n}\r\n\r\nlet projectsList = [project(\"Hello\", \"1907\", \"High\"), project(\"Hello\", \"1907\", \"High\"), project(\"Hello\", \"1907\", \"High\"), project(\"Hello\", \"1907\", \"High\")];\r\n\r\nfunction createProjectCard(project) {\r\n  const card = document.createElement('div');\r\n  const title = document.createElement('h1');\r\n  const dueDate = document.createElement('p');\r\n  const priority = document.createElement('p');\r\n\r\n  card.classList.add('bg-blue-600', 'rounded-lg', 'p-2', 'text-white');\r\n  title.classList.add('font-bold', 'text-2xl');\r\n  dueDate.classList.add('text-xl');\r\n  priority.classList.add('text-xl');\r\n\r\n  title.innerText = project.title;\r\n  dueDate.innerText = `Due: ${project.dueDate}`;\r\n  priority.innerText = `Priority: ${project.priority}`;\r\n\r\n  card.appendChild(title);\r\n  card.appendChild(dueDate);\r\n  card.appendChild(priority);\r\n\r\n  return card;\r\n}\r\n\r\nfunction loadProjects() {\r\n  const projectContainer = document.createElement('div');\r\n  projectContainer.classList.add('grid', 'w-2/3', 'm-auto', 'mt-8', 'gap-8', 'auto-fit');\r\n\r\n  for (let project of projectsList) {\r\n    projectContainer.appendChild(createProjectCard(project));\r\n  }\r\n\r\n  return projectContainer;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/project.js?");

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
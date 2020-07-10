/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src sync recursive \\.(png|svg|jpg|gif)$":
/*!***************************************!*\
  !*** ./src sync \.(png|svg|jpg|gif)$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src sync recursive \\\\.(png|svg|jpg|gif)$\";\n\n//# sourceURL=webpack:///./src_sync_\\.(png%7Csvg%7Cjpg%7Cgif)$?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n// ВАЖНАЯ СТРОКА ДЛЯ ИМПОРТА ФАЙЛОВ В БИЛД НЕ УДАЛЯТь\r\n__webpack_require__(\"./src sync recursive \\\\.(png|svg|jpg|gif)$\");\r\n\r\n\r\n// Форма\r\n// Список задач\r\nconst tasks = [{\r\n    _id: '5d2ca9e2e03d40b326596aa7',\r\n    completed: true,\r\n    body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\\r\\n',\r\n    title: 'Eu ea incididunt sunt consectetur fugiat non.',\r\n  },\r\n  {\r\n    _id: '5d2ca9e29c8a94095c1288e0',\r\n    completed: false,\r\n    body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\\r\\n',\r\n    title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',\r\n  },\r\n  {\r\n    _id: '5d2ca9e2e03d40b3232496aa7',\r\n    completed: true,\r\n    body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\\r\\n',\r\n    title: 'Eu ea incididunt sunt consectetur fugiat non.',\r\n  },\r\n  {\r\n    _id: '5d2ca9e29c8a94095564788e0',\r\n    completed: false,\r\n    body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\\r\\n',\r\n    title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',\r\n  },\r\n];\r\n\r\n(function (arrOfTasks) {\r\n  const objOfTasks = arrOfTasks.reduce((acc, task) => {\r\n    acc[task._id] = task;\r\n    return acc;\r\n  }, {});\r\n\r\n  const themes = {\r\n    default: {\r\n      '--base-text-color': '#212529',\r\n      '--header-bg': '#007bff',\r\n      '--header-text-color': '#fff',\r\n      '--default-btn-bg': '#007bff',\r\n      '--default-btn-text-color': '#fff',\r\n      '--default-btn-hover-bg': '#0069d9',\r\n      '--default-btn-border-color': '#0069d9',\r\n      '--danger-btn-bg': '#dc3545',\r\n      '--danger-btn-text-color': '#fff',\r\n      '--danger-btn-hover-bg': '#bd2130',\r\n      '--danger-btn-border-color': '#dc3545',\r\n      '--input-border-color': '#ced4da',\r\n      '--input-bg-color': '#fff',\r\n      '--input-text-color': '#495057',\r\n      '--input-focus-bg-color': '#fff',\r\n      '--input-focus-text-color': '#495057',\r\n      '--input-focus-border-color': '#80bdff',\r\n      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',\r\n    },\r\n    dark: {\r\n      '--base-text-color': '#212529',\r\n      '--header-bg': '#343a40',\r\n      '--header-text-color': '#fff',\r\n      '--default-btn-bg': '#58616b',\r\n      '--default-btn-text-color': '#fff',\r\n      '--default-btn-hover-bg': '#292d31',\r\n      '--default-btn-border-color': '#343a40',\r\n      '--default-btn-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',\r\n      '--danger-btn-bg': '#b52d3a',\r\n      '--danger-btn-text-color': '#fff',\r\n      '--danger-btn-hover-bg': '#88222c',\r\n      '--danger-btn-border-color': '#88222c',\r\n      '--input-border-color': '#ced4da',\r\n      '--input-bg-color': '#fff',\r\n      '--input-text-color': '#495057',\r\n      '--input-focus-bg-color': '#fff',\r\n      '--input-focus-text-color': '#495057',\r\n      '--input-focus-border-color': '#78818a',\r\n      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',\r\n    },\r\n    light: {\r\n      '--base-text-color': '#212529',\r\n      '--header-bg': '#fff',\r\n      '--header-text-color': '#212529',\r\n      '--default-btn-bg': '#fff',\r\n      '--default-btn-text-color': '#212529',\r\n      '--default-btn-hover-bg': '#e8e7e7',\r\n      '--default-btn-border-color': '#343a40',\r\n      '--default-btn-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',\r\n      '--danger-btn-bg': '#f1b5bb',\r\n      '--danger-btn-text-color': '#212529',\r\n      '--danger-btn-hover-bg': '#ef808a',\r\n      '--danger-btn-border-color': '#e2818a',\r\n      '--input-border-color': '#ced4da',\r\n      '--input-bg-color': '#fff',\r\n      '--input-text-color': '#495057',\r\n      '--input-focus-bg-color': '#fff',\r\n      '--input-focus-text-color': '#495057',\r\n      '--input-focus-border-color': '#78818a',\r\n      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',\r\n    },\r\n  };\r\n\r\n  let lastSelectedTheme = 'default';\r\n\r\n  // Elemnts UI\r\n  const listContainer = document.querySelector(\r\n    '.tasks-list-section .list-group',\r\n  );\r\n  const form = document.forms['addTask'];\r\n  const inputTitle = form.elements['title'];\r\n  const inputBody = form.elements['body'];\r\n  const themeSelect = document.getElementById('themeSelect');\r\n  \r\n\r\n\r\n  // Events\r\n  renderAllTasks(objOfTasks);\r\n  form.addEventListener('submit', onFormSubmitHandler);\r\n  listContainer.addEventListener('click', onDeletehandler);\r\n  themeSelect.addEventListener('change', onThemeSelectHandler);\r\n\r\n  function renderAllTasks(tasksList) {\r\n    if (!tasksList) {\r\n      console.error('Передайте список задач!');\r\n      return;\r\n    }\r\n\r\n    const fragment = document.createDocumentFragment();\r\n    Object.values(tasksList).forEach(task => {\r\n      const li = listItemTemplate(task);\r\n      fragment.appendChild(li);\r\n    });\r\n    listContainer.appendChild(fragment);\r\n  }\r\n\r\n  function listItemTemplate({\r\n    _id,\r\n    title,\r\n    body\r\n  } = {}) {\r\n    const li = document.createElement('li');\r\n    li.classList.add(\r\n      'list-group-item',\r\n      'd-flex',\r\n      'align-items-center',\r\n      'flex-wrap',\r\n      'mt-2',\r\n    );\r\n    li.setAttribute('data-task-id', _id);\r\n\r\n    const span = document.createElement('span');\r\n    span.textContent = title;\r\n    span.style.fontWeight = 'bold';\r\n\r\n    const deleteBtn = document.createElement('button');\r\n    deleteBtn.textContent = 'Delete task';\r\n    deleteBtn.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');\r\n\r\n    const article = document.createElement('p');\r\n    article.textContent = body;\r\n    article.classList.add('mt-2', 'w-100');\r\n\r\n    li.appendChild(span);\r\n    li.appendChild(deleteBtn);\r\n    li.appendChild(article);\r\n\r\n    return li;\r\n  }\r\n\r\n  function onFormSubmitHandler(e) {\r\n    e.preventDefault();\r\n    const titleValue = inputTitle.value;\r\n    const bodyValue = inputBody.value;\r\n\r\n    if (!titleValue || !bodyValue) {\r\n      alert('Пожалуйста введите title и body');\r\n      return;\r\n    }\r\n\r\n    const task = createNewTask(titleValue, bodyValue);\r\n    const listItem = listItemTemplate(task);\r\n    listContainer.insertAdjacentElement('afterbegin', listItem);\r\n    form.reset();\r\n  }\r\n\r\n  function createNewTask(title, body) {\r\n    const newTask = {\r\n      title,\r\n      body,\r\n      completed: false,\r\n      _id: `task-${Math.random()}`,\r\n    };\r\n\r\n    objOfTasks[newTask._id] = newTask;\r\n\r\n    return {\r\n      ...newTask\r\n    };\r\n  }\r\n\r\n  function deleteTask(id) {\r\n    const {\r\n      title\r\n    } = objOfTasks[id];\r\n    const isConfirm = confirm(`Точно вы хотите удалить задачу: ${title}`);\r\n    if (!isConfirm) return isConfirm;\r\n    delete objOfTasks[id];\r\n    return isConfirm;\r\n  }\r\n\r\n  function deleteTaskFromHtml(confirmed, el) {\r\n    if (!confirmed) return;\r\n    el.remove();\r\n  }\r\n\r\n  function onDeletehandler({\r\n    target\r\n  }) {\r\n    if (target.classList.contains('delete-btn')) {\r\n      const parent = target.closest('[data-task-id]');\r\n      const id = parent.dataset.taskId;\r\n      const confirmed = deleteTask(id);\r\n      deleteTaskFromHtml(confirmed, parent);\r\n    }\r\n  }\r\n\r\n  function onThemeSelectHandler(e) {\r\n    const selectedTheme = themeSelect.value;\r\n    const isConfirmed = confirm(`Вы действительно хотите изменить тему: ${selectedTheme}?`);\r\n    if (!isConfirmed){\r\n      themeSelect.value = lastSelectedTheme;\r\n      return;\r\n    } \r\n    setTheme(selectedTheme);\r\n  }\r\n\r\n  function setTheme(name) {\r\n    const selectedThemObj = themes[name];\r\n    Object.entries(selectedThemObj).forEach(([key, value]) => {\r\n      document.documentElement.style.setProperty(key, value);\r\n      \r\n    })\r\n  }\r\n})(tasks);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
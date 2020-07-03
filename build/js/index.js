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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n// ВАЖНАЯ СТРОКА ДЛЯ ИМПОРТА ФАЙЛОВ В БИЛД НЕ УДАЛЯТь\r\n__webpack_require__(\"./src sync recursive \\\\.(png|svg|jpg|gif)$\");\r\n\r\n\r\n/* Изначально существует массив задач\r\n    - список задач должен выводится.\r\n    - список задач идет параметром в функции arrOfTasks которая  сама вызывается\r\n*/\r\nconst tasks = [{\r\n    _id: '5d2ca9e2e03d40b326596aa7',\r\n    completed: true,\r\n    body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\\r\\n',\r\n    title: 'Eu ea incididunt sunt consectetur fugiat non.',\r\n  },\r\n  {\r\n    _id: '5d2ca9e29c8a94095c1288e0',\r\n    completed: false,\r\n    body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\\r\\n',\r\n    title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',\r\n  },\r\n  {\r\n    _id: '5d2ca9e2e03d40b3232496aa7',\r\n    completed: true,\r\n    body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\\r\\n',\r\n    title: 'Eu ea incididunt sunt consectetur fugiat non.',\r\n  },\r\n  {\r\n    _id: '5d2ca9e29c8a94095564788e0',\r\n    completed: false,\r\n    body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\\r\\n',\r\n    title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',\r\n  },\r\n];\r\n\r\n(function (arrOfTasks) {\r\n  /* \r\n    Переносим данные в удобный вид.\r\n    - массив добавляется в objOfTask (объект объектов)\r\n\r\n  */\r\n  const objOfTask = arrOfTasks.reduce((acc, task)=>{\r\n    acc[task._id]=task;\r\n    return acc;\r\n  },{});\r\n\r\n\r\n  //создаем контейнер для таксов Elements UI\r\n  const listContainer = document.querySelector(\r\n    '.tasks-list-sections .list-group',\r\n  );\r\n  \r\n  /*\r\n   находим элементы на странице\r\n   - форму и инпуты\r\n   - далее нужно навесить событие на форму\r\n  */\r\n  const form = document.forms['addTask'];\r\n  const inputTitle = form.elements['title'];\r\n  const inputBody = form.elements['body'];\r\n\r\n  //Events\r\n  renderAllTasks(objOfTask);\r\n  form.addEventListener('submit', onFormSubmitHandler);\r\n  \r\n  /*\r\n    функция renderAllTasks\r\n    - принимает список задач (оьъект) (с провееркой)\r\n    - создает фрагмент\r\n    - отображает фрагмет\r\n  */\r\n  function renderAllTasks(taskList) {\r\n    // проверка\r\n    if (!taskList) {return\r\n      console.error('Передайте список задач!');\r\n      return;\r\n    }\r\n    // создаем фрагмент\r\n    const fragment = document.createDocumentFragment();\r\n\r\n    /*\r\n      Object.values используется для перебора\r\n      (в предыдущих уроках - по методам объектов)\r\n      - принимает объект\r\n      - возвращает значения в виде массива\r\n    */\r\n    Object.values(taskList).forEach(task => {\r\n      const li = listItemTemplate(task);\r\n      //добавляем li во фрагмент\r\n      fragment.appendChild(li);\r\n    });\r\n    // добавляем в созданный контейнер наш фрагмент\r\n    listContainer.appendChild(fragment);\r\n  }\r\n\r\n  /*\r\n    функция listItemTemplate\r\n    - получает на вход одну задачу (деструктурировано)\r\n    - возвращает дом объект одного элемента задач\r\n  */\r\n  function listItemTemplate({_id, title, body } = {}) {\r\n    const li = document.createElement(\"li\");\r\n    li.classList.add(\r\n      'list-group-item',\r\n      'd-flex',\r\n      'aling-item-center',\r\n      'flex-wrap', 'mt-2'\r\n      );\r\n\r\n      const span = document.createElement('span');\r\n      span.textContent = title;\r\n      span.style.fontWeight = \"bold\";\r\n\r\n      const deleteBtn = document.createElement('button');\r\n      deleteBtn.textContent = \"Delete task\";\r\n      deleteBtn.classList.add('btn', 'btn-danger', 'delete-btn')\r\n\r\n      const article = document.createElement('p');\r\n      article.textContent = body;\r\n      article.classList.add('mt-2', 'w-100');\r\n\r\n      //Добавляем элементы в li\r\n      li.appendChild(span);\r\n      li.appendChild(deleteBtn);\r\n      li.appendChild(article);\r\n\r\n      return li;\r\n  }\r\n\r\n  /*\r\n   onFormSubmitHandler -обработчик события\r\n   -e.preventDefault(); - отмена действий по умолчанию\r\n\r\n  */\r\n  function onFormSubmitHandler(e){\r\n    e.preventDefault();\r\n    //value - текущее значени у таких объектов\r\n    const titleValue = inputTitle.value;\r\n    const bodyValue = inputBody.value;\r\n\r\n    //проверка\r\n    if(!titleValue || !bodyValue) {\r\n      alert (\"Пожалуйста введите title и body\");\r\n      return;\r\n    }\r\n\r\n    //добавление задачи в task\r\n    const task = createNewTask(titleValue, bodyValue);\r\n    //создаем объект дом, добавляем в контейнер с тасками\r\n    const listItem = listItemTemplate(task);\r\n    // добавляем задачу в дом\r\n    listContainer.insertAdjacentElement('afterbegin', listItem);\r\n    // очистка формы после добавления\r\n    form.reset();\r\n  }\r\n\r\n  /*\r\n  createNewTask - создание элемента (дом)\r\n   - принимает данные title body\r\n   - создает объект задачи\r\n   - добавляет в список тасков\r\n  */\r\n  function createNewTask(title, body) {\r\n    const newTask = {\r\n      title,\r\n      body,\r\n      completed: false,\r\n      _id: `task-${Math.random()}`,\r\n    };\r\n  \r\n    objOfTask[newTask._id]=newTask;\r\n    return{...newTask};\r\n  }\r\n})(tasks);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.scss?");

/***/ })

/******/ });
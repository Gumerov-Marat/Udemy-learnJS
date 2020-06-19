import './index.scss';

// ВАЖНАЯ СТРОКА ДЛЯ ИМПОРТА ФАЙЛОВ В БИЛД НЕ УДАЛЯТь
require.context('./', true, /\.(png|svg|jpg|gif)$/);


/* Изначально существует массив задач
    - список задач должен выводится.
    - список задач идет параметром в функции arrOfTasks которая  сама вызывается
*/
const tasks = [{
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];

(function (arrOfTasks) {
  /* 
    Переносим данные в удобный вид.
    - массив добавляется в objOfTask (объект объектов)

  */
  const objOfTask = arrOfTasks.reduce((acc, task)=>{
    acc[task._id]=task;
    return acc;
  },{});


  //создаем контейнер для таксов Elements UI
  const listContainer = document.querySelector(
    '.tasks-list-sections .list-group',
  );
  
  /*
   находим элементы на странице
   - форму и инпуты
   - далее нужно навесить событие на форму
  */
  const form = document.forms['addTask'];
  const inputTitle = form.elements['title'];
  const inputBody = form.elements['body'];

  //Events
  renderAllTasks(objOfTask);
  form.addEventListener('submit', onFormSubmitHandler);
  
  /*
    функция renderAllTasks
    - принимает список задач (оьъект) (с провееркой)
    - создает фрагмент
    - отображает фрагмет
  */
  function renderAllTasks(taskList) {
    // проверка
    if (!taskList) {return
      console.error('Передайте список задач!');
      return;
    }
    // создаем фрагмент
    const fragment = document.createDocumentFragment();

    /*
      Object.values используется для перебора
      (в предыдущих уроках - по методам объектов)
      - принимает объект
      - возвращает значения в виде массива
    */
    Object.values(taskList).forEach(task => {
      const li = listItemTemplate(task);
      //добавляем li во фрагмент
      fragment.appendChild(li);
    });
    // добавляем в созданный контейнер наш фрагмент
    listContainer.appendChild(fragment);
  }

  /*
    функция listItemTemplate
    - получает на вход одну задачу (деструктурировано)
    - возвращает дом объект одного элемента задач
  */
  function listItemTemplate({_id, title, body } = {}) {
    const li = document.createElement("li");
    li.classList.add(
      'list-group-item',
      'd-flex',
      'aling-item-center',
      'flex-wrap', 'mt-2'
      );

      const span = document.createElement('span');
      span.textContent = title;
      span.style.fontWeight = "bold";

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete task";
      deleteBtn.classList.add('btn', 'btn-danger', 'delete-btn')

      const article = document.createElement('p');
      article.textContent = body;
      article.classList.add('mt-2', 'w-100');

      //Добавляем элементы в li
      li.appendChild(span);
      li.appendChild(deleteBtn);
      li.appendChild(article);

      return li;
  }

  /*
   onFormSubmitHandler -обработчик события
   -e.preventDefault(); - отмена действий по умолчанию

  */
  function onFormSubmitHandler(e){
    e.preventDefault();
    //value - текущее значени у таких объектов
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    //проверка
    if(!titleValue || !bodyValue) {
      alert ("Пожалуйста введите title и body");
      return;
    }

    //добавление задачи в task
    const task = createNewTask(titleValue, bodyValue);
    //создаем объект дом, добавляем в контейнер с тасками
    const listItem = listItemTemplate(task);
    // добавляем задачу в дом
    listContainer.insertAdjacentElement('afterbegin', listItem);
    // очистка формы после добавления
    form.reset();
  }

  /*
  createNewTask - создание элемента (дом)
   - принимает данные title body
   - создает объект задачи
   - добавляет в список тасков
  */
  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`,
    };
  
    objOfTask[newTask._id]=newTask;
    return{...newTask};
  }
})(tasks);
создание переменых в ксс

===================
- создавать так.
:root {
  --box-bg: black;
}
===================
- использовать так.
body {
  background: var (--box-bg);
}
==================// var - функция в ксс

js может управлять этими переменными
(в консоле можно набрать например)
window.getComputedStyle() - в него передаем элемент

window.getComputedStyle(document.documentElement) - и затем
применяем метод например гет проперти велью

window.getComputedStyle(document.documentElement).getPropertyValue("--box-bg)
(ответ будет 'black')

/*
 можем написать и так

window.getComputedStyle(document.body).getPropertyValue("--box-bg)
(ответ будет 'black')

*/

Значение переменной у элемента
document.body.style.getComputedStyle("--box-bg")
(НИЧЕГО НЕ ПОЛУЧИМ)
- чтобы чтото получить надо этому элементу задать
какое то Значение:

document.body.style.setProperty("--box-bg", "red")
(ЕСЛИ ТАМ ПЕРЕМЕННАЯ БЫЛА _ ПЕРЕЗАПИШИТСЯ)
(у боди появится этот  элемент, у РУТА зачеркнется)
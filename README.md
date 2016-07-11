#Решение задания #1 для Школы разработки интерфейсов

###Демо
1. [Заполненные достижения вручную](http://scr.edu.ru/badges/apopovich.html)
2. [Сгенерированные](http://scr.edu.ru/badges/ivanov.html)

###Сборка
```
npm install
gulp build
bower install
```

###Примеры использования
1. Ачивка без номера
```html
<div class="badge">
  <div class="badge__content"></div>
</div>
```
2. Изменение цвета ачивки
```html
<div class="badge badge--blue">
  <div class="badge__content"></div>
</div>
```
Доступные цвета: blue, purple, red, green
2. Ачивка с картинкой
```html
<div class="badge badge--blue">
  <div class="badge__content">
    <img src="images/badges/flaticon-pencil-2.png">
  </div>
</div>
```
3. Ачивка с номером
```html
<div class="badge badge--blue badge--with-number">
  <div class="badge__content"></div>
  <div class="badge__number">1</div>
</div>
```
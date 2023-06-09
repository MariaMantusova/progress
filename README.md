# Тестовое задание (Реализовать блок Progress)

## Задача 
___
Разработать прототип блока Progress для использования в 
мобильных web-приложениях. Основное предназначение блока 
отображать процесс выполнения процессов и их прогресс выполнения.

## Особенности
___
* Блок должен иметь API для управления его состоянием.
*  Блок должен быть спроектирован так, чтобы его было легко переиспользовать в
других приложениях.
*  Состояния:
   - Normal – базовое состояние, в котором путём задания Value можно управлять размером дуги, отражающей некоторый параметр или прогресс процесс. Начало дуги соответствует 12 часам, конец дуги при увеличении параметра Value движется по направлению часовой стрелки и достигает начала при значении 100.
   - Animated – независимое состояние, при котором блок или его элементы начинают вращаться с некоторым периодом по часовой стрелке.
   - Hidden – состояние скрывающее блок со страницы.
    
## Технологии
___
* JS (Без использования посторонних библиотек и фреймворков)
* CSS
* HTML

## Решение
___

Весь функционал данного блока реализован в progress.js файле, 
а его стили находятся в progress.css - это делает блок полностью готовым к переиспользованию. 
Достаточно просто скопировать себе 2 файла и вставить их там, где нужно.

### API: 

* Конструктор
  - Element - блок внутри, которого должен находится Progress
  - Options - настроки, которые удобно заполнить, для переиспользвоания. 
    (Дефолтные значения установлены в конструкторе)
    
    Options - объект настроек, а именно: 
    - size - размер крутящегося кольца, 
    - thickness - заполняемая цветом толщина, 
    - baseColor - основной цвет кольца
    - progressColor - цвет, который заполняет прогресс
    
    
* Публичные методы
  - setProgress(value) - принимает процент прогресса, 
    отвечает за заполнение круга, в зависимсти от входящего процента
  - showProgress() - отвечает за показ кольца прогресса, в зависимости от состояния чекбокса
  - hideProgress() - отвечает за скрытие кольца прогресса, в зависимости от состояния чекбокса
  - startAnimation() - отвечает за включение анимации кольца прогресса, в зависимости от состояния чекбокса
  - stopAnimation() - отвечает за выключение анимации кольца прогресса, в зависимости от состояния чекбокса

## [Ссылка на GitHub Pages](https://mariamantusova.github.io/progress/)

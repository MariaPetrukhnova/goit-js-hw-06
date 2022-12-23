// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і 
// натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.
// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.
// 1.	Розміри найпершого <div> - 30px на 30px.
// 2.	Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3.	Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.

const enteredNum = document.querySelector('input[type="number"]');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const parentDiv = document.querySelector('#boxes');

// function setNum() {
//   enteredNum.addEventListener("input", (event) => {
//     const number = `${event.currentTarget.value}`;
//     return console.log(Number(number));
//   });
// }

function createBoxes(amount) {
  let tags = [];
  let initialHeight = 20;
  let initialWidth = 20;
  for (let i = 0; i < amount; i++) {
    const height = initialHeight += 10;
    const width = initialWidth += 10;
    const tag = document.createElement('div');
    const randomColor = getRandomHexColor();
    tag.style.backgroundColor = `${randomColor}`;
    tag.style.height = `${height}px`;
    tag.style.width = `${width}px`;
    tags.push(tag);
  }
  return tags;
}

function addBoxes() {
  destroyBoxes();
  const tags = createBoxes(enteredNum.value);
  parentDiv.append(...tags);
}

btnCreateEl.addEventListener('click', addBoxes);
addBoxes(createBoxes);

function destroyBoxes() {
  parentDiv.innerHTML = "";
}

btnDestroyEl.addEventListener('click', destroyBoxes);
// destroyBoxes();
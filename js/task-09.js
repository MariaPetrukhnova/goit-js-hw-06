function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnSetColor = document.querySelector('.change-color');
const nameOfColor = document.querySelector('.color');
const bodyEl = document.body;


const setBodyColor = () => {
  const color = getRandomHexColor();

  nameOfColor.textContent = color
  bodyEl.style.backgroundColor = color
}

btnSetColor.addEventListener('click', setBodyColor);

setBodyColor();


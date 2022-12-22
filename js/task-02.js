const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
   console.log(itemEl);
  return itemEl;
 })

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...items);
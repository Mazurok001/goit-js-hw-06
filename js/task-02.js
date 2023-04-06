const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((el) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = el;
  itemEl.classList.add('item');
  console.log(itemEl)
  
  const ingredientsEl = document.querySelector("#ingredients");

  ingredientsEl.append(itemEl);
});


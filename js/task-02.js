const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector("#ingredients");

const arrIngridients = ingredients.map((el) => { const itemEl = document.createElement('li');
  itemEl.textContent = el;
  itemEl.classList.add('item');
  console.log(itemEl)
  return itemEl;

});

ingredientsEl.append(...arrIngridients);
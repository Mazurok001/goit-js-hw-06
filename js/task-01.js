const allCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${allCategories.length}.`);
  
allCategories.forEach(el => {

  console.log(`Category: ${el.firstElementChild.textContent}`);
  
  console.log(`Elements: ${el.lastElementChild.children.length}`);

  });
const ul = document.getElementById('categories');

console.log(`Number of categories: ${ul.children.length}`);

const ulArr = ul.children;

[...ulArr].forEach((item) =>
  console.log(`Category: ${item.firstElementChild.textContent}\n Animals: ${item.lastElementChild.children.length}`));


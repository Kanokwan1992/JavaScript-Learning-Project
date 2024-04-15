const menu = document.getElementById('menu');
let count = 1;

function additem() {
  const item = document.createElement('li');
  item.innerText = 'item' + count++;
  menu.appendChild(item);
}

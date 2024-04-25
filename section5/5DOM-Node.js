const menu = document.getElementById('menu');
let count = 1;

function additem() {
  const item = document.createElement('li');
  item.innerText = 'item' + count++;
  item.id = `item${count}`;
  menu.appendChild(item);
}
function deleteitem() {
  const item = document.getElementById(`item${count}`);
  menu.removeChild(item);
  count--;
}

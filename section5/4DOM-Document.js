const titleEl = document.getElementById('title');
const contentEl = document.querySelector('.content');
const allEl = document.querySelector('p');
const box = document.querySelector('.box');

function LightMode() {
  box.setAttribute('class', 'light');
}
function DarkMode() {
  box.setAttribute('class', 'dark');
}

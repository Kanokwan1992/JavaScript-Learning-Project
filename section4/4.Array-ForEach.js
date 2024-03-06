let colors = ['red', 'pink', 'blue', 'green', 'white', 'black'];

colors.forEach(Colors);

function Colors(color) {
  //   console.log('สี', color);
}

let a = 'si';
function addColorToA(c) {
  a = a + ' ' + c;
}

colors.forEach(addColorToA);
console.log(a);

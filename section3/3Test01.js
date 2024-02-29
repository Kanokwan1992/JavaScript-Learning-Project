let number = 23;
let answer;
if (number % 2 == 0) {
  answer = 'Even numbers';
} else {
  answer = 'Odd numbers';
}
console.log(number, '=', answer);
console.log('-------------------');

let num1 = 20;
let num2 = 10;

if (num1 > num2) {
  console.log(num1, 'มีค่ามากกว่า', num2);
} else if (num1 < num2) {
  console.log(num1, 'มีค่าน้อยกว่า', num2);
} else {
  console.log(num1, 'มีค่าเท่ากับ', num2);
}

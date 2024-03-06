let number = [20, 500, 84, 65, 12, -57, 75];
console.log(number);
//เรียงจากน้อยไปมาก
number.sort(function (a, b) {
  return a - b;
});
console.log(number);
//เรียงจากมากไปน้อย
number.sort(function (a, b) {
  return b - a;
});
console.log(number);

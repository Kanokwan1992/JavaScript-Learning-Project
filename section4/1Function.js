function example01() {
  console.log('จารย์ไนซ์ดุมากกกกก');
}
example01();

function message() {
  alert('ตั้งใจเรียน จารย์ไนซ์ถือไม้เรียวรอแล้วนะ');
}

function Reports() {
  document.write('<U>รายงานความเคลื่อนไหวชองจารย์ไนซ์</U>');
}

function AddingNumbers(num1) {
  console.log('รับค่ามา =', num1);
}
AddingNumbers(5);
AddingNumbers(10);
let number = 100;
AddingNumbers(number);

function Member(FirstName, LastName, City) {
  console.log('First Name =', FirstName);
  console.log('Last Name =', LastName);
  console.log('City =', City);
}
Member('Kanokwan', 'Jenparu');

function Summation(a, b) {
  let total = a + b;
  console.log(total);
}
Summation(54, 20);

function getIP() {
  return '127.0.0.1';
}
let MyIP = getIP();
console.log('IP :', MyIP);

function getNumber() {
  return 1576 * 745;
}
let sum = getNumber();
console.log('ผลรวม =', sum);

function getMyAddress() {
  let city = 'กรุงเทพ';
  return city;
}
console.log('ที่อยู่', getMyAddress());

function SetSalary(salary) {
  let bonus = 1000;
  return salary + bonus;
}
let c = SetSalary(18000);
console.log('C เงินเดือนรวม =', c);
let d = SetSalary(15000);
console.log('D เงินเดือนรวม =', d);

function GetAddress(FirstName, LastName, City = 'กรุงเทพมหานคร') {
  console.log('First Name =', FirstName);
  console.log('Last Name =', LastName);
  console.log('City =', City);
}

GetAddress('วีรธร', 'ลิบสิทธิกุล', 'กรุงเทพมหานคร');
GetAddress('กนกวรรณ', 'เจนปรุ');

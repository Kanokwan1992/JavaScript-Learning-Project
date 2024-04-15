const a = document.getElementById('demo'); //อ้างอิง
const b = document.getElementsByTagName('p');
const c = document.querySelector('.MyJS');
console.log(b);

let x = 10;
let y = 20;
function displayText() {
  //   a.innerText = 'เรียน Javascript เบื้องต้น'; //แสดงผล
  //   a.innerHTML = '<strong>เรียน Javascript เบื้องต้น</strong>';
  //   a.innerText = 'แสดงข้อมูลในตัวแปร x = ' + x + ' ตัวแปร y = ' + y;
  a.innerHTML = `แสดงข้อมูลในตัวแปร x = ${x}  ตัวแปร y = ${y}`;
}

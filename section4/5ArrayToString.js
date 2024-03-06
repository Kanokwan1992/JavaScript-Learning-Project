let colors = ['red', 'pink', 'blue', 'green', 'white', 'black'];
console.log(typeof colors);
console.log(colors);
// console.log(colors.toString());  //แปลงเป็ยstring
// let color = colors.join(' '); //นำค่าแต่ละค่าในตัวแปร array มารวมกันเป็นข้อความและส่งค่ากลับเป็นข้อความที่มีตัวคั่นค่าตัวแปรแต่ละค่าตามที่กำหนด
// console.log(color);
let Color = colors.pop(); //ลบตัวสุดท้ายออกจาก array
console.log(Color);
console.log(colors);

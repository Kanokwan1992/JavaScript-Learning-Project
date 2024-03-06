let color = ['red', 'pink', 'blue', 'green', 'white', 'black'];

console.log(color); //ก่อนเรียง

let x = color.length;
color.sort(); //เรียงลำดับน้อยไปมาก(ใช้กับตัวเลขไม่ได้)

let first = color[0];
let last = color[color.length - 1];

console.log(x);
console.log(color); //หลังเรียง
console.log(color.reverse()); //ตรงข้ามกับsort

console.log(first);
console.log(last);
color.push('brown');
console.log(color);

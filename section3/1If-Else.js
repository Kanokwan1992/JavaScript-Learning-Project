// let balance = 100;
// let withDraw = 500;

// -----if-----
// // if (withDraw <= balance) {
// //   console.log('ยอดเงินที่สามารถถอนได้', balance);
// //   console.log('ถอนเงิน', withDraw);
// //   console.log('ยอดเงินคงเหลือ', balance - withDraw);
// // }

// -----if...else-----
// if (withDraw <= balance) {
//   console.log('ยอดเงินที่สามารถถอนได้', balance);
//   console.log('ถอนเงิน', withDraw);
//   console.log('ยอดเงินคงเหลือ', balance - withDraw);
// } else {
//   console.log('คุณมียอดเงินไม่พอสำหรับใช้บริการ');
// }

let score = 50;
let pass;
let Pass;

if (score >= 80) {
  pass = 'Grade A';
} else if (score >= 70) {
  pass = 'Grade B';
} else if (score >= 60) {
  pass = 'Grade C';
} else if (score >= 50) {
  pass = 'Grade D';
} else {
  pass = 'Grade F';
}

//Ternary
// pass = score > 79 ? 'Grade A' : score > 69 ? 'Grade B' : score > 59 ? 'Grade C' : score > 49 ? 'Grade D' : 'Grade F';
Pass = score < 50 ? 'สอบไม่ผ่าน' : 'สอบผ่าน';
console.log(pass, Pass);

//Valid voter
// let ans = Number(prompt("Enter your age"));
// if (isNaN(ans)) {
//   console.log("wrong input");
// } else if (ans >= 18) {
//   console.log("You are eligible for vote");
// } else {
//   console.log("You are not eligible for vote");
// }

//discount shop first method
// let amount = Number(prompt("What is the final amount"));
// if (amount > 0 && amount <= 5000) {
//   console.log(amount);
// } else if (amount > 5000 && amount <= 7000) {
//   console.log(amount - Math.floor((amount * 5) / 100));
// } else if (amount > 7000 && amount <= 9000) {
//   console.log(amount - Math.floor((amount * 10) / 100));
// } else if (amount > 9000) {
//   console.log(amount - Math.floor((amount * 20) / 100));
// } else {
//   console.log("wrong input");
// }

//discount shop second method
// let amount = Number(prompt("What is the final amount"));
// let dis = 0;
// if (amount > 0 && amount <= 5000) {
//   dis = 0;
// } else if (amount > 5000 && amount <= 7000) {
//   dis = 5;
// } else if (amount > 7000 && amount <= 9000) {
//   dis = 10;
// } else if (amount > 9000) {
//   dis = 20;
// } else {
//   console.log("wrong input");
//   amount = 0;
// }
// console.log(amount - Math.floor((amount * dis) / 100));

// //bijli bill
let unit = Number(prompt("Enter electricity bill"));
if (unit > 400) {
  amount = (unit - 400) * 13;
  unit = 400;
}
if (unit > 200 && unit <= 400) {
  amount += (unit - 200) * 8;
  unit = 200;
}
if (unit > 100 && unit <= 200) {
  amount += (unit - 100) * 6;
  unit=100
}
amount += unit * 4;
console.log(amount);

let unit = Number(prompt("Enter electricity bill"));
let amount = 0;
if (unit > 100) {
  amount = (unit - 100) * 11;
  unit = 100;
}
if (unit > 50 && unit <= 100) {
  amount += (unit - 50) * 9.50;
  unit = 50;
}
if (unit > 30 && unit <= 50) {
  amount += (unit - 30) * 8;
  unit = 30;
}
if (unit > 20 && unit <= 30) {
  amount += (unit - 20) * 6.50;
  unit = 20;
}
amount += unit * 3;
console.log(amount);


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
let amount = Number(prompt("What is the final amount"));
let dis = 0;
if (amount > 0 && amount <= 5000) {
  dis = 0;
} else if (amount > 5000 && amount <= 7000) {
  dis = 5;
} else if (amount > 7000 && amount <= 9000) {
  dis = 10;
} else if (amount > 9000) {
  dis = 20;
} else {
  console.log("wrong input");
  amount = 0;
}
console.log(amount - Math.floor((amount * dis) / 100));

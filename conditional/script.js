//Valid voter
let ans = Number(prompt("Enter your age"));
if (isNaN(ans)) {
  console.log("wrong input");
} else if (ans >= 18) {
  console.log("You are eligible for vote");
} else {
  console.log("You are not eligible for vote");
}

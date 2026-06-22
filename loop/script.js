//loop
//sum of n natural number
// let input = prompt("Enter number");
// if (input === null) {
//   console.log("Cancelled");
// } else {
//   let num = Number(input);
//   let sum = 0;
//   if (isNaN(num)) {
//     console.log("invalid input");
//   } else if (num < 0) {
//     console.log("Negative number");
//   } else if (num === 0) {
//     console.log("Number is zero");
//   } else {
//     for (let i = 1; i <= num; i++) {
//       sum += i;
//     }
//     console.log("Sum =  " + sum);
//   }
// }

//factorial of a number
// let input = prompt("Enter a number");
// let fact = 1;
// if (input === null) {
//   console.log("Cancelled");
// } else {
//   let num = Number(input);
//   if (isNaN(num)) {
//     console.log("Invalid input");
//   } else if (num < 0) {
//     console.log("Negative number");
//   } else if (num === 0) {
//     console.log("Number is zero");
//   } else {
//     for (let i = 1; i <= num; i++) {
//       fact *= i;
//     }
//     console.log("Factorial = " + fact);
//   }
// }

//factors of a number
// let input = prompt("Enter any number");
// if (input === null) {
//   console.log("Cancelled");
// } else {
//   let num = Number(input);
//   if (isNaN(num)) {
//     console.log("Invalid input");
//   } else if (num < 0) {
//     console.log("Number is Negative");
//   } else if (num === 0) {
//     console.log("Number is zero");
//   } else {
//     for (let i = 1; i <= Math.floor(num / 2); i++) {
//       if (num % i === 0) {
//         console.log(i);
//       }
//     }
//     console.log(num);
//   }
// }

//prime number

let input = prompt("Enter a number");
if (input === null) {
  console.log("Cancelled");
} else {
  let num = Number(input);
  if (isNaN(num)) {
    console.log("Invalid input");
  } else if (num < 0) {
    console.log("Negative number");
  } else if (num === 1) {
    console.log("1 is not a prime  number");
  } else if (num === 0) {
    console.log("Number is zero");
  } else {
    let isPrime = true;
    for (let i = 2; i <= Math.floor(num/2); i++){
      if (num % i === 0) {
        isPrime = false;
        break;
      }
      
    }
    console.log(isPrime);
    
  }
}


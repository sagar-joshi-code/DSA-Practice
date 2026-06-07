// //sum of two integer

// let a = 10;
// let b = 20;
// console.log(a + b);

// //Realation between integer and string
// let c = 12;
// let d = "13";
// console.log(c + d); //concatinate

// let e = 12;
// let f = "13";
// console.log(e - f); //here concatinate does not work between string and number and if we use minus(-) sign javascript automatically convert string into number

// //sum and message
// let g = 15;
// let h = 15;
// console.log(g + h + " is sum of 15 and 15  ");

// //accept and print the number
// let age = Number(prompt("Enter your age"));
// console.log(age);

//swap two variable via 3 method

//first method
// let a = 10;
// let b = 20;
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log("a=", a);
// console.log("b=", b);

//second method
// let a = 10;
// let b = 20;
// a = a + b; //10+20=30
// b = a - b; //30-20=10
// a = a - b; //30-10=20
// console.log(a);
// console.log(b);

//third method
// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a,b);

// let a = 7;
// let b = 2;
// console.log((a % b));

//how to print first  number from these
// let a = 2025;
// console.log(Math.floor(a / 1000));

//how to print first second number from these
// let a = 2025;
// console.log(Math.floor(a / 100));

//how to print first third number from these
// let a = 2025;
// console.log(Math.floor(a / 10));

// const age = Number(prompt("enter your age"))
// if (age >= 18 || age % 2 === 0) {
//     console.log("You are eligible to vote")
// } else {
//     console.log("You are not eligible to vote");

// }

//unary operator
// let temp = 30;
// console.log(-temp);

// let isRunning = true;
// console.log(!isRunning);

// let a = 12;
// let b = ++a;
// console.log(b);
// console.log(a);

// practice question of unary operator
// let i = 11;
// i = i++ + ++i;
// console.log(i);

// let a = 11,
//   b = 22;
// let c = a + b + a++ + b++ + ++a + ++b; //11+22+11+22+12+23
// console.log("a=" + a);
// console.log("b=" + b);
// console.log("c=" + c);

// let x = 5;
// let result = x++ + ++x;
// console.log(result); //12
// console.log(x);  //7

// let p = 3,
//   q = 7;
// let ans = ++p + q++ + p + ++q;
// console.log(ans); //4+7+4+9=24
// console.log(p); //4
// console.log(q); //9

// let a = 10,
//   b = 4;
// let c = a++ + ++a + b-- + --b;
// console.log(a); //12
// console.log(b); //2
// console.log(c); //10+12+4+2=28

// let a = 5;
// let result = a++ + " hello " + ++a;
// console.log(result); //5 hello 7
// console.log(a); //7

// let x = 3;
// let y = -x + x++ + --x;
// console.log(y); //-3+3+3=3
// console.log(x); //3

// let n = 10;
// let result = n++ + ++n + n++ + ++n;
// console.log(result); //10+12+12+14=48
// console.log(n); //14

// let b = true;
// b++;
// console.log(b); //2

// let a = false;
// a++;
// console.log(a); //1

//math function
console.log(Math.round(10.4));
console.log(Math.ceil(10.01));
console.log(Math.floor(10.9));
console.log(Math.trunc(13.9)); //remove decimal number
console.log(Math.pow(2, 5));
console.log(Math.sqrt(4));
console.log(Math.abs(-10));
console.log(Math.max(12, 13, 14));
console.log(Math.min(12, 13, 14));
console.log(Math.trunc(Math.random() * 61) + 15);

// //calculate area and perimeter of rectangle
// let a = 10;
// let b = 20;
// let area = a * b;
// let perimeter = 2 * (a + b);
// console.log(`area is ${area}`);
// console.log(`perimeter is ${perimeter}`);

// calculate area of triangle using heron's formula
// step1 - first we have to find out semi - perimeter=(a+b+c)/2
// step2-then we have to find area=Math.sqrt(semi-perimeter*((semi-perimeter-a)*((semi-perimeter-b)*((semi-perimeter-c))

// let a = 5;
// let b = 6;
// let c = 7;
// let s = (a + b + c) / 2;
// let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

// console.log(`semi-perimeter is ${s}`);
// console.log(`area is ${area}`);

//find circumference of circle
let r = 10;
console.log(`The circumference of circle is ${2*Math.PI*r}`);


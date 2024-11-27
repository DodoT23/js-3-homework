// 1. Create a function "calculate" that takes three parameters: two numbers and a string ("+", "-", "*", or "/").
//    The function should perform the corresponding arithmetic operation on the two numbers and return the result.
//    Example:
//         calculate(1, 2, '+') - 3
//         calculate(4, 3, '*') - 12
//         calculate(10, 3, '-') - 7
//         calculate(10, 3, 'zz') - 'Invalid arithmetic operator'
// // vers1
// function calculate(firstNumb, secondNumb, act) {
//   if (act === "+") {
//     return firstNumb + secondNumb;
//   } else if (act === "-") {
//     return firstNumb - secondNumb;
//   } else if (act === "*") {
//     return firstNumb * secondNumb;
//   } else if (act === "/") {
//     if (secondNumb === 0) {
//       return "invalid operation";
//     } else {
//       return firstNumb / secondNumb;
//     }
//   } else {
//     return "invalid arithmetic operator";
//   }
// }
// console.log(calculate(2, 5, "/"));

// // vers2
// function calculate(firstNumb, secondNumb, act) {
//   switch (true) {
//     case act === "+":
//       return firstNumb + secondNumb;
//       break;
//     case act === "-":
//       return firstNumb - secondNumb;
//       break;
//     case act === "*":
//       return firstNumb * secondNumb;
//       break;
//     case act === "/" && secondNumb === 0:
//       return "unvalid operation";
//       break;
//     case act === "/":
//       return firstNumb / secondNumb;
//       break;
//     default:
//       return "invalid arithmetic operation";
//   }
// }
// console.log(calculate(2, 10, "/"));

// 2. Write a function that determines whether a year is a leap year.
//    A year is a leap year if it is divisible by 4 but not divisible by 100, unless it is also divisible by 400.
//    Example:
//         leapYear(2000) - 'Leap year'
//         leapYear(2001) - 'Not leap year'

// function leapYear(year) {
//   if (year % 400 === 0) {
//     return "Leap year";
//   } else if (year % 4 === 0 && year % 100 !== 0) {
//     return "Leap year";
//   } else {
//     return "Not leap year";
//   }
// }
// console.log(leapYear(2000));
// console.log(leapYear(2001));

// 3. Create an object book with properties: title, author, year, and isRead. Write a function describeBook that takes the object as input and outputs a string like:
//    "The book [Book Title] by [Author] was written in [Year]. It has been [read]."
// let book = {
//   title: "pride and prejudice",
//   author: "Jane Austen",
//   year: 1813,
//   isRead: true,
// };
// function isBookRead(book) {
//   const readStatus = book.isRead ? "read" : "not read";
//   return `The book ${book.title} by ${book.author} was written in ${book.year}. It has been ${readStatus}.`;
// }
// console.log(isBookRead(book));

// 4. Write a function that prints all numbers from 1 to 50:
//    - For multiples of 3, print "Fizz".
//    - For multiples of 5, print "Buzz".
//    - For multiples of both, print "FizzBuzz"
// let numbers = [];
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }
// console.log(numbers);

// 5. Write a function findElement that takes an array and a value as parameters, and
//    - Returns the index of the value if found.
//    - Returns "Not Found" if the value is not in the array.
// const arr = ["a", "b", "c", "d"];
// function findElement(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (value === arr[i]) {
//       return i;
//     }
//   }
//   return "not found";
// }
// console.log(findElement(arr, "a"));

// 6. Given an object
// const person = {
//   name: "Alice",
//   age: 25,
//   hobbies: ["reading", "painting", "cycling"],
// };
//    - Prints all the keys using a for-in loop
//    - Prints all the hobbies using a for-of loop

// for (const key in person) {
//   console.log(key);
// }

// for (let hobbies of person.hobbies) {
//   console.log(hobbies);
// }

// 7. Write a function that uses the forEach method to process an array of numbers (takes as a parameter) and outputs the following:
//    - The square of each number in the array.
//    - The sum of all numbers in the array.
//    Example:
//     processArr([2, 4, 6, 8, 10])
//         Square of 2: 4
//         Square of 4: 16
//         Square of 6: 36
//         Square of 8: 64
//         Square of 10: 100
//         Sum of all numbers: 30
// function processArr(numbers) {
//   let sum = 0;
//   numbers.forEach((element) => {
//     const square = element * element;
//     console.log(`the square of ${element} is ${square}`);
//     sum += element;
//   });
//   console.log(`the sum of the numbers is ${sum}`);
// }
// console.log(processArr([0, 1, 2, 3, 4, 5]));

// 8. FINAL BOSS 😈
//    - Prompt the user to enter marks for 5 students in a single input as a comma-separated string (e.g., "85,92,78,60,99").
//    - Store the grades in an array. Example: marksArr = [85, 92, 78, 60, 99]. Hint: use split method and then map to convert string values into a number
//    - Use nested conditional statements to assign grades based on the following scale:
//         91–100: A+
//         81–90: A
//         71–80: B
//         61–70: C
//         51–60: D
//         Below 50: F
//    - Count how many students achieved each grade (A+, A, etc.).
//    - Identify the highest and lowest marks.
//    - Use an object to keep track of the count for each grade. Example: const marksCount = { 92: 2, 81: 1, 51: 3 }
//     - Print the grades for each student.
//     - Print the count for each grade.
//     - Print the highest and lowest marks.
//         Example console outputs:
//                 Student 1: 85 - Grade: A
//                 Student 2: 92 - Grade: A+
//                 Student 3: 78 - Grade: B
//                 Student 4: 60 - Grade: D
//                 Student 5: 99 - Grade: A+
//                 ------------
//                 Grade Count:
//                 A+: 2
//                 A: 1
//                 B: 1
//                 D: 1
//                 ------------
//                 Highest Mark: 99
//                 Lowest Mark: 60

const grades = prompt(
  "Enter the marks for 5 students, separated by commas (e.g., 85,92,78,60,99)"
);
let marksArr = grades.split(",");
marksArr = marksArr.map(Number);

// console.log(marksArr);
let gradeCount = {
  "A+": 0,
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  F: 0,
};
let marksCount = {};

for (i = 0; i < marksArr.length; i++) {
  const mark = marksArr[i];
  let grade = "";
  if (mark >= 91) {
    grade = "A+";
  } else if (mark >= 81) {
    grade = "A";
  } else if (mark >= 71) {
    grade = "B";
  } else if (mark >= 61) {
    grade = "C";
  } else if (mark >= 51) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log(`Student ${i + 1}: ${mark} - Grade: ${grade}`);
  gradeCount[grade]++;
  if (marksCount[mark]) {
    marksCount[mark]++;
  } else {
    marksCount[mark] = 1;
  }
}

console.log("Grade Count:");
for (const grade in gradeCount) {
  console.log(`${grade}: ${gradeCount[grade]}`);
}
for (const mark in marksCount) {
  console.log(`${mark}: ${marksCount[mark]}`);
}

const highestMark = Math.max(...marksArr);
const lowestMark = Math.min(...marksArr);
console.log(`Highest Mark: ${highestMark}`);
console.log(`Lowest Mark: ${lowestMark}`);

// ChatGPT helped me ♥☺ we listen, we don't judge 🙈
